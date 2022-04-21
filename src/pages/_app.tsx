// Dart theme with Amplify UI using NextJS
// 20 APR 2022 Hai Tran
// Refer to Amplify UI repository https://github.com/aws-amplify/amplify-ui
// Import styles as '../styles/index.scss'
// Copy tsconfig.json from the Amplify UI repository

import { AmplifyProvider, Button, Flex, Heading } from "@aws-amplify/ui-react";
import * as React from "react";
import { theme } from "../theme";
import "../styles/index.scss";
import Header from "@/components/Layout/Header";

function MyApp() {
  const [colorMode, setColorMode] = React.useState("system");
  const [themeOverride, setThemeOverride] = React.useState("");

  React.useEffect(() => {
    document.documentElement.setAttribute(
      "data-amplify-theme-override",
      themeOverride
    );
  }, [themeOverride]);

  return (
    <AmplifyProvider theme={theme} colorMode={colorMode}>
      <Flex justifyContent={"center"} direction={"column"}>
        <Header></Header>
        <Button
          onClick={() => {
            console.log("theme toggle");
            colorMode === "system"
              ? setColorMode("dark")
              : setColorMode("system");
          }}
        >
          Toggle theme
        </Button>
        <Button
          onClick={() => {
            themeOverride === ""
              ? setThemeOverride("terminal")
              : setThemeOverride("");
          }}
        >
          Toggle theme
        </Button>
      </Flex>
    </AmplifyProvider>
  );
}

export default MyApp;
