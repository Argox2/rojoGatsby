import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function projects() {
  return (
    <div>
      <Layout pageTitle='Home'>
        <p>This is projects page.</p>
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title='Projects' />
