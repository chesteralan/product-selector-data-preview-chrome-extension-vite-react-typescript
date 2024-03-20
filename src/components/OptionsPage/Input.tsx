import { useEffect, useState } from "react";
import * as S from "./MainOptions/MainOptions.styles";

type Props = {
  storeKey: string;
  title?: string;
};

const Input = ({ title = "", storeKey = "" }: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    chrome.storage.local
      .get([storeKey])
      .then((items) => setValue(items[storeKey]));
  }, [storeKey, setValue]);

  const handleChange = (e: any) => {
    chrome.storage.local.set({ [storeKey]: e.target.value }).then(() => {});
  };

  return (
    <label>
      <div>{title}</div>
      <input
        type="text"
        style={S.Input}
        placeholder={title}
        defaultValue={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
