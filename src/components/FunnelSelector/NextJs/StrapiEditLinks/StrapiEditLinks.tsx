import { useRef, useState } from "react";
import useCheckSite from "../../../../hooks/useCheckSite";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import * as S from "./StrapiEditLinks.styles";
import { StrapiShortcutLinks } from "./StrapiShortcutLinks";

export type Props = {
  toggleCollectionsMatrix: any;
  toggleCartMatrix: any;
};

const StrapiEditLinks = ({
  toggleCollectionsMatrix,
  toggleCartMatrix,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const { isEcom } = useCheckSite();

  const { isMobile } = useWindowSize();

  return !isMobile ? (
    <div ref={ref} style={S.Container}>
      <div style={S.LinksContainer}>
        <span style={S.Label}>{isEcom ? "ECOM" : "FUNNEL"}</span>
        {show && (
          <StrapiShortcutLinks
            toggleCollectionsMatrix={toggleCollectionsMatrix}
            toggleCartMatrix={toggleCartMatrix}
          />
        )}
        <button
          style={show ? S.HideButton : S.ShowButton}
          onClick={() => setShow(!show)}
          dangerouslySetInnerHTML={{ __html: show ? "&#10005;" : "&#9776;" }}
        />
      </div>
    </div>
  ) : null;
};

export default StrapiEditLinks;
