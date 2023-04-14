import { useEffect, useState } from "react";
import CtaButton from "../Buttons/CtaButton";

type Props = {
  
};

const styles: React.CSSProperties = {
  position: "fixed",
  width: 30,
  top: `30vh`,
  right: 0,
  display: `block`,
  zIndex: 9999,
};

const FloatingNavPromo = (props: Props) => {
  const [cta, setCta] = useState<string[]>([]);
  useEffect(() => {
    const elements = document.getElementsByTagName("a");
    const ctas = Array.from(new Set(Array.from(elements).map((element) => {
        if ((/^(https:\/\/offer\.thepetlabco\.com)/g).test(element.href)) {
            return element.href
        }
    }).filter(Boolean)));
    if(ctas.length > 0) {
        console.log(`CTAs Found: ${ctas}`);
        setCta(ctas as string[]);
    }
  }, [setCta]);
  return (
    <div style={styles}>
      {cta.map((offerCta) => <CtaButton link={offerCta} />)}
    </div>
  );
};

export default FloatingNavPromo;
