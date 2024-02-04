import {
  TYPE_OTP,
  TYPE_OTP_LABEL,
  TYPE_SUB,
  TYPE_SUB_LABEL,
} from "../../../../utils/constants/purchaseType";
import * as S from "./PurchaseTypeTabs.styles";
import { TYPE_BUMPOFFER_LABEL } from "../../../../utils/constants/bumpoffer";

type Props = {
  selected: string;
  setSelected: (v: string) => void;
  showBumpoffers: boolean;
  setShowBumpoffers: (v: boolean) => void;
};

const PurchaseTypeTabs = ({
  selected = TYPE_SUB,
  setSelected,
  showBumpoffers,
  setShowBumpoffers,
}: Props) => {
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
      <div
        style={showBumpoffers ? { ...S.Item, ...S.ItemSelected } : S.Item}
        onClick={() => setShowBumpoffers(!showBumpoffers)}
      >
        {TYPE_BUMPOFFER_LABEL}
      </div>
    </div>
  );
};

export default PurchaseTypeTabs;
