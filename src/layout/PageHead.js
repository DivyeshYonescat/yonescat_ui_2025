import Head from 'next/head'

const PageHead = ({ headTitle, metaDescription, keywords, url }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Yonescat"}</title>
        <meta name="description" content={metaDescription ? metaDescription : "Yonescat - We Design Solutions"}></meta>
        <meta name="keywords" content={`${keywords}`} />
        <meta property="og:title" content={headTitle ? headTitle : "Yonescat"} />
        <meta property="og:description" content={metaDescription ? metaDescription : "Yonescat - We Design Solutions"} />
        <meta property="og:url" content={`https://www.yoursite.com${url}`} />
        <meta property="og:image" content="https://yonescat.com/og-image.jpg" />
        <link rel="icon" href={"/images/main/favicon.ico"} type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="16x16" href={"/images/main/favicon-16x16.png"} />
        <link rel="icon" type="image/png" sizes="32x32" href={"/images/main/favicon-32x32.png"} />
      </Head>
    </>
  )
}

export default PageHead