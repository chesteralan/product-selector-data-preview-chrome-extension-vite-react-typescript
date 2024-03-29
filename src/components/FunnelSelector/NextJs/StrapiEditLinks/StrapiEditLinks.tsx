import useConfig from "../../../../hooks/useConfig";
import * as S from "./StrapiEditLinks.styles";
import useCheckSite from "../../../../hooks/useCheckSite";
import { isProd } from "../../../../utils/isProd";

type Props = {
  data: any;
  toggleMatrix: any;
};

const StrapiEditLinks = ({ data, toggleMatrix }: Props) => {
  const {
    region,
    otherRegions,
    strapiServerUrl,
    stagingUrl,
    localUrl,
    liveUrl,
    strapiLocalUrl,
    ...otherConfig
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
  const isEcom = page?.isEcom || false;

  const pathname = window.location.pathname;
  const currentPath = `${isEmailCampaign ? "/email" : ""}${
    isEcom ? "/products" : ""
  }${pathname}`;

  const { isCollectionPage } = useCheckSite();

  return (
    <div style={S.Container}>
      {isCollectionPage && (
        <>
          <span style={S.Link} onClick={toggleMatrix}>
            Collection Page Matrix
          </span>{" "}
          |{" "}
        </>
      )}
      {otherRegions.map((otherRegion) => {
        const otherConfigKey = `${otherRegion.toLowerCase()}${
          isProd(window) ? `Live` : `Staging`
        }Url` as keyof typeof otherConfig;
        return (
          <a
            href={`${otherConfig[otherConfigKey] as string}${currentPath}`}
            style={S.Link}
            key={otherRegion}
          >
            {otherRegion}
          </a>
        );
      })}
      {strapiServerUrl && (
        <>
          {!pageId && (
            <>
              |{" "}
              <a
                href={`${strapiServerUrl}/admin`}
                target="_blank"
                style={S.Link}
              >
                Admin Panel
              </a>
            </>
          )}
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
                  target="_blank"
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
      {pathname !== "/" && pageId && (
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
