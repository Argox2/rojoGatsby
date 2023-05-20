import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface SeoProps {
  title: string;
}

interface StaticQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Seo: React.FC<SeoProps> = ({ title }) => {
  const data: StaticQueryData = useStaticQuery(graphql`
   query {
     site {
       siteMetadata {
         title
       }
     }
   }
 `);
  
 return (
   <title>{title} | {data.site.siteMetadata.title}</title>
 )
}

export default Seo
