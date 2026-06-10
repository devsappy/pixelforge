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
            <h4>Services</h4>
            <a href="/services/ai-citation-audit">AI Citation Audit</a>
            <a href="/services/geo-ready-websites">GEO-Ready Websites</a>
            <a href="/services/geo-management">GEO Management</a>
          </div>
          <div>
            <h4>Learn</h4>
            <a href="/guides">Guides</a>
            <a href="/faq">FAQ</a>
            <a href="/about">About</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@gptshopexpert.com">hello@gptshopexpert.com</a>
            <a href="/#contact">Free audit</a>
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
