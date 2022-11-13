import React, { useEffect, useState } from "react";
import Head from "next/head";
//
const defaultFavicon = "/favicon.ico";
const defaultOGImage = "/vercel.svg";
const defaultTwitterHandle = "@PotluckProtocol";
const siteName = "Accumulator";
const baseUrl = "https://www.genuineundead.io/";

const SEOMeta = ({
  page,
  description,
  favicon = defaultFavicon,
  ogImage = defaultOGImage,
  path,
  twitterHandle = defaultTwitterHandle,
}) => {
  const [url, setUrl] = useState(baseUrl);
  const pageTitle = `${page} | ${siteName}`;

  useEffect(() => {
    setUrl(url + path);
  }, [path]);

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={siteName} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content={baseUrl} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={`${baseUrl}${path}`} />
      <meta name="twitter:creator" content={twitterHandle} />
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={baseUrl} />
    </Head>
  );
};

export default SEOMeta;
