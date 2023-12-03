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

const FloatingNavNextJs = ({ funnelId, productSelectorId }: Props) => {
  const [pathname, setPathname] = useState<string>("");
  const [region, setRegion] = useState<string>(`US`);
  const [upsell, setUpsell] = useState<boolean>(false);

  useEffect(() => {
    setPathname(getPathname(window));
    setRegion(getSiteRegion());
    setUpsell(isUpsell(window));
  }, []);

  return (
    <div style={styles}>
      <EditButton funnelId={funnelId} />
      <ConfigButton productSelectorId={productSelectorId} />
      {pathname.includes("funnel-preview") ? null : (
        <>
          <LocalButton region={region} upsell={upsell} pathname={pathname} />
          <DevButton region={region} upsell={upsell} pathname={pathname} />
          <LiveButton region={region} upsell={upsell} pathname={pathname} />
          <PreviewButton region={region} upsell={upsell} pathname={pathname} />
          <DevtoolButton />
          <CurrentSiteButton region={region} upsell={upsell} pathname={pathname} />
        </>
      )}
    </div>
  );
};

export default FloatingNavNextJs;
