import CtaButton from "../Buttons/CtaButton";
import usePetlabCta from "../../hooks/usePetlabCta";
import PresellListButton from "../Buttons/PresellListButton";

type Props = {};

const styles: React.CSSProperties = {
  position: "fixed",
  width: 30,
  top: `30vh`,
  right: 0,
  display: `block`,
  zIndex: 9999,
};

const FloatingNavPromo = (props: Props) => {
  const cta = usePetlabCta();
  return (
    <div style={styles}>
      {cta.map((offerCta) => (
        <CtaButton link={offerCta} />
      ))}
      <PresellListButton link={`/presell-list`} />
    </div>
  );
};

export default FloatingNavPromo;
