import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  FileText,
  GraduationCap,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Newspaper,
  Phone,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Type,
  Users,
  X
} from 'lucide-react';
import './index.css';

const officialImages = {
  logo: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/diet-dimapur-logo.jpg',
  mainBuilding: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/MAIN-BUILDING--640x480.jpg',
  principal: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/principal-diet-dmp.jpg',
  vicePrincipal: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/vice-principal-diet-dmp.jpg',
  gallery1: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/gallery_1-640x480.jpg',
  gallery2: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/gallery_2-640x480.jpg',
  gallery3: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/gallery_3-640x480.jpg',
  gallery4: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/gallery_4-640x480.jpg',
  gallery5: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/gallery_5-640x480.jpg',
  girlsHostel: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/girls-hostel-640x480.jpg',
  boysHostel: 'https://dietdimapur.ac.in/wp-content/uploads/2020/10/BOYS-HOSTEL-640x480.jpg'
};

type Staff = {
  name: string;
  role: string;
  qualification?: string;
  department?: string;
  photo?: string;
};

type QuickInfo = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Staff', href: '#staff' },
  { label: 'Activities', href: '#activities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];

const quickInfo: QuickInfo[] = [
  {
    title: 'Courses Offered',
    subtitle: 'D.El.Ed Programmes',
    description:
      'The Institute offers two years regular course in Diploma in Elementary Education (D.El.Ed) and also offers ODL D.El.Ed for in-service untrained teachers on need basis.',
    icon: GraduationCap
  },
  {
    title: 'Eligibility',
    subtitle: 'Admission Requirement',
    description:
      'The minimum qualification for candidates to appear interview for D.El.Ed course is 10+2 in any stream with minimum 45%.',
    icon: ShieldCheck
  },
  {
    title: 'Admission',
    subtitle: 'Official Process',
    description:
      'The admission to 2 years regular D.El.Ed course is strictly done through interview. Admission details are advertised in local newspapers.',
    icon: FileText
  },
  {
    title: 'Academic Session',
    subtitle: 'Annual Calendar',
    description:
      'The academic session starts from July-August every year.',
    icon: CalendarDays
  }
];

const featureSteps = [
  {
    no: '01',
    title: 'Teacher Training',
    text: 'The institute imparts quantitative and qualitative training to aspirant teachers and untrained in-service teachers with special emphasis on elementary teachers.'
  },
  {
    no: '02',
    title: 'Resource Support',
    text: 'It provides academic and resource support at the grass-root level for the success of strategies and programmes related to Universalisation of Elementary Education.'
  },
  {
    no: '03',
    title: 'Action Research',
    text: 'The institute undertakes action researches and experiments, assists in curriculum review, text book development, NAS, and awareness programmes.'
  }
];

const stats = [
  { value: '2006', label: 'Established' },
  { value: '2 Years', label: 'Regular D.El.Ed' },
  { value: '45%', label: 'Minimum Eligibility' },
  { value: 'July-Aug', label: 'Session Starts' }
];

const popularCards = [
  {
    title: 'Courses Offered',
    meta: 'Academics',
    location: 'D.El.Ed Information',
    description:
      'Regular D.El.Ed for pre-service and in-service untrained teachers, plus ODL D.El.Ed on need basis.',
    image: officialImages.gallery1
  },
  {
    title: 'Academic Staff',
    meta: 'Staff Profile',
    location: 'Teacher Educators',
    description:
      'Qualified academic faculty working across Science, Mathematics, Language Teaching, ECCE, Psychology and Social Sciences.',
    image: officialImages.gallery2
  },
  {
    title: 'Campus Facilities',
    meta: 'Infrastructure',
    location: 'Building & Hostels',
    description:
      'Main building, girls hostel, boys hostel and supportive learning spaces for teacher-trainees.',
    image: officialImages.mainBuilding
  },
  {
    title: 'Institute Activities',
    meta: 'Community & Training',
    location: 'Professional Development',
    description:
      'Important days, training, competitions, exhibitions, life skills activities and community awareness programmes.',
    image: officialImages.gallery3
  }
];

const aboutParagraphs = [
  'The District Institute of Education and Training, Dimapur is a standalone Teacher Education Institute. It was established in the year 2006 with an objective to impart quantitative and qualitative training to aspirant teachers and untrained in service teachers with special emphasis to elementary teachers.',
  'It also aims to provide academic and resource support at the grass root level for the success of the various strategies and programmes being undertaken with special reference to Universalisation of Elementary Education.',
  'Besides imparting training, the Institute also takes up Action Researches and Experiments to deal with specific problems in achieving objectives of Elementary Education and assists in curriculum review, development of text books and National Achievement Survey related work.',
  'The Institute also conducts awareness programmes on different policies related to education and the faculties are involved in developing position papers in areas like Adult Education, Teacher Education and Early Childhood Care and Education.'
];

const leadership: Staff[] = [
  { name: 'Alemla Jamir', role: 'Principal', qualification: 'Edn. Qual.: M.A; B.Ed', photo: officialImages.principal },
  { name: 'B. Rolland Ao', role: 'Vice Principal', qualification: 'Edn. Qual.: M.A; B.Ed', photo: officialImages.vicePrincipal }
];

const academicStaff: Staff[] = [
  { name: 'Sangeryangla Lemtur', role: 'Senior Lecturer', qualification: 'Edn. Qual.: M.A; B.Ed.', department: 'Pedagogy of Social Sciences/EVS' },
  { name: 'N. Yetoli', role: 'Senior Lecturer', qualification: 'Edn. Qual.: M.Sc; B.Ed.', department: 'Pedagogy of Science' },
  { name: 'James Sema', role: 'Senior Lecturer', qualification: 'Edn. Qual.: M.Sc; B.Ed.; M.Ed; Dip. in ECCE', department: 'Pedagogy of Science/ICT' },
  { name: 'Chubarenla T.', role: 'Senior Lecturer', qualification: 'Edn. Qual.: M.A; B.Ed', department: 'Education' },
  { name: 'Ato Lorin', role: 'Senior Lecturer', qualification: 'Edn. Qual.: M.F.A.', department: 'Work Experience' },
  { name: 'C. Yoonglei', role: 'Senior Lecturer', qualification: 'Edn. Qual.: M.A; B.Ed', department: 'Pedagogy of Social Sciences/EVS' },
  { name: 'Hainenlo Magh', role: 'Senior Lecturer', qualification: 'Edn. Qual.: M.A. (Museology); B.Ed.', department: 'Work Experience' },
  { name: 'Lichumbeni Kikon', role: 'Senior Lecturer', qualification: 'Edn. Qual.: M.A; B.Ed; M.Phil.', department: 'Pedagogy of English Teaching' }
];

const nonAcademicStaff: Staff[] = [
  { name: 'P. Wabang Lemtor', role: 'H.A. Sr.', qualification: 'Edn. Qual.: B.A.' },
  { name: 'Vitsolie Sechu', role: 'U.D.A', qualification: 'Edn. Qual.: PU' },
  { name: 'I. Imola', role: 'Accountant', qualification: 'Edn. Qual.: PU' },
  { name: 'Synthia Keneikhrienuo', role: 'U.D.A', qualification: 'Edn. Qual.: B.A. (Eng)' },
  { name: 'Eliya', role: 'Typist', qualification: 'Edn. Qual.: Matriculate' },
  { name: 'Mehile', role: 'Steno', qualification: 'Edn. Qual.: B.A.' }
];

const activities = [
  'The Institute organises a number of activities within and also outside the Institute involving the teacher-trainees as well as the community members with the aim of enriching the professional competency and creativity of the teacher trainees. It also imparts short term training to private school teachers on request.',
  'Besides academic activities, the institute also observes important days such as Teachers Day, International Arts Education Week, Literary Day, drawing and handwriting competitions for school children of Elementary level, and Exhibition cum Sales Day of products made by teacher trainees through Life Skills Education.',
  'The Institute also maintains Eco Friendly Vertical Garden in the campus with the objectives to impart basic life skills on gardening, make good use of waste materials, grow organic food and develop aesthetic sense among the teacher-trainees.'
];

const notices = [
  {
    title: 'Training of Nodal Officer and Asstt. Nodal Officer at SCERT for Website Management.',
    date: 'March 28, 2022'
  },
  { title: 'Term of Use', date: 'October 8, 2020' },
  { title: 'Copyright Statement', date: 'October 8, 2020' },
  { title: 'Photo Gallery', date: 'October 2, 2020' }
];

const gallery = [
  { src: officialImages.mainBuilding, title: 'Main Building' },
  { src: officialImages.gallery4, title: 'Campus Activity' },
  { src: officialImages.gallery5, title: 'Training & Participation' },
  { src: officialImages.gallery2, title: 'Faculty Engagement' },
  { src: officialImages.girlsHostel, title: 'Girls Hostel' },
  { src: officialImages.boysHostel, title: 'Boys Hostel' }
];

function scrollToHash(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function AccessibilityToolbar() {
  const [largeText, setLargeText] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [readable, setReadable] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('large-text', largeText);
    document.documentElement.classList.toggle('high-contrast', contrast);
    document.documentElement.classList.toggle('readable-font', readable);
  }, [largeText, contrast, readable]);

  return (
    <div className="a11y-toolbar">
      <button onClick={() => setLargeText((v) => !v)}><Type size={17} /> Text</button>
      <button onClick={() => setContrast((v) => !v)}><Sparkles size={17} /> Contrast</button>
      <button onClick={() => setReadable((v) => !v)}><BookOpen size={17} /> Font</button>
      <button onClick={() => { setLargeText(false); setContrast(false); setReadable(false); }}><RotateCcw size={17} /> Reset</button>
    </div>
  );
}

const searchTabData = {
  academics: {
    items: [
      { label: "Courses", value: "D.El.Ed Regular & ODL" },
      { label: "Eligibility", value: "10+2 with 45% (Aggregate)" },
      { label: "Session Starts", value: "July Semester Cycle" },
      { label: "Office Contact", value: "9856221729" }
    ],
    buttonText: "Explore Academics",
    targetHash: "#academics"
  },
  admission: {
    items: [
      { label: "Admission Mode", value: "Purely on Interview Merit" },
      { label: "Application Fee", value: "Subsidized SCERT Norms" },
      { label: "Seats Offered", value: "50 Regular / 100 ODL" },
      { label: "Latest Notices", value: "Form Releases Below" }
    ],
    buttonText: "View Admissions",
    targetHash: "#notices"
  },
  staff: {
    items: [
      { label: "Faculty Strength", value: "8 Senior Lecturers & Nodal" },
      { label: "Head of Institute", value: "Alemla Jamir (Principal)" },
      { label: "Vice Principal", value: "B. Rolland Ao" },
      { label: "Nodal Officer", value: "James Sema (Senior Lect.)" }
    ],
    buttonText: "Meet the Faculty",
    targetHash: "#staff"
  },
  contact: {
    items: [
      { label: "Official Email", value: "princidietdmp@gmail.com" },
      { label: "Campus Location", value: "Virazouma, Chümoukedima" },
      { label: "Liaison Officer", value: "James Sema (+91 9856221729)" },
      { label: "Contact Us", value: "Through Quick Message Form" }
    ],
    buttonText: "Get in Touch",
    targetHash: "#contact"
  }
};

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSearchTab, setActiveSearchTab] = useState<'academics' | 'admission' | 'staff' | 'contact'>('academics');
  const featuredStaff = useMemo(() => academicStaff.slice(0, 6), []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-block">
            <img src={officialImages.logo} alt="DIET Dimapur logo" />
            <div>
              <strong>DIET Dimapur</strong>
              <small>Government of Nagaland</small>
            </div>
          </div>
          <button className="menu-button" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  scrollToHash(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <button className="nav-cta" onClick={() => scrollToHash('#contact')}>Contact Office</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-shell">
            <div className="hero-bg">
              <img src={officialImages.mainBuilding} alt="DIET Dimapur main building" />
              <div className="hero-overlay-waves"></div>
              <div className="hero-glow-orb-1"></div>
              <div className="hero-glow-orb-2"></div>
            </div>
            <div className="hero-shell-inner">
              <div className="hero-copy">
                <span className="eyebrow">District Institute of Education &amp; Training</span>
                <h1 className="hero-title-flow">Training teachers and strengthening elementary education.</h1>
                <p className="hero-subcopy">
                  The District Institute of Education and Training, Dimapur is a standalone Teacher Education Institute established in 2006 to provide teacher education, academic support, action research and community education programmes in Nagaland.
                </p>
                <div className="hero-actions">
                  <button onClick={() => scrollToHash('#academics')}>View Academics <ArrowRight size={16} /></button>
                  <button className="ghost" onClick={() => scrollToHash('#about')}>Know More</button>
                </div>
              </div>
              <div className="hero-card-wrapper">
                <div className="hero-card-glow"></div>
                <div className="hero-card floating-card">
                  <div className="hero-card-shimmer"></div>
                  <div className="hero-card-img-wrapper">
                    <img src={officialImages.gallery1} alt="DIET campus activity" />
                    <div className="hero-card-badge">
                      <span>Institute Profile</span>
                    </div>
                  </div>
                  <div className="hero-card-content">
                    <h3>Academic support at the grass-root level for elementary education strategies and programmes.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container search-panel-wrap">
            <div className="search-panel three-d">
              <div className="search-tabs">
                {(['academics', 'admission', 'staff', 'contact'] as const).map((tab) => (
                  <button
                    key={tab}
                    className={activeSearchTab === tab ? 'active' : ''}
                    onClick={() => setActiveSearchTab(tab)}
                    style={{ cursor: 'pointer' }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="search-grid">
                {searchTabData[activeSearchTab].items.map((item, index) => (
                  <div className="search-item" key={index}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
                <button
                  className="search-button"
                  onClick={() => scrollToHash(searchTabData[activeSearchTab].targetHash)}
                  style={{ cursor: 'pointer' }}
                >
                  <Search size={18} /> {searchTabData[activeSearchTab].buttonText}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="highlights">
          <div className="container">
            <div className="split-heading">
              <div>
                <SectionHeading kicker="Popular Information" title="Everything important in one place" text="Designed in a cleaner premium style, while keeping the official DIET Dimapur information clear and easy to access." />
              </div>
              <p>
                The cards below use the official institute details from the DIET website and present them in a more modern, professional and luxury-looking interface.
              </p>
            </div>
            <div className="cards-grid cards-4">
              {popularCards.map((card, index) => (
                <article className={`info-card three-d variant-${index}`} key={card.title}>
                  <div className="card-image-wrap">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="card-body">
                    <span className="pill">{card.meta}</span>
                    <h3>{card.title}</h3>
                    <small><MapPin size={14} /> {card.location}</small>
                    <p>{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-copy">
              <SectionHeading kicker="About the Institute" title="An official profile with a stronger visual identity" text="The content below is based on the official About page and is retained in meaning while being presented in a more premium layout." />
              {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="stats-row">
                {stats.map((stat, index) => (
                  <div className={`stat-box stat-box-${index} three-d`} key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual">
              <div className="about-collage">
                <div className="main-photo-container">
                  <img src={officialImages.gallery3} alt="DIET programme" className="main-photo" />
                  <div className="photo-caption">Exhibition & Activities</div>
                </div>
                <div className="float-photo-container top">
                  <img src={officialImages.gallery4} alt="DIET campus participation" className="float-photo" />
                  <div className="float-photo-caption">Environment Day</div>
                </div>
                <div className="float-photo-container bottom">
                  <img src={officialImages.girlsHostel} alt="DIET girls hostel" className="float-photo" />
                  <div className="float-photo-caption">Girls Hostel</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="journey">
          <div className="container journey-layout">
            <div className="journey-left">
              <SectionHeading kicker="Why DIET Dimapur" title="Teacher education with purpose, support and research" text="This section follows the layout style of your reference design but uses real DIET Dimapur functions and objectives." />
              <div className="step-list">
                {featureSteps.map((step) => (
                  <article className="step-card" key={step.no}>
                    <div className="step-badge">{step.no}</div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="journey-right three-d">
              <img src={officialImages.gallery2} alt="DIET training and collaboration" />
              <div className="review-chip chip-a">
                <img src={officialImages.principal} alt="Principal" />
                <div>
                  <strong>Alemla Jamir</strong>
                  <span>Principal</span>
                </div>
              </div>
              <div className="review-chip chip-b">
                <img src={officialImages.vicePrincipal} alt="Vice Principal" />
                <div>
                  <strong>B. Rolland Ao</strong>
                  <span>Vice Principal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="academics">
          <div className="container">
            <SectionHeading kicker="Academics" title="D.El.Ed information" text="The main academic details are presented as smaller premium cards. On mobile they stay compact and display two cards in one row." />
            <div className="cards-grid cards-4 compact-grid">
              {quickInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="mini-card three-d" key={item.title}>
                    <div className="icon-bubble"><Icon size={20} /></div>
                    <span>{item.subtitle}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section staff-section" id="staff">
          <div className="container">
            <SectionHeading kicker="Who's Who" title="Leadership and faculty" text="Presented with a cleaner premium card system while keeping the official names, roles and qualifications." />
            <div className="leadership-grid">
              {leadership.map((leader) => (
                <article className="leader-card three-d" key={leader.name}>
                  <img src={leader.photo} alt={leader.name} />
                  <div>
                    <span>Leadership</span>
                    <h3>{leader.name}</h3>
                    <strong>{leader.role}</strong>
                    <p>{leader.qualification}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="cards-grid cards-4 compact-grid staff-mini-grid">
              {featuredStaff.map((member) => (
                <article className="mini-card staff-mini three-d" key={member.name}>
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.qualification}</p>
                  <small>{member.department}</small>
                </article>
              ))}
            </div>
            <div className="office-grid">
              {nonAcademicStaff.map((member) => (
                <article className="office-card" key={member.name}>
                  <div>
                    <h4>{member.name}</h4>
                    <p>{member.qualification}</p>
                  </div>
                  <strong>{member.role}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section activities-section" id="activities">
          <div className="container activity-layout">
            <div className="activity-image three-d">
              <img src={officialImages.gallery5} alt="DIET activity" />
            </div>
            <div className="activity-copy">
              <SectionHeading kicker="Activities" title="Professional competency and creativity" />
              {activities.map((item) => <p key={item}>{item}</p>)}
              <div className="note-box"><Leaf size={18} /> Eco Friendly Vertical Garden supports life skills, sustainability and aesthetic development among teacher-trainees.</div>
            </div>
          </div>
        </section>

        <section className="section" id="notices">
          <div className="container">
            <SectionHeading kicker="Latest Notices" title="Official updates" text="The most visible notices from the official site are kept in a cleaner card-based layout." />
            <div className="cards-grid cards-4 compact-grid">
              {notices.map((notice) => (
                <article className="notice-card three-d" key={notice.title}>
                  <div className="notice-icon"><Newspaper size={18} /></div>
                  <h3>{notice.title}</h3>
                  <p>{notice.date}</p>
                  <a href="#contact">View details <ChevronRight size={14} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <SectionHeading kicker="Photo Gallery" title="Campus and institute visuals" text="Official images from the DIET Dimapur website are used as the visual base for the redesigned layout." />
            <div className="gallery-grid">
              {gallery.map((item) => (
                <article className="gallery-card three-d" key={item.title}>
                  <img src={item.src} alt={item.title} />
                  <div><h3>{item.title}</h3></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <SectionHeading kicker="Contact Office" title="Reach DIET Dimapur" text="Official contact details from the institute website are shown below." />
              <div className="contact-items">
                <div className="contact-item"><Building2 size={18} /><div><strong>Address</strong><p>District Institute of Education and Training, Virazouma, 7th Mile, Dimapur, Nagaland.</p></div></div>
                <div className="contact-item"><Mail size={18} /><div><strong>Email</strong><p>princidietdmp@gmail.com</p></div></div>
                <div className="contact-item"><Phone size={18} /><div><strong>Contact</strong><p>9856221729</p></div></div>
                <div className="contact-item"><Landmark size={18} /><div><strong>Nodal Officer</strong><p>James Sema</p></div></div>
              </div>
            </div>
            <div className="contact-card three-d">
              <h3>Quick Message</h3>
              <div className="input-grid">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" rows={5}></textarea>
                <button>Send Message</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>DIET Dimapur</strong>
            <p>District Institute of Education and Training, Government of Nagaland.</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#academics">Academics</a>
            <a href="#staff">Staff</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      <AccessibilityToolbar />
    </div>
  );
}
