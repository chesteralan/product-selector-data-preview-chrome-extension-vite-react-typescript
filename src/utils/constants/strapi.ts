export const IS_STRAPI =
  (window.location.host.includes("strapi") &&
    window.location.host.includes("thepetlabco")) ||
  window.location.host.includes("localhost:1338");
export const IS_STRAPI_LOCAL =
  IS_STRAPI && window.location.host.includes("localhost:1338");
export const IS_STRAPI_PROD =
  IS_STRAPI && window.location.host.includes("-prod-");
export const IS_STRAPI_DEV =
  IS_STRAPI && window.location.host.includes("-dev-");
export const IS_STRAPI_US = IS_STRAPI && window.location.host.includes("-us-");
export const IS_STRAPI_CA = IS_STRAPI && window.location.host.includes("-ca-");
export const IS_STRAPI_UK = IS_STRAPI && window.location.host.includes("-uk-");
export const IS_STRAPI_DE = IS_STRAPI && window.location.host.includes("-de-");
export const IS_STRAPI_AU = IS_STRAPI && window.location.host.includes("-au-");
export const IS_STRAPI_ORANGE =
  IS_STRAPI && window.location.host.includes("orange");
export const IS_STRAPI_GREEN =
  IS_STRAPI && window.location.host.includes("green");
export const IS_STRAPI_BLUE =
  IS_STRAPI && window.location.host.includes("blue");
