import React from 'react'

import Layout from '../components/layout'
import { RecipeCard } from '../components/index.ts'

const IndexPage = () => (
  <Layout>
    <section className="section">
      <h2 className="section-primary">
        A growing collection of <br /> the best Petty family recipes
      </h2>
    </section>
    <section className="section">
      <div className="section-header">
        <h3 className="section-secondary">Latest</h3>
      </div>
      <div className="latest-recipes">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  </Layout>
)

export default IndexPage
