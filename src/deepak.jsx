import React from "react";

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --primary: #e2e8f0;
    --accent: #818cf8;
    --accent-light: #a5b4fc;
    --bg: #0f172a;
    --card: #1e293b;
    --text: #cbd5e1;
    --muted: #94a3b8;
    --border: #334155;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', sans-serif;
    background: #0f172a;
    color: var(--text);
    line-height: 1.7;
  }

  nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(15,23,42,0.96);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    display: flex; justify-content: space-between; align-items: center;
  }
  nav .logo { color: #fff; font-weight: 700; font-size: 1.1rem; }
  nav ul { list-style: none; display: flex; gap: 2rem; }
  nav ul a { color: #cbd5e1; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
  nav ul a:hover { color: var(--accent-light); }

  .hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #312e81 100%);
    color: #fff;
    padding: 7rem 2rem 5rem;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 70% 50%, rgba(99,102,241,0.15) 0%, transparent 70%);
  }
  .hero-inner { position: relative; max-width: 750px; margin: 0 auto; }
  .hero-badge {
    display: inline-block;
    background: rgba(99,102,241,0.2);
    border: 1px solid rgba(99,102,241,0.4);
    color: var(--accent-light);
    padding: 0.35rem 1rem;
    border-radius: 999px;
    font-size: 0.85rem; font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .hero h1 { font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 1rem; letter-spacing: -0.5px; }
  .hero p.subtitle { font-size: 1.15rem; color: #94a3b8; margin-bottom: 1rem; }
  .hero p.desc { color: #64748b; font-size: 0.95rem; max-width: 560px; margin: 0 auto 2rem; }
  .hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .btn {
    padding: 0.7rem 1.8rem; border-radius: 8px; font-weight: 600;
    font-size: 0.9rem; text-decoration: none; transition: all 0.2s;
  }
  .btn-primary { background: var(--accent); color: #fff; }
  .btn-primary:hover { background: #4f46e5; transform: translateY(-2px); }
  .btn-outline { border: 1px solid #475569; color: #cbd5e1; }
  .btn-outline:hover { border-color: var(--accent-light); color: var(--accent-light); }

  section { padding: 5rem 2rem; background: #0f172a; }
  .container { max-width: 1000px; margin: 0 auto; }
  .section-label {
    font-size: 0.78rem; font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; color: var(--accent); margin-bottom: 0.4rem;
  }
  h2 { font-size: 2rem; font-weight: 700; color: #e2e8f0; margin-bottom: 2.5rem; }

  .about-card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);
  }
  .about-card p { font-size: 1.05rem; color: #cbd5e1; }

  .skills-bg { background: #0d1424; }
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; }
  .skill-card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 14px;
    padding: 1.8rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .skill-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(129,140,248,0.15); }
  .skill-icon { font-size: 1.8rem; margin-bottom: 0.8rem; }
  .skill-card h3 { font-size: 1rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.8rem; }
  .skill-card ul { list-style: none; }
  .skill-card li { font-size: 0.9rem; color: #94a3b8; padding: 0.3rem 0; border-bottom: 1px solid #334155; }
  .skill-card li:last-child { border-bottom: none; }

  .edu-list { display: flex; flex-direction: column; gap: 1.2rem; }
  .edu-card {
    background: #1e293b;
    border: 1px solid #334155;
    border-left: 4px solid #818cf8;
    border-radius: 12px;
    padding: 1.5rem 2rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }
  .edu-card h3 { font-size: 1.05rem; font-weight: 700; color: #e2e8f0; }
  .edu-card .school { color: #94a3b8; font-size: 0.9rem; margin-top: 0.3rem; }
  .edu-card .grade {
    display: inline-block; margin-top: 0.6rem;
    background: rgba(129,140,248,0.15); color: #a5b4fc;
    padding: 0.2rem 0.8rem; border-radius: 999px;
    font-size: 0.8rem; font-weight: 600;
  }

  .intern-bg { background: #0d1424; }
  .intern-card {
    background: linear-gradient(135deg, #1e293b, #1a1f35);
    border: 1px solid #334155;
    border-radius: 16px;
    padding: 2rem 2.5rem;
  }
  .intern-card h3 { font-size: 1.1rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.8rem; }
  .intern-card p { color: #94a3b8; font-size: 0.95rem; }

  .project-card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);
  }
  .project-card h3 { font-size: 1.3rem; font-weight: 700; color: #e2e8f0; margin-bottom: 1rem; }
  .project-card p { color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.2rem; }
  .tech-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .tag {
    background: rgba(129,140,248,0.15); color: #a5b4fc;
    padding: 0.3rem 0.9rem; border-radius: 999px;
    font-size: 0.8rem; font-weight: 600;
  }

  .achieve-bg { background: #0d1424; }
  .achieve-list { list-style: none; display: flex; flex-direction: column; gap: 1rem; }
  .achieve-list li {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    display: flex; align-items: center; gap: 1rem;
    font-size: 0.95rem; color: #cbd5e1;
  }
  .achieve-list li::before { content: '🏆'; font-size: 1.2rem; flex-shrink: 0; }

  .contact-section {
    background: linear-gradient(135deg, #0f172a, #1e1b4b);
    color: #fff; text-align: center;
  }
  .contact-section h2 { color: #fff; }
  .contact-section .section-label { color: #818cf8; }
  .contact-grid { display: flex; justify-content: center; flex-wrap: wrap; gap: 1.5rem; margin-top: 1rem; }
  .contact-item {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 1.2rem 2rem;
    display: flex; align-items: center; gap: 0.8rem;
    font-size: 0.95rem; color: #cbd5e1;
  }
  .contact-item .icon { font-size: 1.3rem; }

  footer {
    background: #0f172a;
    color: #475569;
    text-align: center;
    padding: 1.5rem;
    font-size: 0.85rem;
  }

  @media (max-width: 600px) {
    nav ul { gap: 1rem; }
    .hero { padding: 5rem 1.5rem 4rem; }
    h2 { font-size: 1.6rem; }
  }
`;

export default function Deepak() {
  return (
    <>
      <style>{styles}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <nav>
        <div className="logo">Deepak Kishore</div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Open to Opportunities</div>
          <h1>Deepak Kishore A.M</h1>
          <p className="subtitle">Aspiring Web Developer &amp; B.Sc Computer Science Student</p>
          <p className="desc">Passionate about web development and software technologies. Building real-world solutions with Python, SQL, HTML &amp; CSS.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <p className="section-label">Who I Am</p>
          <h2>About Me</h2>
          <div className="about-card">
            <p>I am a B.Sc Computer Science student from Government Arts College (Autonomous), Karur. I have a strong interest in web development and software technologies, and I enjoy learning new technical skills and building projects that solve real-world problems.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-bg">
        <div className="container">
          <p className="section-label">What I Know</p>
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Programming</h3>
              <ul>
                <li>Python</li>
                <li>SQL / MySQL</li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🌐</div>
              <h3>Web Development</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Tools</h3>
              <ul>
                <li>XAMPP</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <p className="section-label">Academic Background</p>
          <h2>Education</h2>
          <div className="edu-list">
            <div className="edu-card">
              <h3>B.Sc Computer Science</h3>
              <p className="school">Government Arts College (Autonomous), Karur &mdash; 2026</p>
              <span className="grade">68.3%</span>
            </div>
            <div className="edu-card">
              <h3>H.S.C</h3>
              <p className="school">Cheran Matric Hr. Sec. School, Karur</p>
              <span className="grade">64%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intern-bg">
        <div className="container">
          <p className="section-label">Experience</p>
          <h2>Internship</h2>
          <div className="intern-card">
            <h3>Web Development Intern &mdash; E-Soft IT Solutions, Trichy</h3>
            <p>Gained hands-on experience building webpages using HTML and CSS. Also attended placement aptitude training during the internship period.</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <p className="section-label">What I've Built</p>
          <h2>Projects</h2>
          <div className="project-card">
            <h3>Online Unused Medicine Donation System</h3>
            <p>A web-based platform where donors can donate unused medicines. The admin verifies medicines, and approved medicines are displayed for NGOs to request and distribute to people in need.</p>
            <div className="tech-tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">Python</span>
              <span className="tag">MySQL</span>
              <span className="tag">XAMPP</span>
            </div>
          </div>
        </div>
      </section>

      <section className="achieve-bg">
        <div className="container">
          <p className="section-label">Milestones</p>
          <h2>Achievements</h2>
          <ul className="achieve-list">
            <li>Participated in Workshop on Web Development</li>
            <li>Attended National Seminar on AI Tools</li>
            <li>Presented a paper on Educational Technology in STEM</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h2>Contact</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>deepakb2k007@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>+91 77089 18090</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>Karur, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Deepak Kishore A.M. All rights reserved.</p>
      </footer>
    </>
  );
}
