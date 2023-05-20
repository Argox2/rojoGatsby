import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinksItem,
  navLinkText,
  siteTitle
} from "./layout.module.css";

interface LayoutProps {
  pageTitle: string; 
  children: React.ReactNode;
}

interface StaticQueryData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
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
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinksItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinksItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
          <li className={navLinksItem}><Link to="/about" className={navLinkText}>About me</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  ); 
}

export default Layout; 
