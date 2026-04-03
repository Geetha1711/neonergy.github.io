/**
 * NEONERGY – Site Content File
 * ─────────────────────────────────────────────────────────────────
 * Edit text content here. Changes apply across all pages automatically.
 * Do NOT change the property names (keys) — only change the values.
 * ─────────────────────────────────────────────────────────────────
 */

const SITE = {

  /* ── Company Info ──────────────────────────────────────────── */
  company: {
    name:       "Neonergy Engineering Pvt Ltd",
    shortName:  "Neonergy",
    slogan:     "One Stop Energy Partner",
    tagline:    "Your One Stop Energy Partner",
    email:      "info@neonergy.co",
    careersEmail: "info@neonergy.co",
    phone:      "+91 8095241041",
    landline:   "080 25431041",
    whatsapp:   "+91 8095241041",
    address: {
      line1:  "1st Floor, 682/2, 12th Main Rd, 3rd Block",
      line2:  "Rajajinagar, Bengaluru, Karnataka 560010",
      mapsUrl: "https://maps.google.com/?q=682/2,+12th+Main+Rd,+3rd+Block,+Rajajinagar,+Bengaluru,+Karnataka+560010"
    }
  },

  /* ── Business Hours ────────────────────────────────────────── */
  hours: [
    { days: "Monday – Saturday",      time: "9:30 AM – 6:30 PM IST", closed: false },
    { days: "2nd & 4th Saturday",     time: "Closed",                closed: true  },
    { days: "Sunday",                 time: "Closed",                closed: true  }
  ],

  /* ── Social Media URLs ─────────────────────────────────────── */
  social: {
    linkedin:  "https://www.linkedin.com/company/neonergy-engineering-private-limited",   // TODO: replace with LinkedIn page URL
    twitter:   "#",   // TODO: replace with Twitter/X page URL
    instagram: "#",   // TODO: replace with Instagram page URL
    facebook:  "#",   // TODO: replace with Facebook page URL
    youtube:   "#"    // TODO: replace with YouTube channel URL
  },

  /* ── Navigation ────────────────────────────────────────────── */
  nav: {
    theCompany: [
      { label: "About Neonergy",   href: "about.html#about" },
      { label: "Vision & Mission", href: "about.html#vision-mission" },
      { label: "Core Values",      href: "about.html#values" },
      { label: "Leadership Team",  href: "team.html" },
      { label: "Clients",          href: "clients.html" }
    ],
    segments: [
      { label: "Consultancy Services", href: "segments.html#consultancy" },
      { label: "O&M Solutions",        href: "segments.html#om-solutions" },
      { label: "EV & Battery Swap",    href: "segments.html#ev-battery"  }
    ],
    services: [
      { label: "Technical & Business Advisory",    href: "services.html" },
      { label: "Transaction & Investment Advisory", href: "services.html" },
      { label: "Project Management (PMC/PMU)",      href: "services.html" },
      { label: "EPC & Engineering Services",        href: "services.html" }
    ],
    projects: [
      { label: "Ongoing Projects",    href: "projects.html" },
      { label: "Solar PV Projects",   href: "#" },
      { label: "Wind & Hydro",        href: "#" },
      { label: "BESS Deployments",    href: "#" }
    ]
  },

  /* ── Home Page ─────────────────────────────────────────────── */
  home: {
    heroTag:    "Sustainable · Reliable · Cost-Effective",
    heroTitle:  "Your One Stop",
    heroSpan:   "Energy Partner",
    heroDesc:   "Integrated renewable energy solutions across the complete project lifecycle — from concept and engineering to execution, commissioning, and operations.",
    heroCta:    "Explore Services"
  },

  /* ── Latest Updates ────────────────────────────────────────── */
  updates: [
    {
      icon:  "☀️",
      tag:   "Ongoing Projects",
      title: "735 MW Solar & 105 MWH BESS Under Development",
      desc:  "Neonergy is currently developing ~735 MW of solar and 105 MWH of BESS across Karnataka and Tamil Nadu — spanning 42 MWp, 76.8 MWp, 160 MWp, 210 MWp, and more.",
      link:  "#newsroom"
    },
    {
      icon:  "📡",
      tag:   "O&M Solutions",
      title: "O&M Performance Monitoring for 515 MW Portfolio",
      desc:  "Neonergy provides remote O&M performance monitoring solutions for a 515 MW solar portfolio, ensuring guaranteed generation and uptime across sites in India.",
      link:  "#newsroom"
    },
    {
      icon:  "⚡",
      tag:   "EV & Battery Swap",
      title: "EV Charging & Battery Swap Infrastructure",
      desc:  "Expanding into public EV charging and battery swap station development with comprehensive consultancy, I&C, O&M services, and three-wheeler electric retro-fitment solutions.",
      link:  "#newsroom"
    }
  ],

  /* ── About Section ─────────────────────────────────────────── */
  about: {
    desc1: "Neonergy Engineering Pvt Ltd is an integrated Renewable Energy company committed to delivering sustainable, reliable, and cost-effective clean energy solutions — as a one-stop partner for all your renewable energy needs.",
    desc2: "We provide end-to-end services across the complete project lifecycle — from concept and engineering to execution, commissioning, and operations — spanning Solar PV, Wind, Hydro, BESS, and EV charging infrastructure.",
    desc3: "Our Vision: To become the most trusted one-stop partner for all renewable energy needs, enabling a cleaner and greener future. Our Mission: To provide integrated, reliable, and sustainable renewable energy solutions across the entire project lifecycle.",
    stats: [
      { num: "3 GW+", label: "Projects Executed" },
      { num: "735 MW", label: "Under Development" },
      { num: "515 MW", label: "O&M Monitoring" }
    ]
  },

  /* ── Business Segments ─────────────────────────────────────── */
  segments: [
    {
      icon:  "🔍",
      title: "Consultancy Services",
      desc:  "End-to-end consultancy for Solar PV, Wind & Hydro Power Plants — covering site survey, feasibility study, DPR, project structuring, fund syndication, technical advisory, PMC, owner's engineer, and regulatory advisory services."
    },
    {
      icon:  "⚙️",
      title: "O&M Solutions",
      desc:  "Ensuring smooth functioning and guaranteed generation of solar energy systems through preventive maintenance, equipment testing & analysis, inverter & transformer servicing, remote monitoring, safety audits, and break-fix solutions."
    },
    {
      icon:  "⚡",
      title: "EV Charging & Battery Swap",
      desc:  "Comprehensive solutions for public EV Charging and Battery Swap stations — including consultancy, I&C, and O&M services — along with market assessment, project structuring, and three-wheeler electric retro-fitment solutions."
    }
  ],

  /* ── Services ──────────────────────────────────────────────── */
  services: [
    {
      icon:  "🔍",
      title: "Technical & Business Advisory",
      desc:  "Site surveys, feasibility studies, detailed project reports, technical consulting, design review, engineering services, owner's engineer, consumption analysis, and regulatory advisory for Solar PV, Wind & Hydro projects."
    },
    {
      icon:  "💼",
      title: "Transaction & Investment Advisory",
      desc:  "Investment banking, bid advisory, PPA & PSA structuring, group captive & 3rd party PPA, debt syndication, legal advisory, and financial modelling for renewable energy transactions across KA, TN & KL."
    },
    {
      icon:  "📊",
      title: "Project Management (PMC/PMU)",
      desc:  "End-to-end project management consultancy — scheduling, budgeting, construction management, quality control, third-party inspection, procurement support, and HSE compliance across solar, wind, and BESS projects."
    },
    {
      icon:  "🏗️",
      title: "EPC & Engineering Services",
      desc:  "Engineering, Procurement & Construction for Solar Plant/Park, Floating Solar, Wind, Hybrid projects, Substation & Automation, Inverters, SCADA, BESS, Transmission & Distribution, and green hydrogen development."
    }
  ],

  /* ── Business Segments Page ────────────────────────────────── */
  segmentsPage: {
    consultancy: {
      icon:    "🔍",
      heading: "Consultancy Services",
      tag:     "End-to-End Advisory",
      intro:   "We offer End to End Consultancy Services for the development of Solar PV, Wind & Hydro Power Plants — covering the entire project lifecycle from concept to commissioning.",
      image:   "assets/cons-1.jpeg",
      images:  ["assets/cons-1.jpeg", "assets/cons-2.jpeg", "assets/cons-3.jpeg"],
      services: [
        "Site Survey + Feasibility Study & Detailed Project Report",
        "Project Structuring + Fund Syndication Options",
        "Transaction Advisory (Bid Process Management)",
        "Technical Consulting / Design Review / Engineering",
        "Procurement & Construction Support",
        "PMC of the Projects & Third-Party Inspection Agency",
        "Construction Management & Quality Control",
        "Advisory Service in Sourcing & Generation of Green Power",
        "3rd Party PPA + Group Captive PPA + bilateral/PSA & associated transaction services (KA, TN, KL)",
        "Owner's Engineer / Technical Due Diligence",
        "Regulatory Advisory Services"
      ]
    },
    om: {
      icon:    "⚙️",
      heading: "O&M Solutions",
      tag:     "Operations & Maintenance",
      intro:   "We ensure the smooth functioning and guaranteed generation of solar energy systems through comprehensive operations, maintenance, and remote monitoring solutions.",
      image:   "assets/operationmaintenance.jpeg",
      services: [
        "Solar Panel Maintenance",
        "Equipment Testing & Analysis",
        "Preventive Maintenance",
        "Inverter & Transformer L1 Service",
        "OEM Interface for Warranty Maintenance",
        "Breakdown Repairs & Other Infra Maintenance",
        "Brake-Fix Solutions for Distributed Solar PV Units",
        "Safety Audits & Remote Performance Monitoring",
        "O&M Remote Monitoring"
      ]
    },
    ev: {
      icon:    "⚡",
      heading: "EV Charging & Battery Swap",
      tag:     "EV Infrastructure",
      intro:   "We provide Comprehensive solutions (including Consultancy, I&C, O&M services) for the development of Public EV Charging / Swapping stations and three-wheeler electric retro-fitment.",
      image:   "assets/evcharging.jpeg",
      services: [
        "Identification & Feasibility Study for Charging Infra and Battery Swap station",
        "Market Assessment & Detailed Project Report",
        "Project Structuring + Fund Syndication Support",
        "PMC of the Infra Development & Third-Party Inspection Agency",
        "Three-Wheeler Electric Retro-fitment Solutions",
        "EV Charging & Swap Station — Installation & Commissioning",
        "EV Charging & Swap Station — Operations & Maintenance"
      ]
    }
  },

  /* ── About Page ────────────────────────────────────────────── */
  aboutPage: {
    about: {
      heading: "About Neonergy Engineering",
      desc1:   "Neonergy Engineering Pvt Ltd is an integrated Renewable Energy company committed to delivering sustainable, reliable, and cost-effective clean energy solutions — as a one-stop partner for all your renewable energy needs.",
      desc2:   "We provide end-to-end services across the complete project lifecycle — from concept and engineering to execution, commissioning, and operations — spanning Solar PV, Wind, Hydro, BESS, and EV charging infrastructure.",
      desc3:   "Founded with a goal to accelerate India's energy transition, Neonergy brings together multidisciplinary expertise in technical advisory, investment banking, EPC, O&M, and digital remote monitoring solutions.",
      image:   "assets/about/neonergy.jpeg"
    },
    vision: {
      label:     "Our Vision",
      statement: "To become the most trusted one-stop partner for all renewable energy needs, enabling a cleaner and greener future.",
      image:     "assets/about/vision.jpeg"
    },
    mission: {
      label:     "Our Mission",
      statement: "To provide integrated, reliable, and sustainable renewable energy solutions across the entire project lifecycle.",
      image:     "assets/about/mission.jpeg"
    },
    values: [
      { icon: "🌱", title: "Sustainability",         desc: "Every solution we design prioritises long-term environmental impact and clean energy independence for communities and industries." },
      { icon: "🔧", title: "Engineering Excellence", desc: "We bring deep technical rigour to every project — from feasibility and engineering design to commissioning and ongoing operations." },
      { icon: "🤝", title: "Client Partnership",     desc: "We work as a true partner — transparent, collaborative, and fully committed to your project's success from day one." },
      { icon: "💡", title: "Innovation",             desc: "Embracing emerging technologies and forward-thinking approaches to deliver smarter, more efficient energy systems." }
    ]
  },

  /* ── Leadership Team ───────────────────────────────────────── */
  team: [
    {
      name:  "Balakumaran J",
      photo: "assets/team/bala",
      title: "CBO",
      bio:   "Holds an M.E. in Power Systems and MBA in Finance & Project Management, with 20+ years of experience in consulting and EPC operations for Renewable Energy Projects, Thermal Power Plants, Mining, and Industrial systems.",
      highlights: [
        "Executed over 3 GW of Renewable Energy Projects and EPC packages in 5.5 GW of Thermal Power Projects",
        "Project Installation Head for AGETNL Solar Power Plant (108 MW) — part of the world's largest single-location solar project (648 MWac)",
        "Led the world's highest altitude Solar PV system (Mini-grid) at Leh-Ladakh (~4 km above sea level)",
        "Spearheaded the world's first 1 MW Floating Solar Project proposal in the Arabian Sea",
        "Currently developing ~735 MW of Solar & 105 MWH of BESS in India"
      ]
    },
    {
      name:  "Naveen M",
      photo: "assets/team/Naveen.JPG",
      title: "Head – RE PMC",
      bio:   "Holds an MBA in Project Management and a degree in Electronics, with 17+ years of experience in EPC operations for Renewable Energy Projects.",
      highlights: [
        "Executed Solar Projects totalling over 2 GW across diverse terrains in India",
        "Led execution of a 450 MWp large-scale project at a single location, completed on schedule during the pandemic",
        "Project Manager for the world's highest altitude Solar PV system at Leh-Ladakh",
        "Delivered distributed Hybrid grid systems for Telecom Department — central monitoring for 900+ installations",
        "Currently heading development of ~735 MW of Solar & 105 MWH of BESS in India"
      ]
    },
    {
      name:  "Sijith K",
      photo: "assets/team/Sijith",
      title: "Head Contracts",
      bio:   "Brings 24 years of experience in large-scale Renewable Energy Project Development, specializing in Solar and Wind projects.",
      highlights: [
        "Played a key role in developing over 3 GW of Solar Projects and 1.5 GW of Wind Projects across India",
        "Experienced with WTGs (0.6 MW to 3 MW) from Suzlon, Siemens Gamesa, Kenersys, and Vestas",
        "Successfully executed a 360 MW multi-location project within stipulated timelines during the pandemic",
        "Extensive experience in power evacuation systems up to 400 KV GIS stations",
        "Currently managing contracts for ~735 MW of Solar & 105 MWH of BESS in India"
      ]
    },
    {
      name:  "Raja Sekhar Reddy",
      photo: "assets/team/reddy",
      title: "Head Construction",
      bio:   "Over 36 years of experience in EPC operations, consulting, and O&M for renewable energy projects.",
      highlights: [
        "Managed construction for more than 2 GW of solar power projects across varied terrains in India",
        "Served as Construction Manager delivering more than 1 GW of solar projects",
        "Currently working as Construction Manager for 448 MW of solar"
      ]
    },
    {
      name:  "Daniel G",
      photo: "assets/team/Daniel.JPG",
      title: "AGM Engineering",
      bio:   "Holds a Master of Engineering in Solar Energy and a Degree in Mechanical Engineering, with over 11 years of experience in EPC operations, consulting, and O&M.",
      highlights: [
        "Designed Solar PV plants with combined capacity exceeding 2 GW",
        "Overseen installation of over 1.5 GW of solar projects as Construction Manager/Coordinator",
        "Designed solar projects across Indian Sub-continent, ASEAN, European, and Middle East regions",
        "Managed O&M of 220 MWp of solar projects as P&L head",
        "Currently spearheading engineering for ~735 MW Solar & 105 MWH BESS in India"
      ]
    }
  ],

  /* ── Open Positions (Careers) ──────────────────────────────── */
  careers: {
    intro: "At Neonergy Engineering, we combine technical rigour with a deep commitment to sustainability. We're looking for passionate engineers, consultants, and strategists who want to make a measurable difference in the global energy transition.",
    resumeNote: "Interested in joining us? Send your resume directly to us — we'll reach out when there's a match.",
    positions: [
      {
        type:       "Full-Time",
        title:      "Solar Energy Engineer",
        desc:       "Design and deliver utility-scale solar PV systems. Experience with PVSyst, AutoCAD, and grid connection studies required.",
        location:   "Bangalore",
        segment:    "⚡ Renewable Energy",
        experience: "3 – 6 Years",
        travel:     true,
        datePosted: "01 Apr 2026",
        status:     "open",   // "open" or "filled"
        details: {
          about:        "You will be responsible for end-to-end design, engineering, and commissioning of utility-scale and rooftop solar PV projects across India.",
          responsibilities: [
            "Prepare detailed solar PV system designs using PVSyst and AutoCAD",
            "Conduct site surveys, shadow analysis, and yield assessments",
            "Coordinate with EPC teams for installation and commissioning",
            "Liaise with grid authorities for connectivity and approvals",
            "Ensure compliance with CERC/SERC regulations and project specifications"
          ],
          requirements: [
            "B.E. / B.Tech in Electrical, Electronics, or related discipline",
            "3–6 years of experience in solar PV project design and delivery",
            "Proficiency in PVSyst, AutoCAD, and MS Office",
            "Knowledge of grid connection standards and net metering policies",
            "Strong communication and team coordination skills"
          ]
        }
      },
      {
        type:       "Full-Time",
        title:      "SCADA Systems Engineer",
        desc:       "Develop and commission SCADA and control systems for energy assets. Proficiency in SCADA platforms and industrial protocols required.",
        location:   "Bangalore",
        segment:    "📡 SCADA",
        experience: "2 – 5 Years",
        travel:     true,
        datePosted: "01 Apr 2026",
        status:     "open",
        details: {
          about:        "You will design, develop, and commission SCADA and control systems for solar, BESS, and industrial automation projects across client sites.",
          responsibilities: [
            "Develop SCADA architecture, HMI screens, and PLC logic for energy assets",
            "Commission and test RTUs, PLCs, and communication protocols (Modbus, DNP3, IEC 61850)",
            "Provide remote and on-site support for SCADA troubleshooting",
            "Integrate data from field devices to SCADA servers and cloud platforms",
            "Prepare technical documentation and training material for clients"
          ],
          requirements: [
            "B.E. / B.Tech in Electrical, Instrumentation, or related discipline",
            "2–5 years of experience in SCADA/DCS/PLC systems",
            "Hands-on experience with Ignition, WinCC, or equivalent SCADA platforms",
            "Knowledge of industrial communication protocols",
            "Willingness to travel extensively to project sites"
          ]
        }
      },
      {
        type:       "Full-Time",
        title:      "Project Manager – PMC",
        desc:       "Lead project management teams across renewable energy projects. Strong coordination, scheduling, and stakeholder management skills needed.",
        location:   "Bangalore / Site location",
        segment:    "📊 PMC",
        experience: "5 – 10 Years",
        travel:     true,
        datePosted: "01 Apr 2026",
        status:     "open",
        details: {
          about:        "You will oversee end-to-end delivery of renewable energy projects as Project Management Consultant (PMC), ensuring schedule, cost, and quality targets are met.",
          responsibilities: [
            "Lead multi-disciplinary teams across solar, BESS, and automation projects",
            "Develop and maintain project schedules, budgets, and risk registers",
            "Coordinate with clients, contractors, and statutory authorities",
            "Conduct progress reviews and prepare MIS reports for stakeholders",
            "Ensure HSE compliance and quality assurance on all project sites"
          ],
          requirements: [
            "B.E. / B.Tech with MBA or PMP certification preferred",
            "5–10 years of project management experience in renewable energy or infrastructure",
            "Proficiency in MS Project, Primavera, or equivalent scheduling tools",
            "Excellent stakeholder management and communication skills",
            "Willingness to travel to project sites across India"
          ]
        }
      },
      {
        type:       "Full-Time",
        title:      "Energy Advisory Consultant",
        desc:       "Support technical and business advisory engagements — feasibility studies, DPRs, and investment analysis for energy clients.",
        location:   "Bangalore",
        segment:    "💼 Advisory",
        experience: "2 – 5 Years",
        travel:     false,
        datePosted: "01 Apr 2026",
        status:     "open",
        details: {
          about:        "You will support Neonergy's advisory practice by delivering high-quality technical and business consulting to clients across the renewable energy sector.",
          responsibilities: [
            "Prepare Detailed Project Reports (DPRs) and feasibility studies for energy projects",
            "Conduct financial modelling, investment analysis, and tariff studies",
            "Support due diligence for mergers, acquisitions, and project financing",
            "Develop technical specifications and RFP/tender documents",
            "Engage with clients, regulators, and financial institutions"
          ],
          requirements: [
            "B.E. / B.Tech with M.Tech or MBA in Energy / Finance preferred",
            "2–5 years of experience in energy consulting or advisory",
            "Strong analytical skills and proficiency in Excel-based financial models",
            "Familiarity with Indian renewable energy policy and regulatory framework",
            "Excellent written and verbal communication skills"
          ]
        }
      }
    ]
  },

  /* ── Footer ────────────────────────────────────────────────── */
  footer: {
    about:     "Integrated Renewable Energy company committed to delivering sustainable, reliable, and cost-effective clean energy solutions — your one-stop partner for all renewable energy needs.",
    copyright: "2026 Neonergy Engineering Pvt Ltd. All rights reserved.",
    poweredBy: "Powered by NeoSashti"
  }

};
