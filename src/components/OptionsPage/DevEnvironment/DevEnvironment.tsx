import Input from "../Input";
import * as S from "../MainOptions/MainOptions.styles";

const DevEnvironment = () => {
  return (
    <div>
      <h2>Dev Environments</h2>
      <div style={S.Container}>
        <div style={S.MainContainer}>
          <h3 style={S.Title}>Local Settings</h3>
          <Input title="Next.js Local Url" storeKey="nextjsLocalUrl" />
          <Input title="Strapi Local Url" storeKey="strapiLocalUrl" />

          <h3 style={S.Title}>Strapi CMS Servers</h3>
          <Input title="Green - Strapi CMS URL" storeKey="devStrapiGreenUrl" />
          <Input title="Blue - Strapi CMS URL" storeKey="devStrapiBlueUrl" />

          <h3 style={S.Title}>Other Settings</h3>
          <Input title="Developer Tool Url" storeKey="developerToolUrl" />
        </div>
      </div>
    </div>
  );
};

export default DevEnvironment;
