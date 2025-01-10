import React, { useEffect } from "react";

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
    // 카카오 지도 API 로딩을 위한 스크립트 추가 (여기서는 예시로 사용)
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao) {
        window.Kakao.init("YOUR_APP_KEY"); // 카카오 맵 초기화
        const mapContainer = document.getElementById("map") as HTMLElement; // 지도 요소 찾기
        const mapOptions = {
          center: new window.Kakao.maps.LatLng(37.5665, 126.978), // 서울의 기본 위치
          level: 3,
        };

        const map = new window.Kakao.maps.Map(mapContainer, mapOptions); // 지도 생성

        locations.forEach((location) => {
          const position = new window.Kakao.maps.LatLng(location.coordinates.lat, location.coordinates.lng);
          const marker = new window.Kakao.maps.Marker({
            position: position,
          });

          marker.setMap(map); // 지도에 마커 추가
        });
      }
    };
  }, [locations]); // locations 변경 시마다 지도를 업데이트

  return <div id="map" className="w-full h-[400px]"></div>;
};

export default Map;
