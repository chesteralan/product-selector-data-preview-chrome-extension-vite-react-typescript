import useCheckSite from "../../hooks/useCheckSite";
import usePetlabCta from "../../hooks/usePetlabCta";
import { useWindowSize } from "../../hooks/useWindowSize";
import CtaButton from "../Buttons/CtaButton";
import PresellListButton from "../Buttons/PresellListButton";
import * as S from "./FloatingNav.styles";

const FloatingNavPromo = () => {
  const cta = usePetlabCta();
  const { isPresell } = useCheckSite();
  const { isMobile } = useWindowSize();
  return !isMobile && isPresell ? (
    <div style={S.Container}>
      {cta.map((offerCta) => (
        <CtaButton link={offerCta} />
      ))}
      <PresellListButton link={`/presell-list`} />
    </div>
  ) : null;
};

export default FloatingNavPromo;
