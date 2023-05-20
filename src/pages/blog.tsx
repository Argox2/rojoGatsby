import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface Node {
  name: string;
}

interface BlogPageProps {
  data: {
    allFile: {
      nodes: Node[];
    }
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="Posts">
      <ul>
        {
          data.allFile.nodes.map((node: Node) => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }                        
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`


export const Head = () => <Seo title="Blog" />

export default BlogPage
