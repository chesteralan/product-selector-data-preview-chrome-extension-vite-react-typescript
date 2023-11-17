import { useEffect, useState } from "react";
import { getSiteRegion } from '../utils/getSiteRegion';
import { REGION_CA, REGION_UK, REGION_US } from "../utils/constants/region";

const useConfig = () => {
  
    const [strapiServerUrl, setStrapiServerUrl] = useState<string | null>(null);
    const [stagingUrl, setStagingUrl] = useState<string | null>(null);
    const [liveUrl, setLiveUrl] = useState<string | null>(null);
    const [localUrl, setLocalUrl] = useState<string | null>(null);
    const [devToolUrl, setDevToolUrl] = useState<string | null>(null);

    useEffect(() => {

      chrome.storage.local.get(["nextjsLocalUrl", "developerToolUrl"]).then((items) => {
        setLocalUrl(items.nextjsLocalUrl);
        setDevToolUrl(items.developerToolUrl);
      });

      const region = getSiteRegion(window,true) || "US";

      switch(region) {
        case REGION_US:
          chrome.storage.local.get(["usStrapiServerUrl","usNextjsStagingUrl","usNextjsLiveUrl"]).then((items:any) => {
            setStrapiServerUrl(items.usStrapiServerUrl);
            setStagingUrl(items.usNextjsStagingUrl);
            setLiveUrl(items.usNextjsLiveUrl);
          });
          break;
        case REGION_CA:
          chrome.storage.local.get(["caStrapiServerUrl","caNextjsStagingUrl","caNextjsLiveUrl"]).then((items:any) => {
            setStrapiServerUrl(items.caStrapiServerUrl);
            setStagingUrl(items.caNextjsStagingUrl);
            setLiveUrl(items.caNextjsLiveUrl);
          });
          break;
        case REGION_UK:
          chrome.storage.local.get(["ukStrapiServerUrl","ukNextjsStagingUrl","ukNextjsLiveUrl"]).then((items:any) => {
            setStrapiServerUrl(items.ukStrapiServerUrl);
            setStagingUrl(items.ukNextjsStagingUrl);
            setLiveUrl(items.ukNextjsLiveUrl);
          });
          break;
      }
    },[])

    return {
        strapiServerUrl,
        stagingUrl,
        localUrl,
        liveUrl,
        devToolUrl
    }
}

export default useConfig