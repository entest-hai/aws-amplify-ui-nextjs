// Dart theme with Amplify UI using NextJS
// 20 APR 2022 Hai Tran
// Refer to Amplify UI repository https://github.com/aws-amplify/amplify-ui
// Import styles as '../styles/index.scss'
// Copy tsconfig.json from the Amplify UI repository

import { AmplifyProvider, ColorMode } from "@aws-amplify/ui-react";
import Head from "next/head";
import * as React from "react";
import { useRouter } from "next/router";
import { theme } from "../theme";
import Header from "@/components/Layout/Header";
import { META_INFO } from "@/data/meta";
import "../styles/index.scss";

// if (typeof window === "undefined") React.useLayoutEffect = React.useEffect;

function MyApp() {
  const router = useRouter();
  const { platform = "react" } = router.query;
  const [colorMode, setColorMode] = React.useState("system");
  const [themeOverride, setThemeOverride] = React.useState("");

  React.useEffect(() => {
    document.documentElement.setAttribute(
      "data-amplify-theme-override",
      themeOverride
    );
  }, [themeOverride]);

  if (
    !META_INFO[router.pathname]?.description ||
    !META_INFO[router.pathname]?.title
  ) {
    throw new Error(`Meta Info missing on ${router.pathname}`);
  }

  return (
    <>
      <Head>
        <title>{META_INFO[router.pathname].title} | Amplify UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {META_INFO[router.pathname] && (
          <meta
            name="description"
            content={META_INFO[router.pathname].description}
          />
        )}
      </Head>

      <AmplifyProvider theme={theme} colorMode={colorMode as ColorMode}>
        <Header
          platform={platform}
          colorMode={colorMode}
          setColorMode={setColorMode}
        ></Header>
      </AmplifyProvider>
    </>
  );
}

export default MyApp;
