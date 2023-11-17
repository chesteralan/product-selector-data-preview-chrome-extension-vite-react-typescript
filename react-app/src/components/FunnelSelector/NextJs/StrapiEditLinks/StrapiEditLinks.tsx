import useConfig from '../../../../hooks/useConfig';
import * as S from './StrapiEditLinks.styles'

type Props = {
    data: any;
}

const StrapiEditLinks = ({ data }: Props) => {
    
    const { strapiServerUrl, stagingUrl, localUrl, liveUrl } = useConfig();

    const locale = data.locale;
    const locales = data.locales;
    const pageId = data.props.pageProps?.page?.id;
    const pageVariantId = data.props.pageProps?.pageVariant?.id;
    const promoId = data.props.pageProps?.page?.promo?.id;
    const slug = data.query?.slug || null;
    const variant = data.query?.variant || null;

  return (
    <div style={S.Container}>
      {strapiServerUrl && (<>
        <a href={`${strapiServerUrl}/admin`} target="_blank" style={S.Link}>Admin Panel</a>
        |
        {pageId && (<a href={`${strapiServerUrl}/admin/content-manager/collectionType/api::page.page/${pageId}?plugins[i18n][locale]=${locale}`} target="_blank" style={S.Link}>Edit Page</a>)}
        {pageVariantId && (<a href={`${strapiServerUrl}/admin/content-manager/collectionType/api::page-variant.page-variant/${pageVariantId}?plugins[i18n][locale]=${locale}`} target="_blank" style={S.Link}>Edit Variant</a>)}
        {promoId && (<a href={`${strapiServerUrl}/admin/content-manager/collectionType/api::promo.promo/${promoId}?plugins[i18n][locale]=${locale}`} target="_blank" style={S.Link}>Edit Promo</a>)}
        |
        {slug && locales.map((loc:string) => loc !== locale && (<a href={`/${loc}/${slug}${variant ? `/${variant}` : ``}`} style={S.Link}>{loc}</a>))}
        </>)}
        |
        {stagingUrl && slug && (<>
          <a href={`${stagingUrl}/${slug}${variant ? `/${variant}` : ``}`} style={S.Link}>Staging</a>
        </>)}
        {localUrl && slug && (<>
          <a href={`${localUrl}/${slug}${variant ? `/${variant}` : ``}`} style={S.Link}>Local</a>
        </>)}
        {liveUrl && slug && (<>
          <a href={`${liveUrl}/${slug}${variant ? `/${variant}` : ``}`} style={S.Link}>Live</a>
        </>)}
    </div>
  )
}

export default StrapiEditLinks