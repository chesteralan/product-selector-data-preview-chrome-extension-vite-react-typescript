import useLocalStorage from '../../../../hooks/useLocalStorage';
import * as S from './StrapiEditLinks.styles'

type Props = {
    data: any;
}

const StrapiEditLinks = ({ data }: Props) => {
    const [strapiServerUrl] = useLocalStorage("strapi-server-url", "");

    if(!strapiServerUrl || strapiServerUrl === "") return null;

    const locale = data.locale;
    const locales = data.locales;
    const pageId = data.props.pageProps.page.id;
    const slug = data.query.slug;

  return (
    <div style={S.Container}>
        <a href={`${strapiServerUrl}/admin`} target="_blank" style={S.Link}>Admin Panel</a>
        <a href={`${strapiServerUrl}/admin/content-manager/collectionType/api::page.page/${pageId}?plugins[i18n][locale]=${locale}`} target="_blank" style={S.Link}>Edit Page</a>
        {locales.map((loc:string) => loc !== locale && (<a href={`/${loc}/${slug}`} style={S.Link}>{loc}</a>))}
    </div>
  )
}

export default StrapiEditLinks