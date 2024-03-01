const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <a href="https://github.com/itspablooo" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="social-icon"
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/pablo-moreno-rivera-a3a53a1b8/" target="_blank" rel="noopener noreferrer">
            <img
              src="../../images/linkedin.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
        </div>
        <div>
          <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png"
              alt="Stack Overflow"
              className="social-icon"
            />
          </a>
        </div>
      </div>
      <p>&copy; 2024 Pablo Moreno-Rivera</p>
    </footer>
  );
}

export default Footer;