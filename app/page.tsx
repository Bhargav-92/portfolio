import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Menu,
  Terminal,
  Trophy,
} from 'lucide-react'

const tools = ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'shadcn/ui', 'Material UI', 'Git', 'GitHub', 'HTML', 'CSS', 'React Hook Form', 'React Query']

const projects = [
  { name: 'UncleFix', stack: 'Next.js · React · TypeScript · Prisma · PostgreSQL', description: 'A service booking application with an end-to-end booking workflow.', tone: 'orange', live: true },
  { name: 'Pharma-Buddy', stack: 'React.js · Material UI · Node.js · MySQL · Stripe', description: 'A pharmacy-focused web application with payment integration.', tone: 'teal', live: true },
  { name: 'Customer Complaint', stack: 'MERN Stack · Material UI', description: 'A complaint management application built on the MERN stack.', tone: 'cream', live: false },
]

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span> / {children}</p>
}

function ButtonLink({ href, children, filled = false }: { href: string; children: React.ReactNode; filled?: boolean }) {
  return <a href={href} className={`button-link ${filled ? 'button-link-filled' : ''}`}>{children}<ArrowUpRight aria-hidden="true" /></a>
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home"><span>[ BT ]</span> Bhargav Thakar</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {['Home', 'About', 'Tools', 'Projects', 'Journey', 'Contact'].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`}><span>{String(index + 1).padStart(2, '0')}.</span> {item}</a>)}
        </nav>
        <a className="talk-link" href="#contact">Let&apos;s Talk <ArrowUpRight aria-hidden="true" /></a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">{['Home', 'About', 'Tools', 'Projects', 'Journey', 'Contact'].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`}><span>{String(index + 1).padStart(2, '0')}.</span> {item}</a>)}</nav>
        </details>
      </header>

      <div className="page-shell">
        <section id="home" className="hero section-grid">
          <div className="hero-copy">
            <p className="terminal-line"><span className="prompt">&gt;</span> const developer = {'{'}</p>
            <p className="terminal-line dim">&nbsp;&nbsp;role: &apos;front-end&apos;,</p>
            <p className="terminal-line dim">&nbsp;&nbsp;status: <span className="green">&apos;available&apos;</span></p>
            <p className="terminal-line dim">{'}'}</p>
            <h1>Hi, I&apos;m<br /><strong>Bhargav<br className="mobile-break" /> Thakar</strong><span className="cursor">_</span></h1>
            <p className="hero-role">Front-End Developer</p>
            <p className="hero-description">I build modern, responsive and user-friendly web interfaces using React.js, Next.js and TypeScript.</p>
            <div className="hero-actions"><ButtonLink href="#projects" filled>View My Work</ButtonLink><ButtonLink href="#contact">Get In Touch</ButtonLink></div>
            <div className="social-links"><a href="https://github.com" aria-label="GitHub"><Code2 /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Terminal /></a><a href="mailto:tkr.bhargav92@gmail.com" aria-label="Email"><Mail /></a></div>
          </div>
          <div className="console-art" aria-label="Developer workstation illustration">
            <div className="art-caption top">BUILD<br />DESIGN<br />LEARN<br />REPEAT</div>
            <div className="monitor"><div className="monitor-bar"><span /><span /><span /><b>bhargav.dev</b></div><div className="code-lines"><i>01</i><span><em>function</em> buildFuture() {'{'}</span><i>02</i><span>&nbsp;&nbsp;const idea = <strong>&apos;useful&apos;</strong>;</span><i>03</i><span>&nbsp;&nbsp;<em>return</em> idea;</span><i>04</i><span>{'}'}</span><i>05</i><span className="blink">▮</span></div></div>
            <div className="keyboard" /><div className="art-caption bottom"><span className="green">●</span> SYSTEM READY<br /><small>v.2026.01</small></div>
          </div>
        </section>

        <section id="about" className="content-section">
          <SectionLabel number="01">About Me</SectionLabel><div className="section-heading"><h2>More than<br /><em>just code.</em></h2><div><p className="lead-copy">I&apos;m a Front-End Developer with 2+ years of experience building clean, responsive and user-friendly web interfaces. I enjoy creating modern interfaces with React.js, Next.js and TypeScript and turning ideas into real products.</p></div></div>
          <div className="info-grid"><div><MapPin /><small>Location</small><strong>Rajkot, Gujarat</strong></div><div><BriefcaseBusiness /><small>Experience</small><strong>2+ Years</strong></div><div><GraduationCap /><small>Education</small><strong>MCA — Pursuing</strong></div><div><Heart /><small>Interests</small><strong>Gym, Movies, Travel, Coding</strong></div></div>
        </section>

        <section id="tools" className="content-section tools-section"><SectionLabel number="02">Tools I Work With</SectionLabel><div className="section-heading"><h2>My everyday<br /><em>toolkit.</em></h2><p className="mono-note">// the things I reach for every day</p></div><div className="tools-grid">{tools.map((tool, index) => <div className="tool-card" key={tool}><span className="tool-index">{String(index + 1).padStart(2, '0')}</span><Code2 /><strong>{tool}</strong></div>)}</div></section>

        <section id="projects" className="content-section"><SectionLabel number="03">Featured Projects</SectionLabel><div className="section-heading"><h2>Things I&apos;ve<br /><em>built.</em></h2><p className="mono-note">// selected work / 2022—2026</p></div><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><div className={`project-screen ${project.tone}`}><div className="screen-top"><span>PROJECT_{String(index + 1).padStart(2, '0')}</span><span>◼ ◼ ◼</span></div><div className="screen-art"><Terminal /><span>{project.name.toLowerCase().replace('-', '_')}</span><small>interface / product / web</small></div></div><div className="project-body"><div className="project-number">0{index + 1}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.stack.split(' · ').map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href="https://github.com" aria-label={`${project.name} on GitHub`}><Code2 /> GitHub</a>{project.live && <a href="#contact">Live Demo <ExternalLink /></a>}</div></div></article>)}</div></section>

        <section id="journey" className="content-section"><SectionLabel number="04">My Journey</SectionLabel><div className="section-heading"><h2>Where I&apos;ve<br /><em>been.</em></h2><p className="mono-note">// a short history of shipping things</p></div><div className="timeline"><article className="timeline-item"><div className="timeline-dot" /><div className="timeline-meta"><span>May 2023 — Present</span><strong>01 / NOW</strong></div><div className="timeline-content"><h3>Front-End Developer</h3><p className="company">Auranics Solution, Rajkot</p><ul><li>Build responsive interfaces using React.js, TypeScript and Next.js.</li><li>Work with Tailwind CSS, shadcn/ui and Material UI.</li><li>Develop reusable components and data-heavy interfaces.</li><li>Work with forms, authentication, RBAC and Git/GitHub.</li></ul></div></article><article className="timeline-item"><div className="timeline-dot" /><div className="timeline-meta"><span>Nov 2022 — Mar 2023</span><strong>02 / START</strong></div><div className="timeline-content"><h3>Junior Front-End Developer</h3><p className="company">ICEBIT, Rajkot</p><ul><li>Developed React.js interfaces and responsive UI.</li><li>Worked on live projects.</li><li>Contributed to UI requirements and user experience improvements.</li></ul></div></article></div></section>

        <section id="education" className="content-section education-section"><SectionLabel number="05">Education</SectionLabel><div className="education-grid"><div><span className="edu-year">2023 — 2025</span><h3>Master of Computer<br />Application (MCA)</h3><p>R.K. University <b>· CGPA: 9.00</b></p></div><div><span className="edu-year">2021 — 2023</span><h3>Bachelor of Computer<br />Application (BCA)</h3><p>R.K. University <b>· CGPA: 9.24</b></p></div><div><span className="edu-year">2019 — 2020</span><h3>Higher Secondary<br />(HSC)</h3><p>G.K. Dholakiya School, Rajkot <b>· 80.71%</b></p></div></div></section>

        <section className="content-section achievements"><SectionLabel number="06">Achievements</SectionLabel><div className="achievement-list"><div><Trophy /><span>University Ranker for strong academic performance <b>2021</b></span></div><div><Trophy /><span>Gold Medalist in BCA <b>2023</b></span></div><div><Trophy /><span>Grand Finale team member — New India Vibrant Hackathon <b>2023</b></span></div><div><Trophy /><span>B2 Business English Certificate — Cambridge Assessment</span></div></div></section>

        <section id="contact" className="contact-section"><div><SectionLabel number="07">Let&apos;s Connect</SectionLabel><h2>Let&apos;s build<br /><em>something useful.</em></h2><p>I&apos;m open to discussing interesting projects, opportunities and ideas.</p></div><div className="contact-actions"><ButtonLink href="https://github.com" filled><Code2 /> GitHub</ButtonLink><ButtonLink href="https://linkedin.com"><Terminal /> LinkedIn</ButtonLink><ButtonLink href="mailto:tkr.bhargav92@gmail.com"><Mail /> Email Me</ButtonLink></div></section>
      </div>
      <footer><span>&gt; Keep building. Keep learning. <b className="blink">█</b></span><span>© 2026 Bhargav Thakar</span></footer>
    </main>
  )
}
