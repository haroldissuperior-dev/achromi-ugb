import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";

type IconName =
  | "award"
  | "book"
  | "bus"
  | "calendar"
  | "cap"
  | "check"
  | "clock"
  | "close"
  | "facebook"
  | "globe"
  | "location"
  | "mail"
  | "menu"
  | "phone"
  | "search"
  | "utensils"
  | "users"
  | "user"
  | "youtube"
  | "x-social"
  | "arrow-right"
  | "clipboard";

function Icon({
  name,
  size = 18,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    award: (
      <>
        <circle cx="12" cy="8" r="5.5" />
        <path d="m8.5 12.2-1 8 4.5-2.6 4.5 2.6-1-8" />
        <path d="m12 5.5 1 1.8 2 .3-1.5 1.4.4 2-1.9-.9-1.8.9.3-2-1.5-1.4 2.1-.3L12 5.5Z" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h8M8 10h7" />
      </>
    ),
    bus: (
      <>
        <path d="M5 16.5h14l1-8.4A3 3 0 0 0 17 5H7a3 3 0 0 0-3 3.1L5 16.5Z" />
        <path d="M5 12h14M7 16.5v2M17 16.5v2M7 8h10" />
        <circle cx="7.5" cy="18.5" r="1.5" />
        <circle cx="16.5" cy="18.5" r="1.5" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h3M15 14h2" />
      </>
    ),
    cap: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11v5c3.5 2.7 8.5 2.7 12 0v-5M22 9v6" />
      </>
    ),
    check: <path d="m5 12.5 4.2 4.2L19.5 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    facebook: (
      <path
        d="M14.2 8.2h2.4V4.7c-.4-.1-1.8-.2-3.5-.2-3.4 0-5.7 2-5.7 5.9v3.1H3.7v4h3.7v6h4.5v-6h3.7l.6-4h-4.3v-2.7c0-1.2.3-2.6 2.3-2.6Z"
        fill="currentColor"
        stroke="none"
      />
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 9h17M3.5 15h17M12 3c2.3 2.4 3.3 5.4 3.3 9s-1 6.6-3.3 9c-2.3-2.4-3.3-5.4-3.3-9S9.7 5.4 12 3Z" />
      </>
    ),
    location: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    phone: (
      <path d="M7.1 3.5 9.7 7 8.2 9.2a14.4 14.4 0 0 0 6.6 6.6l2.2-1.5 3.5 2.6-.7 3c-.2.8-1 1.3-1.8 1.2C9.4 19.8 4.2 14.6 2.9 6c-.1-.8.4-1.6 1.2-1.8l3-.7Z" />
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
    utensils: (
      <>
        <path d="M7 3v7M4.5 3v4.5A2.5 2.5 0 0 0 7 10a2.5 2.5 0 0 0 2.5-2.5V3M7 10v11M17 3v18M17 3c2 2 3 4 3 6v2h-3" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20v-1.5A5.5 5.5 0 0 1 8.5 13h1a5.5 5.5 0 0 1 5.5 5.5V20H3ZM16 4.8a3.2 3.2 0 0 1 0 6.2M17 13a5 5 0 0 1 4 4.9V20h-3" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    youtube: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="4" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </>
    ),
    "x-social": (
      <path d="M5 4h4.2l9.8 16h-4.2L5 4Zm0 16 6.3-7.1M12.7 11.1 19 4" />
    ),
    "arrow-right": <path d="M4 12h15M13 6l6 6-6 6" />,
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

type School = {
  name: string;
  category: "high" | "middle" | "elementary";
  grades: string;
  principal: string;
  address: string;
  phone: string;
  image: string;
};

const navigation = [
  { label: "District Info", href: "#about" },
  { label: "Schools", href: "#schools" },
  { label: "Academics", href: "#academics" },
  { label: "Parents & Students", href: "#parents" },
  { label: "School Board", href: "#board" },
  { label: "News & Calendar", href: "#news" },
];

const quickLinks: { title: string; subtitle: string; icon: IconName; href: string }[] = [
  { title: "Parent Portal", subtitle: "Grades & Attendance", icon: "user", href: "#parents" },
  { title: "Enrollment", subtitle: "Registration & Info", icon: "clipboard", href: "#enrollment" },
  { title: "Lunch Menus", subtitle: "Nutrition Services", icon: "utensils", href: "#services" },
  { title: "Bus Schedules", subtitle: "Routes & Safety", icon: "bus", href: "#services" },
  { title: "Staff Directory", subtitle: "Teacher Contacts", icon: "book", href: "#schools" },
  { title: "Board Meetings", subtitle: "Agendas & Minutes", icon: "users", href: "#board" },
];

const schools: School[] = [
  {
    name: "Achromie Central High School",
    category: "high",
    grades: "Grades 9-12",
    principal: "Marcus Vance",
    address: "100 Panther Way, Achromie",
    phone: "(555) 839-2100",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Achromie West Middle School",
    category: "middle",
    grades: "Grades 6-8",
    principal: "Sarah Jenkins",
    address: "450 Westside Blvd, Achromie",
    phone: "(555) 839-2200",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Oakridge Elementary",
    category: "elementary",
    grades: "Grades K-5",
    principal: "David Ross",
    address: "822 Oakridge Lane, Achromie",
    phone: "(555) 839-2300",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pinecrest STEM Elementary",
    category: "elementary",
    grades: "Grades K-5",
    principal: "Elena Rostova",
    address: "120 Pinecrest Road, Achromie",
    phone: "(555) 839-2400",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
  },
];

const news = [
  {
    date: "October 8, 2026",
    title: "Achromie Unified Receives National STEM Excellence Accreditation",
    excerpt:
      "The State Board of Education officially recognized Achromie District's modernized science labs and curriculum standardizations during Tuesday's quarterly assembly.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "October 2, 2026",
    title: "School Board Approves Facility Upgrade Bond Initiative",
    excerpt:
      "Funds allocated under Resolution 2026-B will enhance campus security systems, HVAC filtration, and athletic fields across middle schools.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "September 25, 2026",
    title: "Annual District Art & Music Showcase Date Announced",
    excerpt:
      "Student performers and visual artists will present their works at the Central High School Auditorium next month.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
  },
];

const events = [
  {
    month: "OCT",
    day: "14",
    category: "Board Meeting",
    tone: "gold",
    title: "Regular School Board Meeting",
    details: "6:30 PM | District Office Center",
  },
  {
    month: "OCT",
    day: "22",
    category: "Academics",
    tone: "blue",
    title: "Parent-Teacher Conferences (Minimum Day)",
    details: "All District Schools",
  },
  {
    month: "NOV",
    day: "03",
    category: "Holiday",
    tone: "green",
    title: "Staff Development Day (No Students)",
    details: "District-Wide",
  },
  {
    month: "NOV",
    day: "11",
    category: "Holiday",
    tone: "purple",
    title: "Veterans Day Observed - Schools Closed",
    details: "All District Facilities",
  },
];

const footerGroups = [
  {
    title: "Governance",
    links: [
      ["School Board Members", "#board"],
      ["Agendas & Minutes", "#board"],
      ["District Policies & Code", "#board"],
      ["Budget & Financials", "#board"],
      ["Superintendent Office", "#about"],
    ],
  },
  {
    title: "Community & Services",
    links: [
      ["Human Resources / Employment", "#services"],
      ["Transportation Dept", "#services"],
      ["Food & Nutrition Services", "#services"],
      ["Special Education", "#services"],
      ["Health Services & Nursing", "#services"],
    ],
  },
];

function App() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("General District Inquiry");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState("");
  const [language, setLanguage] = useState("en");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const contactNameRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const toastTimerRef = useRef<number | undefined>(undefined);

  const showToast = (message: string) => {
    setToast(message);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(""), 4000);
  };

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!contactOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => contactNameRef.current?.focus(), 20);
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactOpen(false);
      }

      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [contactOpen]);

  useEffect(
    () => () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    },
    [],
  );

  const filteredSchools =
    activeFilter === "all" ? schools : schools.filter((school) => school.category === activeFilter);

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    setSearchOpen(false);
    showToast(`Search query submitted for: "${query}"`);
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactOpen(false);
    setContactTopic("General District Inquiry");
    showToast("Your message has been submitted to the District Office.");
    event.currentTarget.reset();
  };

  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    showToast("You are signed up for Achromie district notifications.");
  };

  const openContact = (topic = "General District Inquiry") => {
    setContactTopic(topic);
    setContactOpen(true);
  };

  const setSchoolFilter = (filter: string) => setActiveFilter(filter);

  return (
    <div className="app-shell">
      {announcementVisible && (
        <div className="announcement-bar">
          <div className="site-container announcement-inner">
            <div className="announcement-copy">
              <span className="announcement-tag">Announcement</span>
              <span>
                <strong>District Update:</strong> Fall 2026-2027 Registration is now open for all
                returning and new students.
              </span>
            </div>
            <div className="announcement-actions">
              <a href="#enrollment" className="announcement-link">
                Learn More & Register
                <Icon name="arrow-right" size={14} />
              </a>
              <button
                className="icon-button announcement-close"
                type="button"
                aria-label="Close announcement"
                onClick={() => setAnnouncementVisible(false)}
              >
                <Icon name="close" size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="utility-bar">
        <div className="site-container utility-inner">
          <div className="utility-details">
            <a href="tel:5558392000">
              <Icon name="phone" size={13} />
              <span>Main Office: (555) 839-2000</span>
            </a>
            <span className="utility-location">
              <Icon name="location" size={14} />
              450 Academic Way, Achromie District Office
            </span>
            <span className="utility-hours">
              <Icon name="clock" size={14} />
              Mon-Fri: 7:30 AM - 4:30 PM
            </span>
          </div>
          <div className="utility-links">
            <label className="language-select">
              <Icon name="globe" size={14} />
              <span className="visually-hidden">Select language</span>
              <select value={language} onChange={(event) => setLanguage(event.target.value)}>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="vi">Tiếng Việt</option>
                <option value="zh">中文</option>
              </select>
            </label>
            <a
              href="#staff-portal"
              onClick={(event) => {
                event.preventDefault();
                showToast("Staff Portal access is coming soon.");
              }}
            >
              Staff Portal
            </a>
            <span className="utility-divider">|</span>
            <button type="button" onClick={() => openContact()}>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-row">
          <a className="brand-lockup" href="#top" aria-label="Achromie Unified School District home">
            <span className="district-crest">
              <Icon name="cap" size={29} />
            </span>
            <span className="brand-copy">
              <span className="brand-name">Achromie Unified</span>
              <span className="brand-subtitle">School District #104</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="search-toggle"
              type="button"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              aria-controls="search-panel"
              onClick={() => setSearchOpen((open) => !open)}
            >
              <Icon name={searchOpen ? "close" : "search"} size={19} />
            </button>
            <a className="enroll-button" href="#enrollment">
              Enroll Student
            </a>
          </div>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={22} />
          </button>
        </div>

        <div className="search-panel" id="search-panel" hidden={!searchOpen}>
          <form className="site-container search-form" role="search" onSubmit={submitSearch}>
            <Icon name="search" size={17} className="search-form-icon" />
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search district pages, staff directory, announcements..."
              aria-label="Search district website"
            />
            <button type="submit" className="search-submit">
              Search
            </button>
            <button className="search-cancel" type="button" onClick={() => setSearchOpen(false)}>
              Cancel
            </button>
          </form>
        </div>

        <div className="mobile-menu" id="mobile-menu" hidden={!mobileOpen}>
          <nav className="site-container mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.label} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="mobile-enroll" href="#enrollment" onClick={() => setMobileOpen(false)}>
              Enroll Student
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=85"
            alt="Students walking across a university-style campus"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="site-container hero-content">
            <div className="hero-kicker hero-enter hero-enter-one">
              <Icon name="award" size={16} />
              <span>Official Public Education Governance</span>
            </div>
            <p className="hero-brand hero-enter hero-enter-two">Achromie Unified School District #104</p>
            <h1 className="hero-title hero-enter hero-enter-three" id="hero-title">
              Empowering Students,
              <br />
              <span>Inspiring Futures.</span>
            </h1>
            <p className="hero-description hero-enter hero-enter-four">
              Achromie Unified School District serves over 12,000 students across 14 state-accredited
              elementary, middle, and high schools dedicated to academic excellence, safety, and
              community leadership.
            </p>
            <div className="hero-actions hero-enter hero-enter-five">
              <a className="hero-primary" href="#schools">
                Explore Our Schools
                <Icon name="arrow-right" size={16} />
              </a>
              <a className="hero-secondary" href="#about">
                District Mission & Strategy
              </a>
            </div>

            <div className="hero-stats hero-enter hero-enter-six" aria-label="District at a glance">
              <div className="hero-stat">
                <strong>12,000+</strong>
                <span>Enrolled Students</span>
              </div>
              <div className="hero-stat">
                <strong>14</strong>
                <span>Public Campuses</span>
              </div>
              <div className="hero-stat">
                <strong>96%</strong>
                <span>Graduation Rate</span>
              </div>
              <div className="hero-stat">
                <strong>22:1</strong>
                <span>Student-Teacher Ratio</span>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-access" id="parents" aria-labelledby="quick-access-title">
          <div className="site-container">
            <h2 className="visually-hidden" id="quick-access-title">
              Quick Access Links
            </h2>
            <div className="quick-grid">
              {quickLinks.map((link) => (
                <a className="quick-link" data-reveal href={link.href} key={link.title}>
                  <span className="quick-icon">
                    <Icon name={link.icon} size={22} />
                  </span>
                  <span className="quick-title">{link.title}</span>
                  <span className="quick-subtitle">{link.subtitle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="leadership-section" id="about" aria-labelledby="leadership-title">
          <div className="site-container leadership-grid">
            <div className="superintendent-block" data-reveal>
              <div className="superintendent-photo-frame">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Dr. Eleanor Vance, Superintendent of Schools"
                  loading="lazy"
                />
              </div>
              <div className="superintendent-caption">
                <h2>Dr. Eleanor Vance</h2>
                <p>Superintendent of Schools</p>
              </div>
            </div>

            <div className="leadership-copy" id="strategic-plan" data-reveal>
              <div className="section-heading leadership-heading">
                <h2 id="leadership-title">Message from Leadership</h2>
                <p>Building rigorous, inclusive, and future-focused educational pathways.</p>
              </div>
              <blockquote>
                <p>
                  "Welcome to Achromie Unified School District. Our commitment extends beyond
                  traditional education; we cultivate analytical thinking, civic responsibility, and
                  lifelong learning for every child in our community."
                </p>
                <p>
                  "As we advance our Strategic Plan, we continue investing in modern laboratory
                  facilities, expanding AP and Career Technical Pathways, and ensuring that every
                  school maintains high safety and support standards."
                </p>
              </blockquote>
              <div className="leadership-actions">
                <a className="solid-button" href="#strategic-plan">
                  Read Strategic Plan PDF
                </a>
                <a className="text-link" href="#board">
                  Meet the Board of Education
                  <Icon name="arrow-right" size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="schools-section" id="schools" aria-labelledby="schools-title">
          <div className="site-container">
            <span className="eyebrow" id="academics">
              Our Educational Facilities
            </span>
            <div className="schools-heading-row">
              <div>
                <h2 className="section-title" id="schools-title">
                  District Schools Directory
                </h2>
              </div>
              <div className="school-filters" role="group" aria-label="Filter schools by grade level">
                {[
                  ["all", "All Schools"],
                  ["high", "High Schools"],
                  ["middle", "Middle Schools"],
                  ["elementary", "Elementary"],
                ].map(([filter, label]) => (
                  <button
                    aria-pressed={activeFilter === filter}
                    className={activeFilter === filter ? "school-filter is-active" : "school-filter"}
                    key={filter}
                    onClick={() => setSchoolFilter(filter)}
                    type="button"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="school-grid" id="enrollment">
              {filteredSchools.map((school) => (
                <article className="school-card" data-category={school.category} key={school.name}>
                  <div className="school-image-wrap">
                    <img src={school.image} alt={school.name} loading="lazy" />
                    <span className="grade-label">{school.grades}</span>
                  </div>
                  <div className="school-card-content">
                    <h3>{school.name}</h3>
                    <p className="school-principal">
                      <Icon name="user" size={14} />
                      Principal: {school.principal}
                    </p>
                    <div className="school-contact">
                      <p>
                        <Icon name="location" size={14} />
                        <span>{school.address}</span>
                      </p>
                      <p>
                        <Icon name="phone" size={14} />
                        <a href={`tel:${school.phone.replace(/[^\d+]/g, "")}`}>{school.phone}</a>
                      </p>
                    </div>
                    <a
                      className="school-website-link"
                      href="#schools"
                      onClick={(event) => {
                        event.preventDefault();
                        showToast(`${school.name} website information is coming soon.`);
                      }}
                    >
                      Visit School Website
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="news-section" id="news" aria-labelledby="news-title">
          <div className="site-container news-layout">
            <div className="news-column" data-reveal>
              <div className="news-heading-row">
                <h2 className="section-title section-title-bar" id="news-title">
                  District News & Releases
                </h2>
                <a className="section-more" href="#news">
                  View All News
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
              <div className="news-list">
                {news.map((article) => (
                  <article className="news-item" key={article.title}>
                    <div className="news-image">
                      <img src={article.image} alt="" loading="lazy" />
                    </div>
                    <div className="news-copy">
                      <span className="news-date">
                        <Icon name="calendar" size={13} />
                        {article.date}
                      </span>
                      <h3>
                        <a href="#news">{article.title}</a>
                      </h3>
                      <p>{article.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="calendar-panel" id="board" data-reveal aria-labelledby="calendar-title">
              <div className="calendar-heading">
                <h2 id="calendar-title">District Calendar</h2>
                <a href="#board">
                  Full Calendar
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
              <div className="event-list">
                {events.map((event) => (
                  <article className="event-row" key={`${event.month}-${event.day}`}>
                    <div className="event-date">
                      <span>{event.month}</span>
                      <strong>{event.day}</strong>
                    </div>
                    <div className="event-copy">
                      <span className={`event-category ${event.tone}`}>{event.category}</span>
                      <h3>{event.title}</h3>
                      <p>
                        <Icon name="clock" size={13} />
                        {event.details}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="services">
        <div className="site-container footer-main">
          <div className="footer-about">
            <a className="footer-brand" href="#top">
              <span className="footer-crest">
                <Icon name="cap" size={24} />
              </span>
              <span>Achromie Unified School District</span>
            </a>
            <p className="footer-description">
              Dedicated to maintaining standard academic excellence, fiscal transparency, and
              community-driven educational opportunities for all public school students within the
              region.
            </p>
            <div className="footer-contact">
              <p>
                <strong>District Office:</strong> 450 Academic Way, Achromie City
              </p>
              <p>
                <strong>Phone:</strong> (555) 839-2000 <span>|</span> <strong>Fax:</strong> (555)
                839-2001
              </p>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div className="footer-links-column" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-connect" id="connect">
            <h2>Connect</h2>
            <div className="social-links">
              <a
                href="#connect"
                aria-label="Achromie on Facebook"
                onClick={(event) => {
                  event.preventDefault();
                  showToast("Follow Achromie Unified on Facebook.");
                }}
              >
                <Icon name="facebook" size={16} />
              </a>
              <a
                href="#connect"
                aria-label="Achromie on X"
                onClick={(event) => {
                  event.preventDefault();
                  showToast("Follow Achromie Unified on X.");
                }}
              >
                <Icon name="x-social" size={15} />
              </a>
              <a
                href="#connect"
                aria-label="Achromie on YouTube"
                onClick={(event) => {
                  event.preventDefault();
                  showToast("Watch Achromie Unified on YouTube.");
                }}
              >
                <Icon name="youtube" size={17} />
              </a>
            </div>
            <p className="newsletter-label">Sign up for district notifications:</p>
            <form className="newsletter-form" onSubmit={submitNewsletter}>
              <label className="visually-hidden" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="newsletterEmail"
                placeholder="Email address"
                required
              />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className="site-container footer-legal">
          <p>
            <strong>Non-Discrimination Statement:</strong> Achromie Unified School District does not
            discriminate on the basis of race, color, national origin, sex, disability, or age in
            its programs and activities and provides equal access to designated youth groups. Title
            IX Coordinator Contact: (555) 839-2020.
          </p>
          <div className="footer-bottom">
            <p>© 2026 Achromie Unified School District. All Rights Reserved.</p>
            <div>
              <a href="#accessibility">Accessibility Statement</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {contactOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setContactOpen(false);
          }}
        >
          <div
            className="contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            ref={dialogRef}
          >
            <div className="dialog-heading">
              <h2 id="contact-dialog-title">
                <Icon name="mail" size={19} />
                District Inquiries
              </h2>
              <button
                className="icon-button dialog-close"
                type="button"
                aria-label="Close contact form"
                onClick={() => setContactOpen(false)}
              >
                <Icon name="close" size={18} />
              </button>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>
                <span>Full Name *</span>
                <input ref={contactNameRef} type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Email Address *</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                <span>Department / Topic</span>
                <select value={contactTopic} onChange={(event) => setContactTopic(event.target.value)}>
                  <option>General District Inquiry</option>
                  <option>Enrollment & Registration</option>
                  <option>Superintendent / School Board</option>
                  <option>Student Records / Transcripts</option>
                </select>
              </label>
              <label>
                <span>Message *</span>
                <textarea name="message" rows={4} required />
              </label>
              <div className="dialog-actions">
                <button className="dialog-cancel" type="button" onClick={() => setContactOpen(false)}>
                  Cancel
                </button>
                <button className="dialog-submit" type="submit">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={`toast-message${toast ? " is-visible" : ""}`} role="status" aria-live="polite">
        <span className="toast-check">
          <Icon name="check" size={17} />
        </span>
        <span>{toast}</span>
      </div>
    </div>
  );
}

export default App;