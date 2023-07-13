import React from "react";
import ReactDOM from "react-dom/client";
import AppGatsby from "./AppGatsby";
import AppBuilder from "./AppBuilder";
import AppPromo from "./AppPromo";
import AppNextJs from "./AppNextJs";

declare global {
  interface Window {
    petLabChromeExtGatsby: any;
    petLabChromeExtBuilder: any;
    petLabChromeExtPromo: any;
    petLabChromeExtNextJs: any;
  }
}

const clearIntervals = () => {
  console.log("Clearing intervals...");
  if (window.petLabChromeExtGatsby) {
    clearInterval(window.petLabChromeExtGatsby);
  }
  if (window.petLabChromeExtBuilder) {
    clearInterval(window.petLabChromeExtBuilder);
  }
  if (window.petLabChromeExtPromo) {
    clearInterval(window.petLabChromeExtPromo);
  }
  if (window.petLabChromeExtNextJs) {
    clearInterval(window.petLabChromeExtNextJs);
  }
};

const startScanningGatsby = () => {
  window.petLabChromeExtGatsby = setInterval(() => {
    const gatsbyElement = document.getElementById("___gatsby") as HTMLElement;
    if (gatsbyElement) {
      const metaTags = document.getElementsByTagName(
        "meta"
      ) as HTMLCollectionOf<HTMLMetaElement>;
      const funnelId = metaTags.namedItem("funnel-id");
      const productSelectorId = metaTags.namedItem("product-selector-id");
      if (funnelId && productSelectorId) {
        console.log("PetLab Funnel detected...");

        const targetElement = document.createElement("div");

        ReactDOM.createRoot(targetElement).render(
          <React.StrictMode>
            <AppGatsby
              funnelId={funnelId?.content}
              productSelectorId={productSelectorId?.content}
            />
          </React.StrictMode>
        );

        document.body.appendChild(targetElement);
        clearIntervals();
      }
    }
  }, 1000);
};

const startScanningBuilder = () => {
  window.petLabChromeExtBuilder = setInterval(() => {
    const builderComponent = document.getElementsByTagName(
      "builder-component"
    ) as HTMLCollectionOf<Element>;
    if (builderComponent.length > 0) {
      console.log("Builder Page detected...");

      const [mainItem] = builderComponent;
      const entryId = mainItem.getAttribute("entry") as string;

      const targetElement = document.createElement("div");

      ReactDOM.createRoot(targetElement).render(
        <React.StrictMode>
          <AppBuilder entryId={entryId} />
        </React.StrictMode>
      );

      document.body.appendChild(targetElement);
      clearIntervals();
    }
  }, 1000);
};

const startScanningPromo = () => {
  window.petLabChromeExtPromo = setInterval(() => {
    if (["https://promo.thepetlabco.com","https://campaigns.thepetlabco.com"].includes(window.origin)) {
      console.log("Promo Presell detected...");

      const targetElement = document.createElement("div");

      ReactDOM.createRoot(targetElement).render(
        <React.StrictMode>
          <AppPromo />
        </React.StrictMode>
      );

      document.body.appendChild(targetElement);
      clearIntervals();
    }
  }, 1000);
};

const startScanningNextJs = () => {
  window.petLabChromeExtNextJs = setInterval(() => {
    const nextJsElement = document.getElementById("__next") as HTMLElement;
    if (nextJsElement) {
      const nextJsData = document.getElementById("__NEXT_DATA__") as HTMLScriptElement;
      const metaTags = document.getElementsByTagName(
        "meta"
      ) as HTMLCollectionOf<HTMLMetaElement>;
      const funnelId = metaTags.namedItem("funnel-id");
      const productSelectorId = metaTags.namedItem("product-selector-id");
      if (funnelId && productSelectorId) {
        console.log("PetLab Funnel detected...");

        const targetElement = document.createElement("div");

        ReactDOM.createRoot(targetElement).render(
          <React.StrictMode>
            <AppNextJs
              funnelId={funnelId?.content}
              productSelectorId={productSelectorId?.content}
              data={JSON.parse(nextJsData.outerText)}
            />
          </React.StrictMode>
        );

        document.body.appendChild(targetElement);
        clearIntervals();
      }
    }
  }, 1000);
};

// startScanningGatsby();
// startScanningBuilder();
// startScanningPromo();
startScanningNextJs();
setTimeout(() => {
  clearIntervals();
}, 10000);

