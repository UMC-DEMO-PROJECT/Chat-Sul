import { useEffect } from 'react';

// 위치 정보를 나타내는 타입 정의

interface Location {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface MapProps {
  locations: Location[]; // 지도에 표시할 위치 목록
}

const Map = ({ locations }: MapProps) => {
  useEffect(() => {
    // 카카오 지도 API 스크립트 url
    const scriptSrc =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=0843344d1b5f93b221a34240ad50ba89&autoload=false';

    // 스크립트 중복 로드를 방지
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            const mapContainer = document.getElementById('map') as HTMLElement;
            const mapOptions = {
              center: new window.kakao.maps.LatLng(37.5665, 126.978), // 기본 위치 (서울)
              level: 3, // 줌 레벨
            };

            const map = new window.kakao.maps.Map(mapContainer, mapOptions); // 지도 생성

            // 마커 추가
            locations.forEach((location) => {
              const position = new window.kakao.maps.LatLng(
                location.coordinates.lat,
                location.coordinates.lng
              );
              const marker = new window.kakao.maps.Marker({
                position: position,
              });
              marker.setMap(map); // 마커를 지도에 추가
            });
          });
        }
      };

      // 컴포넌트 언마운트 시 스크립트 제거
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [locations]);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '400px', border: '1px solid #ddd' }}
    ></div>
  );
};

export default Map;
