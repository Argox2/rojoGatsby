import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

export default function AboutPage() {
  return(
    <Layout pageTitle="About">
      <p>This is a my about page.</p>
      <StaticImage 
        alt='A Gray cat, very beatiful'
        src='../images/cat.jpg'
      />

    </Layout>
  );
}

export const Head = () => <Seo title='About' />




