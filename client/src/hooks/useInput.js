import React from "react";

const useInput = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

export default useInput;
