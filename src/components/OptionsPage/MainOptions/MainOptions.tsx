import { REGIONS_LIST } from "../../../utils/constants/region";
import Input from "../Input";
import * as S from "./MainOptions.styles";

type Props = {};

const StrapiCMS = (props: Props) => {
  return (
    <div style={S.Container}>
      <h2>Main Options</h2>
      {REGIONS_LIST.map((region) => (
        <div key={region}>
          <h3 style={S.Title}>{region} Site</h3>
          <Input
            title={`Strapi CMS Server URL - ${region}`}
            storeKey={`${region.toLowerCase()}StrapiServerUrl`}
          />
          <Input
            title={`Next.js Staging Url - ${region}`}
            storeKey={`${region.toLowerCase()}NextjsStagingUrl`}
          />
          <Input
            title={`Next.js Live Url - ${region}`}
            storeKey={`${region.toLowerCase()}NextjsLiveUrl`}
          />
        </div>
      ))}
    </div>
  );
};

export default StrapiCMS;
