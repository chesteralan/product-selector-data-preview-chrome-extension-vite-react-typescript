import * as S from "./OptionsPage.styles";
import MainOptions from "./MainOptions/MainOptions";
import StrapiCMS from "./StrapiCMS/StrapiCMS";
import packageJson from "../../../package.json";
import DevEnvironment from "./DevEnvironment/DevEnvironment";

type Props = {};

const OptionsPage = (props: Props) => {
  return (
    <div style={S.Container}>
      <MainOptions />
      <StrapiCMS />
      <DevEnvironment />
      <div style={S.PackageVersion}>v{packageJson.version}</div>
    </div>
  );
};

export default OptionsPage;
