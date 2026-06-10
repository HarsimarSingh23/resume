import { useEffect, useState } from 'react';
import { projects, experience, skills, Project, Job } from './projects';

const GITHUB = 'https://github.com/HarsimarSingh23';
const AVATAR = '/tiles/me.png';
const EMAIL = 'mailto:sainiharsimar@gmail.com';

type View =
  | { name: 'home' }
  | { name: 'project'; project: Project }
  | { name: 'job'; job: Job }
  | { name: 'skills' }
  | { name: 'about' };

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function StatusBar() {
  const time = useClock();
  return (
    <div className="wp-statusbar">
      <span className="wp-signal" aria-hidden>
        <i style={{ height: 4 }} />
        <i style={{ height: 6 }} />
        <i style={{ height: 8 }} />
        <i style={{ height: 10 }} />
        <i style={{ height: 12 }} />
      </span>
      <span>VAAR 4G</span>
      <span className="wp-battery" aria-hidden />
      <span>{time}</span>
    </div>
  );
}

function NavBar({ goHome }: { goHome: () => void }) {
  return (
    <div className="wp-navbar">
      <button className="wp-navbtn" onClick={goHome} aria-label="Back">
        ←
      </button>
      <button className="wp-navbtn" onClick={goHome} aria-label="Start">
        ⊞
      </button>
      <a className="wp-navbtn" href={GITHUB} target="_blank" rel="noreferrer" aria-label="Search">
        🔍
      </a>
    </div>
  );
}

/* Metro live tile.
   Photo tiles (image set): front = full-bleed photo with ken-burns pan,
   flips to a colored info face — like the People hub on the Lumia start screen. */
function Tile({
  size,
  color,
  icon,
  label,
  back,
  image,
  onClick,
  tint = false,
  flip = true,
  flipDelay = 0,
  flipDur = 14,
}: {
  size: 'small' | 'wide' | 'large';
  color: string;
  icon: string;
  label: string;
  back?: string;
  image?: string;
  tint?: boolean;
  onClick: () => void;
  flip?: boolean;
  flipDelay?: number;
  flipDur?: number;
}) {
  const [imgOk, setImgOk] = useState(true);
  const doFlip = flip && !!back;
  const showPhoto = !!image && imgOk;
  return (
    <button
      className={`tile wall-cell-${size} ${doFlip ? 'tile-flip' : ''}`}
      onClick={onClick}
      style={
        {
          '--flip-delay': `${flipDelay}s`,
          '--flip-dur': `${flipDur}s`,
        } as React.CSSProperties
      }
    >
      <span className="tile-inner">
        {showPhoto ? (
          <span className="tile-face photo" style={{ background: color }}>
            <img
              src={image}
              alt=""
              loading="lazy"
              className={tint ? 'tint' : undefined}
              onError={() => setImgOk(false)}
            />
            <span className="tile-label">{label}</span>
          </span>
        ) : (
          <span className="tile-face" style={{ background: color }}>
            <span
              className="tile-icon"
              style={{ fontSize: size === 'small' ? 26 : size === 'wide' ? 30 : 44 }}
            >
              {icon}
            </span>
            <span className="tile-label">{label}</span>
          </span>
        )}
        {back && (
          <span className="tile-face back" style={{ background: color }}>
            <span
              style={{
                fontSize: size === 'small' ? 12 : 15,
                lineHeight: 1.25,
                fontWeight: 300,
              }}
            >
              {back}
            </span>
            <span className="tile-label" style={{ opacity: 0.75 }}>
              {label}
            </span>
          </span>
        )}
      </span>
    </button>
  );
}

function SectionHeader({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="wall-section">
      <h2>{title}</h2>
      <span>{hint}</span>
    </div>
  );
}

function HomeScreen({ open }: { open: (v: View) => void }) {
  return (
    <div className="page-enter pb-24">
      <header className="pt-3 pb-1">
        <p className="wp-overline" style={{ color: 'var(--wp-dim)' }}>
          my phone · my work
        </p>
        <h1 className="wp-title text-[56px] md:text-[76px] lowercase">
          harsimar singh
        </h1>
        <p className="mt-2 text-xl wp-light" style={{ color: '#1BA1E2' }}>
          co-founder &amp; ai engineer
        </p>
        <p className="mt-1 max-w-md text-base" style={{ color: '#b8b8b8' }}>
          i like to dive deep into products — from terabyte-scale pipelines to fine-tuning
          120B-parameter models for the government of india.
        </p>
      </header>

      {/* section 1: work experience */}
      <SectionHeader title="work" hint="resume · tap a role" />
      <div className="wall">
        <Tile
          size="large"
          color="#0050EF"
          icon="☺"
          label="Me"
          image={AVATAR}
          back="M.Tech IIT Ropar · built VAAR Lab · now building CPGRAMS AI at KPMG"
          flipDelay={3}
          flipDur={15}
          onClick={() => open({ name: 'about' })}
        />
        {experience.slice(0, 2).map((j, i) => (
          <Tile
            key={j.id}
            size="wide"
            color={j.color}
            icon={j.icon}
            label={j.company}
            back={j.tagline}
            flipDelay={1 + i * 4}
            flipDur={13 + i * 3}
            onClick={() => open({ name: 'job', job: j })}
          />
        ))}
        {experience.slice(2).map((j, i) => (
          <Tile
            key={j.id}
            size="wide"
            color={j.color}
            icon={j.icon}
            label={j.company}
            back={j.tagline}
            flipDelay={2.5 + i * 5}
            flipDur={16 + i * 2}
            onClick={() => open({ name: 'job', job: j })}
          />
        ))}
      </div>

      {/* section 2: github projects */}
      <SectionHeader title="github" hint="projects · tap to open" />
      <div className="wall">
        {projects.map((p, i) => (
          <Tile
            key={p.id}
            size={p.size}
            color={p.color}
            icon={p.icon}
            label={p.title}
            back={p.tagline}
            image={p.image}
            tint
            flipDelay={(i * 3.1) % 12}
            flipDur={12 + (i % 5) * 2}
            onClick={() => open({ name: 'project', project: p })}
          />
        ))}
        <Tile
          size="small"
          color="#1f1f1f"
          icon="⌨"
          label="GitHub"
          onClick={() => window.open(GITHUB, '_blank')}
        />
        <Tile
          size="small"
          color="#1f1f1f"
          icon="✉"
          label="Email"
          onClick={() => (window.location.href = EMAIL)}
        />
      </div>

      {/* section 3: skills */}
      <SectionHeader title="skills" hint="the toolbox" />
      <div className="wall">
        {skills.map((s, i) => (
          <Tile
            key={s.group}
            size={s.size}
            color={s.color}
            icon={s.icon}
            label={s.group}
            back={s.items.slice(0, 4).join(' · ')}
            flipDelay={(i * 2.9) % 10}
            flipDur={13 + (i % 4) * 2}
            onClick={() => open({ name: 'skills' })}
          />
        ))}
      </div>
    </div>
  );
}

function PageHeader({ app, title, accent }: { app: string; title: string; accent?: string }) {
  return (
    <header className="pt-2 pb-5">
      <p className="wp-overline" style={{ color: 'var(--wp-dim)' }}>
        {app}
      </p>
      <h1 className="wp-title text-[44px] md:text-[64px]" style={{ color: accent ?? '#fff' }}>
        {title}
      </h1>
    </header>
  );
}

function AppBar({ back, link }: { back: () => void; link?: { href: string; label: string } }) {
  return (
    <div className="mt-8 flex gap-8">
      <button className="wp-round-btn" onClick={back}>
        <span className="ring">←</span> back
      </button>
      {link && (
        <a className="wp-round-btn" href={link.href} target="_blank" rel="noreferrer">
          <span className="ring">⌨</span> {link.label}
        </a>
      )}
    </div>
  );
}

function ProjectPage({ project, back }: { project: Project; back: () => void }) {
  return (
    <div className="page-enter pb-28">
      <PageHeader app="harsimar singh · github" title={project.title} accent={project.color} />

      <p className="mb-4 text-xl wp-light" style={{ color: '#d8d8d8' }}>
        {project.tagline}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        <span className="wp-chip">{project.year}</span>
        <span className="wp-chip">{project.language}</span>
      </div>

      <p className="mb-7 max-w-2xl text-lg leading-relaxed" style={{ color: '#c4c4c4' }}>
        {project.brief}
      </p>

      <h2 className="wp-title mb-3 text-3xl lowercase" style={{ color: project.color }}>
        what i did
      </h2>
      <ul className="mb-7 max-w-2xl space-y-3">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-3 text-lg leading-snug" style={{ color: '#c4c4c4' }}>
            <span style={{ color: project.color }}>▪</span>
            {h}
          </li>
        ))}
      </ul>

      <h2 className="wp-title mb-3 text-3xl lowercase" style={{ color: project.color }}>
        tech
      </h2>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="wp-chip">
            {t}
          </span>
        ))}
      </div>

      <AppBar back={back} link={{ href: project.url, label: 'view source' }} />
    </div>
  );
}

function JobPage({ job, back }: { job: Job; back: () => void }) {
  return (
    <div className="page-enter pb-28">
      <PageHeader app="harsimar singh · work" title={job.company} accent={job.color} />
      <p className="text-xl wp-light" style={{ color: '#fff' }}>
        {job.role}
      </p>
      <p className="mb-6 text-sm" style={{ color: 'var(--wp-dim)' }}>
        {job.period}
      </p>
      <ul className="max-w-2xl space-y-3">
        {job.points.map((p, i) => (
          <li key={i} className="flex gap-3 text-lg leading-snug" style={{ color: '#c4c4c4' }}>
            <span style={{ color: job.color }}>▪</span>
            {p}
          </li>
        ))}
      </ul>
      <AppBar back={back} />
    </div>
  );
}

function SkillsPage({ back }: { back: () => void }) {
  return (
    <div className="page-enter pb-28">
      <PageHeader app="harsimar singh · resume" title="skills" accent="#60A917" />
      <div className="max-w-2xl space-y-7">
        {skills.map((s) => (
          <section key={s.group}>
            <h2 className="wp-title mb-3 text-3xl lowercase" style={{ color: s.color }}>
              {s.group}
            </h2>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span key={i} className="wp-chip">
                  {i}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
      <AppBar back={back} />
    </div>
  );
}

function AboutPage({ back }: { back: () => void }) {
  return (
    <div className="page-enter pb-28">
      <PageHeader app="harsimar singh" title="me" accent="#0050EF" />
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed" style={{ color: '#c4c4c4' }}>
        <p>
          I'm Harsimar — co-founder, AI engineer, and a product person who refuses to stop at the
          API boundary. My career has been one long descent down the stack: dashboards at
          Zolostays, terabyte-scale pipelines at Rapido, my own AI lab (VAAR Lab) building Punjabi
          language models, and now government-scale conversational AI at KPMG.
        </p>
        <p>
          The pattern: I find the part of the product everyone treats as a black box, open it up,
          and make it better. Fine-tuning a 120B model? Open the box. ETL costs ballooning? Open
          the box (30% savings inside). A whole language underserved by LLMs? That box too.
        </p>
        <p>
          M.Tech in CS from IIT Ropar. Based in India. Reachable at{' '}
          <a className="underline" style={{ color: '#1BA1E2' }} href={EMAIL}>
            sainiharsimar@gmail.com
          </a>
          .
        </p>
      </div>
      <AppBar back={back} link={{ href: GITHUB, label: 'github' }} />
    </div>
  );
}

function App() {
  const [view, setView] = useState<View>({ name: 'home' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const goHome = () => setView({ name: 'home' });

  return (
    <div className="min-h-screen">
      <div className="wp-screen">
        <StatusBar />
        {view.name === 'home' && <HomeScreen open={setView} />}
        {view.name === 'project' && <ProjectPage project={view.project} back={goHome} />}
        {view.name === 'job' && <JobPage job={view.job} back={goHome} />}
        {view.name === 'skills' && <SkillsPage back={goHome} />}
        {view.name === 'about' && <AboutPage back={goHome} />}
      </div>
      <NavBar goHome={goHome} />
    </div>
  );
}

export default App;
