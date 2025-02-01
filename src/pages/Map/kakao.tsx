import KakaoMapButton from 'components/KakaoMap/KakaoMapButton';
import { useNavigate } from 'react-router-dom';
import Map from 'shared/ui/Map/example33';
import { useState } from 'react';

const Data = [
  {
    name: '찾술',
    coordinates: { lat: 37.560936, lng: 126.998685 },
    url: 'http://localhost:5173/user/shop',
  },
  {
    name: '술술',
    coordinates: { lat: 37.560708, lng: 127.000733 },
    url: 'http://localhost:5173/user/shop',
  },
  {
    name: '술샷',
    coordinates: { lat: 37.561966, lng: 126.998167 },
    url: 'http://localhost:5173/user/shop',
  },
  {
    name: '술렁',
    coordinates: { lat: 37.562152, lng: 127.000428 },
    url: 'http://localhost:5173/user/shop',
  },
  {
    name: '술랭',
    coordinates: { lat: 37.560986, lng: 127.001218 },
    url: 'http://localhost:5173/user/shop',
  },
];

const Main = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState<any>(null);

  // GPS 버튼 클릭 시 내 위치 이동
  const handleGPSClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const { kakao } = window;
          const currentPosition = new kakao.maps.LatLng(latitude, longitude);

          marker.setMap(map);
        },
        (error) => {
          console.error('위치 정보를 가져오는 데 실패했습니다.', error);
        }
      );
    } else {
      alert('이 브라우저는 Geolocation을 지원하지 않습니다.');
    }
  };

  // 새로고침 함수
  const handleReload = () => {
    window.location.reload(); // 페이지 새로고침
  };

  const handleBusiness = () => {
    navigate('/validate');
  };

  return (
    <div className="w-full h-full relative">
      <Map locations={Data} onMapLoad={(loadedMap) => setMap(loadedMap)} />
      <div className="inline-flex flex-col absolute top-[136px] right-[24px] gap-3 items-center justify-center">
        <KakaoMapButton IconName="renew" onClick={handleReload} />
        <KakaoMapButton IconName="business" onClick={handleBusiness} />
        <KakaoMapButton IconName="gps" onClick={handleGPSClick} />
      </div>
    </div>
  );
};

export default Main;
