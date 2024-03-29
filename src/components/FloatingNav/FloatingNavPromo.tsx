import CtaButton from "../Buttons/CtaButton";
import usePetlabCta from "../../hooks/usePetlabCta";
import PresellListButton from "../Buttons/PresellListButton";
import { isPresell } from "../../utils/isPresell";
import useCheckSite from "../../hooks/useCheckSite";

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
  const { isPresell } = useCheckSite();
  return isPresell ? (
    <div style={styles}>
      {cta.map((offerCta) => (
        <CtaButton link={offerCta} />
      ))}
      <PresellListButton link={`/presell-list`} />
    </div>
  ) : null;
};

export default FloatingNavPromo;
