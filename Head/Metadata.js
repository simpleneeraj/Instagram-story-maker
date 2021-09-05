import Head from "next/head";
import React, { useEffect, useState } from "react";

const Metadata = () => {
  const [PageUrl, setPageUrl] = useState("");
  const data = {
    title: `Editor v1.1`,
    description: `Create beautiful instagram post using portable version of Editor 1.1v`,
  };
  useEffect(() => {
    let url = window.location.href;
    // alert(window.innerWidth);
    setPageUrl(url);
    // console.log(window.matchMedia(`(prefers-color-scheme:dark)`).matches);
  }, [PageUrl]);

  return (
    <Head>
      <title>{data.title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={PageUrl} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content=" " />

      <meta property="twitter:card" content="/android-chrome-512x512.png" />
      <meta property="twitter:url" content={PageUrl} />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content="" />

      <link
        rel="icon"
        href="/Icons/favicon-16x16.png"
        sizes="16x16"
        type="image/png"
      />
      <link
        rel="icon"
        href="/Icons/favicon-32x32.png"
        sizes="32x32"
        type="image/png"
      />
      <link
        rel="icon"
        href="/Icons/android-chrome-192x192.png"
        sizes="192x192"
        type="image/png"
      />
      <link
        rel="icon"
        href="/Icons/android-chrome-512x512.png"
        sizes="512x512"
        type="image/png"
      />
      <link
        rel="icon"
        href="/Icons/apple-touch-icon.png"
        sizes="180x180"
        type="image/png"
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default Metadata;
