import React from "react";
import { Th } from "./styles";

const Articles = () => {
  return (
    <table style={{ marginTop: "2.2rem" }}>
      <thead>
        <Th style={{ width: "10%" }}>NO</Th>
        <Th style={{ width: "40%" }}>제목</Th>
        <Th style={{ width: "20%" }}>글쓴이</Th>
        <Th style={{ width: "15%" }}>작성시간</Th>
        <Th style={{ width: "15%" }}>좋아요</Th>
      </thead>
      <tbody>{/* 여기에 받아온 글 map 돌리기 */}</tbody>
    </table>
  );
};

export default Articles;
