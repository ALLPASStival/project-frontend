import React, { useEffect } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import { getMap } from "../../actions/Map";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import communityDetail from "@pages/CommunityDetail";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Map = () => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getMap({}))
  //     .unwrap()
  //     .then((response) => {
  //       console.log("### 지도: ", response);
  //     })
  //     .catch((error) => {
  //       console.log("### error: ", error);
  //     });
  // }, [getMap]);
  //
  // const MapList: any = useSelector((state: RootState) => state.map.map);
  //
  // console.log(MapList[0]?.title);
  // console.log(MapList[0]?.img);
  // console.log(MapList[0]?.latitude);
  // console.log(MapList[0]?.longitude);
  // console.log(MapList[0]?.link);
  // console.log(MapList[0]?.place);
  // console.log(MapList[0]?.detailPlace);

  // let positions: any = [];
  // for (let i = 0; i < MapList.length; i++) {
  //   const content = {
  //     title: MapList[i].title,
  //     img: MapList[i].img,
  //     latlng: new kakao.maps.LatLng(
  //       String(MapList[i].latitude),
  //       String(MapList[i].longitude)
  //     ),
  //     addr1: MapList[i].place,
  //     detail: MapList[i].detailPlace,
  //     link: MapList[i].link,
  //   };
  //   positions.push(content);
  // }
  let clickedOverlay: any = null;

  useEffect(() => {
    const mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const mapOption = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.31594605446268, 126.83897034588333), //지도의 중심좌표.
      level: 12, //지도의 레벨(확대, 축소 정도)
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

    let positions = [
      {
        title: "추월산벚꽃축제",
        latlng: new kakao.maps.LatLng(35.36483985, 126.9872053),
        img: "http://imgnews.naver.net/image/5270/2016/10/04/20161004000188_0640_99_20161004162409.jpg",
        addr1: "전라북도 익산시",
        detail: "하나로 322 ",
        link: "https://www.iksan.go.kr/gukhwa/index.iksan",
      },
      {
        title: "천만송이 국화축제",
        latlng: new kakao.maps.LatLng(35.36483985, 126.9872053),
        img: "",
        addr1: "서울특별시 마포구",
        detail: "하나로 322 ",
        link: "http://www.mapo.go.kr/site/maponarusf/home",
      },
      {
        title: "제16회 마포나루 새우젓축제",
        detail: "덕골길 10",
        latlng: new kakao.maps.LatLng(37.5160609512, 129.1021986249),
        img: "",
        link: "http://www.dh.go.kr/tour/sub.htm?nav_code=tou1497764548",
        addr1: "강원도 동해시",
      },
      {
        title: "(미확정)동해무릉제",
        detail: "고서면 가사문학로 325",
        latlng: new kakao.maps.LatLng(35.22370105, 126.9729391),
        img: "http://imgnews.naver.net/image/5324/2019/08/20/0000194535_004_20190820124251550.jpeg",
        link: "https://www.iksan.go.kr/gukhwa/index.iksan",
        addr1: "전라남도 담양군",
      },
      {
        title: "고서포도축제",
        detail: "담양읍 메타프로방스 1길 17",
        latlng: new kakao.maps.LatLng(35.32260525, 127.0018114),
        img: "http://imgnews.naver.net/image/5025/2018/11/28/0000300141_001_20181128122651340.jpg",
        link: "www.bamboofestival.co.kr",
        addr1: "전라남도 담양군",
      },
      {
        title: "담양대나무축제",
        detail: "가야의길 126",
        latlng: new kakao.maps.LatLng(35.23606039, 128.8730826),
        img: "http://imgnews.naver.net/image/5372/2022/08/22/0000100168_001_20220822163602010.jpg",
        link: "http://www.gcfkorea.com",
        addr1: "경상남도 김해시",
      },
      {
        title: "화개장터 벚꽃축제",
        detail: "화개면 쌍계로 58",
        latlng: new kakao.maps.LatLng(35.1886, 127.624391),
        img: "http://imgnews.naver.net/image/5279/2017/03/28/0000078545_002_20170328173802197.jpg",
        link: "https://www.hadong.go.kr/02641/02652/02807.web",
        addr1: "경상남도 하동군",
      },
      {
        title: "강진청자축제",
        detail: "대구면 청자촌길 33",
        latlng: new kakao.maps.LatLng(35.22370105, 126.9729391),
        img: "http://imgnews.naver.net/image/008/2018/03/05/0004018288_001_20180305120220348.jpg",
        link: "http://www.gangjin.go.kr/culture/",
        addr1: "전라남도 강진군",
      },
      {
        title: "22회 인제 빙어축제(예정)",
        detail: "",
        latlng: new kakao.maps.LatLng(37.9977263808, 128.098499),
        img: "http://imgnews.naver.net/image/5105/2018/01/25/894472_364888_4935_20180125003112152.jpg",
        link: "https://www.inje.go.kr",
        addr1: "강원도 인제",
      },
      {
        title: "대관령눈꽃축제",
        detail: "대관령면 사부랑길224-2",
        latlng: new kakao.maps.LatLng(37.7049335581, 128.701772347),
        img: "http://imgnews.naver.net/image/001/2022/02/06/PYH2022020608300006200_P4_20220206150206818.jpg",
        link: "http://www.snowfestival.net",
        addr1: "강원도 평창군",
      },
      {
        title: "대관령눈꽃축제",
        detail: "대관령면 사부랑길224-2",
        latlng: new kakao.maps.LatLng(37.7049335581, 128.701772347),
        img: "http://imgnews.naver.net/image/001/2022/02/06/PYH2022020608300006200_P4_20220206150206818.jpg",
        link: "http://www.snowfestival.net",
        addr1: "강원도 평창군",
      },
      {
        title: "신년해맞이축제",
        detail: "하늘공원로 95 ",
        latlng: new kakao.maps.LatLng(37.53961, 126.94597),
        img: "http://imgnews.naver.net/image/5061/2008/12/18/18g11388.jpg",
        link: "",
        addr1: "서울특별시 마포구",
      },
      {
        title: "제23회 서귀포 겨울바다 국제펭귄수영대회",
        detail: "대관령면 사부랑길224-2",
        latlng: new kakao.maps.LatLng(33.24523114, 126.4080834),
        img: "http://imgnews.naver.net/image/5194/2018/01/03/0000063302_003_20180103101359085.jpg",
        link: "https://seogwipo.go.kr/festivals/penguinswimming/info/intro.htm",
        addr1: "서귀포시",
      },
      {
        title: "태백산 눈축제",
        detail: "장성1길 171",
        latlng: new kakao.maps.LatLng(37.10051315, 129.0082172),
        img: "http://imgnews.naver.net/image/003/2019/01/17/NISI20190117_0000261225_web_20190117151701_20190117151837826.jpg",
        link: "http://tbcf.or.kr/",
        addr1: "강원도 태백시",
      },
      {
        title: "천을산 해맞이",
        detail: "",
        latlng: new kakao.maps.LatLng(35.85169239, 128.6950183),
        img: "http://imgnews.naver.net/image/016/2018/12/30/201812301135498862210_20181230113855_01_20181230114131768.jpg",
        link: "https://www.suseong.kr",
        addr1: "천을산",
      },
      {
        title: "여수향일암일출기원한마당",
        detail: "향일암로 60",
        latlng: new kakao.maps.LatLng(34.59379448, 127.8029861),
        img: "http://imgnews.naver.net/image/5026/2012/12/12/2012121234293506_59_20121212165034.jpg",
        link: "http://www.snowfestival.net",
        addr1: "전라남도 여수시",
      },
      {
        title: "마량포 해넘이.해돋이 축제",
        detail: "서면 서인로 56",
        latlng: new kakao.maps.LatLng(36.1293642, 126.5036472),
        img: "http://imgnews.naver.net/image/421/2015/12/21/1695480_article_99_20151221132905.jpg",
        link: "http://tour.seocheon.go.kr",
        addr1: "충청남도 서천군",
      },
      {
        title: "땅끝 해넘이·해맞이 축제",
        detail: "송지면 땅끝마을길 70-14",
        latlng: new kakao.maps.LatLng(34.29820555, 126.5293719),
        img: "http://imgnews.naver.net/image/5270/2014/12/30/2014123018461386778_20141230185448_1_99_20141230185708.jpg",
        link: "www.haenam.go.kr",
        addr1: "전라남도 해남군",
      },
      {
        title: "왜목마을해넘이해맞이축제",
        detail: "석문면 왜목길 26",
        latlng: new kakao.maps.LatLng(37.04443385, 126.5261285),
        img: "http://imgnews.naver.net/image/018/2022/12/19/0005389725_001_20221219140201047.jpg",
        link: "",
        addr1: "충청남도 당진시",
      },
      {
        title: "제30회 성산일출축제",
        detail: "성산읍 일출로 284-12",
        latlng: new kakao.maps.LatLng(33.46223376, 126.9368007),
        img: "http://imgnews.naver.net/image/5565/2022/12/29/0000008780_007_20221229165612861.jpg",
        link: "https://www.sunrisefestival.kr/welcome",
        addr1: "제주특별자치도 서귀포시",
      },
      {
        title: "부산시민의종 타종식",
        detail: "용두산길 37-55(광복동2가)",
        latlng: new kakao.maps.LatLng(35.10093242, 129.0324385),
        img: "http://imgnews.naver.net/image/5181/2019/03/01/0001211577_001_20190301185808936.jpg",
        link: "http://www.bfo.or.kr/main/index.asp",
        addr1: "부산광역시 중구",
      },
      {
        title: "2023 해운대 카운트다운&해맞이축제",
        detail: "중동2로 11",
        latlng: new kakao.maps.LatLng(35.163067844, 129.163530274),
        img: "http://imgnews.naver.net/image/5445/2021/11/29/0000299118_001_20211129153602561.jpg",
        link: "",
        addr1: "부산광역시 해운대구",
      },
      {
        title: "정서진 해넘이 축제",
        detail: "정서진1로 41",
        latlng: new kakao.maps.LatLng(37.55843603, 126.6074644),
        img: "https://www.seo.incheon.kr/images/bbs/pub_picture/2020/middle/young_5762.jpg",
        link: "http://www.seo.incheon.kr/",
        addr1: "인천광역시 서구",
      },
      {
        title: "평창송어축제",
        detail: "진부면 경강로 3562",
        latlng: new kakao.maps.LatLng(37.6332177786, 128.5570396047),
        img: "http://post.phinf.naver.net/MjAyMjEyMTRfOTEg/MDAxNjcwOTk2OTgxNTM4.KZ_heFBvscdK82GxBxvcQsWYvg3qF19gJuOe77c6hlcg.WDoKuZ96TKkWprkGQ3aRYhnVbYbyqVxFJDg2sb95kIMg.PNG/IxaQ5snJdsj48nKlLx0D59bSKGUE.jpg",
        link: "http://www.festival700.or.kr",
        addr1: "강원도 평창군",
      },
      {
        title: "영덕대게축제",
        detail: "강구면 영덕대게로 136",
        latlng: new kakao.maps.LatLng(36.37536, 129.223),
        img: "http://post.phinf.naver.net/MjAyMjEyMjBfMjQz/MDAxNjcxNDk5MDI4NDU5.inEae8TWB5QXnGNyucSITW56i2gHvxom0_OId8siGl4g.0SjjFqZx6dabVpz1L8PGLeUA5_Gg_bA7DYqgSIdZmYMg.PNG/I7SDLQe8PqbvS1cbKL2egJrQiVDA.jpg",
        link: "https://crab.ydfesta.kr",
        addr1: "경상북도 영덕군",
      },
      {
        title: "포천 백운계곡 동장군 축제",
        detail: "동면 화동로 2381",
        latlng: new kakao.maps.LatLng(38.0547745, 127.383869),
        img: "http://imgnews.naver.net/image/5002/2020/01/02/0001412031_002_20200102081801645.jpg",
        link: "",
        addr1: "경기도 포천시",
      },
      {
        title: "겨울왕국 제천페스티벌",
        detail: "정서진1로 41",
        latlng: new kakao.maps.LatLng(37.1493417, 128.2160865),
        img: "http://imgnews.naver.net/image/5344/2019/12/18/0000212208_001_20191218222516804.jpg",
        link: "http://www.jccf.or.kr",
        addr1: "충청북도 제천시",
      },
      {
        title: "산타축제",
        detail: "성수면 도인2길 50",
        latlng: new kakao.maps.LatLng(35.63310329, 127.3012599),
        img: "http://imgnews.naver.net/image/057/2022/12/08/0001707996_002_20221208173604306.jpg",
        link: "www.cheesepark.kr",
        addr1: "전라북도 임실군",
      },
      {
        title: "2022 마이산 겨울동화축제",
        detail: "진안읍 단양리 778",
        latlng: new kakao.maps.LatLng(35.7728567226, 127.415551208),
        img: "http://imgnews.naver.net/image/5239/2022/12/21/817364_image_1_20221221214001809.jpg",
        link: "https://www.jinan.go.kr/festival/",
        addr1: "전라북도 진안군",
      },
      {
        title: "담양산타축제",
        detail: "담양읍 메타프로방스 1길 17",
        latlng: new kakao.maps.LatLng(35.32260525, 127.0018114),
        img: "http://imgnews.naver.net/image/469/2017/12/18/0000262650_001_20171219045740740.jpg",
        link: "http://www.seo.incheon.kr/",
        addr1: "전라남도 담양군",
      },
      {
        title: "부산크리스마스트리문화축제",
        detail: "광복중앙로 2",
        latlng: new kakao.maps.LatLng(35.0995432, 129.0314651),
        img: "http://imgnews.naver.net/image/003/2019/11/13/NISI20191113_0015801808_web_20191113175642_20191113175753401.jpg",
        link: "",
        addr1: "부산광역시 중구",
      },
      {
        title: "2022 강릉누들축제",
        detail: "경강로 2112",
        latlng: new kakao.maps.LatLng(37.7553861171, 128.8981649115),
        img: "http://imgnews.naver.net/image/5402/2022/12/19/0000057715_001_20221219114206592.jpg",
        link: "",
        addr1: "강원도 강릉시",
      },
      {
        title: "2022 강릉와인축제",
        detail: "경강로 2111",
        latlng: new kakao.maps.LatLng(37.7558922453, 128.8974692754),
        img: "http://imgnews.naver.net/image/001/2022/12/01/AKR20221201081700062_02_i_P4_20221201152812302.jpg",
        link: "https://www.gncaf.or.kr/contents.asp?page=482",
        addr1: "강원도 강릉시",
      },
      {
        title: "삼척동해왕이사부축제",
        detail: "삼척시청 중앙로 296",
        latlng: new kakao.maps.LatLng(37.44988816, 129.1656266),
        img: "http://imgnews.naver.net/image/5294/2022/12/01/0000266331_002_20221201151603426.jpg",
        link: "http://www.yisabu.com",
        addr1: "강원도 삼척",
      },
      {
        title: "청소년 푸른별 콘서트",
        detail: "의정로 27",
        latlng: new kakao.maps.LatLng(37.735177245, 127.0338894),
        img: "http://imgnews.naver.net/image/5297/2019/12/01/2019120117337613_20191201205840152.jpg",
        link: "",
        addr1: "경기도 의정부시",
      },
      {
        title: "제22회 최남단 방어축제",
        detail: "대정읍 최남단해안로 66",
        latlng: new kakao.maps.LatLng(33.21449893, 126.2520491),
        img: "http://imgnews.naver.net/image/5887/2022/11/27/0000001161_001_20221127145804512.png",
        link: "http://bangeofestival.com/introduction",
        addr1: "제주특별자치도 서귀포시",
      },
      {
        title: "여수동동북축제",
        detail: "시청서 6길",
        latlng: new kakao.maps.LatLng(34.75590207, 127.6572796),
        img: "http://imgnews.naver.net/image/5355/2018/11/05/05_309474-12_20181105164348079.jpg",
        link: "http://tour.yeosu.go.kr/dongdong",
        addr1: "전라남도 여수시",
      },
      {
        title: "부산 희망 드림 빛축제",
        detail: "시민공원로30 (범전동)",
        latlng: new kakao.maps.LatLng(35.16283064, 129.053188),
        img: "http://post.phinf.naver.net/MjAyMzAxMTRfMTIg/MDAxNjczNjg4MTI1MTY2.UBQWgDno1XRqtDwL5o-Zx503ABN2NsIdBIk40FkbSqsg.YY57EtDHttq2hv4ITt8zbdNkHTxTKgTu1dp8mPsXnoYg.JPEG/IjeqBvrhBnOUQQ-RvpYf-VUK0_68.jpg",
        link: "https://www.busanjin.go.kr/index.busanjin?menuCd=DOM_000001003003002000",
        addr1: "부산광역시 부산진구",
      },
      {
        title: "서천철새여행",
        detail: "마서면 장산로 916",
        latlng: new kakao.maps.LatLng(36.02280046, 126.7426918),
        img: "http://imgnews.naver.net/image/001/2019/11/11/AKR20191111064200063_01_i_20191111111042712.jpg",
        link: "http://tour.seocheon.go.kr",
        addr1: "충청남도 서천군",
      },
      {
        title: "마토예술제<매직파티>",
        detail: "팽성읍 안정쇼핑로11",
        latlng: new kakao.maps.LatLng(36.95955991, 127.0439994),
        img: "http://imgnews.naver.net/image/5297/2019/12/01/2019120117337613_20191201205840152.jpg",
        link: "https://www.pccf.or.kr/",
        addr1: "경기도 평택시",
      },
    ];

    for (let i = 0; i < positions.length; i++) {
      let data = positions[i];
      displayMarker(data);
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(data: any) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: data.latlng,
      });
      let overlay = new kakao.maps.CustomOverlay({
        yAnchor: 3,
        position: marker.getPosition(),
      });

      let content = document.createElement("div");
      content.className = "wrap";
      content.style.cssText =
        "position: absolute;left: 0;bottom: 40px;width: 250px;height: 300px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px";

      let info = document.createElement("div");
      info.className = "info";
      info.style.cssText =
        "width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;";
      content.appendChild(info);

      //커스텀오버레이 타이틀
      let contentTitle = document.createElement("div");
      contentTitle.className = "title";
      contentTitle.style.cssText =
        "padding: 5px 0 0 10px; height: 30px; background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;";
      contentTitle.appendChild(document.createTextNode(data.title));
      info.appendChild(contentTitle);

      //커스텀오버레이 닫기 버튼
      let closeBtn = document.createElement("div");
      closeBtn.className = "close";
      closeBtn.setAttribute("title", "닫기");
      closeBtn.onclick = function () {
        overlay.setMap(null);
      };
      contentTitle.appendChild(closeBtn);

      let bodyContent = document.createElement("div");
      bodyContent.className = "body";
      bodyContent.style.cssText = "position: relative;overflow: hidden;";
      info.appendChild(bodyContent);

      let imgDiv = document.createElement("div");
      imgDiv.className = "img";
      imgDiv.style.cssText =
        "position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;";
      bodyContent.appendChild(imgDiv);

      //커스텀오버레이 이미지
      let imgContent = document.createElement("img");
      imgContent.setAttribute("src", data.img);
      imgContent.setAttribute("width", "150");
      imgContent.setAttribute("heigth", "150");
      imgDiv.appendChild(imgContent);

      let descContent = document.createElement("div");
      descContent.className = "desc";
      descContent.style.cssText =
        "position: relative;margin: 13px 0 0 90px;height: 75px;";
      bodyContent.appendChild(descContent);

      //커스텀오버레이 주소
      let addressContent = document.createElement("div");
      addressContent.className = "ellipsis";
      addressContent.style.cssText =
        "overflow: hidden;text-overflow: ellipsis;white-space: nowrap; margin-bottom: 7px";
      addressContent.appendChild(document.createTextNode(data.addr1));
      descContent.appendChild(addressContent);

      //커스텀오버레이 지번주소
      let address2Content = document.createElement("div");
      address2Content.className = "jibun ellipsis";
      address2Content.style.cssText =
        "font-size: 11px;color: #888;margin-top: -2px; margin-bottom: 7px";
      address2Content.appendChild(document.createTextNode(data.detail));
      descContent.appendChild(address2Content);

      let LinkDiv = document.createElement("div");
      descContent.appendChild(LinkDiv);

      //커스텀오버레이 링크
      let LinkContent = document.createElement("a");

      LinkContent.setAttribute("href", data.link);

      LinkContent.className = "link";
      LinkContent.appendChild(document.createTextNode("홈페이지"));
      LinkContent.style.cssText = "color: #5085BB;font-size: 8px";
      LinkDiv.appendChild(LinkContent);
      //마커 위에 커스텀오버레이 콘텐츠 Dom으로 구현 끝

      overlay.setContent(content);

      kakao.maps.event.addListener(marker, "click", function () {
        if (clickedOverlay) {
          clickedOverlay.setMap(null);
        }
        overlay.setMap(map);
        clickedOverlay = overlay;
      });
    }

    //중심좌표 재설정
    let position = new window.kakao.maps.LatLng(36.3504119, 127.3845475);
    map.setCenter(position);
  }, []);

  return (
    <>
      <HeaderBar />
      <Wrapper>
        <div id="map" style={{ width: "1430px", height: "650px" }} />
      </Wrapper>
    </>
  );
};

export default Map;
