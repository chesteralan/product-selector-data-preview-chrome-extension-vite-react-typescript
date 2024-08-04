import { REGIONS_LIST } from "../../../utils/constants/region";
import Input from "../Input";
import * as S from "./MainOptions.styles";

const StrapiCMS = () => {
  return (
    <div style={S.Container}>
      <h2>Main Options</h2>
      {REGIONS_LIST.map((region) => (
        <div key={region}>
          <h3 style={S.Title}>{region} Site</h3>
          <Input
            title={`Next.js Staging Url - ${region} - Funnel`}
            storeKey={`${region.toLowerCase()}NextjsStagingUrl`}
          />
          <Input
            title={`Next.js Live Url - ${region} - Funnel`}
            storeKey={`${region.toLowerCase()}NextjsLiveUrl`}
          />
          <Input
            title={`Next.js Staging Url - ${region} - Ecom`}
            storeKey={`${region.toLowerCase()}NextjsEcomStagingUrl`}
          />
          <Input
            title={`Next.js Live Url - ${region} - Ecom`}
            storeKey={`${region.toLowerCase()}NextjsEcomLiveUrl`}
          />
        </div>
      ))}
    </div>
  );
};

export default StrapiCMS;
