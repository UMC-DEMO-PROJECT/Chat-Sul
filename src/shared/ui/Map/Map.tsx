import { useEffect } from 'react';

// Location 타입 정의

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

/**
 * Map 컴포넌트
 *
 * Map을 사용하기 위한 Map Component 입니다.
 *
 * @param {Location[]} locations
 * @param {Object} locations.Location
 * @param {string} locations.Location.name
 * @param {Object} locations.Location.coordinates
 * @param {number} locations.Location.coordinates.lat
 * @param {number} locations.Location.coordinates.lng
 *
 */

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = ({ locations }: MapProps) => {
  useEffect(() => {
    // 카카오 지도 API 로드
    const { kakao } = window;
    const container = document.getElementById('map');
    if (container && kakao) {
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.978), // 기본 위치 (서울)
        level: 3, // 확대 레벨
      };
      const map = new kakao.maps.Map(container, options);

      // 마커 추가
      locations.forEach((loc) => {
        const markerPosition = new kakao.maps.LatLng(
          loc.coordinates.lat,
          loc.coordinates.lng
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // 마커에 클릭 이벤트 추가(정보창)
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px;">${loc.name}</div>`,
        });
        kakao.maps.event.addListener(marker, 'click', () => {
          infowindow.open(map, marker);
        });
      });
    }
  }, [locations]); // locations 변경 시마다 지도를 업데이트

  return (
    <div
      id="map"
      className="w-full h-[400px] mt-5 border border-gray-200 shadow-sm rounded-lg"
    ></div>
  );
};

export default Map;
