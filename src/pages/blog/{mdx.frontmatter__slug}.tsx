import * as React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout'
import Seo from '../../components/seo'

interface BlogPostProps {
  data: {
    mdx: {
      id: string;
      frontmatter: {
        title: string;
        date: string;
      }
    }
  }
  children?: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id:String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head: React.FC<BlogPostProps> = ({ data }) => <Seo title={data.mdx.frontmatter.title}/>

export default BlogPost
