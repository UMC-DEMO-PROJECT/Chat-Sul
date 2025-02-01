import React, { useEffect, useState } from 'react';

// Location 타입 정의
interface Coordinates {
  lat: number;
  lng: number;
}

interface Location {
  name: string;
  coordinates: Coordinates;
  url: string; // URL을 추가하여 이동할 링크를 정의
}

interface MapProps {
  locations: Location[];
}

const Map = ({ locations }: MapProps): JSX.Element => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.getElementById('kakao-map-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_APPKEY}&autoload=false`;
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!scriptLoaded) return;

    const { kakao } = window;
    kakao.maps.load(() => {
      const container = document.getElementById('map');
      if (!container) return;

      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.978),
        level: 5,
      };
      const map = new kakao.maps.Map(container, options);

      const markers: kakao.maps.Marker[] = [];
      const clickCount: { [key: number]: number } = {}; // 마커별 클릭 횟수를 저장

      // 테두리 없는 진한 주황색 마커 이미지 (SVG)
      const circleMarkerImage = new kakao.maps.MarkerImage(
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><circle cx="20" cy="20" r="10" fill="%23D35400"/></svg>',
        new kakao.maps.Size(40, 40),
        { offset: new kakao.maps.Point(20, 20) }
      );

      locations.forEach((loc, index) => {
        const markerPosition = new kakao.maps.LatLng(
          loc.coordinates.lat,
          loc.coordinates.lng
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
          image: circleMarkerImage,
        });

        marker.setMap(map);
        markers.push(marker);

        // **배경을 투명하게 설정한** 정보창 (글자만 표시, 테두리 없앰)
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px; color:black; font-weight:normal; background:transparent; border:none; white-space:nowrap;">${loc.name}</div>`,
          removable: false, // 닫기 버튼을 제거
        });

        // 마커 클릭 시 동작
        kakao.maps.event.addListener(marker, 'click', () => {
          clickCount[index] = (clickCount[index] || 0) + 1;

          if (clickCount[index] === 1) {
            // 첫 번째 클릭: 정보창 표시
            infowindow.open(map, marker);
          }

          if (clickCount[index] === 2) {
            // 두 번째 클릭: 페이지 이동
            window.location.href = loc.url;
            clickCount[index] = 0; // 클릭 횟수 초기화
          }
        });
      });

      return () => {
        markers.forEach((marker) => marker.setMap(null));
      };
    });
  }, [scriptLoaded, locations]);

  return <div id="map" className="w-[402px] h-full"></div>;
};

export default Map;
