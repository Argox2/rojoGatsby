import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

export default function AboutPage() {
  return(
    <Layout pageTitle="About Me">
      <p>This is a my about page.</p>
      <StaticImage 
        alt='A Gray cat, very beatiful'
        src='../images/cat.jpg'
      />

    </Layout>
  );
}

export const Head = () => <title>About me</title>




