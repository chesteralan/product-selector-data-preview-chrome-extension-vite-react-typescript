import { useEffect, useState } from "react";

const usePetlabCta = () => {
  const [cta, setCta] = useState<string[]>([]);
  useEffect(() => {
    const elements = document.getElementsByTagName("a");
    const ctas = Array.from(
      new Set(
        Array.from(elements)
          .map((element) => {
            if (
              /(\/\/(offer|offers)\.(thepetlabco|petlabco)\.(com|ca|de|co\.uk))/g.test(
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
  return cta;
};

export default usePetlabCta;
