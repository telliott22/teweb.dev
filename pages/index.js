import Container from '../components/container'
import Layout from '../components/layout'
import Hero from '../components/blocks/hero'

function renderPage({ pageData, settings }) {
  return (
      <Layout>

        <Container>

          <Hero />

        </Container>

      </Layout>
  )
}

export default renderPage