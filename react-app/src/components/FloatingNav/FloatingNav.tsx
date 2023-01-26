import { useEffect, useState } from "react";
import ConfigButton from "../Buttons/ConfigButton";
import DevButton from "../Buttons/DevButton";
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
  top: 100,
  right: 0,
  display: `block`,
  zIndex: 9999,
};

const FloatingNav = ({ funnelId, productSelectorId }: Props) => {
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div style={styles}>
      <EditButton funnelId={funnelId} />
      <ConfigButton productSelectorId={productSelectorId} />
      {pathname.includes("funnel-preview") ? null : (
        <>
          <LocalButton pathname={pathname} />
          <DevButton pathname={pathname} />
          <LiveButton pathname={pathname} />
          <PreviewButton pathname={pathname} />
        </>
      )}
    </div>
  );
};

export default FloatingNav;
