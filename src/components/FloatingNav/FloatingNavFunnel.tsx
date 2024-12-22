import useCheckSite from "../../hooks/useCheckSite";
import PresellListButton from "../Buttons/PresellListButton";
import * as S from "./FloatingNav.styles";
import { useWindowSize } from "../../hooks/useWindowSize";

const FloatingNavFunnel = () => {
  const { isMobile } = useWindowSize();
  const { isProd } = useCheckSite();
  return !isProd && !isMobile ? (
    <div style={S.Container}>
      <PresellListButton link={`/all-pdps`} />
    </div>
  ) : null;
};

export default FloatingNavFunnel;
