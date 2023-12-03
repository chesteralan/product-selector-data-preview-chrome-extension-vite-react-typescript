import useConfig from '../../hooks/useConfig'
import { IS_STRAPI_BLUE, IS_STRAPI_CA, IS_STRAPI_GREEN, IS_STRAPI_ORANGE, IS_STRAPI_PROD, IS_STRAPI_UK, IS_STRAPI_US } from '../../utils/constants/strapi';
import * as S from './StrapiCMSNav.styles'

const StrapiCMSNav = () => {
    
    const { 
        strapiDevGreenUrl,
        strapiDevBlueUrl,
        strapiProdOrangeUrl,
        strapiProdGreenUrl,
        strapiProdBlueUrl,
        liveUrl,
        stagingUrl
    } = useConfig();

    const replaceHref = (url: string) => {
        const href = window.location.href.replace(window.location.origin, url);
        return href;
    }
    
    const replaceRegion = (region: string) => {
        const href = window.location.href;
    
        if(IS_STRAPI_US) return href.replace('-us-', region);
        if(IS_STRAPI_CA) return href.replace('-ca-', region);
        if(IS_STRAPI_UK) return href.replace('-uk-', region);
        
        return href;
    }

    const redirect = (href:string) => {
        window.location.href = href;
    }

  return (
    <div style={S.Container}>
        {!IS_STRAPI_ORANGE && strapiProdOrangeUrl && <><a style={S.Link} href="#" onClick={() => redirect(replaceHref(strapiProdOrangeUrl))}>Prod-Orange</a> &middot;{" "}</>}
        {!IS_STRAPI_GREEN && strapiProdGreenUrl && <><a style={S.Link} href="#" onClick={() => redirect(replaceHref(strapiProdGreenUrl))}>Prod-Green</a> &middot;{" "}</>}
        {!IS_STRAPI_BLUE && strapiProdBlueUrl && <><a style={S.Link} href="#" onClick={() => redirect(replaceHref(strapiProdBlueUrl))}>Prod-Blue</a> &middot;{" "}</>}
        {IS_STRAPI_PROD && (<>
        {!IS_STRAPI_US && strapiProdOrangeUrl && <><a style={S.Link} href="#" onClick={() => redirect(replaceRegion('-us-'))}>US</a> &middot;{" "}</>}
        {!IS_STRAPI_CA && strapiProdOrangeUrl && <><a style={S.Link} href="#" onClick={() => redirect(replaceRegion('-ca-'))}>CA</a> &middot;{" "}</>}
        {!IS_STRAPI_UK && strapiProdOrangeUrl && <><a style={S.Link} href="#" onClick={() => redirect(replaceRegion('-uk-'))}>UK</a> &middot;{" "}</>}
        </>)}
        {strapiDevGreenUrl && <><a style={S.Link} href="#" onClick={() => redirect(replaceHref(strapiDevGreenUrl))}>Dev-Green</a> &middot;{" "}</>}
        {strapiDevBlueUrl && <><a style={S.Link} href="#" onClick={() => redirect(replaceHref(strapiDevBlueUrl))}>Dev-Blue</a> &middot;{" "}</>}
        {liveUrl && <><a style={S.Link} href={liveUrl}>Live URL</a> &middot;{" "}</>}
        {stagingUrl && <><a style={S.Link} href={stagingUrl}>Staging URL</a></>}
    </div>
  )
}

export default StrapiCMSNav