import { useEffect, useState } from "react";
import useCheckSite from "../../hooks/useCheckSite";
import { useWindowSize } from "../../hooks/useWindowSize";
import { getPathname } from "../../utils/getPathname";
import { getSiteRegion } from "../../utils/getSiteRegion";
import ConfigButton from "../Buttons/ConfigButton";
import CurrentSiteButton from "../Buttons/CurrentSiteButton";
import DevButton from "../Buttons/DevButton";
import DevtoolButton from "../Buttons/DevtoolButton";
import EditButton from "../Buttons/EditButton";
import LiveButton from "../Buttons/LiveButton";
import LocalButton from "../Buttons/LocalButton";
import PreviewButton from "../Buttons/PreviewButton";
import * as S from "./FloatingNav.styles";

type Props = {
  funnelId: string;
  productSelectorId: string;
};

const FloatingNav = ({ funnelId, productSelectorId }: Props) => {
  const [pathname, setPathname] = useState<string>("");
  const [region, setRegion] = useState<string>(`US`);
  const { isUpsell } = useCheckSite();
  useEffect(() => {
    setPathname(getPathname(window));
    setRegion(getSiteRegion());
  }, []);
  const { isMobile } = useWindowSize();
  if (!isMobile) return null;
  return (
    <div style={S.Container}>
      <EditButton funnelId={funnelId} />
      <ConfigButton productSelectorId={productSelectorId} />
      {pathname.includes("funnel-preview") ? null : (
        <>
          <LocalButton region={region} upsell={isUpsell} pathname={pathname} />
          <DevButton region={region} upsell={isUpsell} pathname={pathname} />
          <LiveButton region={region} upsell={isUpsell} pathname={pathname} />
          <PreviewButton
            region={region}
            upsell={isUpsell}
            pathname={pathname}
          />
          <DevtoolButton />
          <CurrentSiteButton
            region={region}
            upsell={isUpsell}
            pathname={pathname}
          />
        </>
      )}
    </div>
  );
};

export default FloatingNav;
