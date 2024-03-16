import { useEffect, useState } from "react";
import { getPathname } from "../../utils/getPathname";
import { getSiteRegion } from "../../utils/getSiteRegion";
import { isUpsell } from "../../utils/isUpsell";
import ConfigButton from "../Buttons/ConfigButton";
import CurrentSiteButton from "../Buttons/CurrentSiteButton";
import DevButton from "../Buttons/DevButton";
import DevtoolButton from "../Buttons/DevtoolButton";
import EditButton from "../Buttons/EditButton";
import LiveButton from "../Buttons/LiveButton";
import LocalButton from "../Buttons/LocalButton";
import PreviewButton from "../Buttons/PreviewButton";
import useCheckSite from "../../hooks/useCheckSite";

type Props = {
  funnelId: string;
  productSelectorId: string;
};

const styles: React.CSSProperties = {
  position: "fixed",
  width: 30,
  top: `calc(50vh - 146px)`,
  right: 0,
  display: `block`,
  zIndex: 9999,
};

const FloatingNav = ({ funnelId, productSelectorId }: Props) => {
  const [pathname, setPathname] = useState<string>("");
  const [region, setRegion] = useState<string>(`US`);
  const { isUpsell } = useCheckSite();
  useEffect(() => {
    setPathname(getPathname(window));
    setRegion(getSiteRegion());
  }, []);

  return (
    <div style={styles}>
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
