import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoMapButton from 'components/kakaomap/kakaomapbutton';
import { useOwnerContext } from '../../context/OwnerContext';
import { useQuery } from '@tanstack/react-query';
import { GetMap } from 'shared/api/venue';
import { GetVenue } from 'shared/api/venue';
import FailedAPI from 'shared/ui/Fail/FailedAPI';

declare global {
  interface Window {
    kakao: any;
  }
}

interface StoreProps {
  venueId: number;
  latitude: number;
  longitude: number;
}

const KakaoMap = () => {
  const navigate = useNavigate();
  const { setIsRole, isRole } = useOwnerContext();
  const mapRef = useRef<any>(null);

  const {
    data: Data,
    isPending,
    error,
  } = useQuery({
    queryFn: () => GetMap(),
    queryKey: ['mapData'],
  });

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      console.error('❌ 카카오 맵이 아직 로드되지 않았습니다.');
      return;
    }

    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.565711, 126.977607),
      level: 5,
    };

    mapRef.current = new window.kakao.maps.Map(container, options);

    const orangeMarkerImage = new window.kakao.maps.MarkerImage(
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><circle cx="20" cy="20" r="10" fill="%23D35400"/></svg>',
      new window.kakao.maps.Size(40, 40),
      { offset: new window.kakao.maps.Point(20, 20) }
    );

    const newOverlays: any[] = [];

    Data?.result?.locationList.forEach(
      ({ venueId, latitude, longitude }: StoreProps) => {
        const position = new window.kakao.maps.LatLng(latitude, longitude);

        const marker = new window.kakao.maps.Marker({
          position,
          map: mapRef.current,
          image: orangeMarkerImage,
        });

        const content = document.createElement('div');
        content.innerHTML = `
        <div style="padding:12px; background:#fff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.3); width: 260px; position:relative;">
          <button id="close-btn-${venueId}" style="position:absolute; right:8px; top:8px; background:transparent; border:none; font-size:18px; cursor:pointer;">✖</button>
          <div id="loading-${venueId}" style="font-size:14px; color:#888;">🔄 정보 불러오는 중...</div>
          <div id="content-${venueId}" style="display:none;"></div>
        </div>
      `;

        const overlay = new window.kakao.maps.CustomOverlay({
          content,
          position,
          map: null,
          yAnchor: 1.4,
        });

        newOverlays.push(overlay);

        window.kakao.maps.event.addListener(marker, 'click', async () => {
          newOverlays.forEach((ov) => ov.setMap(null));
          overlay.setMap(mapRef.current);

          try {
            const venueData = await GetVenue(venueId);
            const venueInfo = venueData.result;

            const loadingElement = content.querySelector(
              `#loading-${venueId}`
            ) as HTMLElement;
            loadingElement.style.display = 'none';

            const contentDiv = content.querySelector(
              `#content-${venueId}`
            )! as HTMLDivElement;
            contentDiv.innerHTML = `
            <div style="font-weight:bold; font-size:16px; margin-bottom:5px; color:#D35400;">${venueInfo.name}</div>
            <div style="font-size:14px; color:#555; margin-bottom:10px;">📍 ${venueInfo.address}</div>
            <button id="shop-btn-${venueId}" style="background:#D35400; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">매장 상세보기</button>
          `;
            contentDiv.style.display = 'block';

            setTimeout(() => {
              content
                .querySelector(`#shop-btn-${venueId}`)
                ?.addEventListener('click', () => {
                  window.location.href = `/user/shop/${venueId}`;
                });
            }, 100);
          } catch (error) {
            content.querySelector(`#loading-${venueId}`)!.textContent =
              '❌ 정보 불러오기 실패';
            console.error(error);
          }
        });

        setTimeout(() => {
          content
            .querySelector(`#close-btn-${venueId}`)
            ?.addEventListener('click', () => {
              overlay.setMap(null);
            });
        }, 100);
      }
    );
  }, [Data]);

  const handleGPSClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentPosition = new window.kakao.maps.LatLng(latitude, longitude);
          if (mapRef.current) {
            mapRef.current.panTo(currentPosition);
            new window.kakao.maps.Marker({ position: currentPosition, map: mapRef.current });
          }
        },
        (error) => {
          console.error('❌ 위치 정보를 가져오는 데 실패했습니다.', error);
        }
      );
    } else {
      alert('이 브라우저는 Geolocation을 지원하지 않습니다.');
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="w-[402px] h-full relative">
      <div id="map" className="w-[402px] h-full"></div>
      <div className="inline-flex flex-col absolute top-[136px] right-[24px] gap-3 items-center">
        <KakaoMapButton IconName="gps" onClick={handleGPSClick} />
        <KakaoMapButton IconName="renew" onClick={handleReload} />
      </div>
    </div>
  );
};

export default KakaoMap;
