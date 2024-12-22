export const DataWrapper: React.CSSProperties = {
  width: `100%`,
  height: `100%`,
  position: `fixed`,
  top: 0,
  left: 0,
  zIndex: 9998,
};

export const DataContainer: React.CSSProperties = {
  position: `fixed`,
  width: `500px`,
  height: `500px`,
  background: `#fff`,
  border: `1px solid #000`,
  zIndex: 9999,
  borderRadius: `10px`,
  boxShadow: `0 0 10px #5d5d5d`,
  top: `calc(50% - 280px)`,
  left: `calc(50% - 280px)`,
  padding: `30px`,
  overflow: `auto`,
};

export const PriceStrike: React.CSSProperties = {
  textDecoration: `line-through`,
};

export const UList: React.CSSProperties = {
  paddingLeft: 20,
  listStyle: "disc",
};

export const UListItem: React.CSSProperties = {
  marginBottom: 20,
};
