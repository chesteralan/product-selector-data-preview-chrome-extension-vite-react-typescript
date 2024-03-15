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
    strapiLocalUrl,
  } = useConfig();

  const page = data.props.pageProps?.initialPageStore?.page;
  const pageVariant =
    data.props.pageProps?.pageVariant || data.props.pageProps?.emailCampaign;
  const isEmailCampaign = data.props.pageProps.hasOwnProperty("emailCampaign");

  const locale = data.locale;
  const locales = data.locales;
  const pageId = page?.id;
  const pageVariantId = pageVariant?.id;
  const promoId = page?.promo?.id;
  const slug = data.query?.slug || null;
  const variant = data.query?.variant || data.query?.campaignId || null;
  const isEcom = page?.isEcom || false;

  const region = getSiteRegion();
  const pathname = window.location.pathname;
  const currentPath = `${isEmailCampaign ? "/email" : ""}${
    isEcom ? "/products/" : "/"
  }${slug}${variant ? `/${variant}` : ``}`;

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
                target="_blank"
              >
                Edit Page
              </a>
              {pageVariantId && (
                <a
                  href={`${strapiServerUrl}/admin/content-manager/collectionType/api::${
                    isEmailCampaign
                      ? "email-campaign.email-campaign"
                      : "page-variant.page-variant"
                  }/${pageVariantId}?plugins[i18n][locale]=${locale}`}
                  style={S.Link}
                  target="_blank"
                >
                  Edit {isEmailCampaign ? "Email" : "Variant"}
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
          {pageId && strapiLocalUrl && (
            <>
              |
              <a
                href={`${strapiLocalUrl}/admin/content-manager/collectionType/api::page.page/${pageId}?plugins[i18n][locale]=${locale}`}
                style={S.Link}
                target="_blank"
              >
                Edit Page (L)
              </a>
              {pageVariantId && (
                <a
                  href={`${strapiLocalUrl}/admin/content-manager/collectionType/api::${
                    isEmailCampaign
                      ? "email-campaign.email-campaign"
                      : "page-variant.page-variant"
                  }/${pageVariantId}?plugins[i18n][locale]=${locale}`}
                  style={S.Link}
                  target="_blank"
                >
                  Edit {isEmailCampaign ? "Email" : "Variant"} (L)
                </a>
              )}
              {promoId && (
                <a
                  href={`${strapiLocalUrl}/admin/content-manager/collectionType/api::promo.promo/${promoId}?plugins[i18n][locale]=${locale}`}
                  style={S.Link}
                  target="_blank"
                >
                  Edit Promo (L)
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
                  <a href={`/${loc}${currentPath}`} style={S.Link}>
                    {loc}
                  </a>
                ),
            )}
          |
          {stagingUrl && slug && (
            <>
              <a href={`${stagingUrl}${currentPath}`} style={S.Link}>
                Staging
              </a>
            </>
          )}
          {localUrl && slug && (
            <>
              <a href={`${localUrl}${currentPath}`} style={S.Link}>
                Local
              </a>
            </>
          )}
          {liveUrl && slug && (
            <>
              <a href={`${liveUrl}${currentPath}`} style={S.Link}>
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
