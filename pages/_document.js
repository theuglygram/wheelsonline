// import { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";
// export default function Document() {
//   return (
//     <Html>
//       <Head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="/favicon/apple-touch-icon.png"
//           rel="apple-touch-icon"
//           sizes="180x180"
//         />
//         <link
//           href="/favicon/favicon-32x32.png"
//           rel="icon"
//           sizes="32x32"
//           type="image/png"
//         />
//         <link
//           href="/favicon/favicon-16x16.png"
//           rel="icon"
//           sizes="16x16"
//           type="image/png"
//         />
//         <link href="/favicon/site.webmanifest" rel="manifest" />
//         <link
//           color="#000000"
//           href="/favicon/safari-pinned-tab.svg"
//           rel="mask-icon"
//         />
//         <link href="/favicon/favicon.ico" rel="shortcut icon" />
//       </Head>
//       <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
