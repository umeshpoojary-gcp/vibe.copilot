import './App.css'

const navItems = ['About', 'Experience', 'Certifications', 'Portfolio', 'Contact']

const statItems = [
  { label: 'Years of IT leadership', value: '18+' },
  { label: 'Cloud migrations delivered', value: '1000+ VMs' },
  { label: 'Applications assessed', value: '500+' },
  { label: 'Enterprise sectors served', value: 'Energy • Banking • Legal' },
]

const expertise = [
  'Azure Architecture',
  'Cloud Migration Strategy',
  'Enterprise Hybrid Integration',
  'Zero Trust & IAM',
  'Disaster Recovery',
  'Multi-Cloud Advisory',
  'DevSecOps Enablement',
  'AI & Automation',
]

const timeline = [
  {
    company: 'Sogeti',
    role: 'Sr. Manager / Sr. Cloud Architect',
    period: 'February 2022 — Present',
    location: 'United States',
    summary:
      'Leading cloud modernization programs for Fortune 500 organizations, including assessment of 500+ applications and migration planning for Azure-first transformations.',
  },
  {
    company: 'LTI - Larsen & Toubro Infotech',
    role: 'Manager - Cloud and Infrastructure Services',
    period: 'July 2014 — February 2022',
    location: 'Houston, TX',
    summary:
      'Delivered large-scale Azure migrations, unified SSO environments, and secure enterprise authentication patterns using Entra ID, F5 APM, OAuth, SAML, and OIDC.',
  },
  {
    company: 'Wipro',
    role: 'Manager / Solution Architect',
    period: 'November 2008 — November 2013',
    location: 'Powai, Mumbai',
    summary:
      'Designed end-to-end infrastructure solutions for government and enterprise accounts, spanning DR, HA, virtualization, and turnkey digital modernization programs.',
  },
  {
    company: 'Wipro',
    role: 'Technical Consultant',
    period: 'August 2006 — November 2008',
    location: 'Mumbai',
    summary:
      'Supported global Microsoft Exchange environments and enterprise messaging platforms, resolving high-impact production issues with a focus on reliability and customer trust.',
  },
]

const projectCards = [
  {
    title: 'Cloud Migration Playbook',
    category: 'Enterprise transformation',
    description:
      'A strategic migration framework combining application assessment, cost modeling, and phased execution to reduce risk and optimize cloud ROI.',
  },
  {
    title: 'Zero Trust Identity Modernization',
    category: 'Security architecture',
    description:
      'Design patterns for secure access, legacy application modernization, and SSO consolidation using Microsoft Entra ID and federation protocols.',
  },
  {
    title: 'AI-Augmented Operations',
    category: 'Automation & intelligence',
    description:
      'Roadmaps for smarter monitoring, automation, and operational decision-making using GenAI and cloud-native tooling for enterprise teams.',
  },
]

const certificationList = [
  'Microsoft Certified: Azure Solutions Architect Expert',
  'Microsoft Certified: Azure Network Engineer Associate',
  'Microsoft Certified Professional',
  'Generative AI Automation Specialization',
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/umesh-poojary-90847920/' },
  { label: 'Email', href: 'mailto:umzy.in@gmail.com' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">UP</div>
          <div>
            <p className="brand-name">Umesh Poojary</p>
            <p className="brand-role">Senior Cloud Architect</p>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <p className="eyebrow">Enterprise cloud strategy • secure digital transformation</p>
            <h1>
              Building resilient cloud systems for the next chapter of business growth.
            </h1>
            <p className="lede">
              I’m Umesh, a senior enterprise cloud architect helping organizations move faster,
              modernize securely, and deliver measurable transformation across Azure, AWS, GCP,
              and AI-enabled platforms.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#portfolio">
                View Portfolio
              </a>
              <a className="secondary-btn" href="mailto:umzy.in@gmail.com">
                Let’s Connect
              </a>
            </div>

            <div className="mini-meta">
              <span>Katy, Texas</span>
              <span>•</span>
              <span>Available for strategic architecture engagements</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-glow" />
            <div className="panel-card">
              <p className="panel-label">Current focus</p>
              <h2>Azure-first modernization, hybrid platform design, and delivery acceleration.</h2>
              <ul>
                <li>Cloud adoption strategy and roadmap</li>
                <li>Migration execution and workload rationalization</li>
                <li>Zero trust identity and secure access design</li>
                <li>Business continuity and resiliency engineering</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stats-row" aria-label="High-level achievements">
          {statItems.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="content-grid">
          <div className="section-copy">
            <p className="section-kicker">About</p>
            <h2>Strategy-first leadership with a hands-on engineering mindset.</h2>
            <p>
              With extensive experience across enterprise technology, I help businesses navigate
              modernization with clarity — from legacy estates to secure, cloud-native operating
              models. My work blends architecture leadership, migration execution, solution design,
              and team enablement to turn complex transformation goals into measurable outcomes.
            </p>
            <p>
              I’ve led enterprise-scale cloud transformations across financial services, public sector,
              legal, and manufacturing environments, bringing together technical excellence,
              business continuity, and pragmatic execution under pressure.
            </p>
          </div>

          <div className="skill-panel">
            <p className="panel-label">Core expertise</p>
            <div className="tag-list">
              {expertise.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="timeline-section">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>Enterprise architecture work shaped by scale, trust, and delivery.</h2>
          </div>

          <div className="timeline">
            {timeline.map((role) => (
              <article key={`${role.company}-${role.role}`} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="role-header">
                    <div>
                      <p className="company-name">{role.company}</p>
                      <h3>{role.role}</h3>
                    </div>
                    <div className="role-meta">
                      <span>{role.period}</span>
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <p>{role.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="cert-section section-card">
          <div>
            <p className="section-kicker">Certifications</p>
            <h2>Trusted expertise backed by proven cloud credentials.</h2>
          </div>
          <ul className="cert-list">
            {certificationList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="portfolio" className="portfolio-section">
          <div className="section-heading">
            <p className="section-kicker">Portfolio</p>
            <h2>Future-ready case studies, ready to be showcased.</h2>
          </div>

          <div className="portfolio-grid">
            {projectCards.map((project) => (
              <article key={project.title} className="portfolio-card">
                <span className="portfolio-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#contact">Request details</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-panel section-card">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let’s design the next phase of your digital transformation.</h2>
          </div>

          <div className="contact-actions">
            <a className="primary-btn" href="mailto:umzy.in@gmail.com">
              umzy.in@gmail.com
            </a>
            <a className="secondary-btn" href="https://www.linkedin.com/in/umesh-poojary-90847920/" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </div>

          <div className="social-row">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
