import Input from "../Input";
import * as S from "../MainOptions/MainOptions.styles";
import { REGIONS_LIST } from "../../../utils/constants/region";

const StrapiCMS = () => {
  return (
    <div style={S.Container}>
      <h2>Strapi CMS Servers</h2>
      {REGIONS_LIST.map((region) => (
        <div key={region}>
          <h3 style={S.Title}>{region}</h3>
          <Input
            title={`Strapi CMS Server URL - ${region}`}
            storeKey={`${region.toLowerCase()}StrapiServerUrl`}
          />
          <Input
            title={`Green - Strapi CMS URL - ${region}`}
            storeKey={`${region.toLowerCase()}StrapiGreenUrl`}
          />
          <Input
            title={`Blue - Strapi CMS URL - ${region}`}
            storeKey={`${region.toLowerCase()}StrapiBlueUrl`}
          />
        </div>
      ))}
    </div>
  );
};

export default StrapiCMS;
