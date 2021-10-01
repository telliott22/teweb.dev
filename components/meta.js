
import Head from 'next/head'
export default function Meta({pageData, settings}) {

  function title(){

    return `${settings.titlePrefix}${pageData.title}`

  }

  function description(){

    if(pageData.description){

      return pageData.description

    }

    return settings.description

  }

  function metaTags(){

    if(settings && settings.metaTags){

        return settings.metaTags.map(meta => {

            if(meta.name){

                return (
                    <meta key={meta.name} name={meta.name} content={meta.content} />
                )

            }else if(meta.property){

                return (
                    <meta key={meta.property} property={meta.property} content={meta.content} />
                )

            }else if(meta.httpEquiv){

                return (
                    <meta key={meta.httpEquiv} httpEquiv={meta.httpEquiv} content={meta.content} />
                )

            }

        })

    }

  }

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      
      { metaTags() }

      <meta name="description" content={ description() } key="description" />

      <title>{ title() }</title>

    </Head>
  )
}
