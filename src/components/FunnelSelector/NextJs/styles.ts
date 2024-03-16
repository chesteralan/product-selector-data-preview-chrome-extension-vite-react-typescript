export const DataWrapper: React.CSSProperties = {
  width: `100%`,
  height: `100%`,
  position: `fixed`,
  top: 0,
  left: 0,
  zIndex: 9998,
  backgroundColor: "#CCC",
  opacity: 0.5,
};

export const DataContainer: React.CSSProperties = {
  position: `fixed`,
  width: `700px`,
  height: `500px`,
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

export const ALink: React.CSSProperties = {
  textDecoration: "underline",
};

export const LocaleLink: React.CSSProperties = {
  textDecoration: "underline",
  marginRight: 10,
  textTransform: "uppercase",
};

export const SelectorContainer: React.CSSProperties = {
  marginBottom: 20,
  display: "flex",
  justifyContent: "space-between",
  gap: "15px",
  fontSize: 11,
};

export const SelectorItem: React.CSSProperties = {
  padding: 10,
  border: "1px solid #000",
  cursor: "pointer",
  borderRadius: "10px",
  width: "calc(1/3 * 100%)",
  textAlign: "center",
};

export const SelectorItemSelected: React.CSSProperties = {
  ...SelectorItem,
  backgroundColor: "#CCC",
  fontWeight: "bold",
};

export const ProductsContainer: React.CSSProperties = {
  marginTop: 10,
  padding: 15,
  paddingTop: 35,
  borderRadius: "10px",
  backgroundColor: "#f7f7f7",
  position: "relative",
};

export const BumpOffersContainer: React.CSSProperties = {
  marginTop: 10,
  padding: 15,
  borderRadius: "10px",
  backgroundColor: "#f7f7f7",
};

export const EditProduct: React.CSSProperties = {
  position: "absolute",
  right: 10,
  top: 10,
};
