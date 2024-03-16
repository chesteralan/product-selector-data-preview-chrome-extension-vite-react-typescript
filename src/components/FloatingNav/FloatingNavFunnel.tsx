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

const FloatingNavFunnel = (props: Props) => {
  const cta = usePetlabCta();
  const { isFunnel } = useCheckSite();
  return isFunnel ? (
    <div style={styles}>
      <PresellListButton link={`/all-pdps`} />
      <PresellListButton link={`/email/_list`} />
    </div>
  ) : null;
};

export default FloatingNavFunnel;
