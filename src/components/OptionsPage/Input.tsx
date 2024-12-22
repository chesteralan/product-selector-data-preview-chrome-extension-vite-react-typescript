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
    <div style={{ paddingTop: 5, paddingBottom: 5 }}>
      <label>
        <div style={{ marginBottom: 5 }}>{title}</div>
        <input
          type="text"
          style={S.Input}
          placeholder={title}
          defaultValue={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Input;
