import { useEffect, useState } from 'react';
import * as S from './StrapiEditLinks.styles'
import { getSiteRegion } from '../../../../utils/getSiteRegion';

type Props = {
    data: any;
}

const StrapiEditLinks = ({ data }: Props) => {
    
    const [strapiServerUrl, setStrapiServerUrl] = useState<string | null>(null);
    const [stagingUrl, setStagingUrl] = useState<string | null>(null);
    const [localUrl, setLocalUrl] = useState<string | null>(null);
    const [liveUrl, setLiveUrl] = useState<string | null>(null);

    useEffect(() => {

      chrome.storage.local.get(["nextjsLocalUrl"]).then((items) => {
        setLocalUrl(items.nextjsLocalUrl);
      });

      const region = getSiteRegion(window,true) || "US";
      console.log(region)
      switch(region) {
        case "US":
          chrome.storage.local.get(["usStrapiServerUrl","usNextjsStagingUrl","usNextjsLiveUrl"]).then((items:any) => {
            setStrapiServerUrl(items.usStrapiServerUrl);
            setStagingUrl(items.usNextjsStagingUrl);
            setLiveUrl(items.usNextjsLiveUrl);
          });
          break;
        case "CA":
          chrome.storage.local.get(["caStrapiServerUrl","caNextjsStagingUrl","caNextjsLiveUrl"]).then((items:any) => {
            setStrapiServerUrl(items.caStrapiServerUrl);
            setStagingUrl(items.caNextjsStagingUrl);
            setLiveUrl(items.caNextjsLiveUrl);
          });
          break;
        case "UK":
          chrome.storage.local.get(["ukStrapiServerUrl","ukNextjsStagingUrl","ukNextjsLiveUrl"]).then((items:any) => {
            setStrapiServerUrl(items.ukStrapiServerUrl);
            setStagingUrl(items.ukNextjsStagingUrl);
            setLiveUrl(items.ukNextjsLiveUrl);
          });
          break;
      }
    },[])

    const locale = data.locale;
    const locales = data.locales;
    const pageId = data.props.pageProps?.page?.id;
    const slug = data.query?.slug || null;
    const variant = data.query?.variant || null;

  return (
    <div style={S.Container}>
      {strapiServerUrl && (<>
        <a href={`${strapiServerUrl}/admin`} target="_blank" style={S.Link}>Admin Panel</a>
        {pageId && (<a href={`${strapiServerUrl}/admin/content-manager/collectionType/api::page.page/${pageId}?plugins[i18n][locale]=${locale}`} target="_blank" style={S.Link}>Edit Page</a>)}
        {slug && locales.map((loc:string) => loc !== locale && (<a href={`/${loc}/${slug}${variant ? `/${variant}` : ``}`} style={S.Link}>{loc}</a>))}
        </>)}
        {stagingUrl && slug && (<>
          <a href={`${stagingUrl}/${slug}${variant ? `/${variant}` : ``}`} target="_blank" style={S.Link}>Staging</a>
        </>)}
        {localUrl && slug && (<>
          <a href={`${localUrl}/${slug}${variant ? `/${variant}` : ``}`} target="_blank" style={S.Link}>Local</a>
        </>)}
        {liveUrl && slug && (<>
          <a href={`${liveUrl}/${slug}${variant ? `/${variant}` : ``}`} target="_blank" style={S.Link}>Live</a>
        </>)}
    </div>
  )
}

export default StrapiEditLinks