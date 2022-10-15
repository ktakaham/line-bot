import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

import { ApolloContextProvider } from "@/utils/apollo/apolloClient";
import { CreatorAuthStateListener } from "@/utils/globalState/";
import { createEmotionCache, theme } from "@/utils/mui";

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ApolloContextProvider pageProps={pageProps}>
          <CreatorAuthStateListener>
            <CacheProvider value={emotionCache}>
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
              <Toaster />
            </CacheProvider>
          </CreatorAuthStateListener>
        </ApolloContextProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
