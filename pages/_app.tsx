import "styles/globals.css"
import { FullScreenLoader } from "components/FullScreenLoader"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"
import { Providers } from "utils/providers"

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Toaster position="bottom-center" />
      <FullScreenLoader>
        <Component {...pageProps} />
      </FullScreenLoader>
    </Providers>
  )
}

export default MyApp
