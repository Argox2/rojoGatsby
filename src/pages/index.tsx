import * as React from 'react';
import Layout from '../components/layout';

export default function indexPage() {
  return (
    <div>
      <Layout pageTitle='HomePage'>
        <p>This is the HomePage.</p>
      </Layout>
    </div>
  )
}

export const Head = () => <title>Rojo</title>

