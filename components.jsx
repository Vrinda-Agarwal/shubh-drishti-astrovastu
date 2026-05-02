/* Shubh Dhristi Astrovastu — v3 components
   Palette: #386641, #6a994e, #a7c957, #f2e8cf, #bc4749 */

// Replace YOUR_FORM_ID after signing up at formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjwqrkz';
const WHATSAPP_NUMBER = '919305512623';

const PALETTE = {
  primaryColor: '#386641',
  accentColor: '#a7c957',
  highlightColor: '#bc4749',
};

function useBreakpoint() {
  const get = () => {
    const w = window.innerWidth;
    if (w < 640) return 'mobile';
    if (w < 900) return 'tablet';
    return 'desktop';
  };
  const [bp, setBp] = React.useState(get);
  React.useEffect(() => {
    const handler = () => setBp(get());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return bp;
}

function Navbar({ activeSection, onNav }) {
  const navItems = ['Home', 'About', 'Services', 'Process', 'Testimonials', 'Contact'];
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const bp = useBreakpoint();
  const isMobile = bp !== 'desktop';

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (section) => {
    onNav(section);
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled || menuOpen ? '#f2e8cf' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(56,102,65,0.1)' : 'none',
      transition: 'all 0.4s ease', padding: scrolled ? '12px 0' : '20px 0',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => handleNav('Home')}>
          <div style={{
            width: 38, height: 38, borderRadius: '50%', background: PALETTE.primaryColor,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#f2e8cf', fontWeight: 700, fontSize: 17, fontFamily: "'Playfair Display', serif", flexShrink: 0,
          }}>श</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: scrolled || menuOpen ? PALETTE.primaryColor : '#fff', letterSpacing: 1, fontFamily: "'Playfair Display', serif", transition: 'color 0.3s' }}>SHUBH DHRISTI</div>
            <div style={{ fontSize: 8, letterSpacing: 3, color: scrolled || menuOpen ? '#6a994e' : 'rgba(255,255,255,0.7)', textTransform: 'uppercase', transition: 'color 0.3s' }}>Astrovastu</div>
          </div>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {navItems.map(item => (
              <a key={item} onClick={() => handleNav(item)} style={{
                fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', cursor: 'pointer',
                color: activeSection === item ? PALETTE.accentColor : (scrolled ? '#386641' : 'rgba(255,255,255,0.85)'),
                fontWeight: activeSection === item ? 600 : 400, textDecoration: 'none', transition: 'color 0.3s',
                borderBottom: activeSection === item ? `2px solid ${PALETTE.accentColor}` : '2px solid transparent', paddingBottom: 4,
              }}>{item}</a>
            ))}
            <button onClick={() => handleNav('Contact')} style={{
              background: '#bc4749', color: '#fff', border: 'none',
              padding: '10px 22px', borderRadius: 4, fontSize: 11, letterSpacing: 1.5,
              textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600,
            }}>Book Now</button>
          </div>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 5,
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2,
                background: scrolled || menuOpen ? '#386641' : '#fff',
                borderRadius: 2, transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                  : 'scaleX(0)'
                  : 'none',
              }}></span>
            ))}
          </button>
        )}
      </div>

      {/* Mobile Dropdown */}
      {isMobile && menuOpen && (
        <div style={{ background: '#f2e8cf', padding: '16px 20px 24px', borderTop: '1px solid rgba(56,102,65,0.1)' }}>
          {navItems.map(item => (
            <div key={item} onClick={() => handleNav(item)} style={{
              padding: '14px 0', fontSize: 14, fontWeight: activeSection === item ? 600 : 400,
              color: activeSection === item ? '#386641' : '#555',
              borderBottom: '1px solid rgba(56,102,65,0.08)', cursor: 'pointer',
              letterSpacing: 1, textTransform: 'uppercase',
            }}>{item}</div>
          ))}
          <button onClick={() => handleNav('Contact')} style={{
            background: '#bc4749', color: '#fff', border: 'none', width: '100%',
            padding: '14px', borderRadius: 4, fontSize: 13, fontWeight: 600,
            letterSpacing: 1, cursor: 'pointer', textTransform: 'uppercase', marginTop: 16,
          }}>Book Now</button>
        </div>
      )}
    </nav>
  );
}

function HeroSection({ onNav }) {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';

  return (
    <section id="Home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: `linear-gradient(170deg, rgba(56,102,65,0.82) 0%, rgba(0,0,0,0.62) 100%), url('hero-bg.jpg')`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      position: 'relative', textAlign: 'center', overflow: 'hidden',
      padding: isMobile ? '100px 20px 60px' : '0',
    }}>
      <MandalaPattern />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 700, padding: '0 20px' }}>
        <div style={{ fontSize: isMobile ? 10 : 13, letterSpacing: isMobile ? 4 : 6, color: '#a7c957', textTransform: 'uppercase', marginBottom: 20 }}>
          Astrology • Vastu • Harmony
        </div>
        <h1 style={{ fontSize: isMobile ? 38 : 64, fontFamily: "'Playfair Display', serif", color: '#f2e8cf', lineHeight: 1.15, margin: '0 0 14px' }}>
          Shubh Dhristi<br /><span style={{ color: '#a7c957' }}>Astrovastu</span>
        </h1>
        <p style={{ fontSize: isMobile ? 17 : 22, color: 'rgba(242,232,207,0.85)', lineHeight: 1.5, marginBottom: 12, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
          Higher Vision. Better Living.
        </p>
        <p style={{ fontSize: isMobile ? 14 : 16, color: 'rgba(242,232,207,0.6)', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 36px' }}>
          Transform your spaces and align your life with the ancient wisdom of Astro-Vastu, guided by Acharya Shruti Agarwal.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNav('Contact')} style={{ background: '#bc4749', color: '#fff', border: 'none', padding: isMobile ? '14px 28px' : '16px 36px', borderRadius: 4, fontSize: isMobile ? 12 : 14, fontWeight: 700, letterSpacing: 1, cursor: 'pointer', textTransform: 'uppercase' }}>Book Consultation</button>
          <button onClick={() => onNav('Services')} style={{ background: 'transparent', color: '#f2e8cf', border: '1px solid rgba(242,232,207,0.4)', padding: isMobile ? '14px 28px' : '16px 36px', borderRadius: 4, fontSize: isMobile ? 12 : 14, fontWeight: 600, letterSpacing: 1, cursor: 'pointer', textTransform: 'uppercase' }}>Our Services</button>
        </div>
      </div>
    </section>
  );
}

function MandalaPattern() {
  return (
    <svg viewBox="0 0 600 600" style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', width: '55%', opacity: 0.06, pointerEvents: 'none' }}>
      <circle cx="300" cy="300" r="280" fill="none" stroke="#f2e8cf" strokeWidth="0.5" />
      <circle cx="300" cy="300" r="220" fill="none" stroke="#f2e8cf" strokeWidth="0.5" />
      <circle cx="300" cy="300" r="160" fill="none" stroke="#f2e8cf" strokeWidth="0.5" />
      <circle cx="300" cy="300" r="100" fill="none" stroke="#f2e8cf" strokeWidth="0.5" />
      {[0,30,60,90,120,150].map(a => (
        <line key={a} x1="300" y1="20" x2="300" y2="580" stroke="#f2e8cf" strokeWidth="0.3" transform={`rotate(${a} 300 300)`} />
      ))}
    </svg>
  );
}

function AboutSection() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const stacked = isMobile || isTablet;

  return (
    <section id="About" style={{ padding: isMobile ? '72px 20px' : '120px 32px', background: '#f2e8cf' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: stacked ? '1fr' : '1fr 1fr', gap: stacked ? 40 : 80, alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: 400, aspectRatio: '4/5', borderRadius: 8, background: '#e8ddc0', position: 'relative', overflow: 'hidden' }}>
            <img src="acharya-shruti.jpg" alt="Acharya Shruti Agarwal" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            <div style={{ position: 'absolute', top: -2, left: -2, width: 60, height: 60, borderTop: '3px solid #bc4749', borderLeft: '3px solid #bc4749' }}></div>
            <div style={{ position: 'absolute', bottom: -2, right: -2, width: 60, height: 60, borderBottom: '3px solid #bc4749', borderRight: '3px solid #bc4749' }}></div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 4, color: '#6a994e', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500 }}>About</div>
          <h2 style={{ fontSize: isMobile ? 30 : 42, fontFamily: "'Playfair Display', serif", color: '#386641', lineHeight: 1.2, margin: '0 0 16px' }}>Acharya Shruti Agarwal</h2>
          <div style={{ width: 50, height: 3, background: '#a7c957', marginBottom: 24, borderRadius: 2 }}></div>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: '0 0 16px' }}>
            With formal training in Astrology and Vastu from ICAS Lucknow, Acharya Shruti offers structured, insight-driven guidance to help individuals and families make confident life decisions.
          </p>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: '0 0 16px' }}>
            Her approach blends classical astrological wisdom with practical Vastu solutions — creating harmonious spaces that enhance well-being, balance, and quality of living.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 28 }}>
            {[['ICAS Lucknow', 'Certified'], ['Vedic Astrology', 'Expertise'], ['Vastu Shastra', 'Specialist'], ['500+ Clients', 'Consulted']].map(([t, s]) => (
              <div key={t} style={{ padding: '14px 16px', background: '#fff', borderRadius: 6, borderLeft: '3px solid #386641' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#386641' }}>{t}</div>
                <div style={{ fontSize: 10, color: '#999', textTransform: 'uppercase', letterSpacing: 1, marginTop: 2 }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceIcons = {
  residential: (color) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" /><path d="M9 21V12h6v9" />
    </svg>
  ),
  commercial: (color) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="1" /><path d="M2 9h20M9 3v18M15 9v12" />
    </svg>
  ),
  industrial: (color) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 21V9l5-4v4l5-4v4l5-4v16H2z" /><rect x="9" y="15" width="3" height="6" /><rect x="14" y="13" width="3" height="8" />
    </svg>
  ),
  astrovastu: (color) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  ),
  corrections: (color) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
    </svg>
  ),
  birthchart: (color) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="8" /><line x1="12" y1="16" x2="12" y2="22" /><line x1="2" y1="12" x2="8" y2="12" /><line x1="16" y1="12" x2="22" y2="12" />
    </svg>
  ),
};

function ServicesSection() {
  const bp = useBreakpoint();
  const cols = bp === 'mobile' ? '1fr' : bp === 'tablet' ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  const isMobile = bp === 'mobile';

  const services = [
    { iconKey: 'residential', title: 'Residential Vastu', desc: 'Create harmony and balance in your living space. Improve positive energy flow following Vastu principles for your home.' },
    { iconKey: 'commercial',  title: 'Commercial Vastu', desc: 'Create a harmonious work environment by balancing energies. Boost employee productivity and attract success.' },
    { iconKey: 'industrial',  title: 'Industrial Vastu', desc: 'Harmonious factory layout bringing positive energy for better production, worker satisfaction, and business growth.' },
    { iconKey: 'astrovastu',  title: 'Astro-Vastu', desc: 'Integrates Vastu Shastra with Vedic Astrology, aligning your space with your unique planetary positions for hyper-personalized solutions.' },
    { iconKey: 'corrections', title: 'Vastu Corrections', desc: 'Guidance on room placements, directions, and design remedies to correct energy imbalances without structural changes.' },
    { iconKey: 'birthchart',  title: 'Birth Chart Analysis', desc: 'In-depth analysis combining Vastu principles and your birth chart to provide tailored guidance for your space.' },
  ];

  return (
    <section id="Services" style={{ padding: isMobile ? '72px 20px' : '120px 32px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: '#6a994e', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500, textAlign: 'center' }}>What We Offer</div>
        <h2 style={{ fontSize: isMobile ? 30 : 42, fontFamily: "'Playfair Display', serif", color: '#386641', lineHeight: 1.2, margin: '0 0 16px', textAlign: 'center' }}>Our Services</h2>
        <p style={{ fontSize: 15, color: '#666', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 48px', textAlign: 'center' }}>
          Comprehensive Astro-Vastu solutions for residential, commercial, and industrial spaces.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 20 }}>
          {services.map((s, i) => <ServiceCard key={i} service={s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = React.useState(false);
  const iconColor = hovered ? '#a7c957' : '#386641';
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#386641' : '#f2e8cf', borderRadius: 8, padding: '32px 24px', textAlign: 'left',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(56,102,65,0.15)' : '0 2px 8px rgba(0,0,0,0.03)',
        transition: 'all 0.35s ease',
      }}>
      <div style={{
        width: 48, height: 48, borderRadius: 8,
        background: hovered ? 'rgba(167,201,87,0.2)' : 'rgba(56,102,65,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
        transition: 'all 0.35s ease',
      }}>{ServiceIcons[service.iconKey](iconColor)}</div>
      <h3 style={{ fontSize: 17, fontWeight: 600, color: hovered ? '#f2e8cf' : '#386641', margin: '0 0 10px', fontFamily: "'Playfair Display', serif", transition: 'color 0.35s' }}>{service.title}</h3>
      <p style={{ fontSize: 14, color: hovered ? 'rgba(242,232,207,0.7)' : '#666', lineHeight: 1.7, margin: 0, transition: 'color 0.35s' }}>{service.desc}</p>
    </div>
  );
}

function ProcessSection() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const cols = bp === 'desktop' ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)';

  const steps = [
    { num: '01', title: 'Initial Consultation', desc: 'Share your concerns and goals. We understand your space and astrological profile.' },
    { num: '02', title: 'Analysis & Assessment', desc: 'Detailed evaluation combining Vastu principles and your birth chart for tailored insights.' },
    { num: '03', title: 'Personalized Report', desc: 'Receive a comprehensive report with actionable recommendations and remedies.' },
    { num: '04', title: 'Implementation Support', desc: 'Guided walkthroughs and ongoing support to implement changes effectively.' },
  ];

  return (
    <section id="Process" style={{ padding: isMobile ? '72px 20px' : '120px 32px', background: '#386641', position: 'relative', overflow: 'hidden' }}>
      <MandalaPattern />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: '#a7c957', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500, textAlign: 'center' }}>How It Works</div>
        <h2 style={{ fontSize: isMobile ? 30 : 42, fontFamily: "'Playfair Display', serif", color: '#f2e8cf', lineHeight: 1.2, margin: '0 0 16px', textAlign: 'center' }}>Our Consultation Process</h2>
        <p style={{ fontSize: 15, color: 'rgba(242,232,207,0.6)', textAlign: 'center', maxWidth: 550, margin: '0 auto 48px', lineHeight: 1.7 }}>
          A structured, transparent process designed to bring clarity and transformation.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 28 : 32 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%', margin: '0 auto 16px',
                border: '2px solid #a7c957',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 700, color: '#a7c957', fontFamily: "'Playfair Display', serif",
              }}>{s.num}</div>
              <h3 style={{ fontSize: 16, color: '#f2e8cf', margin: '0 0 8px', fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(242,232,207,0.55)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = React.useState(0);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const touchStartX = React.useRef(null);
  const timerRef = React.useRef(null);

  const testimonials = [
    { name: 'Rajesh Sharma', role: 'Homeowner, Delhi', text: 'Acharya Shruti\'s guidance transformed our home. The energy shift was palpable from day one. Our family harmony improved significantly.' },
    { name: 'Priya Mehta', role: 'Business Owner, Mumbai', text: 'After implementing the Vastu corrections for our office, we noticed a remarkable improvement in team productivity and client relationships.' },
    { name: 'Ankit Gupta', role: 'IT Professional, Bangalore', text: 'The Astro-Vastu consultation was eye-opening. The personalized approach considering my birth chart made all the difference.' },
  ];

  const goTo = (i) => setActive((i + testimonials.length) % testimonials.length);

  // Auto-scroll every 4 seconds, resets on manual interaction
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(a => (a + 1) % testimonials.length), 4000);
  };

  React.useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDotClick = (i) => { goTo(i); resetTimer(); };

  // Swipe support
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(active + (diff > 0 ? 1 : -1)); resetTimer(); }
    touchStartX.current = null;
  };

  return (
    <section id="Testimonials" style={{ padding: isMobile ? '72px 20px' : '120px 32px', background: '#f2e8cf' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: '#6a994e', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500 }}>Testimonials</div>
        <h2 style={{ fontSize: isMobile ? 30 : 42, fontFamily: "'Playfair Display', serif", color: '#386641', lineHeight: 1.2, margin: '0 0 36px' }}>What Our Clients Say</h2>
        <div
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
          style={{ padding: isMobile ? '32px 24px' : '48px 40px', background: '#fff', borderRadius: 12, userSelect: 'none' }}>
          <div style={{ fontSize: 48, color: '#bc4749', fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>"</div>
          <p style={{ fontSize: isMobile ? 15 : 18, color: '#444', lineHeight: 1.8, fontStyle: 'italic', margin: '0 0 24px', minHeight: isMobile ? 100 : 80, transition: 'opacity 0.3s' }}>
            {testimonials[active].text}
          </p>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#386641' }}>{testimonials[active].name}</div>
          <div style={{ fontSize: 13, color: '#999', marginTop: 4 }}>{testimonials[active].role}</div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', marginTop: 28 }}>
            <button onClick={() => { goTo(active - 1); resetTimer(); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#aaa', fontSize: 20, padding: '0 8px', lineHeight: 1 }}>‹</button>
            {testimonials.map((_, i) => (
              <div key={i} onClick={() => handleDotClick(i)} style={{
                width: i === active ? 28 : 8, height: 8, borderRadius: 4,
                background: i === active ? '#386641' : '#ddd',
                cursor: 'pointer', transition: 'all 0.3s',
              }}></div>
            ))}
            <button onClick={() => { goTo(active + 1); resetTimer(); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#aaa', fontSize: 20, padding: '0 8px', lineHeight: 1 }}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: '14px 16px', border: '1px solid #e0d9c4', borderRadius: 6, fontSize: 14,
  outline: 'none', fontFamily: 'inherit', width: '100%', boxSizing: 'border-box', background: '#fff',
};

function ContactSection() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const stacked = bp !== 'desktop';

  const initialForm = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '' };
  const [form, setForm] = React.useState(initialForm);
  const [status, setStatus] = React.useState({ state: 'idle', msg: '' });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    if (!form.firstName.trim() || !form.email.trim()) {
      setStatus({ state: 'error', msg: 'Please fill in at least your first name and email.' });
      return false;
    }
    return true;
  };

  const submitToFormspree = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus({ state: 'sending', msg: 'Sending...' });
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus({ state: 'success', msg: 'Thank you! We\'ll be in touch shortly.' });
        setForm(initialForm);
      } else {
        setStatus({ state: 'error', msg: 'Submission failed. Please try WhatsApp instead.' });
      }
    } catch {
      setStatus({ state: 'error', msg: 'Network error. Please try WhatsApp instead.' });
    }
  };

  const sendViaWhatsApp = () => {
    if (!validate()) return;
    const lines = [
      'Hi, I would like to request a consultation.',
      '',
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.service && `Service: ${form.service}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  };

  const statusColor = status.state === 'success' ? '#386641' : '#bc4749';

  return (
    <section id="Contact" style={{ padding: isMobile ? '72px 20px' : '120px 32px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: '#6a994e', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500, textAlign: 'center' }}>Get In Touch</div>
        <h2 style={{ fontSize: isMobile ? 30 : 42, fontFamily: "'Playfair Display', serif", color: '#386641', lineHeight: 1.2, margin: '0 0 8px', textAlign: 'center' }}>Book a Consultation</h2>
        <div style={{ display: 'grid', gridTemplateColumns: stacked ? '1fr' : '1fr 1fr', gap: stacked ? 40 : 60, marginTop: 48 }}>
          <form onSubmit={submitToFormspree} style={{ background: '#f2e8cf', padding: isMobile ? 24 : 40, borderRadius: 8 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <input placeholder="First Name" value={form.firstName} onChange={update('firstName')} style={inputStyle} />
                <input placeholder="Last Name" value={form.lastName} onChange={update('lastName')} style={inputStyle} />
              </div>
              <input type="email" placeholder="Email Address" value={form.email} onChange={update('email')} style={inputStyle} />
              <input placeholder="Phone Number" value={form.phone} onChange={update('phone')} style={inputStyle} />
              <select value={form.service} onChange={update('service')} style={{ ...inputStyle, color: form.service ? '#333' : '#999' }}>
                <option value="">Select Service</option>
                <option>Residential Vastu</option>
                <option>Commercial Vastu</option>
                <option>Industrial Vastu</option>
                <option>Astro-Vastu</option>
                <option>Birth Chart Analysis</option>
              </select>
              <textarea placeholder="Describe your concerns..." rows={4} value={form.message} onChange={update('message')} style={{ ...inputStyle, resize: 'vertical' }}></textarea>
              <button type="submit" disabled={status.state === 'sending'} style={{ background: '#bc4749', color: '#fff', border: 'none', padding: '16px', borderRadius: 4, fontSize: 13, fontWeight: 600, letterSpacing: 1, cursor: status.state === 'sending' ? 'not-allowed' : 'pointer', textTransform: 'uppercase', opacity: status.state === 'sending' ? 0.7 : 1 }}>
                {status.state === 'sending' ? 'Sending...' : 'Request Consultation'}
              </button>
              <button type="button" onClick={sendViaWhatsApp} style={{ background: 'transparent', color: '#386641', border: '1.5px solid #386641', padding: '14px', borderRadius: 4, fontSize: 13, fontWeight: 600, letterSpacing: 1, cursor: 'pointer', textTransform: 'uppercase' }}>
                Or Send via WhatsApp
              </button>
              {status.msg && (
                <div style={{ fontSize: 13, color: statusColor, textAlign: 'center' }}>{status.msg}</div>
              )}
            </div>
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <h3 style={{ fontSize: isMobile ? 20 : 22, fontFamily: "'Playfair Display', serif", color: '#386641', margin: '0 0 12px' }}>Let's Connect</h3>
              <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7 }}>
                Whether you're building a new home, redesigning your office, or seeking astrological guidance — we're here to help you align your spaces with positive energy.
              </p>
            </div>
            {[
              ['Email', 'shrutivrinda16@gmail.com'],
              ['Phone', '+91 9305512623 / 7007123232'],
              ['Address', 'Lucknow, Uttar Pradesh, India'],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 8, flexShrink: 0,
                  background: 'rgba(56,102,65,0.1)', color: '#386641',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700,
                }}>{label[0]}</div>
                <div>
                  <div style={{ fontSize: 11, color: '#999', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 14, color: '#333' }}>{val}</div>
                </div>
              </div>
            ))}
            <a href="https://wa.me/919305512623" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              background: '#25D366', color: '#fff', padding: '14px 28px', borderRadius: 8,
              fontSize: 15, fontWeight: 600, textDecoration: 'none', cursor: 'pointer',
            }}>Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';

  return (
    <footer style={{ background: '#2a4d34', padding: isMobile ? '48px 20px 28px' : '60px 32px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 36 }}>
        <div style={{ minWidth: 200 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#a7c957', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#386641', fontWeight: 700, fontSize: 15, fontFamily: "'Playfair Display', serif" }}>श</div>
            <div style={{ color: '#f2e8cf', fontWeight: 600, letterSpacing: 1, fontFamily: "'Playfair Display', serif", fontSize: 14 }}>SHUBH DHRISTI</div>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(242,232,207,0.4)', maxWidth: 260, lineHeight: 1.7 }}>Higher Vision. Better Living. Transforming spaces through the ancient wisdom of Astro-Vastu.</p>
        </div>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, color: '#a7c957', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>Quick Links</div>
            {['Home', 'About', 'Services', 'Contact'].map(item => (
              <div key={item} onClick={() => onNav(item)} style={{ fontSize: 14, color: 'rgba(242,232,207,0.5)', marginBottom: 10, cursor: 'pointer' }}>{item}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, color: '#a7c957', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>Services</div>
            {['Residential Vastu', 'Commercial Vastu', 'Astro-Vastu', 'Vastu Corrections'].map(item => (
              <div key={item} style={{ fontSize: 14, color: 'rgba(242,232,207,0.5)', marginBottom: 10 }}>{item}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '36px auto 0', borderTop: '1px solid rgba(242,232,207,0.1)', paddingTop: 20, textAlign: 'center', fontSize: 12, color: 'rgba(242,232,207,0.3)' }}>
        © 2026 Shubh Dhristi Astrovastu. All rights reserved.
      </div>
    </footer>
  );
}

Object.assign(window, {
  Navbar, HeroSection, AboutSection, ServicesSection, ProcessSection,
  TestimonialsSection, ContactSection, Footer,
});
