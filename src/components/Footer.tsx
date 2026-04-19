export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <div className="footer__logo">
            Pixel<em>Forge</em>
          </div>
          <p>A design &amp; engineering studio. Remote first. Worldwide.</p>
        </div>
        <div className="footer__cols">
          <div>
            <h4>Studio</h4>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@pixelforge.studio">hello@pixelforge.studio</a>
            <a href="#">Book a call</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <a href="#">Dribbble</a>
            <a href="#">Awwwards</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Pixel Forge Studio</span>
        <span>Forged in Framer Motion · 60fps · zero-compromise</span>
      </div>
    </footer>
  );
}
