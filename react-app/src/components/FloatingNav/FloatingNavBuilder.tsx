import EditButton from "../Buttons/EditButton";

type Props = {
  entryId: string;
};

const styles: React.CSSProperties = {
  position: "fixed",
  width: 30,
  top: `50vh`,
  right: 0,
  display: `block`,
  zIndex: 9999,
};

const FloatingNavBuilder = ({ entryId }: Props) => {

  return (
    <div style={styles}>
      <EditButton funnelId={entryId} />
    </div>
  );
};

export default FloatingNavBuilder