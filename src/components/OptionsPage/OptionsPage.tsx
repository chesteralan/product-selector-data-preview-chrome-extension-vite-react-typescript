import { useState } from "react";
import { OptionsPageTabs } from "./OptionsPageTabs";
import PluginSettings from "./PluginSettings/PluginSettings";
import * as S from "./OptionsPage.styles";
import MainOptions from "./MainOptions/MainOptions";
import StrapiCMS from "./StrapiCMS/StrapiCMS";
import packageJson from "../../../package.json";
import DevEnvironment from "./DevEnvironment/DevEnvironment";

type Props = {};

const OptionsPage = (props: Props) => {
  const [activeTab, setActiveTab] = useState("main-options");

  return (
    <div>
      <OptionsPageTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={S.Container}>
        {activeTab === "main-options" && <MainOptions />}
        {activeTab === "strapi-cms" && <StrapiCMS />}
        {activeTab === "dev-environment" && <DevEnvironment />}
        {activeTab === "plugin-settings" && <PluginSettings />}
      </div>
      <div style={S.PackageVersion}>v{packageJson.version}</div>
    </div>
  );
};

export default OptionsPage;
