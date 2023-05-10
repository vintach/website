import Script from 'next/script';

const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS!}`}
      />

      <Script strategy='lazyOnload'>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GOOGLE_ANALYTICS!}');
          `}
      </Script>
    </>
  );
};
