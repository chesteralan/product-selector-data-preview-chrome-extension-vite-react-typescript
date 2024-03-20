import Input from "../Input";
import * as S from "../MainOptions/MainOptions.styles";
import { REGIONS_LIST } from "../../../utils/constants/region";

type Props = {};

const StrapiCMS = (props: Props) => {
  return (
    <div style={S.Container}>
      <h2>Strapi CMS Servers</h2>
      {REGIONS_LIST.map((region) => (
        <div key={region}>
          <h3 style={S.Title}>{region}</h3>
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
