import Container from '../components/container'
import Layout from '../components/layout'
import Hero from '../components/blocks/hero'
import About from '../components/blocks/about'
import CustomCursor from '../components/custom-cursor.js'

function renderPage({ pageData, settings }) {
  return (
      <Layout > 

        <Hero />

        <About />

        <CustomCursor />

      </Layout>
  )
}

export default renderPage