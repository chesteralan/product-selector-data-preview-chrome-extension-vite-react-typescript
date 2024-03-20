import { REGIONS_LIST } from "../../../utils/constants/region";
import Input from "../Input";
import * as S from "../MainOptions/MainOptions.styles";

type Props = {};

const DevEnvironment = (props: Props) => {
  return (
    <div style={S.Container}>
      <h2>Dev Environments</h2>
      <h3 style={S.Title}>Local Settings</h3>
      <Input title="Next.js Local Url" storeKey="nextjsLocalUrl" />
      <Input title="Strapi Local Url" storeKey="strapiLocalUrl" />

      <h3 style={S.Title}>Strapi CMS Servers</h3>
      <Input title="Green - Strapi CMS URL" storeKey="devStrapiGreenUrl" />
      <Input title="Blue - Strapi CMS URL" storeKey="devStrapiBlueUrl" />

      <h3 style={S.Title}>Other Settings</h3>
      <Input title="Developer Tool Url" storeKey="developerToolUrl" />
    </div>
  );
};

export default DevEnvironment;
