import Container from './container'
import Layout from '../components/layout'
import Hero from '../components/blocks/hero'

export default function Page({pageData, settings}) {

  return (
      <Layout>

          <Container>

            <Hero />

          </Container>

      </Layout>
  )
}
