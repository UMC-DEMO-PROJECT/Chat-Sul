import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoMapButton from 'components/kakaomap/kakaomapbutton';
import { useOwnerContext } from '../../context/OwnerContext';

declare global {
  interface Window {
    kakao: any;
  }
}

// 매장 데이터
const Data = [
  {
    name: '찾술',
    coordinates: { lat: 37.560936, lng: 126.998685 },
    url: '/user/shop',
  },
  {
    name: '술술',
    coordinates: { lat: 37.560708, lng: 127.000733 },
    url: '/user/shop',
  },
  {
    name: '술샷',
    coordinates: { lat: 37.561966, lng: 126.998167 },
    url: '/user/shop',
  },
  {
    name: '술렁',
    coordinates: { lat: 37.562152, lng: 127.000428 },
    url: '/user/shop',
  },
  {
    name: '술랭',
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
      center: new window.kakao.maps.LatLng(37.560936, 126.998685),
      level: 3,
    };

    mapRef.current = new window.kakao.maps.Map(container, options);

    // ✅ 테두리 없는 진한 주황색 원형 마커 SVG
    const encodedSVG = encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
         <circle cx="20" cy="20" r="10" fill="#D35400"/>
       </svg>`
    );

    const circleMarkerImage = new window.kakao.maps.MarkerImage(
      `data:image/svg+xml,${encodedSVG}`,
      new window.kakao.maps.Size(40, 40),
      { offset: new window.kakao.maps.Point(20, 20) }
    );

    // 매장 마커 표시 (커스텀 주황색 마커)
    Data.forEach((location) => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          location.coordinates.lat,
          location.coordinates.lng
        ),
        map: mapRef.current,
        image: circleMarkerImage, // ✅ 커스텀 마커 적용
      });

      window.kakao.maps.event.addListener(marker, 'click', () => {
        window.location.href = location.url;
      });
    });
  }, []);

  // ✅ GPS 버튼 클릭 시 현재 위치로 이동
  const handleGPSClick = () => {
    console.log('📍 GPS 버튼 클릭됨!');

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
            const marker = new window.kakao.maps.Marker({
              position: currentPosition,
              map: mapRef.current,
            });

            console.log('✅ 현재 위치 이동 완료');
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
        <KakaoMapButton IconName="business" onClick={handleBusiness} />
        <KakaoMapButton IconName="renew" onClick={handleReload} />
        <KakaoMapButton IconName="gps" onClick={handleGPSClick} />
      </div>
    </div>
  );
};

export default KakaoMap;
