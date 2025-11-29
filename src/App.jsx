import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <h1>Ceetech Crafts</h1>
            <span className="tagline">Where Craft Meets Class</span>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#academy">Academy</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Premium Furniture & Interior Solutions</h1>
            <p className="hero-subtitle">
              Benin City's leading furniture manufacturing and interior design company. 
              Transforming spaces with exceptional craftsmanship and innovative design.
            </p>
            <p className="hero-notice">
              🚧 Our main website is coming soon! In the meantime, contact us for all your furniture and interior needs.
            </p>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              🪑 Premium Furniture Gallery
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🪑</div>
              <h3>Custom Furniture Manufacturing</h3>
              <p>Premium residential and commercial furniture crafted to perfection. From bedroom wardrobes to office solutions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Complete Interior Design</h3>
              <p>End-to-end interior solutions including POP ceilings, painting, tiling, and lighting installations.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Furniture Academy</h3>
              <p>Professional training programs in furniture making. 3-8 month courses with hands-on learning and certification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Leading Furniture Excellence in Benin City</h2>
              <p>
                Operating from our modern factory facility at Ebvuabugun Sawmill, 
                Ceetech Crafts has established itself as the premier destination for 
                custom furniture and interior design solutions.
              </p>
              <ul className="about-features">
                <li>✓ Factory-controlled production ensuring quality</li>
                <li>✓ Complete solutions from design to installation</li>
                <li>✓ Serving residential and commercial clients</li>
                <li>✓ Only furniture academy in Benin City</li>
              </ul>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                🏭 Modern Factory Facility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="academy">
        <div className="container">
          <h2 className="section-title">Ceetech Furniture Academy</h2>
          <div className="academy-grid">
            <div className="academy-card">
              <h3>Foundation Program</h3>
              <p className="duration">3-6 Months</p>
              <p>Comprehensive training for beginners new to furniture work</p>
            </div>
            <div className="academy-card">
              <h3>Advanced Mastery</h3>
              <p className="duration">4-8 Months</p>
              <p>Specialized training for experienced craftspeople</p>
            </div>
          </div>
          <div className="academy-features">
            <div className="academy-feature">
              <span className="feature-number">80%</span>
              <p>Practical hands-on training</p>
            </div>
            <div className="academy-feature">
              <span className="feature-number">100%</span>
              <p>Industry certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get Information & Stay Updated</h2>
          <p className="contact-intro">
            Our main website is under construction. Contact us directly using the information below for immediate assistance with your furniture and interior needs.
          </p>
          <div className="contact-info-grid">
            <div className="contact-item">
              <h3>Main Factory & Showroom</h3>
              <p>2nd Entrance Ebvuabugun Sawmill<br />Off Sapele Road, Benin City</p>
            </div>
            <div className="contact-item">
              <h3>Additional Locations</h3>
              <p>40 Country Home Rd, Oka, Benin City<br />456 Mission Road, Benin City</p>
            </div>
            <div className="contact-item">
              <h3>Contact Details</h3>
              <p>📞 +234 816 541 0110<br />✉️ ceetechfurnitureandinteriors9@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Business Hours</h3>
              <p>Monday - Saturday<br />7:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="faq">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <div className="faq-list">
              <details>
                <summary>What states do you serve?</summary>
                <p>We serve clients across all states in Nigeria.</p>
              </details>

              <details>
                <summary>Where are your showrooms and factory located?</summary>
                <p>
                  Our primary factory and main showroom is located at 2nd Entrance Ebvuabugun Sawmill, Off Sapele Road, Benin City. 
                  We also operate additional showrooms at 40 Country Home Rd, Oka, Benin City and 456 Mission Road, Benin City.
                </p>
              </details>

              <details>
                <summary>Do you upgrade existing furniture?</summary>
                <p>Yes — we provide furniture upgrade and refurbishment services to refresh and improve existing pieces.</p>
              </details>

              <details>
                <summary>Do you offer any warranty?</summary>
                <p>Yes — we provide a one-year warranty covering defects or damage resulting from our workmanship on furniture we create.</p>
              </details>

              <details>
                <summary>How long does it take to make custom furniture?</summary>
                <p>
                  Timelines vary depending on the complexity and scope of the piece. Delivery time is typically agreed after an initial consultation.
                  Please contact us to discuss your project and receive a tailored timeframe.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Ceetech Crafts</h3>
              <p>Where Craft Meets Class</p>
            </div>
            <div className="footer-links">
              <div>
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Custom Furniture</a></li>
                  <li><a href="#services">Interior Design</a></li>
                  <li><a href="#academy">Training Academy</a></li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#">Gallery</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Ceetech Crafts. All rights reserved.</p>
            <p>Serving Benin City and throughout Edo State</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
