import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "./layout.module.css";

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
    <section className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          <Link to="/" className={styles.siteTitle}>{data.site.siteMetadata.title}</Link>
          <nav>
            <ul className={styles.navLinks}>
              <li className={styles.navLinksItem}><Link to="/blog" className={styles.navLinkText} activeClassName={styles.navLinkTextActive}>Blog</Link></li>
              <li className={styles.navLinksItem}><Link to="/projects" className={styles.navLinkText} activeClassName={styles.navLinkTextActive}>Projects</Link></li>
              <li className={styles.navLinksItem}><Link to="/about" className={styles.navLinkText} activeClassName={styles.navLinkTextActive}>About</Link></li>
            </ul>
          </nav>
          <main>
            <h1 className={styles.heading}>{pageTitle}</h1>
            {children}
          </main>
        </div>
      </div>
    </section>
  ); 
}

export default Layout; 
