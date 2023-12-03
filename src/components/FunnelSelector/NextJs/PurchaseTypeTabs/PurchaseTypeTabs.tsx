import {
  TYPE_OTP,
  TYPE_OTP_LABEL,
  TYPE_SUB,
  TYPE_SUB_LABEL,
} from "../../../../utils/constants/purchaseType";
import * as S from "./PurchaseTypeTabs.styles";

type Props = {
  selected: string;
  setSelected: (v: string) => void;
};

const PurchaseTypeTabs = ({ selected = TYPE_SUB, setSelected }: Props) => {
  return (
    <div style={S.Container}>
      <div
        style={
          selected === TYPE_SUB ? { ...S.Item, ...S.ItemSelected } : S.Item
        }
        onClick={() => setSelected(TYPE_SUB)}
      >
        {TYPE_SUB_LABEL}
      </div>
      <div
        style={
          selected === TYPE_OTP ? { ...S.Item, ...S.ItemSelected } : S.Item
        }
        onClick={() => setSelected(TYPE_OTP)}
      >
        {TYPE_OTP_LABEL}
      </div>
    </div>
  );
};

export default PurchaseTypeTabs;
