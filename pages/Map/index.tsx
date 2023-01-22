import React, { useEffect } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import { getMap } from "../../actions/Map";
import { useAppDispatch } from "../../redux/hooks";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Map = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMap({}))
      .unwrap()
      .then((response) => {
        console.log("### response: ", response);
      })
      .catch((error) => {
        console.log("### error: ", error);
      });
  }, []);

  console.log(getMap);
  console.log(getMap);
  console.log(getMap);

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
    // const positions = [
    //   {
    //     content:
    //       '<div class="customoverlay">' +
    //       '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    //       '    <span class="title">구의야구공원</span>' +
    //       "  </a>" +
    //       "</div>",
    //     latlng: new kakao.maps.LatLng(37.31594605446268, 126.83897034588333),
    //   },
    //   {
    //     content: "<div>고잔역</div>",
    //     latlng: new kakao.maps.LatLng(37.31692035756915, 126.82398648462613),
    //   },
    //   {
    //     content: "<div>한대앞역</div>",
    //     latlng: new kakao.maps.LatLng(37.31021215429533, 126.85375998182458),
    //   },
    //   {
    //     content: "<div>고잔고</div>",
    //     latlng: new kakao.maps.LatLng(37.308620366341245, 126.83548910067815),
    //   },
    //   {
    //     content: "<div>에리카</div>",
    //     latlng: new kakao.maps.LatLng(37.29818781711024, 126.83652690419692),
    //   },
    // ];
    //
    // // 마커 이미지의 이미지 주소입니다
    // const imageSrc =
    //   "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    //
    // for (let i = 0; i < positions.length; i++) {
    //   // 마커 이미지의 이미지 크기 입니다
    //   const imageSize = new kakao.maps.Size(24, 35);
    //
    //   // 마커 이미지를 생성합니다
    //   const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    //
    //   // 마커를 생성합니다
    //   const marker = new kakao.maps.Marker({
    //     map: map, // 마커를 표시할 지도
    //     position: positions[i].latlng, // 마커를 표시할 위치
    //     image: markerImage, // 마커 이미지
    //   });
    //
    //   // 마커에 표시할 인포윈도우를 생성합니다
    //   const infowindow = new kakao.maps.InfoWindow({
    //     content: positions[i].content, // 인포윈도우에 표시할 내용
    //   });
    //
    //   kakao.maps.event.addListener(
    //     marker,
    //     "mouseover",
    //     makeOverListener(map, marker, infowindow)
    //   );
    //   kakao.maps.event.addListener(
    //     marker,
    //     "mouseout",
    //     makeOutListener(infowindow)
    //   );
    // }
    //
    // function makeOverListener(map: any, marker: any, infowindow: any) {
    //   return function () {
    //     infowindow.open(map, marker);
    //   };
    // }
    //
    // // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    // function makeOutListener(infowindow: any) {
    //   return function () {
    //     infowindow.close();
    //   };
    // }

    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(37.31594605446268, 126.83897034588333),
    });

    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다

    const content =
      "<div style=\"position: absolute;left: 0;bottom: 40px;width: 288px;height: 132px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;\">" +
      '    <div class="info" style="width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;">' +
      '        <div class="title" style="padding: 5px 0 0 10px; height: 30px; background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;">' +
      "            중앙역" +
      '            <div class="close" onclick="closeOverlay()" title="닫기" style="position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url(\'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png\') "></div>' +
      "        </div>" +
      '        <div class="body" style="position: relative;overflow: hidden;">' +
      '            <div class="img" style="position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;">' +
      '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
      "           </div>" +
      '            <div class="desc" style="position: relative;margin: 13px 0 0 90px;height: 75px;">' +
      '                <div class="ellipsis" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">경기도 안산시 단원구</div>' +
      '                <div class="jibun ellipsis" style="font-size: 11px;color: #888;margin-top: -2px;">(우) 12345 (지번) 고잔동 2181</div>' +
      '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link" style="color: #5085BB;">홈페이지</a></div>' +
      "            </div>" +
      "        </div>" +
      "    </div>" +
      "</div>";

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });
    overlay.setMap(null);

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, "click", function () {
      overlay.setMap(map);
    });

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
        <div id="map" style={{ width: "800px", height: "700px" }}></div>
      </Wrapper>
    </>
  );
};

export default Map;
