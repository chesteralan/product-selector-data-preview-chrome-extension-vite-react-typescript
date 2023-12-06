import useConfig from "../../../../hooks/useConfig";
import * as S from "./StrapiEditLinks.styles";
import { getSiteRegion } from "../../../../utils/getSiteRegion";
import {
  REGION_CA,
  REGION_UK,
  REGION_US,
} from "../../../../utils/constants/region";

type Props = {
  data: any;
};

const StrapiEditLinks = ({ data }: Props) => {
  const {
    strapiServerUrl,
    stagingUrl,
    localUrl,
    liveUrl,
    usStagingUrl,
    caStagingUrl,
    ukStagingUrl,
  } = useConfig();

  const locale = data.locale;
  const locales = data.locales;
  const pageId = data.props.pageProps?.page?.id;
  const pageVariantId = data.props.pageProps?.pageVariant?.id;
  const promoId = data.props.pageProps?.page?.promo?.id;
  const slug = data.query?.slug || null;
  const variant = data.query?.variant || null;

  const region = getSiteRegion();
  const pathname = window.location.pathname;

  return (
    <div style={S.Container}>
      {region !== REGION_US && (
        <a href={usStagingUrl as string} style={S.Link}>
          US
        </a>
      )}
      {region !== REGION_CA && (
        <a href={caStagingUrl as string} style={S.Link}>
          CA
        </a>
      )}
      {region !== REGION_UK && (
        <a href={ukStagingUrl as string} style={S.Link}>
          UK
        </a>
      )}
      {strapiServerUrl && (
        <>
          |
          <a href={`${strapiServerUrl}/admin`} style={S.Link}>
            Admin Panel
          </a>
          {pageId && (
            <>
              |
              <a
                href={`${strapiServerUrl}/admin/content-manager/collectionType/api::page.page/${pageId}?plugins[i18n][locale]=${locale}`}
                style={S.Link}
              >
                Edit Page
              </a>
              {pageVariantId && (
                <a
                  href={`${strapiServerUrl}/admin/content-manager/collectionType/api::page-variant.page-variant/${pageVariantId}?plugins[i18n][locale]=${locale}`}
                  style={S.Link}
                >
                  Edit Variant
                </a>
              )}
              {promoId && (
                <a
                  href={`${strapiServerUrl}/admin/content-manager/collectionType/api::promo.promo/${promoId}?plugins[i18n][locale]=${locale}`}
                  style={S.Link}
                >
                  Edit Promo
                </a>
              )}
            </>
          )}
        </>
      )}
      {pathname !== "/" && (
        <>
          |
          {slug &&
            locales.map(
              (loc: string) =>
                loc !== locale && (
                  <a
                    href={`/${loc}/${slug}${variant ? `/${variant}` : ``}`}
                    style={S.Link}
                  >
                    {loc}
                  </a>
                ),
            )}
          |
          {stagingUrl && slug && (
            <>
              <a
                href={`${stagingUrl}/${slug}${variant ? `/${variant}` : ``}`}
                style={S.Link}
              >
                Staging
              </a>
            </>
          )}
          {localUrl && slug && (
            <>
              <a
                href={`${localUrl}/${slug}${variant ? `/${variant}` : ``}`}
                style={S.Link}
              >
                Local
              </a>
            </>
          )}
          {liveUrl && slug && (
            <>
              <a
                href={`${liveUrl}/${slug}${variant ? `/${variant}` : ``}`}
                style={S.Link}
              >
                Live
              </a>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default StrapiEditLinks;
