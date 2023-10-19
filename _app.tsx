import { useRouter } from 'next/router';
import RootLayout from '@/app/layout';

function MyApp({ Component, pageProps }:any) {
  const router = useRouter();

  return (
  <>
  <RootLayout>
  <Component {...pageProps} />
  </RootLayout>
  </>
  );
}

export default MyApp;
