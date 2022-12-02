import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetValue, testCount } from "../../reducers/TestSlice";
import { addValue } from "../../actions/TestAPI";

const CallCenter = () => {
  const value = useAppSelector(testCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      콜센터
      <button onClick={() => dispatch(addValue())}>10증가</button>
      <button onClick={() => dispatch(resetValue())}>리셋</button>
    </div>
  );
};

export default CallCenter;
