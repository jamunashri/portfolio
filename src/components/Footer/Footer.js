import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <a
      href="https://github.com/jamunashri"
      className="link footer__link"
      target="_blank"
    >
      Jamunashri Shanmugasundaram © {new Date().getFullYear()}
    </a>
  </footer>
);

export default Footer;
