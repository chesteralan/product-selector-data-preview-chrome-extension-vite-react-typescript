import useConfig from "../../../../hooks/useConfig";
import * as S from "./StrapiEditLinks.styles";
import useCheckSite from "../../../../hooks/useCheckSite";
import { isProd } from "../../../../utils/isProd";
import useNextData from "../../../../hooks/useNextData";

type Props = {
  toggleCollectionsMatrix: any;
  toggleCartMatrix: any;
};

const StrapiEditLinks = ({
  toggleCollectionsMatrix,
  toggleCartMatrix,
}: Props) => {
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

  const {
    locale,
    locales,
    isEmailCampaign,
    pageId,
    pageVariantId,
    promoId,
    slug,
    isPageVariant,
  } = useNextData();

  const pathname = window.location.pathname;

  const { isCollectionPage, isCartPage } = useCheckSite();

  return (
    <div style={S.Container}>
      {isCollectionPage && (
        <>
          <span style={S.Link} onClick={toggleCollectionsMatrix}>
            Collection Page Matrix
          </span>{" "}
          |{" "}
        </>
      )}
      {isCartPage && (
        <>
          <span style={S.Link} onClick={toggleCartMatrix}>
            Cart Page Matrix
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
            href={`${otherConfig[otherConfigKey] as string}${pathname}`}
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
              {isPageVariant && (
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
                  <a href={`/${loc}${pathname}`} style={S.Link}>
                    {loc}
                  </a>
                ),
            )}
          |
          {stagingUrl && slug && (
            <>
              <a href={`${stagingUrl}${pathname}`} style={S.Link}>
                Staging
              </a>
            </>
          )}
          {localUrl && slug && (
            <>
              <a href={`${localUrl}${pathname}`} style={S.Link}>
                Local
              </a>
            </>
          )}
          {liveUrl && slug && (
            <>
              <a href={`${liveUrl}${pathname}`} style={S.Link}>
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
