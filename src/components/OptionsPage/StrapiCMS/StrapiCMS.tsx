import { REGIONS_LIST } from "../../../utils/constants/region";
import Input from "../Input";
import * as S from "../MainOptions/MainOptions.styles";

const StrapiCMS = () => {
  return (
    <div>
      <h2>Strapi CMS</h2>
      <div style={S.Container}>
        {REGIONS_LIST.map((region) => (
          <div key={region} style={S.MainContainer}>
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
    </div>
  );
};

export default StrapiCMS;
