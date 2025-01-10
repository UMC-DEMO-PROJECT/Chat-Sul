import React, { useEffect } from "react";

// Location 타입 정의
interface Coordinates {
    lat: number;
    lng: number;
}

interface Location {
    name: string;
    coordinates: Coordinates;
}

interface MapProps {
    locations: Location[]; // 지도에 표시할 위치 목록
}

const Map: React.FC<MapProps> = ({ locations }) => {
    useEffect(() => {
        // 카카오 지도 API 로드
        const { kakao } = window;
        const container = document.getElementById("map");
        if (container && kakao) {
            const options = {
                center: new kakao.maps.LatLng(37.5665, 126.9780), // 기본 위치 (서울)
                level: 3, // 확대 레벨
            };
            const map = new kakao.maps.Map(container, options);

            // 마커 추가
            locations.forEach((loc) => {
                const markerPosition = new kakao.maps.LatLng(loc.coordinates.lat, loc.coordinates.lng);
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                });
                marker.setMap(map);

                // 마커에 클릭 이벤트 추가(정보창)
                const infowindow = new kakao.maps.InfoWindow({
                    content: `<div style="padding:5px;">${loc.name}</div>`,
                });
                kakao.maps.event.addListener(marker, "click", () => {
                    infowindow.open(map, marker);
                });
            });
        }
    }, [locations]); // locations 변경 시마다 지도를 업데이트
    return (
        <div
            id="map"
            style={{ width: "100%", height: "400px", marginTop: "20px" }}
        ></div>
    );
};

export default Map;
