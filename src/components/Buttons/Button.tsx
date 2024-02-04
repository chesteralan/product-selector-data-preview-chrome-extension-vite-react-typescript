type Props = {
  link: string;
  children: any;
  target?: string;
};

const styles: React.CSSProperties = {
  backgroundColor: "white",
  borderWidth: "1px 0px 1px 1px",
  borderTopStyle: "solid",
  borderRightStyle: "initial",
  borderLeftStyle: "solid",
  borderBottomStyle: "solid",
  borderTopColor: "black",
  borderRightColor: "initial",
  borderLeftColor: "black",
  borderBottomColor: "black",
  boxShadow: "#CCC 0px 0px 10px 0px",
  maxWidth: "30px",
  margin: "5px 0px",
  padding: "5px",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  display: "block",
  fontSize: "18px",
  lineHeight: "0",
  cursor: "pointer",
};

const Button = ({ link, children, target = "_blank" }: Props) => {
  return (
    <a style={styles} target={target} href={link}>
      {children}
    </a>
  );
};

export default Button;
