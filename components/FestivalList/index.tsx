import React, { useCallback, useEffect } from "react";
import { Wrapper } from "@components/FestivalReviews/styles";
import { Link } from "react-router-dom";
import {
  ListContainer,
  ListTop,
  ListTopGood,
  ListTopTitle,
} from "@components/FestivalList/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { ListBottom } from "@pages/Search/styles";
import axios from "axios";

const FestivalList = () => {
  const data = 1;
  let List: any = [];

  // if (data) {
  //   for (let i = 0; i < data?.length; i++) {
  //     List.push(data[i].festival);
  //   }
  // }

  const da = useCallback((e: any) => {
    e.preventDefault();
    axios
      .get("http://3.36.112.187:8080/api/v1/festivals/1")

      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://3.36.112.187:8080/api/v1/festivals/1"
        );
        console.log(response.data);
        console.log(response.data?.result?.festivalName);
        console.log(response.data?.result?.startDate);
        console.log(response.data?.result?.streetAddr);
      } catch (e) {}
    };
    fetchUsers();
  }, []);

  return (
    <Wrapper>
      <ListContainer>
        {data &&
          List &&
          [...Array(List?.length)].map((e, index) => {
            const FestivalId = List[index].FestivalId;
            return (
              <Link to={`/festival/${FestivalId}`} key={index}>
                <ListTop>
                  <ListTopTitle>{List[index].FestivalName}</ListTopTitle>
                  <ListTopGood>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    {List[index].good}
                    <FontAwesomeIcon icon={faPencil} />
                    {List[index].bad}
                  </ListTopGood>
                </ListTop>
                <ListBottom>
                  <div>장소: {List[index].place}</div>
                  <div>일시: {List[index].clock}</div>
                  <div>월: {List[index].date}월</div>
                </ListBottom>
              </Link>
            );
          })}
      </ListContainer>
    </Wrapper>
  );
};

export default FestivalList;
