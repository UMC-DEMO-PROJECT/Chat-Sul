//각 컴포넌트는 독립적으로 역할을 하며, App 컴포넌트에서 이를 조합하여 사용하고 있음
import React, { useState, useEffect } from "react";

// Icon 컴포넌트
interface IconProps {
  name: string;
  size: number;
  color: string;
}

const Icon = ({ name, size, color }: IconProps) => {
  // 아이콘 렌더링 로직 (예시로 텍스트로 렌더링)
  return (
    <span style={{ fontSize: size, color: color }}>
      {name} {/* 실제 아이콘 라이브러리를 사용하는 경우 아이콘을 여기에 렌더링 */}
    </span>
  );
};

// DropDown 컴포넌트
interface DropDownProps {
  options: string[]; // 가게 이름 목록
  onChange: (locationName: string) => void; // 선택된 가게 이름을 처리하는 함수
}

const DropDown = ({ options, onChange }: DropDownProps) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

// Map 컴포넌트
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
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao) {
        window.Kakao.init("YOUR_APP_KEY"); // 카카오 맵 초기화
        const mapContainer = document.getElementById("map") as HTMLElement;
        const mapOptions = {
          center: new window.Kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };

        const map = new window.Kakao.maps.Map(mapContainer, mapOptions);

        locations.forEach((location) => {
          const position = new window.Kakao.maps.LatLng(location.coordinates.lat, location.coordinates.lng);
          const marker = new window.Kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      }
    };
  }, [locations]);

  return <div id="map" className="w-full h-[400px]"></div>;
};

// RentalCard 컴포넌트
interface Coordinates {
  lat: number;
  lng: number;
}

interface RentalCardProps {
  name: string;
  coordinates: Coordinates;
}

const RentalCard = ({ name, coordinates }: RentalCardProps) => {
  return (
    <div className="p-5 border border-gray-300 rounded-lg w-[300px] mt-5">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-700">
        좌표: {coordinates.lat}, {coordinates.lng}
      </p>
    </div>
  );
};

// App 컴포넌트 -> 전체를 관리하는 컴포넌트로, DropDown, Map, RentalCard를 연결하여 사용자가 위치를 선택하고, 선택한 위치에 대한 정보를 지도와 카드로 표시
const App = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleLocationChange = (locationName: string) => {
    setSelectedLocation(locationName);
  };

  const locations = [
    { name: "서울", coordinates: { lat: 37.5665, lng: 126.9780 } },
    { name: "부산", coordinates: { lat: 35.1796, lng: 129.0756 } },
    { name: "대전", coordinates: { lat: 36.3504, lng: 127.3845 } },
  ];

  return (
    <div className="p-5">
      <h1 className="text-xl mb-5">위치 선택 및 지도</h1>

      {/* 드롭다운 컴포넌트 */}
      <DropDown options={["서울", "부산", "대전"]} onChange={handleLocationChange} />

      <p className="mt-3">선택된 위치: {selectedLocation}</p>

      {/* 지도 컴포넌트 */}
      <Map locations={locations} />

      {/* 렌탈 카드 컴포넌트 */}
      {locations.map((location) => (
        <RentalCard key={location.name} name={location.name} coordinates={location.coordinates} />
      ))}
    </div>
  );
};

export default App;
