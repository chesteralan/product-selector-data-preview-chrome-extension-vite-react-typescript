import PresellListButton from "../Buttons/PresellListButton";
import useCheckSite from "../../hooks/useCheckSite";
import { useDataContext } from "../../context/DataContext";

type Props = {};

const styles: React.CSSProperties = {
  position: "fixed",
  width: 30,
  top: `30vh`,
  right: 0,
  display: `block`,
  zIndex: 9999,
};

const FloatingNavFunnel = (props: Props) => {
  const { isFunnel } = useCheckSite();
  return isFunnel ? (
    <div style={styles}>
      <PresellListButton link={`/all-pdps`} />
      <PresellListButton link={`/email/_list`} />
    </div>
  ) : null;
};

export default FloatingNavFunnel;
