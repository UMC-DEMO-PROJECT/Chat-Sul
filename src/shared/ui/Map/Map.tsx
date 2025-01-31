import React, { useEffect } from "react";

function KakaoMap() {
  useEffect(() => {
    // 카카오 지도 API 로드 확인
    if (!window.kakao || !window.kakao.maps) {
      console.error("카카오 지도 API가 로드되지 않았습니다.");
      return;
    }

    const { kakao } = window;
    const container = document.getElementById("map");

    if (container) {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      new kakao.maps.Map(container, options);
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
}

export default KakaoMap;
