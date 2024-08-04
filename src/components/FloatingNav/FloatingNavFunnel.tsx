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
  const { isFunnel } = useCheckSite();
  return (
    <div style={styles}>
      <PresellListButton link={`/all-pdps`} />
      {isFunnel && <PresellListButton link={`/email/_list`} />}
    </div>
  );
};

export default FloatingNavFunnel;
