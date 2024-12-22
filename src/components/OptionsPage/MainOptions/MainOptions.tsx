import { REGIONS_LIST } from "../../../utils/constants/region";
import Input from "../Input";
import * as S from "./MainOptions.styles";

const MainOptions = () => {
  return (
    <div>
      <h2>Main Options</h2>
      <div style={S.Container}>
        {REGIONS_LIST.map((region) => (
          <div key={region} style={S.MainContainer}>
            <h3 style={S.Title}>{region} Site - Funnel</h3>
            <Input
              title={`Next.js Staging Url - ${region} - Funnel`}
              storeKey={`${region.toLowerCase()}NextjsStagingUrl`}
            />
            <Input
              title={`Next.js Live Url - ${region} - Funnel`}
              storeKey={`${region.toLowerCase()}NextjsLiveUrl`}
            />
            <Input
              title={`Next.js Prod Amplify Url - ${region} - Funnel`}
              storeKey={`${region.toLowerCase()}NextjsProdAmplifyUrl`}
            />
            <h3 style={S.Title}>{region} Site - Ecom</h3>
            <Input
              title={`Next.js Staging Url - ${region} - Ecom`}
              storeKey={`${region.toLowerCase()}NextjsEcomStagingUrl`}
            />
            <Input
              title={`Next.js Live Url - ${region} - Ecom`}
              storeKey={`${region.toLowerCase()}NextjsEcomLiveUrl`}
            />
            <Input
              title={`Next.js Prod Amplify Url - ${region} - Ecom`}
              storeKey={`${region.toLowerCase()}NextjsEcomProdAmplifyUrl`}
            />
            <Input
              title={`Next.js Pre-Prod Cloudfront Url - ${region} - Ecom`}
              storeKey={`${region.toLowerCase()}NextjsEcomPreProdCloudfrontUrl`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainOptions;
