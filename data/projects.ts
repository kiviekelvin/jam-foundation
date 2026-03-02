import { BookOpen, Users, Sprout, LucideIcon } from "lucide-react";

export interface ImpactStat {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  impact: string;
  category: string;
  accent: "sage" | "orange" | "purple";
  image: string;
  location: string;
  status: string;
  impactStat: ImpactStat;
  fullDescription: string[];
  objectives: string[];
  howItWorks: string[];
}

export interface ProjectCategory {
  category: string;
  icon: LucideIcon;
  accent: "sage" | "orange" | "purple";
  headerBg: string;
  items: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    category: "Education",
    icon: BookOpen,
    accent: "sage",
    headerBg: "bg-jam-sage",
    items: [
      {
        slug: "her-future-fund",
        name: "Her Future Fund",
        tagline: "Keeping Vulnerable Girls in School",
        category: "Education",
        accent: "sage",
        image: "/images/projects/her-future-fund.jpg",
        location: "Borno, Nigeria",
        status: "Active",
        impactStat: { value: "340+", label: "girls supported" },
        desc: "We pay school fees, provide learning materials, and offer mentorship & psychosocial support. We don't just enroll girls—we walk with them.",
        impact: "$25/month keeps one girl in school. $300/year provides full education support.",
        fullDescription: [
          "Her Future Fund is our flagship education initiative designed to keep vulnerable girls in school across conflict-affected and underserved communities in Nigeria.",
          "Too many girls drop out of school due to poverty, displacement, early marriage, or gender-based violence. Her Future Fund addresses these barriers head-on by providing comprehensive support that goes far beyond tuition.",
          "We believe that when you educate a girl, you transform a community. Every girl we support becomes a beacon of hope and change in her family and neighborhood.",
        ],
        objectives: [
          "Pay school fees and provide learning materials for vulnerable girls",
          "Offer mentorship and psychosocial support throughout their education journey",
          "Reduce dropout rates caused by poverty, displacement, and early marriage",
          "Build confidence and leadership skills in young women",
        ],
        howItWorks: [
          "Identification — We work with community leaders and schools to identify girls at risk of dropping out.",
          "Enrollment & Support — We cover fees, uniforms, books, and supplies, removing financial barriers.",
          "Mentorship — Each girl is paired with a mentor who provides guidance and emotional support.",
          "Monitoring — Regular check-ins ensure girls stay in school and thrive academically.",
        ],
      },
      {
        slug: "beyond-school",
        name: "Beyond School™",
        tagline: "Life Skills & Leadership for Underserved Youth",
        category: "Education",
        accent: "sage",
        image: "/images/projects/beyond-school.jpg",
        location: "Abuja, Nigeria",
        status: "Active",
        impactStat: { value: "500+", label: "youth trained" },
        desc: "Through interactive learning, youth gain communication, critical thinking, leadership, financial literacy, and confidence.",
        impact: "$50 provides training materials. $500 funds a leadership workshop.",
        fullDescription: [
          "Beyond School™ is our youth development programme that equips underserved young people with the life skills they need to thrive beyond the classroom.",
          "Academic education alone is not enough. Young people need practical skills—communication, critical thinking, financial literacy, and leadership—to navigate the challenges of adulthood and build meaningful futures.",
          "Through interactive workshops and experiential learning, we help young people discover their potential and develop the confidence to pursue their dreams.",
        ],
        objectives: [
          "Develop communication and critical thinking skills in underserved youth",
          "Build financial literacy and entrepreneurial mindsets",
          "Foster leadership and civic engagement among young people",
          "Create safe spaces for youth to learn, grow, and connect",
        ],
        howItWorks: [
          "Recruitment — We partner with schools and community organizations to reach underserved youth.",
          "Interactive Workshops — Multi-day sessions cover communication, leadership, financial literacy, and more.",
          "Mentorship Circles — Small groups meet regularly to practice skills and support each other.",
          "Graduation & Alumni Network — Participants graduate into a network of empowered young leaders.",
        ],
      },
      {
        slug: "school-is-home-again",
        name: "School Is Home Again",
        tagline: "Education for Displaced Children",
        category: "Education",
        accent: "sage",
        image: "/images/projects/school-is-home-again.jpg",
        location: "Adamawa, Nigeria",
        status: "Active",
        impactStat: { value: "220+", label: "children re-enrolled" },
        desc: "We support school re-enrollment for displaced children, provide learning materials and uniforms, and offer psychosocial support.",
        impact: "$40 provides school supplies. $400 funds full education reintegration.",
        fullDescription: [
          "School Is Home Again addresses the education crisis facing children displaced by conflict, climate disasters, and communal violence across Nigeria.",
          "Displaced children face enormous barriers to education—loss of documents, trauma, language barriers, and the sheer instability of life in displacement. Many go years without stepping foot in a classroom.",
          "This project works to reintegrate displaced children into the education system, providing everything they need to feel safe, supported, and ready to learn.",
        ],
        objectives: [
          "Re-enroll displaced children into schools in their host communities",
          "Provide uniforms, learning materials, and school supplies",
          "Offer psychosocial support to address trauma and displacement stress",
          "Advocate for inclusive education policies for displaced populations",
        ],
        howItWorks: [
          "Outreach — Field teams identify displaced families with out-of-school children.",
          "Documentation & Enrollment — We help families navigate enrollment processes and replace lost documents.",
          "Material Support — Each child receives uniforms, books, bags, and essential supplies.",
          "Psychosocial Care — Trained counselors provide ongoing support to help children heal and adjust.",
        ],
      },
    ],
  },
  {
    category: "Economic Empowerment",
    icon: Users,
    accent: "orange",
    headerBg: "bg-jam-orange",
    items: [
      {
        slug: "mothers-rising",
        name: "Mothers Rising",
        tagline: "Economic Recovery for Young & Displaced Mothers",
        category: "Economic Empowerment",
        accent: "orange",
        image: "/images/projects/mothers-rising.jpg",
        location: "Kano, Nigeria",
        status: "Active",
        impactStat: { value: "180+", label: "mothers empowered" },
        desc: "Skills training, vocational support, small-scale income opportunities, financial literacy, and mentorship for mothers rebuilding their lives.",
        impact: "$75 funds skills training. $600 supports a full livelihood recovery package.",
        fullDescription: [
          "Mothers Rising is our economic empowerment programme for young and displaced mothers who are rebuilding their lives from scratch.",
          "Many of these women have lost everything—their homes, their livelihoods, and their support systems. They are raising children alone in unfamiliar communities, often without any source of income.",
          "Mothers Rising gives these women the tools, training, and support they need to become economically self-sufficient and provide for their families with dignity.",
        ],
        objectives: [
          "Provide vocational and skills training in marketable trades",
          "Support small-scale income generation through seed funding and mentorship",
          "Build financial literacy and savings habits",
          "Create peer support networks for young and displaced mothers",
        ],
        howItWorks: [
          "Assessment — We identify mothers in need and assess their skills, interests, and local market opportunities.",
          "Training — Participants receive hands-on training in trades like tailoring, food processing, or small-scale farming.",
          "Seed Support — Graduates receive starter kits or small grants to launch their businesses.",
          "Follow-Up — Ongoing mentorship and peer networks help mothers sustain and grow their livelihoods.",
        ],
      },
      {
        slug: "earn-a-skill-build-a-life",
        name: "Earn a Skill. Build a Life.",
        tagline: "Youth Livelihood Accelerator",
        category: "Economic Empowerment",
        accent: "orange",
        image: "/images/projects/earn-a-skill.jpg",
        location: "Lagos, Nigeria",
        status: "Active",
        impactStat: { value: "300+", label: "youth placed" },
        desc: "Practical, in-demand skills training, hands-on work readiness, entrepreneurship support, and career guidance for young people.",
        impact: "$100 funds skills training. $800 provides full accelerator support.",
        fullDescription: [
          "Earn a Skill. Build a Life. is our youth livelihood accelerator designed to bridge the gap between education and employment for vulnerable young people.",
          "Youth unemployment is one of the biggest challenges facing Nigeria today. Many young people—especially those affected by displacement and poverty—lack access to the skills, networks, and opportunities they need to earn a living.",
          "This programme provides practical, market-driven skills training combined with mentorship, career guidance, and entrepreneurship support to help young people build sustainable livelihoods.",
        ],
        objectives: [
          "Train young people in practical, in-demand skills",
          "Provide hands-on work readiness and entrepreneurship support",
          "Connect youth with mentors, internships, and job opportunities",
          "Reduce youth unemployment and economic vulnerability in target communities",
        ],
        howItWorks: [
          "Recruitment — We identify and select motivated young people from underserved communities.",
          "Skills Training — Intensive, hands-on training in trades aligned with local market demand.",
          "Entrepreneurship Track — Participants with business ideas receive coaching and micro-grants.",
          "Placement & Mentorship — Job-seekers are connected with employers; entrepreneurs receive ongoing mentorship.",
        ],
      },
    ],
  },
  {
    category: "Climate, Food Security & Health",
    icon: Sprout,
    accent: "purple",
    headerBg: "bg-jam-purple",
    items: [
      {
        slug: "farm-without-land",
        name: "Farm Without Land",
        tagline: "Climate-Smart Greenhouse Farming for Displaced Families",
        category: "Climate, Food Security & Health",
        accent: "purple",
        image: "/images/projects/farm-without-land.jpg",
        location: "Plateau, Nigeria",
        status: "Active",
        impactStat: { value: "95", label: "greenhouses installed" },
        desc: "Low-cost, climate-smart greenhouse systems that allow displaced families to farm safely on small, secure spaces.",
        impact: "$100 pays for inputs and seeds. $1,200 builds one full greenhouse.",
        fullDescription: [
          "Farm Without Land introduces climate-smart greenhouse farming to displaced families who have lost access to traditional farmland.",
          "Displacement often means losing not just your home, but your livelihood. For farming families, losing access to land can mean losing everything. Farm Without Land provides a solution—compact, low-cost greenhouse systems that can produce food on small, secure spaces.",
          "These greenhouses are designed to withstand harsh weather, use minimal water, and produce year-round harvests, giving displaced families food security and a potential source of income.",
        ],
        objectives: [
          "Provide climate-smart greenhouse kits to displaced farming families",
          "Train families in greenhouse management and climate-resilient agriculture",
          "Improve household food security and nutrition",
          "Create income opportunities through surplus produce sales",
        ],
        howItWorks: [
          "Selection — We identify displaced families with farming backgrounds and available small spaces.",
          "Installation — Low-cost greenhouse structures are built on-site using locally sourced materials.",
          "Training — Families receive hands-on training in greenhouse farming, water management, and pest control.",
          "Harvest & Income — Families grow food for consumption and sell surplus at local markets.",
        ],
      },
      {
        slug: "save-the-harvest",
        name: "Save the Harvest",
        tagline: "Solar Solutions to End Food Waste",
        category: "Climate, Food Security & Health",
        accent: "purple",
        image: "/images/projects/save-the-harvest.jpg",
        location: "Kaduna, Nigeria",
        status: "Active",
        impactStat: { value: "40%", label: "reduction in food loss" },
        desc: "Solar-powered food preservation systems including solar tomato dryers, onion & pepper storage, and training on food preservation & market timing.",
        impact: "$75 funds preservation training. $1,000 installs a community-scale system.",
        fullDescription: [
          "Save the Harvest tackles one of the biggest challenges in Nigerian agriculture—post-harvest food loss.",
          "Up to 50% of perishable crops like tomatoes, peppers, and onions are lost after harvest due to lack of preservation and storage infrastructure. This means wasted effort, lost income, and food insecurity for farming communities.",
          "Save the Harvest deploys solar-powered food preservation systems that allow farmers to dry, store, and sell their produce at better prices, reducing waste and increasing household income.",
        ],
        objectives: [
          "Deploy solar-powered food dryers and storage systems in farming communities",
          "Train farmers in food preservation techniques and market timing",
          "Reduce post-harvest losses by at least 40% in target communities",
          "Increase farmer income through better preservation and market access",
        ],
        howItWorks: [
          "Community Assessment — We identify farming communities with high post-harvest loss rates.",
          "System Installation — Solar dryers and storage units are installed at community-accessible locations.",
          "Training — Farmers learn preservation techniques, quality control, and optimal market timing.",
          "Market Linkage — We connect farmers with buyers who value preserved, quality produce.",
        ],
      },
      {
        slug: "nourish-to-survive",
        name: "Nourish to Survive",
        tagline: "Emergency Nutrition for Children in Conflict Zones",
        category: "Climate, Food Security & Health",
        accent: "purple",
        image: "/images/projects/nourish-to-survive.jpg",
        location: "Borno, Nigeria",
        status: "Active",
        impactStat: { value: "1,100+", label: "children screened" },
        desc: "Nutritional screening, Ready-to-Use Therapeutic Food, nutrition education for mothers, and referral for critical cases.",
        impact: "$50 provides emergency nutrition for one child. $500 funds community outreach.",
        fullDescription: [
          "Nourish to Survive is our emergency nutrition response for children living in conflict zones and displacement camps across Nigeria.",
          "Malnutrition is a silent killer in crisis settings. Children under five are the most vulnerable, and without timely intervention, acute malnutrition can lead to lifelong developmental damage or death.",
          "This project provides rapid nutritional screening, therapeutic feeding, and nutrition education to save children's lives and strengthen community resilience against hunger.",
        ],
        objectives: [
          "Screen children under five for acute malnutrition in conflict-affected areas",
          "Provide Ready-to-Use Therapeutic Food (RUTF) to malnourished children",
          "Educate mothers and caregivers on infant and young child nutrition",
          "Refer severe cases to health facilities for specialized treatment",
        ],
        howItWorks: [
          "Screening — Community health workers conduct nutritional assessments using MUAC measurements.",
          "Treatment — Children identified with moderate or severe malnutrition receive RUTF and supplements.",
          "Education — Mothers attend nutrition education sessions on breastfeeding, complementary feeding, and hygiene.",
          "Referral — Critical cases are referred to partner health facilities for inpatient treatment.",
        ],
      },
    ],
  },
];

export const allProjects: Project[] = projectCategories.flatMap((cat) => cat.items);

export const getProjectBySlug = (slug: string): Project | undefined =>
  allProjects.find((p) => p.slug === slug);