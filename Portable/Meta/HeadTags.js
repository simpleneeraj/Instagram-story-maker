import Head from "next/head";
import React, { useEffect, useState } from "react";

const HeadTags = () => {
  const [Title, setTitle] = useState("Insta - Create awesome Post and Story");
  const [Description, setDescription] = useState(
    "With Insta you can make instagram story and post with one click to experince this app generate lots of post now!"
  );
  const [URL, setURL] = useState("");
  useEffect(() => {
    let xyz = document.title;
    setURL(xyz);
  }, []);
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Insta - Create awesome Post and Story</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
       <link rel="canonical" href="https://instapost.vercel.app"/>
        <meta name="title" content={`${Title}`} />
        <meta name="description" content={`${Description}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${URL}`} />
        <meta property="og:title" content={`${Title}`} />
        <meta property="og:description" content={`${Description}`} />
        <meta property="og:image" content="https://github.com/neerajcodes/insta/blob/main/public/large-image.png?raw=true" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${URL}`} />
        <meta property="twitter:title" content={`${Title}`} />
        <meta property="twitter:description" content={`${Description}`} />
        <meta property="twitter:image" content="https://github.com/neerajcodes/insta/blob/main/public/large-image.png?raw=true" />
      </Head>
    </>
  );
};

export default HeadTags;
