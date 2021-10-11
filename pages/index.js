import Layout from '../components/layout'
import Hero from '../components/blocks/hero'
import About from '../components/blocks/about'
import Projects from '../components/blocks/projects'
import CustomCursor from '../components/custom-cursor.js'

function renderPage({ pageData, settings }) {
  return (
      <Layout > 

        <Hero />

        <Projects />

        <About />

        <CustomCursor />

      </Layout>
  )
}

export default renderPage