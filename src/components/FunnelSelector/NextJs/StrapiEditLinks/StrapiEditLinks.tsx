import { useRef } from "react";
import useConfig from "../../../../hooks/useConfig";
import * as S from "./StrapiEditLinks.styles";
import useCheckSite from "../../../../hooks/useCheckSite";
import useNextData from "../../../../hooks/useNextData";

type Props = {
  toggleCollectionsMatrix: any;
  toggleCartMatrix: any;
};

const StrapiEditLinks = ({
  toggleCollectionsMatrix,
  toggleCartMatrix,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    region,
    otherRegions,
    strapiServerUrl,
    stagingUrl,
    stagingEcomUrl,
    localUrl,
    liveUrl,
    liveEcomUrl,
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
  } = useNextData();

  const pathname = window.location.pathname;

  const {
    isCollectionPage,
    isCartPage,
    isHomePage,
    isEcomPdp,
    isEcom,
    isProd,
  } = useCheckSite();

  return (
    <div ref={ref} style={S.Container}>
      <span style={S.Label}>{isEcom ? "ECOM" : "FUNNEL"}</span>
      {isCollectionPage && isEcom && (
        <>
          <span style={S.Link} onClick={toggleCollectionsMatrix}>
            Collection Page Matrix
          </span>{" "}
          |{" "}
        </>
      )}
      {isCartPage && isEcom && (
        <>
          <span style={S.Link} onClick={toggleCartMatrix}>
            Cart Page Matrix
          </span>{" "}
          |{" "}
        </>
      )}
      {otherRegions.map((otherRegion) => {
        const otherConfigKey = `${otherRegion.toLowerCase()}${
          isEcom ? `Ecom` : ``
        }${isProd ? `Live` : `Staging`}Url` as keyof typeof otherConfig;
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
                  <a href={`/${loc}${pathname}`} style={S.Link}>
                    {loc}
                  </a>
                ),
            )}
          |
          {stagingUrl && slug && (
            <>
              <a
                href={`${isEcomPdp ? stagingEcomUrl : stagingUrl}${pathname}`}
                style={S.Link}
              >
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
              <a
                href={`${isEcomPdp ? liveEcomUrl : liveUrl}${pathname}`}
                style={S.Link}
              >
                Live
              </a>
            </>
          )}
          {isHomePage && isEcom && (
            <>
              <a href={`${liveEcomUrl}`} style={S.Link}>
                Staging
              </a>
            </>
          )}
        </>
      )}
      <button
        style={{ color: "black", marginLeft: "20px", padding: "0px 5px" }}
        onClick={() => (ref.current as HTMLDivElement).remove()}
      >
        CLOSE
      </button>
    </div>
  );
};

export default StrapiEditLinks;
