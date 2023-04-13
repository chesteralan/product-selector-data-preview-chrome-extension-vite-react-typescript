import { useEffect, useState } from "react";
import EditButton from "../Buttons/EditButton";
import Button from "../Buttons/Button";
import CtaButton from "../Buttons/CtaButton";

type Props = {
  entryId: string;
};

const styles: React.CSSProperties = {
  position: "fixed",
  width: 30,
  top: `30vh`,
  right: 0,
  display: `block`,
  zIndex: 9999,
};

const FloatingNavBuilder = ({ entryId }: Props) => {
  const [cta, setCta] = useState<string[]>([]);
  useEffect(() => {
    const elements = document.getElementsByTagName("a");
    const ctas = Array.from(new Set(Array.from(elements).map((element) => {
        if ((/^(https:\/\/offer\.thepetlabco\.com)/g).test(element.href)) {
            return element.href
        }
    }).filter(Boolean)));
    if(ctas.length > 0) {
        setCta(ctas as string[]);
    }
  }, [setCta]);
  return (
    <div style={styles}>
      <EditButton funnelId={entryId} />
      {cta.map((offerCta) => <CtaButton link={offerCta} />)}
    </div>
  );
};

export default FloatingNavBuilder;
