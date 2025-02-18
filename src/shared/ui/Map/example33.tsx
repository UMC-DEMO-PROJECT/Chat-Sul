import { useEffect, useState } from 'react';

interface Coordinates {
  lat: number;
  lng: number;
}

interface Location {
  name: string;
  coordinates: Coordinates;
  url: string;
}

interface MapProps {
  locations: Location[];
}

declare global {
  interface Window {
    KaKao: any;
  }
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

    const { kakao } = window.KaKao;
    kakao.maps.load(() => {
      const container = document.getElementById('map');
      if (!container) return;

      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.978),
        level: 5,
      };
      const map = new kakao.maps.Map(container, options);

      const markers: kakao.maps.Marker[] = [];
      const clickCount: { [key: number]: number } = {};

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

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px; color:black; font-weight:normal; background:transparent; border:none; white-space:nowrap;">${loc.name}</div>`,
          removable: false,
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          clickCount[index] = (clickCount[index] || 0) + 1;

          if (clickCount[index] === 1) {
            infowindow.open(map, marker);
          }

          if (clickCount[index] === 2) {
            window.location.href = loc.url;
            clickCount[index] = 0;
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
