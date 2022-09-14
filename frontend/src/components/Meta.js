import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To EcoSnacks',
  description: 'Best Snacks is Healthy Snacks!',
  keywords: 'snacks, healthy snacks, healthy food, fruit snacks',
}

export default Meta
