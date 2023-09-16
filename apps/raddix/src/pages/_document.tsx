import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400&display=swap'
        rel='stylesheet'
      ></link>
      <body>
        <Main />
        <div id='modal'></div>
        <NextScript />
      </body>
    </Html>
  );
}
