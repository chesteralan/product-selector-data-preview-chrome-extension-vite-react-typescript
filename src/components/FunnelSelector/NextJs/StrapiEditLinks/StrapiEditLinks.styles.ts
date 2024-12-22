export const Container: React.CSSProperties = {
  position: `fixed`,
  background: `#2196F3`,
  border: `1px solid #000`,
  borderTop: "none",
  zIndex: 9999,
  borderRadius: `0 0 5px 5px`,
  boxShadow: `0 0 5px #5d5d5d`,
  top: 0,
  left: 10, // transform: "translateX(-50%)",
  padding: `5px`,
  overflow: `auto`,
  fontSize: 10,
  color: "#FFF",
  fontFamily: "sans-serif",
  width: "max-content",
};

export const Link: React.CSSProperties = {
  color: "#FFF",
  padding: "0 5px",
  textDecoration: "none",
  textTransform: "uppercase",
  cursor: "pointer",
};

export const Label: React.CSSProperties = {
  color: "#000",
  padding: "05px",
};

export const LinksContainer: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
};

export const ShowButton: React.CSSProperties = {
  color: "white",
  padding: "0px 5px",
  fontSize: "20px",
  lineHeight: "0px",
  marginTop: "-3px",
};

export const HideButton: React.CSSProperties = {
  color: "red",
  padding: "0px 5px",
  fontSize: "14px",
  lineHeight: "0px",
  marginTop: "-2px",
};
