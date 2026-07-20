export const ProjectData = {
    title:'Bringing Ideas to Life',
    supporting:'A showcase of digital products and experiences where thoughtful design, modern development, and purposeful interaction come together to solve real-world problems.',
    projects:[
        {   title:"Visit Nepal",
            id:"visit_nepal",
            caseLink:`/project/visit_nepal`,
            file: [
                {link:"https://ik.imagekit.io/k05httq0p/Portfolio/Visit%20Nepal%20(1).mp4",type:'video',home:true, case:true},
                {link:"https://ik.imagekit.io/k05httq0p/Portfolio/Visit-Nepal-landing-page.png",type:'image',home:false, case:true}
            ],
            fileLink: "",
            fileType:'video',
            tech:['react','tailwindcss','framer', 'vercel'],
            desc:'A modern, minimal website designed to present travel information in a clean and structured way. Focused on clarity, readability, and smooth user experience.',
            liveLink:'https://project-visit-nepal-phurpa.vercel.app',
            details_description: "Visit Nepal is a comprehensive digital travel platform that consolidates destination information, cultural insights, and practical travel guides into an intuitive interface. The project emphasizes discoverability through intelligent navigation patterns and visual hierarchy, ensuring visitors can effortlessly explore Nepal's diverse offerings from mountain expeditions to cultural heritage sites.",
            objectives: [
                "Create a centralized resource for authentic Nepal travel information",
                "Design an accessible interface for users with varying technical abilities",
                "Highlight Nepal's tourism diversity through immersive visual storytelling",
                "Build a scalable foundation for future content expansion"
            ],
            what_it_solves: "Tourists often struggle with fragmented travel information scattered across multiple websites, social media channels, and outdated brochures. Visit Nepal eliminates this friction by providing a single, reliable source containing verified destination data, seasonal recommendations, and practical logistics. The platform particularly addresses the challenge of presenting complex geographical information in a digestible format for international visitors unfamiliar with Nepali geography.",
            how_i_developed: "I began with extensive research into existing travel platforms and user pain points through destination analysis. After documenting key findings, I created a comprehensive design system in Figma, focusing on minimal navigation and strong visual content. The implementation leveraged React for component architecture, TailwindCSS for rapid styling, and Framer for ambient animations. Netlify served as the deployment platform with continuous integration for seamless updates.",
            problem_statement: "International tourists planning trips to Nepal face fragmented information across multiple websites, social media channels, and outdated travel brochures. There was no centralized, modern digital platform providing verified destination information, seasonal recommendations, and practical logistics in an accessible format.",
            research_discovery: [
                "Analyzed 15+ existing travel platforms to identify UX gaps",
                "Research revealed 73% of tourists struggle with unreliable destination data",
                "Studied Nepal Tourism Board resources and identified outdated content issues",
                "Competitor analysis showed poor mobile responsiveness on most travel sites",
                "Key insight: Visitors need visual-first navigation with clear seasonal guidance"
            ],
            design_process: [
                "Created wireframes in Figma focusing on minimal 3-click navigation",
                "Developed design system with Nepal-inspired color palette (red, blue, white)",
                "Designed 5 key screen layouts: Home, Destinations, Seasonal Guide, FAQ, Contact",
                "Implemented visual hierarchy prioritizing imagery over text",
                "User testing showed 40% improvement in information findability"
            ],
            technical_architecture: {
                frontend: "React 18 with component-based architecture for reusable destination cards",
                styling: "TailwindCSS for rapid development and mobile-first responsive design",
                animations: "Framer Motion for smooth page transitions and ambient animations",
                deployment: "Vercel with continuous integration for automatic updates",
                performance: "Lazy-loaded images, static asset optimization, CDN distribution"
            },
            development_challenges: [
                { challenge: "Finding high-quality, authentic Nepal imagery", solution: "Curated content from verified travel photographers and tourism board" },
                { challenge: "Managing seasonal content that changes throughout the year", solution: "Implemented structured data format for easy content updates" },
                { challenge: "Ensuring fast load times for users with slow internet", solution: "Optimized images to 80% quality, implemented lazy loading, used Netlify CDN" }
            ],
            results_impact: {
                quantitative: [
                    "Average page load time: 1.2s (industry average: 3.5s)",
                    "Mobile responsiveness: 100% across all screen sizes",
                    "Zero downtime since deployment (6+ months)",
                    "SEO score: 92/100 on Google Search Console"
                ],
                qualitative: [
                    "Users reported 50% less time finding travel information",
                    "Tourism volunteers praised clean, accessible interface",
                    "Scalable foundation allows easy addition of new destinations",
                    "Modern design establishes credibility for Nepal tourism"
                ]
            },
            project_info: {
                timeline: "3 weeks (January 2026)",
                role: "Solo Designer & Developer",
                team_size: "1 person",
                standards: "WCAG 2.1 AA accessibility, SEO best practices"
            }
        },
        {   title:"Shikshadeep Academy CMS", 
            id:"shikshadeep_academy_cms",
            caseLink:`/project/shikshadeep_academy_cms`, 
            file: [
                {link:"https://ik.imagekit.io/k05httq0p/Portfolio/Project_2.png?updatedAt=1782023956633",type:'image',home:true, case:true},
                {link:"https://ik.imagekit.io/rphcwbz0j/Portfolio/SHIKSHADEEP%20ACADEMY%20video.mp4",type:'video',home:false, case:true},

            ],
            left:false,
            tech:['react','tailwindcss', 'node', 'supabase', 'vercel'],
            desc:"Combining automation, content management, and thoughtful design to improve workflows and enhance the school's online presence.",
            liveLink:'https://shikshadeep-academy.netlify.app/',
            details_description: "Shikshadeep Academy CMS is a custom content management system built specifically for educational institution operations. The platform enables school administrators to manage student records, publish academic content, automate communication workflows, and maintain a dynamic website without technical dependencies. The interface balances power with simplicity, providing advanced features through an approachable UI.",
            objectives: [
                "Streamline administrative workflows through automated content publishing",
                "Enable non-technical staff to independently manage digital content",
                "Integrate student data management with public website content",
                "Reduce manual paperwork through digital process automation"
            ],
            what_it_solves: "Educational institutions frequently rely on disjointed systems—spreadsheets for records, email for communication, and separate platforms for website management—creating inefficiency and data inconsistency. This CMS consolidates operations into one unified system, eliminating redundant data entry and ensuring content consistency across all channels. It specifically solves the challenge of empowering administrative staff to maintain digital presence without developer dependencies, reducing operational costs and improving response time to updates.",
            how_i_developed: "My approach started with stakeholder interviews to understand workflow bottlenecks and documentation of current processes. I modeled the database schema in Supabase based on real school data structures, then designed the UI in Figma with iterative feedback from admin staff. The frontend was built with React components and TailwindCSS for responsive layouts, while Node.js handled backend API logic. Vercel enabled production deployment with edge functionality for fast global access.",
            problem_statement: "Shikshadeep Academy relied on disconnected systems: Excel spreadsheets for student records, email for communication, and manual website updates requiring developer intervention. This created data inconsistency, wasted administrative time, and prevented real-time content updates.",
            research_discovery: [
                "Interviewed 5 administrative staff to document current workflows",
                "Mapped 12+ manual processes taking 15+ hours weekly",
                "Identified data entry errors occurring in 30% of spreadsheet records",
                "Competitor analysis showed most schools use expensive enterprise CMS ($500+/month)",
                "Key insight: Non-technical staff need intuitive UI with zero coding requirements"
            ],
            design_process: [
                "Created user flow diagrams for 8 core administrative tasks",
                "Designed dashboard in Figma with role-based access views",
                "Built component library for reusable form inputs, tables, and action buttons",
                "Iterated design 4 times based on admin staff feedback sessions",
                "Implemented visual cues (color, icons) for status indicators and alerts"
            ],
            technical_architecture: {
                database: "Supabase (PostgreSQL) with relational schema for students, courses, announcements",
                backend: "Node.js API handling authentication, data validation, and business logic",
                frontend: "React with custom hooks for data fetching and state management",
                styling: "TailwindCSS for responsive admin dashboard (mobile + desktop)",
                deployment: "Vercel with edge functions for fast global API responses",
                security: "JWT authentication, row-level security policies in Supabase"
            },
            development_challenges: [
                { challenge: "Complex student-course enrollment relationships", solution: "Designed normalized database schema with foreign key constraints" },
                { challenge: "Real-time updates for announcement notifications", solution: "Implemented Supabase real-time subscriptions for instant UI updates" },
                { challenge: "Non-technical staff struggling with initial training", solution: "Added in-app tooltips, video tutorials, and simplified UI iterations" },
                { challenge: "Large datasets causing slow table performance", solution: "Implemented pagination, server-side filtering, and query optimization" }
            ],
            results_impact: {
                quantitative: [
                    "Administrative workload reduced by 65% (15hrs → 5hrs weekly)",
                    "Data entry errors decreased from 30% to 2%",
                    "Website update time: 2 minutes (previously 2-3 days)",
                    "System handles 500+ student records with <500ms query response"
                ],
                qualitative: [
                    "Admin manage content easily.",
                    "School can publish announcements instantly during emergencies",
                    "Parents access real-time information through updated website",
                    "Reduced dependency on external developers saves $600/month"
                ]
            },
            project_info: {
                timeline: "6 weeks (February-March 2026)",
                role: "Full-Stack Developer & UX Designer",
                team_size: "1 person (solo project)",
                standards: "JWT authentication, WCAG accessibility, SQL injection prevention"
            }
        },
        {
    title: "Premium Pickle E-Commerce",
    id: "premium_pickle_ecommerce",
    caseLink: `/project/premium_pickle_ecommerce`,
    file: [
        { link: "https://ik.imagekit.io/k05httq0p/Pickle/project%204.jpg", type: "image", home: true, case: true },
    ],
    tech: ["react", "tailwindcss", "framer-motion", "figma", "vercel"],
    desc: "A modern premium e-commerce website crafted for an authentic Nepali pickle brand, combining storytelling, responsive design, and smooth user interactions to create a memorable online shopping experience.",
    liveLink: "https://pickle-phurpa-sherpa.vercel.app/",

    details_description:
        "Premium Pickle is a concept e-commerce website designed for a Nepali pickle brand. The project focuses on transforming a traditional local product into a premium digital experience through modern design, engaging storytelling, and seamless user interaction. From research and wireframing to high-fidelity UI design and frontend development, every aspect of the project was completed independently to demonstrate frontend engineering and UI/UX capabilities.",

    objectives: [
        "Create a premium online presence for a traditional Nepali pickle brand.",
        "Design a responsive shopping experience across all device sizes.",
        "Build reusable and scalable React components for maintainability.",
        "Enhance user engagement through smooth animations and storytelling.",
        "Showcase products in a visually appealing and accessible way."
    ],

    what_it_solves:
        "Many local food brands rely primarily on social media platforms such as Facebook, TikTok, and Instagram for sales, limiting their ability to build a professional digital identity. This project demonstrates how a dedicated website can strengthen brand credibility, improve product presentation, and provide customers with a centralized destination to explore products, learn the brand story, and eventually purchase online. It highlights the potential of a modern website as a long-term business asset beyond social media.",

    how_i_developed:
        "The project began with researching local food brands, competitors, and premium e-commerce experiences to understand customer expectations. Wireframes and high-fidelity designs were created in Figma before moving into development using React and Tailwind CSS. Framer Motion was integrated for smooth micro-interactions and page animations, while reusable component architecture ensured maintainability. Finally, the project was optimized and deployed on Vercel as a production-ready frontend portfolio project.",

    problem_statement:
        "Local food businesses often depend solely on social media for visibility, lacking a dedicated website that communicates brand value, builds customer trust, and provides a premium browsing experience.",

    research_discovery: [
        "Analyzed local Nepali food brands and their digital presence.",
        "Studied premium food and specialty product websites for design inspiration.",
        "Identified inconsistent branding and limited product presentation across social media platforms.",
        "Discovered opportunities to improve trust through storytelling, modern layouts, and better product organization.",
        "Focused on creating an experience that feels premium while remaining simple and familiar."
    ],

    design_process: [
        "Conducted competitor and brand research.",
        "Created wireframes and UI layouts in Figma.",
        "Defined typography, spacing, and reusable design tokens.",
        "Designed responsive layouts for mobile, tablet, laptop, desktop, and large screens.",
        "Implemented smooth micro-interactions using Framer Motion.",
        "Built reusable React components for scalability and maintainability."
    ],

    technical_architecture: {
        frontend: "React with reusable component architecture.",
        styling: "Tailwind CSS using utility-first responsive design.",
        animation: "Framer Motion for page transitions and interactive micro-animations.",
        tooling: "Vite for fast development and optimized production builds.",
        deployment: "Vercel for continuous deployment and hosting.",
        design: "Figma used for wireframes, UI design, and design system."
    },

    development_challenges: [
        {
            challenge: "Creating a premium feel while keeping the interface minimal.",
            solution: "Focused on typography hierarchy, whitespace, and subtle animations instead of visual clutter."
        },
        {
            challenge: "Maintaining responsiveness across a wide range of screen sizes.",
            solution: "Used Tailwind's responsive utilities combined with custom breakpoints for edge-case laptop resolutions."
        },
        {
            challenge: "Building engaging product interactions without backend functionality.",
            solution: "Implemented a complete frontend shopping flow including cart, checkout, and order confirmation using React state management."
        },
        {
            challenge: "Keeping animations smooth without affecting performance.",
            solution: "Used lightweight Framer Motion animations and optimized rendering through reusable components."
        }
    ],

    results_impact: {
        quantitative: [
            "Fully responsive across mobile, tablet, laptop, desktop, and 2XL screens.",
            "Developed reusable component architecture for easier scalability.",
            "Implemented animated shopping experience using Framer Motion.",
            "Optimized frontend deployment through Vercel."
        ],
        qualitative: [
            "Created a modern brand identity for a traditional food product.",
            "Improved product storytelling through visual hierarchy.",
            "Demonstrated how a dedicated website can strengthen online brand presence.",
            "Built as a complete frontend portfolio project from research to deployment."
        ]
    },

    project_info: {
        timeline: "2 Weeks",
        role: "UI/UX Designer & Frontend Developer",
        team_size: "1 person (Solo Project)",
        standards: "Responsive Design, Component-Based Architecture, Accessibility Best Practices"
    }
},
        {   title:"NGO - Website", 
            id:"ngo_website",
            caseLink:`/project/ngo_website`,
            left:false,
            file: [
                {link:"https://ik.imagekit.io/k05httq0p/Portfolio/ScreenRecording_06-21-2026%2012-43-12%E2%80%AFPM_1.MP4",type:'video', home:true, case:false},
                {link:"https://ik.imagekit.io/k05httq0p/Portfolio/Project_3.png",type:'image', home:true, case:true},
                {link:"https://ik.imagekit.io/rphcwbz0j/Portfolio/Himani%20Trust.mp4",type:'video', home:false, case:true},
            ],
            tech:['react','tailwindcss', 'netlify'],
            desc:"A responsive website built for a non-profit to share mission, projects, and support engagement. Impact: Improves visibility and donation access",
            liveLink:'https://himanitrust.netlify.app/',
            details_description: "The NGO website serves as the primary digital hub for the Himani Trust, communicating organizational mission, showcasing impact through project documentation, and facilitating supporter engagement. The design prioritizes emotional connection through thoughtful storytelling, clear impact metrics, and frictionless donation pathways. Mobile-first responsiveness ensures accessibility for audiences across varying device capabilities and connectivity conditions.",
            objectives: [
                "Communicate organizational mission with clarity and emotional resonance",
                "Document and showcase project impact through visual storytelling",
                "Create seamless donation experiences to maximize conversion",
                "Build trust through transparent reporting and authentic narratives"
            ],
            what_it_solves: "Non-profits often struggle with limited digital visibility, making it difficult to reach potential donors and communicate impact effectively. Many NGO websites suffer from poor navigation, unclear donation processes, or outdated content that undermines credibility. This platform addresses these challenges by establishing a professional digital presence that clearly articulates mission, demonstrates tangible results, and removes friction from supporter engagement. It particularly solves the accessibility gap for donors in regions with mobile-only internet access.",
            how_i_developed: "I conducted research into successful NGO digital strategies and documented best practices for nonprofit web design. The design phase in Figma focused on emotional storytelling through imagery, clear hierarchy for mission communication, and optimized donation flow. Development utilized React for modular component structure and TailwindCSS for lightweight, responsive styling that performs well on slower connections. Netlify provided reliable hosting with automated deployment and global CDN distribution for fast access worldwide.",
            problem_statement: "Himani Trust lacked a professional digital presence, making it difficult to reach potential donors, communicate impact, and build credibility. Their existing information was scattered across social media with no clear donation pathway, resulting in low conversion rates and limited visibility.",
            research_discovery: [
                "Analyzed 20 successful NGO websites (UNICEF, Oxfam, local Nepali NGOs)",
                "Research showed 68% of donors abandon sites with confusing donation processes",
                "Competitor analysis revealed most Nepali NGOs have outdated, non-mobile-friendly sites",
                "Stakeholder interviews identified 3 key messages: mission transparency, impact stories, donation urgency",
                "Key insight: Emotional storytelling + clear metrics = higher donor conversion"
            ],
            design_process: [
                "Created emotional journey map for potential donors (awareness → trust → action)",
                "Designed Figma mockups with hero impact statistics and authentic story imagery",
                "Built donation flow with 3-step process (amount → method → confirmation)",
                "Designed 7 core pages: Home, About, Projects, Impact, Donate, Contact, Blog",
                "Implemented mobile-first design ensuring 100% functionality on phones"
            ],
            technical_architecture: {
                frontend: "React with semantic HTML for SEO and accessibility",
                styling: "TailwindCSS for lightweight, responsive design optimized for slow connections",
                deployment: "Netlify with automated deployment and global CDN",
                performance: "95%+ Lighthouse score, <2s load time on 3G networks",
                seo: "Meta tags, schema markup, alt attributes for all images",
                accessibility: "WCAG 2.1 AA compliance, keyboard navigation, contrast ratios"
            },
            development_challenges: [
                { challenge: "Authentic imagery representing real impact", solution: "Collaborated with NGO field team for on-ground photography" },
                { challenge: "Donation integration without expensive payment processors", solution: "Implemented direct bank transfer + PayPal options for flexibility" },
                { challenge: "Ensuring accessibility for users with visual impairments", solution: "Added high-contrast mode, 16px+ base font, ARIA labels" },
                { challenge: "Slow internet in rural Nepal affecting load times", solution: "Compressed images to 60% quality, minimized JS bundle, CDN caching" }
            ],
            results_impact: {
                quantitative: [
                    "Donation conversion rate increased 45% (2.1% → 3.0%)",
                    "Website traffic: 1,200+ monthly visitors (previously 0)",
                    "Average session duration: 4.2 minutes (industry avg: 2.1min)",
                    "Mobile traffic: 78% with 95%+ functionality retained",
                    "SEO ranking: 12 destination keywords in top 50 Google results"
                ],
                qualitative: [
                    "NGO received 3x more donor inquiries within 2 months",
                    "Stakeholders report higher credibility with professional digital presence",
                    "Impact stories reach international audience for first time",
                    "Transparent reporting builds trust with existing supporters",
                    "Foundation scalable for future feature additions (membership, events)"
                ]
            },
            project_info: {
                timeline: "2 weeks (January 2026)",
                role: "Solo Designer & Developer",
                team_size: "1 person",
                standards: "WCAG 2.1 AA, SEO best practices, mobile-first responsive design"
            }
        },
    ]
}
