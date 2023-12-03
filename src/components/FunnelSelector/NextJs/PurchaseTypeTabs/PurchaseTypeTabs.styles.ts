export const Container: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    position: "sticky",
    top: -20,
    zIndex: 1,
  }

export const Item: React.CSSProperties = {
    padding: 10,
    minWidth: 150,
    border: "1px solid #e5e7eb",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#FFF",
  }

  export const ItemSelected: React.CSSProperties = {
    backgroundColor: "#e5e7eb",
    fontWeight: "bold"
  }