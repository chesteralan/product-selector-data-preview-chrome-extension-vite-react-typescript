import { useEffect, useState } from "react";
import EditButton from "../Buttons/EditButton";
import CtaButton from "../Buttons/CtaButton";
import * as S from "./FloatingNav.styles";
import { useWindowSize } from "../../hooks/useWindowSize";

type Props = {
  entryId: string;
};

const FloatingNavBuilder = ({ entryId }: Props) => {
  const [cta, setCta] = useState<string[]>([]);
  useEffect(() => {
    const elements = document.getElementsByTagName("a");
    const ctas = Array.from(
      new Set(
        Array.from(elements)
          .map((element) => {
            if (
              /^(https:\/\/offer\.(thepetlabco\.com|petlabco\.co\.uk|thepetlabco\.de|thepetlabco\.ca))/g.test(
                element.href,
              )
            ) {
              return element.href;
            }
          })
          .filter(Boolean),
      ),
    );
    if (ctas.length > 0) {
      console.log(`CTAs Found: ${ctas}`);
      setCta(ctas as string[]);
    }
  }, [setCta]);
  const { isMobile } = useWindowSize();
  if (!isMobile) return null;
  return (
    <div style={S.Container}>
      <EditButton funnelId={entryId} />
      {cta.map((offerCta) => (
        <CtaButton link={offerCta} />
      ))}
    </div>
  );
};

export default FloatingNavBuilder;
