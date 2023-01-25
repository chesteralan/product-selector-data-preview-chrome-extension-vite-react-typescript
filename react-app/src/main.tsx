import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const gatsbyElement = document.getElementById("___gatsby") as HTMLElement;
if (gatsbyElement) {
  const metaTags = document.getElementsByTagName("meta") as HTMLCollectionOf<HTMLMetaElement>;
  const funnelId = metaTags.namedItem('funnel-id');
  const productSelectorId = metaTags.namedItem('product-selector-id');
  if( funnelId && productSelectorId ) {
    console.log("Funnel ID found... Petlab tool rendered...");

    const targetElement = document.createElement('div');

    ReactDOM.createRoot(targetElement).render(
      <React.StrictMode>
        <App 
        funnelId={funnelId?.content} 
        productSelectorId={productSelectorId?.content} 
        />
      </React.StrictMode>
    );

    document.body.appendChild(targetElement);

  }
}
