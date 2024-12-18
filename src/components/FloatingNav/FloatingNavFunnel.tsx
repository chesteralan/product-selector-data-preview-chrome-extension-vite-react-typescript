import useCheckSite from "../../hooks/useCheckSite";
import PresellListButton from "../Buttons/PresellListButton";

const styles: React.CSSProperties = {
  position: "fixed",
  width: 30,
  top: `30vh`,
  right: 0,
  display: `block`,
  zIndex: 9999,
};

const FloatingNavFunnel = () => {
  return (
    <div style={styles}>
      <PresellListButton link={`/all-pdps`} />
    </div>
  );
};

export default FloatingNavFunnel;
