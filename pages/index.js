import Layout from '../components/layout'
import Head from 'next/head'
import Hero from '../components/blocks/hero'
import About from '../components/blocks/about'
import Projects from '../components/blocks/projects'
import Tech from '../components/blocks/tech'
import CustomCursor from '../components/custom-cursor.js'

function renderPage({ pageData, settings }) {
  return (
      <Layout > 

        <Head>  
          <title>Tim Elliott - Web Developer based in Berlin</title>
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Tim Elliott is a web developer based in Berlin. He is passionate about building websites and web applications." />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-4MNQGC8ZN6`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4MNQGC8ZN6', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />

        </Head>

        <Hero />

        <About />

        <Projects />

        <Tech />

        <CustomCursor />

      </Layout>
  )
}

export default renderPage