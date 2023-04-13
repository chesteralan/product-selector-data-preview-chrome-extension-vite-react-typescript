import React from "react";
import ReactDOM from "react-dom/client";
import AppGatsby from "./AppGatsby";
import AppBuilder from "./AppBuilder";

declare global {
  interface Window {
      petLabChromeExtGatsby:any;
      petLabChromeExtBuilder:any;
  }
}

if (window.petLabChromeExtGatsby) {
	clearInterval(window.petLabChromeExtGatsby);
}

if (window.petLabChromeExtBuilder) {
	clearInterval(window.petLabChromeExtBuilder);
}

const startScanningGatsby = () => {
  window.petLabChromeExtGatsby = setInterval(() => {
    const gatsbyElement = document.getElementById("___gatsby") as HTMLElement;
    if (gatsbyElement) {
      const metaTags = document.getElementsByTagName("meta") as HTMLCollectionOf<HTMLMetaElement>;
      const funnelId = metaTags.namedItem('funnel-id');
      const productSelectorId = metaTags.namedItem('product-selector-id');
      if( funnelId && productSelectorId ) {
        console.log("PetLab Funnel detected...");

        const targetElement = document.createElement('div');

        ReactDOM.createRoot(targetElement).render(
          <React.StrictMode>
            <AppGatsby 
            funnelId={funnelId?.content} 
            productSelectorId={productSelectorId?.content} 
            />
          </React.StrictMode>
        );

        document.body.appendChild(targetElement);
        clearInterval(window.petLabChromeExtGatsby);
        clearInterval(window.petLabChromeExtBuilder);
      }
    }
  },1000);
  setTimeout(() => {
    clearInterval(window.petLabChromeExtGatsby);
  },10000);
}

window.addEventListener('load', startScanningGatsby);

const startScanningBuilder = () => {
  window.petLabChromeExtBuilder = setInterval(() => {
    const builderComponent = document.getElementsByTagName('builder-component') as HTMLCollectionOf<Element>
    if (builderComponent.length > 0) {
      console.log("Builder Page detected...");

      const [mainItem] = builderComponent;
      const entryId = mainItem.getAttribute('entry') as string;

      const targetElement = document.createElement('div');

        ReactDOM.createRoot(targetElement).render(
          <React.StrictMode>
            <AppBuilder
            entryId={entryId}
            />
          </React.StrictMode>
        );
        
      document.body.appendChild(targetElement);
      clearInterval(window.petLabChromeExtBuilder);
      clearInterval(window.petLabChromeExtGatsby);
    }
  }, 1000);
  setTimeout(() => {
    clearInterval(window.petLabChromeExtBuilder);
  },10000);
}
window.addEventListener('load', startScanningBuilder);

