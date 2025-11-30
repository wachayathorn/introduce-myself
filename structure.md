introduce-myself/
├── app/
│   ├── layout.js                 # Root layout (Global UI)
│   ├── page.js                   # Home page (/)
│   ├── globals.css               # Global styles
│   │
│   ├── overview/
│   │   └── page.js               # Overview/Summary page (/overview)
│   │
│   ├── experience/
│   │   ├── page.js               # Experience main page (/experience)
│   │   ├── [id]/                 # Dynamic route สำหรับแต่ละ experience
│   │   │   └── page.js           # Detail page (/experience/1, /experience/2, etc.)
│   │   └── layout.js             # Optional: Experience section layout
│   │
│   ├── education/
│   │   └── page.js               # Education page (/education)
│   │
│   ├── skills/
│   │   └── page.js               # Skills page (/skills)
│   │
│   └── contact/
│       └── page.js               # Contact page (/contact)
│
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   └── Navbar.js
│   │
│   ├── layout/                   # Layout components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Navigation.js
│   │
│   └── sections/                 # Page-specific sections
│       ├── ExperienceCard.js
│       ├── SkillBar.js
│       └── Timeline.js
│
├── data/
│   ├── cv.js                     # CV data (เก็บข้อมูลรวม)
│   ├── experiences.js            # Experience data
│   ├── education.js              # Education data
│   └── skills.js                 # Skills data
│
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── companies/
│   └── icons/
│
├── styles/
│   └── ...                       # Additional style files (optional)
│
├── lib/
│   └── utils.js                  # Utility functions
│
├── package.json
└── next.config.js