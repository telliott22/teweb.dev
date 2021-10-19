import Layout from '../components/layout'
import Head from 'next/head'
import Hero from '../components/blocks/hero'
import About from '../components/blocks/about'
import Projects from '../components/blocks/projects'
import Tech from '../components/blocks/tech'
import CustomCursor from '../components/custom-cursor.js'
import { useEffect, useState } from 'react'

function renderPage({ pageData, settings }) {

  const [theme, setTheme] = useState('dark')
  const [textClass, setTextClass] = useState('text-white')
  const [bgClass, setBgClass] = useState('bg-black')
  const [altBgClass, setAltBgClass] = useState('bg-white')
  const [altTextClass, setAltTextClass] = useState('text-grey')

  useEffect(()=>{

    console.log('theme', theme)

    if(theme === 'dark'){
      setTextClass('text-white')
      setAltTextClass('text-grey')
      setBgClass('bg-black')
      setAltBgClass('bg-white')
    }else{
      setTextClass('text-black')
      setAltTextClass('text-grey-light')
      setBgClass('bg-white')
      setAltBgClass('bg-black')
    }

  },[theme])

  return (
      <Layout  > 

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

        <div className={`${textClass} ${bgClass}`}> 

          <Hero theme={theme} setTheme={setTheme} textClass={textClass} bgClass={bgClass} altBgClass={altBgClass} altTextClass={altTextClass} />

          <About textClass={textClass} bgClass={bgClass} altBgClass={altBgClass} altTextClass={altTextClass} />

          <Projects textClass={textClass} bgClass={bgClass} altBgClass={altBgClass} altTextClass={altTextClass} />

          <Tech textClass={textClass} bgClass={bgClass} altBgClass={altBgClass} altTextClass={altTextClass} />

        </div>

        
        <CustomCursor />

      </Layout>
  )
}

export default renderPage