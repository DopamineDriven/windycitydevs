import { AppProps } from 'next/app'
import '../styles/index.css'
import "antd/dist/antd.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
