export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <div className="footer__logo">
            GPTShop<em>Expert</em>
          </div>
          <p>A GEO &amp; AEO agency. Remote first. Worldwide.</p>
        </div>
        <div className="footer__cols">
          <div>
            <h4>Agency</h4>
            <a href="#work">Results</a>
            <a href="#skills">Capabilities</a>
            <a href="#services">Services</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@gptshopexpert.com">hello@gptshopexpert.com</a>
            <a href="#contact">Free audit</a>
            <a href="#services">For agencies</a>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 GPTShopExpert</span>
        <span>Generative Engine Optimization · AI citations · measured</span>
      </div>
    </footer>
  );
}
