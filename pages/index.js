import Container from '../components/container'
import Layout from '../components/layout'
import Hero from '../components/blocks/hero'
import CustomCursor from '../components/custom-cursor.js'

function renderPage({ pageData, settings }) {
  return (
      <Layout > 

        <Container>

          <Hero />

        </Container>

        <CustomCursor />

      </Layout>
  )
}

export default renderPage