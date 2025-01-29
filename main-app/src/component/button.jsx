import React from "react";
import { useDispatch } from "react-redux";
import { updateMessage } from "shared-state/src/store/store";

const Button = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateMessage("Hello from Button!"));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Button;
