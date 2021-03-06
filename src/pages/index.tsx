import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my personal website.</p>
    <p>
      This site is currently under major construction but good things are up
      ahead.
    </p>
    <StaticImage
      src="../images/headshot-512x512.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="My headshot photograph"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
