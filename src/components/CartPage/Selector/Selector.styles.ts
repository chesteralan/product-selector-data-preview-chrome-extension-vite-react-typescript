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
