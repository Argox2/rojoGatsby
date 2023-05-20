import {StaticImage} from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function indexPage() {
  return (
    <div>
      <Layout pageTitle='Home'>
        <p>This is the HomePage.</p>
        <StaticImage 
          alt='Clifford, a redwish-brown pitbull, posing on a couch and looking stoically at the camera'
          src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
        />
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title='Home' />

