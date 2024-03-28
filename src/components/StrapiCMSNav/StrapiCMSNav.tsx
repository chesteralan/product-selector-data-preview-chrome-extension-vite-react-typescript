import useConfig from "../../hooks/useConfig";
import {
  IS_STRAPI_AU,
  IS_STRAPI_BLUE,
  IS_STRAPI_CA,
  IS_STRAPI_DE,
  IS_STRAPI_GREEN,
  IS_STRAPI_LOCAL,
  IS_STRAPI_ORANGE,
  IS_STRAPI_PROD,
  IS_STRAPI_UK,
  IS_STRAPI_US,
} from "../../utils/constants/strapi";
import * as S from "./StrapiCMSNav.styles";

const StrapiCMSNav = () => {
  const {
    strapiDevGreenUrl,
    strapiDevBlueUrl,
    strapiProdOrangeUrl,
    strapiProdGreenUrl,
    strapiProdBlueUrl,
    liveUrl,
    stagingUrl,
    strapiLocalUrl,
    otherRegions,
  } = useConfig();

  const replaceHref = (url: string) => {
    return window.location.href.replace(window.location.origin, url);
  };

  const replaceRegion = (region: string) => {
    const href = window.location.href;

    if (IS_STRAPI_LOCAL) return region;
    if (IS_STRAPI_US) return href.replace("-us-", region);
    if (IS_STRAPI_CA) return href.replace("-ca-", region);
    if (IS_STRAPI_UK) return href.replace("-uk-", region);
    if (IS_STRAPI_DE) return href.replace("-de-", region);
    if (IS_STRAPI_AU) return href.replace("-au-", region);

    return href;
  };

  const redirect = (href: string) => {
    window.location.href = href;
  };

  const replaceLocal = () => {
    const href = window.location.href;
    if (strapiLocalUrl)
      return href.replace(window.location.origin, strapiLocalUrl as string);
    return href;
  };

  return (
    <div style={S.Container}>
      {!IS_STRAPI_ORANGE && strapiProdOrangeUrl && (
        <>
          <span
            style={S.Link}
            onClick={() => redirect(replaceHref(strapiProdOrangeUrl))}
          >
            Prod-Orange
          </span>{" "}
          &middot;{" "}
        </>
      )}
      {!IS_STRAPI_GREEN && strapiProdGreenUrl && (
        <>
          <span
            style={S.Link}
            onClick={() => redirect(replaceHref(strapiProdGreenUrl))}
          >
            Prod-Green
          </span>{" "}
          &middot;{" "}
        </>
      )}
      {!IS_STRAPI_BLUE && strapiProdBlueUrl && (
        <>
          <span
            style={S.Link}
            onClick={() => redirect(replaceHref(strapiProdBlueUrl))}
          >
            Prod-Blue
          </span>{" "}
          &middot;{" "}
        </>
      )}
      {IS_STRAPI_PROD && (
        <>
          {otherRegions.map((otherRegion) => {
            return (
              <>
                <span
                  style={S.Link}
                  onClick={() =>
                    redirect(replaceRegion(`-${otherRegion.toLowerCase()}-`))
                  }
                  key={otherRegion}
                >
                  {otherRegion}
                </span>{" "}
                &middot;{" "}
              </>
            );
          })}
        </>
      )}
      {strapiDevGreenUrl && (
        <>
          <span
            style={S.Link}
            onClick={() => redirect(replaceHref(strapiDevGreenUrl))}
          >
            Dev-Green
          </span>{" "}
          &middot;{" "}
        </>
      )}
      {strapiDevBlueUrl && (
        <>
          <span
            style={S.Link}
            onClick={() => redirect(replaceHref(strapiDevBlueUrl))}
          >
            Dev-Blue
          </span>{" "}
          &middot;{" "}
        </>
      )}
      {!IS_STRAPI_LOCAL && strapiLocalUrl && (
        <>
          <span style={S.Link} onClick={() => redirect(replaceLocal())}>
            Local CMS
          </span>{" "}
          &middot;
        </>
      )}
      {liveUrl && (
        <>
          <a style={S.Link} href={`${liveUrl}/all-pdps`} target="_blank">
            Live URL
          </a>{" "}
          &middot;{" "}
        </>
      )}
      {stagingUrl && (
        <>
          <a style={S.Link} href={`${stagingUrl}/all-pdps`} target="_blank">
            Staging URL
          </a>
        </>
      )}
    </div>
  );
};

export default StrapiCMSNav;
