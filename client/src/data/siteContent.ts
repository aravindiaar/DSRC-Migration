export const siteContent = {
  global: {
    siteName: "DSRC",
    logo: "DSRC",
    tagline: "Engineering Excellence Since 1969",
    nav: [
      { label: "Home", href: "/" },
      {
        label: "Services",
        href: "/services",
        children: [
          { label: "Platform & Product Development", href: "/services#platform" },
          { label: "Application Services & Modernization", href: "/services#application" },
          { label: "Digital Transformation Services", href: "/services#digital" },
          { label: "Cloud Management Services", href: "/services#cloud" },
        ],
      },
      {
        label: "About",
        href: "/who-we-are",
        children: [
          { label: "Who We Are", href: "/who-we-are" },
          { label: "The DSRC Difference", href: "/who-we-are#difference" },
          { label: "Our Values", href: "/who-we-are#values" },
          { label: "Global Locations", href: "/who-we-are#locations" },
        ],
      },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    footer: {
      quickLinks: [
        { label: "Who We Are", href: "/who-we-are" },
        { label: "Services", href: "/services" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
      ],
      headquarters: {
        title: "Global Headquarters",
        company: "Data Software Research Company Private Limited",
        address: "11 Smith Road, 'Kasturi Towers', Chennai 600002, Tamilnadu, India",
        phone: "+91 (0)44 4510-5000",
        fax: "+91 (0)44 4510-5001",
      },
      offices: [
        "California, United States",
        "New Jersey, United States",
        "London, United Kingdom",
        "Amsterdam, Netherlands",
      ],
      salesPhones: [
        { region: "United Kingdom", phone: "+44 2078703112" },
        { region: "Ireland", phone: "+353 818687435" },
        { region: "Europe", phone: "+31 20 808 2165" },
        { region: "United States & Canada", phone: "+1 201 534 6351" },
      ],
      copyright: "DSRC 2024. All Rights Reserved.",
      social: {
        linkedin: "https://in.linkedin.com/company/dsrc",
      },
    },
  },
  pages: {
    home: {
      seo: {
        title: "DSRC - Engineer the Future | Software Engineering & Digital Transformation",
        description: "Collaborate with passionate technologists building next-gen platforms for global enterprises. Discover opportunities to innovate, learn, and excel.",
      },
      hero: {
        title: "Engineer the Future with DSRC",
        subtitle: "Collaborate with passionate technologists building next-gen platforms for global enterprises. Discover opportunities to innovate, learn, and excel in a culture that values creativity and excellence.",
        cta: { label: "Explore Services", href: "/services" },
        secondaryCta: { label: "Contact Us", href: "/contact" },
      },
      whoWeAre: {
        sectionTitle: "WHO WE ARE",
        heading: "Engineering Strength. Agile Innovation.",
        points: [
          {
            title: "Five Decades of Expertise",
            description: "With over 50 years of experience, DSRC has been at the forefront of software engineering, delivering innovative solutions to global enterprises.",
          },
          {
            title: "Bringing Ideas to Life",
            description: "We transform complex business challenges into elegant technological solutions, bridging the gap between vision and execution.",
          },
          {
            title: "350+ Skilled Engineers",
            description: "Our talented workforce of over 350 skilled engineers brings deep technical expertise and creative problem-solving to every project.",
          },
          {
            title: "Quality & Digital Transformation",
            description: "We are committed to delivering excellence through rigorous quality standards and cutting-edge digital transformation services.",
          },
        ],
        cta: { label: "Learn More About Us", href: "/who-we-are" },
      },
      services: {
        sectionTitle: "WHAT WE CAN DO FOR YOU",
        heading: "Comprehensive Technology Solutions",
        items: [
          {
            title: "Platform & Product Development",
            description: "Delivering end-to-end software product engineering services that take your ideas from concept to market-ready solutions.",
            icon: "code",
            href: "/services#platform",
          },
          {
            title: "Application Services",
            description: "Empowering enterprise businesses with modern Web, Mobile, and cross-platform applications built with modern technologies.",
            icon: "app",
            href: "/services#application",
          },
          {
            title: "Digital Transformation",
            description: "Modernizing legacy systems and applications helping clients in their digital transformation journey.",
            icon: "transform",
            href: "/services#digital",
          },
          {
            title: "Cloud Management",
            description: "Comprehensive cloud solutions covering Cloud Infrastructure Management, IT Operations Management and Cloud Security Management.",
            icon: "cloud",
            href: "/services#cloud",
          },
        ],
      },
      testimonials: {
        sectionTitle: "WHAT OUR CLIENTS SAY",
        heading: "Client Testimonials",
        items: [
          {
            quote: "DSRC has been an invaluable technology partner, consistently delivering high-quality solutions that have transformed our digital infrastructure.",
            author: "Technology Director",
            company: "Global Enterprise Client",
          },
          {
            quote: "Their team's technical expertise and commitment to deadlines have made them our go-to partner for all software development needs.",
            author: "VP of Engineering",
            company: "Fortune 500 Company",
          },
          {
            quote: "Working with DSRC has accelerated our digital transformation by years. Their agile approach and deep domain knowledge sets them apart.",
            author: "CTO",
            company: "Leading Financial Services Firm",
          },
        ],
      },
      careers: {
        sectionTitle: "CAREERS AT DSRC",
        heading: "Join Our Team of Innovators",
        description: "We are always looking for exceptional talent to join our team. At DSRC, you'll find opportunities to innovate, grow, and succeed in a collaborative environment that values creativity and excellence.",
        highlights: [
          "Challenging work environment with cutting-edge technologies",
          "Competitive compensation and benefits",
          "Accelerated career growth and overseas opportunities",
          "Core teams with 15+ years average experience",
        ],
        cta: { label: "View Opportunities", href: "/careers" },
      },
      stats: [
        { value: "50+", label: "Years of Experience" },
        { value: "350+", label: "Skilled Engineers" },
        { value: "5", label: "Global Offices" },
        { value: "100+", label: "Enterprise Clients" },
      ],
    },
    contact: {
      seo: {
        title: "Contact DSRC - Get in Touch",
        description: "Contact DSRC for your software engineering and digital transformation needs. Offices in India, US, UK, and Netherlands.",
      },
      hero: {
        title: "Contact Us",
        subtitle: "Want to explore how DSRC can help your business? Let's talk!",
      },
      form: {
        fields: [
          { name: "name", label: "Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "organization", label: "Organization", type: "text", required: false },
          { name: "phone", label: "Contact Number", type: "tel", required: false },
          { name: "region", label: "Region", type: "select", required: true, options: ["North America", "Europe", "Asia Pacific", "Middle East & Africa", "Latin America"] },
          { name: "inquiryType", label: "Inquiry Type", type: "select", required: true, options: ["General Inquiry", "Services", "Careers", "Partnership", "Other"] },
          { name: "message", label: "Comment or Message", type: "textarea", required: true },
        ],
      },
      offices: [
        {
          title: "Corporate Headquarters",
          company: "Data Software Research Company Private Limited",
          address: "11 Smith Road, 'Kasturi Towers', Chennai 600002, Tamilnadu, India",
          phone: "+91 (0)44 4510-5000",
        },
        {
          title: "US West Coast Office",
          company: "Data Software Research Company Limited",
          address: "4677 Old Ironsides Drive, Suite# 250, Santa Clara, CA 95054, United States",
        },
        {
          title: "US East Coast Office",
          company: "Data Software Research Company Limited",
          address: "2011 Route 46, Waterview Plaza, Suite 310, Parsippany, NJ 07054, United States",
        },
        {
          title: "London, United Kingdom",
          company: "DSRC (UK) Limited",
          address: "10 Orange Street, Haymarket, London WC2H 7DQ, United Kingdom",
        },
        {
          title: "Amsterdam, Netherlands",
          company: "Data Software Research Company Limited (Europe)",
          address: "B.V. Herengracht 449a 1017 BR, Amsterdam, Netherlands",
        },
      ],
    },
  },
};
