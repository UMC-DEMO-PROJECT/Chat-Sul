import React, { useEffect, useState } from 'react';

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
  onMapLoad?: (map: any) => void; // 부모 컴포넌트에서 지도 객체를 받을 수 있도록 변경
}

const Map = ({ locations, onMapLoad }: MapProps): JSX.Element => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.getElementById('kakao-map-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=%VITE_KAKAO_MAP_APPKEY%&autoload=false`;
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
        center: new kakao.maps.LatLng(37.559836, 127.000163),
        level: 5,
      };
      const map = new kakao.maps.Map(container, options);

      // 부모 컴포넌트에 map 객체를 전달
      if (onMapLoad) {
        onMapLoad(map);
      }

      const markers: kakao.maps.Marker[] = [];
      locations.forEach((loc) => {
        const markerPosition = new kakao.maps.LatLng(
          loc.coordinates.lat,
          loc.coordinates.lng
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
        markers.push(marker);

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px; color:black; font-weight:normal; background:transparent; border:none; white-space:nowrap;">${loc.name}</div>`,
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          infowindow.open(map, marker);
          window.location.href = loc.url;
        });
      });
      kakao.maps.event.addListener(marker, 'click', () => {
        infowindow.open(map, marker);
        window.location.href = loc.url;  // 클릭 시 URL로 이동
      });
    });
      return () => {
        markers.forEach((marker) => marker.setMap(null));
      };
    });
  }, [scriptLoaded, locations, onMapLoad]);

  return <div id="map" className="w-[402px] h-full"></div>;
};

export default Map;
