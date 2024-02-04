import React from "react";
import ReactDOM from "react-dom/client";
import AppGatsby from "./AppGatsby";
import AppBuilder from "./AppBuilder";
import AppPromo from "./AppPromo";
import AppNextJs from "./AppNextJs";
import AppStrapiCMS from "./AppStrapiCMS";
import { PRESELL_SITES } from "./utils/constants/presells";
import { IS_STRAPI } from "./utils/constants/strapi";
import packageJson from "../package.json";

declare global {
  interface Window {
    petLabChromeExtGatsby: any;
    petLabChromeExtBuilder: any;
    petLabChromeExtPromo: any;
    petLabChromeExtNextJs: any;
    petLabChromeExtStrapi: any;
    strapi: any;
  }
}

const clearIntervals = () => {
  console.log("Clearing intervals...");
  if (window.petLabChromeExtStrapi) {
    clearInterval(window.petLabChromeExtStrapi);
  }
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
  console.log(`Version ${packageJson.version}`);
};

const startScanningGatsby = () => {
  window.petLabChromeExtGatsby = setInterval(() => {
    const gatsbyElement = document.getElementById("___gatsby") as HTMLElement;
    if (gatsbyElement) {
      console.log("Gatsby.js Found!");
      const metaTags = document.getElementsByTagName(
        "meta",
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
          </React.StrictMode>,
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
      "builder-component",
    ) as HTMLCollectionOf<Element>;
    if (builderComponent.length > 0) {
      console.log("Builder Page detected...");

      const [mainItem] = builderComponent;
      const entryId = mainItem.getAttribute("entry") as string;

      const targetElement = document.createElement("div");

      ReactDOM.createRoot(targetElement).render(
        <React.StrictMode>
          <AppBuilder entryId={entryId} />
        </React.StrictMode>,
      );

      document.body.appendChild(targetElement);
      clearIntervals();
    }
  }, 1000);
};

const startScanningPromo = () => {
  window.petLabChromeExtPromo = setInterval(() => {
    if (PRESELL_SITES.some((v) => window.origin.includes(v))) {
      console.log("Presell Site detected...");

      const targetElement = document.createElement("div");

      ReactDOM.createRoot(targetElement).render(
        <React.StrictMode>
          <AppPromo />
        </React.StrictMode>,
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
      console.log("Next.js Found!");
      const nextJsData = document.getElementById(
        "__NEXT_DATA__",
      ) as HTMLScriptElement;

      console.log(
        "PetLab Next.js Funnel detected...",
        JSON.parse(nextJsData.outerText),
      );

      const targetElement = document.createElement("div");

      ReactDOM.createRoot(targetElement).render(
        <React.StrictMode>
          <AppNextJs data={JSON.parse(nextJsData.outerText)} />
        </React.StrictMode>,
      );

      document.body.appendChild(targetElement);
      clearIntervals();
    }
  }, 1000);
};

const startScanningStrapiCMS = () => {
  window.petLabChromeExtStrapi = setInterval(() => {
    if (IS_STRAPI) {
      console.log("Strapi CMS Site detected...");

      const targetElement = document.createElement("div");

      ReactDOM.createRoot(targetElement).render(
        <React.StrictMode>
          <AppStrapiCMS />
        </React.StrictMode>,
      );

      document.body.appendChild(targetElement);
      clearIntervals();
    }
  }, 1000);
};

startScanningStrapiCMS();
startScanningGatsby();
startScanningBuilder();
startScanningPromo();
startScanningNextJs();
setTimeout(() => {
  clearIntervals();
}, 10000);
