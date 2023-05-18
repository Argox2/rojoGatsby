import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinksItem,
  navLinkText
} from "./layout.module.css";

interface LayoutProps {
  pageTitle: string; 
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinksItem}><Link to="/" className={navLinkText}>Home</Link></li>
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
