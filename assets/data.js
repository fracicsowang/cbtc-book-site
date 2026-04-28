// Shared data: book metadata, author bio, etc.

const BOOK = {
  title: "Communications-Based Train Control",
  subtitle: "A Comprehensive Guide for US Transit Professionals",
  author: "Chunjun (Francisco) Wang",
  totalPages: 1127,
  totalWords: "220,000",
  publisher: "Independent / Amazon KDP",
  pubDate: "April 2026",

  v1: {
    num: "01", roman: "ONE",
    name: "Foundations & Technical Architecture",
    pages: 533, words: "108,000", spineIn: 1.33,
    asin: "B0GYHLYQZZ",
    amazonPrint: "https://www.amazon.com/Communications-Based-Train-Control-Comprehensive-Professionals-ebook/dp/B0GYHLYQZZ",
    amazonKindle: "https://www.amazon.com/Communications-Based-Train-Control-Comprehensive-Professionals-ebook/dp/B0GYHLYQZZ",
    pricePrint: "$54.95",
    priceKindle: "$24.95",
    blurb: "The technical foundation of CBTC — the wireless signaling architecture that has replaced fixed-block circuits across modern metro systems. From the hundred-year evolution of train control to onboard ATP/ATO, wayside zone controllers, the data-communication radio network, and the central ATS that supervises it all — closing with the GoA 0–4 framework that classifies every level of automation built on top.",
    chapters: [
      ["01", "The Evolution of Train Control",      45],
      ["02", "Standards & Regulations: US Framework", 60],
      ["03", "CBTC System Architecture Overview",   46],
      ["04", "Onboard Equipment",                   77],
      ["05", "Wayside Equipment",                   61],
      ["06", "Communication Systems",               61],
      ["07", "Central System / ATS",                61],
      ["08", "Grades of Automation",                99],
    ],
  },
  v2: {
    num: "02", roman: "TWO",
    name: "Operations, Deployment & Economics",
    pages: 594, words: "112,000", spineIn: 1.49,
    asin: "B0GYHHNL2H",
    amazonPrint: "https://www.amazon.com/Communications-Based-Train-Control-Comprehensive-Professionals-ebook/dp/B0GYHHNL2H",
    amazonKindle: "https://www.amazon.com/Communications-Based-Train-Control-Comprehensive-Professionals-ebook/dp/B0GYHHNL2H",
    pricePrint: "$54.95",
    priceKindle: "$24.95",
    blurb: "From architecture to practice. Operating modes, hard-won lessons of US deployments — New York MTA, San Francisco BART — benchmarked against London, Paris, and Asia. Project lifecycle, performance criteria, lifecycle cost analysis, and a clear-eyed map of the vendor landscape.",
    chapters: [
      ["09", "Operating Modes",                     68],
      ["10", "CBTC in the United States",           42],
      ["11", "International Benchmarks",            31],
      ["12", "Project Lifecycle",                   42],
      ["13", "Performance Criteria",                36],
      ["14", "Lifecycle Costs",                     42],
      ["15", "Vendor Landscape",                    41],
      ["16", "US–China Comparative Perspectives",   41],
    ],
  },
};

const AUTHOR = {
  fullName: "Chunjun (Francisco) Wang",
  shortName: "Francisco Wang",
  credentials: ["Booth MBA", "CFA", "CBTC Rail-Tech Expert"],
  location: "Princeton, NJ",
  email: "franciscowang2008@gmail.com",
  linkedin: "https://www.linkedin.com/in/chunjun-wang/",
  googleScholar: "https://scholar.google.com/citations?user=JsYYeDUAAAAJ",
  orcid: "https://orcid.org/0009-0005-6344-9934",
  oneLiner:
    "Two decades in rail signaling, spanning US and Chinese practice. Seven CBTC patents, thirteen peer-reviewed papers, and operating responsibility for a major rail-signaling group's US subsidiary.",

  summary:
    "I've spent twenty years inside Communications-Based Train Control — first as a signaling engineer, then leading the US subsidiary of an international rail-signaling group, and now as a researcher applying AI to rail and energy infrastructure. This book is the reference I wish I had on day one.",

  highlights: [
    { num: "20+", label: "Years in rail signaling & CBTC" },
    { num: "7",   label: "CBTC patents granted" },
    { num: "13",  label: "Peer-reviewed papers" },
    { num: "$80M", label: "US subsidiary annual revenue" },
    { num: "$200M", label: "Renewable-energy projects directed" },
    { num: "1,127", label: "Pages, across two volumes" },
  ],

  timeline: [
    { year: "2024 – Now", role: "Senior Research Engineer — AI for Energy & Transportation",
      org: "Rutgers University · CAIT (Center for Advanced Infrastructure & Transportation)",
      bullets: [
        "Lead applied-AI research at the intersection of robotics, rail transit, and energy systems.",
        "Designed AI-driven optimization workflows that improved operational efficiency for transportation infrastructure partners.",
        "Built cross-functional pipelines connecting university researchers with US industry sponsors for joint AI / rail-tech / clean-energy initiatives.",
      ],
    },
    { year: "2023 – 2024", role: "Vice President of Sales — US Operations",
      org: "Bluetti Power Inc., Houston & Orlando",
      bullets: [
        "Built the US business from the ground up and tripled revenue to $80M in portable & home energy storage.",
        "Ran day-to-day operations of three US offices — sales, ops, finance, HR — with COO-level scope.",
        "Established US distribution channels (DTC, Amazon, big-box retail, dealer network) and led pricing, forecasting, and S&OP cycles.",
      ],
    },
    { year: "2016 – 2020", role: "President & CEO — US Subsidiary",
      org: "China Railway Signal & Communication Corp. (CRSC USA Inc.), Florida",
      bullets: [
        "Established and led the US subsidiary of an international rail-signaling group; brought the entity to profitability within twelve months and grew contract volume by 89%.",
        "Negotiated and executed CBTC and conventional signaling contracts with US transit agencies and Class-I freight operators.",
        "Built and directed a US engineering and business-development team across multiple states.",
      ],
    },
    { year: "2019 – 2021", role: "Master of Business Administration",
      org: "The University of Chicago, Booth School of Business",
      bullets: [
        "Concentrations: Business Analytics, Strategic Management, Operations Management.",
        "Activities: Management Consulting Group, Booth Investment Group.",
      ],
    },
    { year: "2008 – 2016", role: "Senior Signaling Engineer → Director",
      org: "China Railway Signal & Communication Corp.",
      bullets: [
        "Led CBTC system design and integration for major Chinese metro projects.",
        "Author or co-author on seven granted CBTC patents and thirteen peer-reviewed papers.",
        "Represented CRSC on international standards working groups and procurement evaluations.",
      ],
    },
    { year: "2002 – 2008", role: "B.S. & M.S., Electrical Engineering",
      org: "Beijing Jiaotong University",
      bullets: [
        "M.S. concentration: rail-transit signaling.",
        "Beijing Jiaotong is the leading Chinese university for rail engineering, with deep ties to every Tier-1 signaling supplier.",
      ],
    },
  ],
};

Object.assign(window, { BOOK, AUTHOR });
