import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }:any) {
  const router = useRouter();

  return <Component {...pageProps} />;
}

export default MyApp;
