import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "./counterSlice";
import { increment, incrementAsync } from "./counterSlice";
const Counter = () => {
    const count = useSelector(selectCount)
    console.log(count);
  const dispatch = useDispatch();
  return <div>Counter</div>;
};

export default Counter;
