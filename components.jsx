/* Shubh Dhristi Astrovastu — v3 components
   Palette: #386641, #6a994e, #a7c957, #f2e8cf, #bc4749 */

const PALETTE = {
  primaryColor: '#386641',
  accentColor: '#a7c957',
  highlightColor: '#bc4749',
};

// Replace YOUR_FORM_ID with the endpoint from formspree.io after creating a form.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
const WHATSAPP_NUMBER = '919305512623';

function Navbar({ activeSection, onNav }) {
  const navItems = ['Home', 'About', 'Services', 'Process', 'Testimonials', 'Contact'];
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? '#f2e8cf' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(56,102,65,0.1)' : 'none',
      transition: 'all 0.4s ease', padding: scrolled ? '12px 0' : '20px 0',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => onNav('Home')}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%', background: PALETTE.primaryColor,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#f2e8cf', fontWeight: 700, fontSize: 18, fontFamily: "'Playfair Display', serif"
          }}>श</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: scrolled ? PALETTE.primaryColor : '#fff', letterSpacing: 1, fontFamily: "'Playfair Display', serif", transition: 'color 0.3s' }}>SHUBH DHRISTI</div>
            <div style={{ fontSize: 9, letterSpacing: 3, color: scrolled ? '#6a994e' : 'rgba(255,255,255,0.7)', textTransform: 'uppercase', transition: 'color 0.3s' }}>Astrovastu</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {navItems.map(item => (
            <a key={item} onClick={() => onNav(item)} style={{
              fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', cursor: 'pointer',
              color: activeSection === item ? PALETTE.accentColor : (scrolled ? '#386641' : 'rgba(255,255,255,0.85)'),
              fontWeight: activeSection === item ? 600 : 400, textDecoration: 'none', transition: 'color 0.3s',
              borderBottom: activeSection === item ? `2px solid ${PALETTE.accentColor}` : '2px solid transparent', paddingBottom: 4,
            }}>{item}</a>
          ))}
          <button onClick={() => onNav('Contact')} style={{
            background: '#bc4749', color: '#fff', border: 'none',
            padding: '10px 24px', borderRadius: 4, fontSize: 12, letterSpacing: 1.5,
            textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600,
          }}>Book Now</button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection({ onNav }) {
  return (
    <section id="Home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: `linear-gradient(170deg, rgba(56,102,65,0.8) 0%, rgba(0,0,0,0.6) 100%), url('hero-bg.jpg')`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      position: 'relative', textAlign: 'center', overflow: 'hidden',
    }}>
      <MandalaPattern />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 700, padding: '0 32px' }}>
        <div style={{ fontSize: 13, letterSpacing: 6, color: '#a7c957', textTransform: 'uppercase', marginBottom: 24 }}>Astrology • Vastu • Harmony</div>
        <h1 style={{ fontSize: 64, fontFamily: "'Playfair Display', serif", color: '#f2e8cf', lineHeight: 1.1, margin: '0 0 12px' }}>
          Shubh Dhristi<br /><span style={{ color: '#a7c957' }}>Astrovastu</span>
        </h1>
        <p style={{ fontSize: 22, color: 'rgba(242,232,207,0.8)', lineHeight: 1.5, marginBottom: 12, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
          Higher Vision. Better Living.
        </p>
        <p style={{ fontSize: 16, color: 'rgba(242,232,207,0.6)', lineHeight: 1.7, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
          Transform your spaces and align your life with the ancient wisdom of Astro-Vastu, guided by Acharya Shruti Agarwal.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <button onClick={() => onNav('Contact')} style={{ background: '#bc4749', color: '#fff', border: 'none', padding: '16px 36px', borderRadius: 4, fontSize: 14, fontWeight: 700, letterSpacing: 1, cursor: 'pointer', textTransform: 'uppercase' }}>Book Consultation</button>
          <button onClick={() => onNav('Services')} style={{ background: 'transparent', color: '#f2e8cf', border: '1px solid rgba(242,232,207,0.4)', padding: '16px 36px', borderRadius: 4, fontSize: 14, fontWeight: 600, letterSpacing: 1, cursor: 'pointer', textTransform: 'uppercase' }}>Our Services</button>
        </div>
      </div>
    </section>
  );
}

function MandalaPattern() {
  return (
    <svg viewBox="0 0 600 600" style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', width: '55%', opacity: 0.06 }}>
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
  return (
    <section id="About" style={{ padding: '120px 32px', background: '#f2e8cf' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ width: 400, height: 500, borderRadius: 8, background: '#e8ddc0', position: 'relative', overflow: 'hidden' }}>
            <img src="acharya-shruti.jpg" alt="Acharya Shruti Agarwal" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            <div style={{ position: 'absolute', top: -2, left: -2, width: 60, height: 60, borderTop: '3px solid #bc4749', borderLeft: '3px solid #bc4749' }}></div>
            <div style={{ position: 'absolute', bottom: -2, right: -2, width: 60, height: 60, borderBottom: '3px solid #bc4749', borderRight: '3px solid #bc4749' }}></div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, letterSpacing: 4, color: '#6a994e', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500 }}>About</div>
          <h2 style={{ fontSize: 42, fontFamily: "'Playfair Display', serif", color: '#386641', lineHeight: 1.2, margin: '0 0 16px' }}>Acharya Shruti Agarwal</h2>
          <div style={{ width: 50, height: 3, background: '#a7c957', marginBottom: 24, borderRadius: 2 }}></div>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: '0 0 16px' }}>
            With formal training in Astrology and Vastu from ICAS Chennai, Acharya Shruti offers structured, insight-driven guidance to help individuals and families make confident life decisions.
          </p>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: '0 0 16px' }}>
            Her approach blends classical astrological wisdom with practical Vastu solutions — creating harmonious spaces that enhance well-being, balance, and quality of living.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 32 }}>
            {[['ICAS Chennai', 'Certified'], ['Vedic Astrology', 'Expertise'], ['Vastu Shastra', 'Specialist'], ['500+ Clients', 'Consulted']].map(([t, s]) => (
              <div key={t} style={{ padding: '16px 20px', background: '#fff', borderRadius: 6, borderLeft: '3px solid #386641' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#386641' }}>{t}</div>
                <div style={{ fontSize: 11, color: '#999', textTransform: 'uppercase', letterSpacing: 1, marginTop: 2 }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: '🏠', title: 'Residential Vastu', desc: 'Create harmony and balance in your living space. Improve positive energy flow following Vastu principles for your home.' },
    { icon: '🏢', title: 'Commercial Vastu', desc: 'Create a harmonious work environment by balancing energies. Boost employee productivity and attract success.' },
    { icon: '🏭', title: 'Industrial Vastu', desc: 'Harmonious factory layout bringing positive energy for better production, worker satisfaction, and business growth.' },
    { icon: '✧', title: 'Astro-Vastu', desc: 'Integrates Vastu Shastra with Vedic Astrology, aligning your space with your unique planetary positions for hyper-personalized solutions.' },
    { icon: '◎', title: 'Vastu Corrections', desc: 'Guidance on room placements, directions, and design remedies to correct energy imbalances without structural changes.' },
    { icon: '☉', title: 'Birth Chart Analysis', desc: 'In-depth analysis combining Vastu principles and your birth chart to provide tailored guidance for your space.' },
  ];

  return (
    <section id="Services" style={{ padding: '120px 32px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: 4, color: '#6a994e', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500, textAlign: 'center' }}>What We Offer</div>
        <h2 style={{ fontSize: 42, fontFamily: "'Playfair Display', serif", color: '#386641', lineHeight: 1.2, margin: '0 0 16px', textAlign: 'center' }}>Our Services</h2>
        <p style={{ fontSize: 15, color: '#666', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 60px', textAlign: 'center' }}>
          Comprehensive Astro-Vastu solutions for residential, commercial, and industrial spaces.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {services.map((s, i) => <ServiceCard key={i} service={s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#386641' : '#f2e8cf', borderRadius: 8, padding: '40px 28px', textAlign: 'left',
        border: 'none', cursor: 'pointer',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(56,102,65,0.15)' : '0 2px 8px rgba(0,0,0,0.03)',
        transition: 'all 0.35s ease',
      }}>
      <div style={{
        width: 50, height: 50, borderRadius: 8,
        background: hovered ? 'rgba(167,201,87,0.2)' : 'rgba(56,102,65,0.1)',
        color: hovered ? '#a7c957' : '#386641',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 20,
        transition: 'all 0.35s ease',
      }}>{service.icon}</div>
      <h3 style={{ fontSize: 18, fontWeight: 600, color: hovered ? '#f2e8cf' : '#386641', margin: '0 0 10px', fontFamily: "'Playfair Display', serif", transition: 'color 0.35s' }}>{service.title}</h3>
      <p style={{ fontSize: 14, color: hovered ? 'rgba(242,232,207,0.7)' : '#666', lineHeight: 1.7, margin: 0, transition: 'color 0.35s' }}>{service.desc}</p>
    </div>
  );
}

function ProcessSection() {
  const steps = [
    { num: '01', title: 'Initial Consultation', desc: 'Share your concerns and goals. We understand your space and astrological profile.' },
    { num: '02', title: 'Analysis & Assessment', desc: 'Detailed evaluation combining Vastu principles and your birth chart for tailored insights.' },
    { num: '03', title: 'Personalized Report', desc: 'Receive a comprehensive report with actionable recommendations and remedies.' },
    { num: '04', title: 'Implementation Support', desc: 'Guided walkthroughs and ongoing support to implement changes effectively.' },
  ];

  return (
    <section id="Process" style={{ padding: '120px 32px', background: '#386641', position: 'relative', overflow: 'hidden' }}>
      <MandalaPattern />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: 12, letterSpacing: 4, color: '#a7c957', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500, textAlign: 'center' }}>How It Works</div>
        <h2 style={{ fontSize: 42, fontFamily: "'Playfair Display', serif", color: '#f2e8cf', lineHeight: 1.2, margin: '0 0 16px', textAlign: 'center' }}>Our Consultation Process</h2>
        <p style={{ fontSize: 16, color: 'rgba(242,232,207,0.6)', textAlign: 'center', maxWidth: 550, margin: '0 auto 64px', lineHeight: 1.7 }}>
          A structured, transparent process designed to bring clarity and transformation.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: 70, height: 70, borderRadius: '50%', margin: '0 auto 20px',
                border: '2px solid #a7c957',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, fontWeight: 700, color: '#a7c957', fontFamily: "'Playfair Display', serif",
              }}>{s.num}</div>
              <h3 style={{ fontSize: 17, color: '#f2e8cf', margin: '0 0 8px', fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
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
  const testimonials = [
    { name: 'Rajesh Sharma', role: 'Homeowner, Delhi', text: 'Acharya Shruti\'s guidance transformed our home. The energy shift was palpable from day one. Our family harmony improved significantly.' },
    { name: 'Priya Mehta', role: 'Business Owner, Mumbai', text: 'After implementing the Vastu corrections for our office, we noticed a remarkable improvement in team productivity and client relationships.' },
    { name: 'Ankit Gupta', role: 'IT Professional, Bangalore', text: 'The Astro-Vastu consultation was eye-opening. The personalized approach considering my birth chart made all the difference.' },
  ];

  return (
    <section id="Testimonials" style={{ padding: '120px 32px', background: '#f2e8cf' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: 4, color: '#6a994e', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500, textAlign: 'center' }}>Testimonials</div>
        <h2 style={{ fontSize: 42, fontFamily: "'Playfair Display', serif", color: '#386641', lineHeight: 1.2, margin: '0 0 16px', textAlign: 'center' }}>What Our Clients Say</h2>
        <div style={{ marginTop: 48, padding: '48px 40px', background: '#fff', borderRadius: 12 }}>
          <div style={{ fontSize: 56, color: '#bc4749', fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>"</div>
          <p style={{ fontSize: 18, color: '#444', lineHeight: 1.8, fontStyle: 'italic', margin: '0 0 24px' }}>{testimonials[active].text}</p>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#386641' }}>{testimonials[active].name}</div>
          <div style={{ fontSize: 13, color: '#999', marginTop: 4 }}>{testimonials[active].role}</div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 32 }}>
            {testimonials.map((_, i) => (
              <div key={i} onClick={() => setActive(i)} style={{
                width: i === active ? 28 : 8, height: 8, borderRadius: 4,
                background: i === active ? '#386641' : '#ddd',
                cursor: 'pointer', transition: 'all 0.3s',
              }}></div>
            ))}
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
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const statusColor = status.state === 'success' ? '#386641' : status.state === 'error' ? '#bc4749' : '#666';

  return (
    <section id="Contact" style={{ padding: '120px 32px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 12, letterSpacing: 4, color: '#6a994e', textTransform: 'uppercase', marginBottom: 12, fontWeight: 500, textAlign: 'center' }}>Get In Touch</div>
          <h2 style={{ fontSize: 42, fontFamily: "'Playfair Display', serif", color: '#386641', lineHeight: 1.2, margin: '0 0 16px', textAlign: 'center' }}>Book a Consultation</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginTop: 60 }}>
          <form onSubmit={submitToFormspree} style={{ background: '#f2e8cf', padding: 40, borderRadius: 8 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
              <button type="submit" disabled={status.state === 'sending'} style={{ background: '#bc4749', color: '#fff', border: 'none', padding: '16px 36px', borderRadius: 4, fontSize: 14, fontWeight: 600, letterSpacing: 1, cursor: status.state === 'sending' ? 'not-allowed' : 'pointer', textTransform: 'uppercase', opacity: status.state === 'sending' ? 0.7 : 1 }}>
                {status.state === 'sending' ? 'Sending...' : 'Request Consultation'}
              </button>
              <button type="button" onClick={sendViaWhatsApp} style={{ background: 'transparent', color: '#386641', border: '1.5px solid #386641', padding: '14px 36px', borderRadius: 4, fontSize: 13, fontWeight: 600, letterSpacing: 1, cursor: 'pointer', textTransform: 'uppercase' }}>
                Or Send via WhatsApp
              </button>
              {status.msg && (
                <div style={{ fontSize: 13, color: statusColor, textAlign: 'center', marginTop: 4 }}>{status.msg}</div>
              )}
            </div>
          </form>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 8 }}>
            <div>
              <h3 style={{ fontSize: 22, fontFamily: "'Playfair Display', serif", color: '#386641', margin: '0 0 16px' }}>Let's Connect</h3>
              <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7 }}>
                Whether you're building a new home, redesigning your office, or seeking astrological guidance — we're here to help you align your spaces with positive energy.
              </p>
            </div>
            {[
              ['Email', 'shrutivrinda16@gmail.com'],
              ['Phone', '+91 9305512623 / 9889360562'],
              ['Address', 'L-636, Indralok Colony, Krishna Nagar, Alambagh, Lucknow'],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 8, flexShrink: 0,
                  background: 'rgba(56,102,65,0.1)', color: '#386641',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700,
                }}>{label[0]}</div>
                <div>
                  <div style={{ fontSize: 12, color: '#999', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 15, color: '#333' }}>{val}</div>
                </div>
              </div>
            ))}
            <a href="https://wa.me/919305512623" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              background: '#25D366', color: '#fff', padding: '14px 28px', borderRadius: 8,
              fontSize: 15, fontWeight: 600, textDecoration: 'none', cursor: 'pointer', marginTop: 8,
            }}>Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  return (
    <footer style={{ background: '#2a4d34', padding: '60px 32px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#a7c957', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#386641', fontWeight: 700, fontSize: 16, fontFamily: "'Playfair Display', serif" }}>श</div>
            <div style={{ color: '#f2e8cf', fontWeight: 600, letterSpacing: 1, fontFamily: "'Playfair Display', serif" }}>SHUBH DHRISTI</div>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(242,232,207,0.4)', maxWidth: 280, lineHeight: 1.7 }}>Higher Vision. Better Living. Transforming spaces through the ancient wisdom of Astro-Vastu.</p>
        </div>
        <div style={{ display: 'flex', gap: 48 }}>
          <div>
            <div style={{ fontSize: 12, color: '#a7c957', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Quick Links</div>
            {['Home', 'About', 'Services', 'Contact'].map(item => (
              <div key={item} onClick={() => onNav(item)} style={{ fontSize: 14, color: 'rgba(242,232,207,0.5)', marginBottom: 10, cursor: 'pointer' }}>{item}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#a7c957', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
            {['Residential Vastu', 'Commercial Vastu', 'Astro-Vastu', 'Vastu Corrections'].map(item => (
              <div key={item} style={{ fontSize: 14, color: 'rgba(242,232,207,0.5)', marginBottom: 10 }}>{item}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '40px auto 0', borderTop: '1px solid rgba(242,232,207,0.1)', paddingTop: 24, textAlign: 'center', fontSize: 12, color: 'rgba(242,232,207,0.3)' }}>
        © 2026 Shubh Dhristi Astrovastu. All rights reserved.
      </div>
    </footer>
  );
}

Object.assign(window, {
  Navbar, HeroSection, AboutSection, ServicesSection, ProcessSection,
  TestimonialsSection, ContactSection, Footer,
});
