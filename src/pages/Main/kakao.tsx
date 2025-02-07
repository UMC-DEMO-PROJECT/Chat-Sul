import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoMapButton from 'components/kakaomap/kakaomapbutton';
import { useOwnerContext } from '../../context/OwnerContext';

declare global {
  interface Window {
    kakao: any;
  }
}

// 상점 데이터
const Data = [
  {
    name: '찾술',
    address: '서울특별시 중구 명동길 25',
    coordinates: { lat: 37.560936, lng: 126.998685 },
    url: '/user/shop',
  },
  {
    name: '술술',
    address: '서울특별시 중구 을지로 12길 34',
    coordinates: { lat: 37.560708, lng: 127.000733 },
    url: '/user/shop',
  },
  {
    name: '술샷',
    address: '서울특별시 중구 충무로 21',
    coordinates: { lat: 37.561966, lng: 126.998167 },
    url: '/user/shop',
  },
  {
    name: '술렁',
    address: '서울특별시 중구 남대문로 3가 10-5',
    coordinates: { lat: 37.562152, lng: 127.000428 },
    url: '/user/shop',
  },
  {
    name: '술랭',
    address: '서울특별시 중구 다동길 8',
    coordinates: { lat: 37.560986, lng: 127.001218 },
    url: '/user/shop',
  },
];

const KakaoMap = () => {
  const navigate = useNavigate();
  const { isRole } = useOwnerContext();
  const mapRef = useRef<any>(null);

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

    // ✅ 주황색 원형 마커
    const orangeMarkerImage = new window.kakao.maps.MarkerImage(
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><circle cx="20" cy="20" r="10" fill="%23D35400"/></svg>',
      new window.kakao.maps.Size(40, 40),
      { offset: new window.kakao.maps.Point(20, 20) }
    );

    // ✅ 오버레이 객체 저장
    const overlays: any[] = [];

    // ✅ 모든 매장 마커를 주황색 원형 마커로 설정
    Data.forEach((store) => {
      const position = new window.kakao.maps.LatLng(
        store.coordinates.lat,
        store.coordinates.lng
      );

      // ✅ 매장 마커 생성
      const marker = new window.kakao.maps.Marker({
        position,
        map: mapRef.current,
        image: orangeMarkerImage,
      });

      // ✅ 커스텀 오버레이 HTML 생성
      const content = document.createElement('div');
      content.innerHTML = `
        <div style="padding:12px; background:#fff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.3); width: 260px; position:relative;">
          <button id="close-btn" style="position:absolute; right:8px; top:8px; background:transparent; border:none; font-size:18px; cursor:pointer;">✖</button>
          <div style="font-weight:bold; font-size:16px; margin-bottom:5px; color:#D35400;">${store.name}</div>
          <div style="font-size:14px; color:#555; margin-bottom:10px;">📍 ${store.address}</div>
          <button id="shop-btn" style="background:#D35400; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">매장 상세보기</button>
        </div>
      `;

      // ✅ 커스텀 오버레이 생성 (초기에는 숨김)
      const overlay = new window.kakao.maps.CustomOverlay({
        content,
        position,
        map: null,
        yAnchor: 1.4,
      });

      overlays.push(overlay);

      // ✅ 마커 클릭 시 오버레이 표시
      window.kakao.maps.event.addListener(marker, 'click', () => {
        overlays.forEach((ov) => ov.setMap(null)); // 기존 오버레이 닫기
        overlay.setMap(mapRef.current);
      });

      // ✅ 닫기 버튼 이벤트 추가
      setTimeout(() => {
        content.querySelector('#close-btn')?.addEventListener('click', () => {
          overlay.setMap(null);
        });

        content.querySelector('#shop-btn')?.addEventListener('click', () => {
          window.location.href = store.url;
        });
      }, 100);
    });
  }, []);

  // ✅ GPS 버튼 클릭 시 현재 위치 마커 표시
  const handleGPSClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          if (!window.kakao || !window.kakao.maps) {
            console.error('❌ 카카오 맵이 로드되지 않았습니다.');
            return;
          }

          const currentPosition = new window.kakao.maps.LatLng(
            latitude,
            longitude
          );

          if (mapRef.current) {
            mapRef.current.panTo(currentPosition);

            // ✅ 현재 위치 마커 (기본 마커 유지)
            new window.kakao.maps.Marker({
              position: currentPosition,
              map: mapRef.current,
            });
          } else {
            console.error('❌ 지도 인스턴스를 찾을 수 없습니다.');
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

  // 새로고침 함수
  const handleReload = () => {
    window.location.reload();
  };

  const handleBusiness = () => {
    if (isRole === 'OWNER') navigate('/owner');
    else navigate('/validate');
  };

  return (
    <div className="w-[402px] h-[854px] relative">
      <div id="map" className="w-[402px] h-[854px]"></div>
      <div className="inline-flex flex-col absolute top-[136px] right-[24px] gap-3 items-center justify-center">
        {isRole === 'USER' ? (
          <KakaoMapButton IconName="business" onClick={handleBusiness} />
        ) : (
          <KakaoMapButton IconName="business" onClick={handleBusiness} />
        )}
        <KakaoMapButton IconName="renew" onClick={handleReload} />
        <KakaoMapButton IconName="gps" onClick={handleGPSClick} />
      </div>
    </div>
  );
};

export default KakaoMap;
