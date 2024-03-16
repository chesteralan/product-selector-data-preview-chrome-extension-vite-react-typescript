export const Wrapper: React.CSSProperties = {
  width: `100%`,
  height: `100%`,
  position: `fixed`,
  top: 0,
  left: 0,
  zIndex: 9998,
  backgroundColor: "#CCC",
  opacity: 0.5,
};

export const Container: React.CSSProperties = {
  position: `fixed`,
  width: `80%`,
  height: `80%`,
  background: `#fff`,
  border: `1px solid #000`,
  zIndex: 9999,
  borderRadius: `10px`,
  boxShadow: `0 0 10px #5d5d5d`,
  top: `50%`,
  left: `50%`,
  transform: "translate(-50%, -50%)",
  padding: `30px`,
  overflow: `auto`,
  fontFamily: "sans-serif",
  fontSize: "16px",
};

export const Table: React.CSSProperties = {
  width: "100%",
};

export const TableRow: React.CSSProperties = {
  border: "1px solid #000",
};

export const TableHead: React.CSSProperties = {
  textAlign: "left",
};

export const TableData: React.CSSProperties = {
  textAlign: "center",
};
