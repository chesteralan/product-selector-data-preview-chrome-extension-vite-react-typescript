type Props = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const defaultStyle: React.CSSProperties = {
  marginRight: 10,
  padding: 5,
  border: "1px solid black",
  borderRadius: 5,
  cursor: "pointer",
};

const activeStyle: React.CSSProperties = {
  backgroundColor: "black",
  color: "white",
  ...defaultStyle,
};

export const OptionsPageTabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div>
      <button
        onClick={() => setActiveTab("main-options")}
        style={activeTab === "main-options" ? activeStyle : defaultStyle}
      >
        Main Options
      </button>
      <button
        onClick={() => setActiveTab("strapi-cms")}
        style={activeTab === "strapi-cms" ? activeStyle : defaultStyle}
      >
        Strapi CMS
      </button>
      <button
        onClick={() => setActiveTab("dev-environment")}
        style={activeTab === "dev-environment" ? activeStyle : defaultStyle}
      >
        Dev Environment
      </button>
      <button
        onClick={() => setActiveTab("plugin-settings")}
        style={activeTab === "plugin-settings" ? activeStyle : defaultStyle}
      >
        Plugin Settings
      </button>
    </div>
  );
};
