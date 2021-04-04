import { AppProps } from 'next/app'
import 'styles/_global.scss'
import 'styles/_colors.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
