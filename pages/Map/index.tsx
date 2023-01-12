import React, { useEffect } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const mapOption = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.31594605446268, 126.83897034588333), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커를 표시할 위치와 title 객체 배열입니다
    const positions = [
      {
        content: "<div>중앙역</div>",
        latlng: new kakao.maps.LatLng(37.31594605446268, 126.83897034588333),
      },
      {
        content: "<div>고잔역</div>",
        latlng: new kakao.maps.LatLng(37.31692035756915, 126.82398648462613),
      },
      {
        content: "<div>한대앞역</div>",
        latlng: new kakao.maps.LatLng(37.31021215429533, 126.85375998182458),
      },
      {
        content: "<div>고잔고</div>",
        latlng: new kakao.maps.LatLng(37.308620366341245, 126.83548910067815),
      },
      {
        content: "<div>에리카</div>",
        latlng: new kakao.maps.LatLng(37.29818781711024, 126.83652690419692),
      },
    ];

    // 마커 이미지의 이미지 주소입니다
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
      });

      // 마커에 표시할 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
      });

      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    }

    function makeOverListener(map: any, marker: any, infowindow: any) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow: any) {
      return function () {
        infowindow.close();
      };
    }

    //중심좌표 재설정
    let position = new window.kakao.maps.LatLng(
      37.31594605446268,
      126.83897034588333
    );
    map.setCenter(position);
  }, []);

  return (
    <>
      <HeaderBar />
      <Wrapper>
        <div id="map" style={{ width: "800px", height: "700px" }}>
          dd
        </div>
      </Wrapper>
    </>
  );
};

export default Map;
