export const siteContent = {
  global: {
    siteName: "DSRC",
    logoUrl: "/images/dsrc-logo.png",
    nav: [
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
        label: "Insights",
        href: "/services",
        children: [
          { label: "Technology Expertise", href: "/services" },
          { label: "Engagement Models", href: "/services" },
          { label: "Case Studies", href: "/services" },
          { label: "Client Testimonials", href: "/#testimonials" },
          { label: "Industry Experience", href: "/services" },
        ],
      },
      {
        label: "About",
        href: "/who-we-are",
        children: [
          { label: "Who We Are", href: "/who-we-are" },
          { label: "The DSRC Difference", href: "/who-we-are#difference" },
          { label: "Global Locations", href: "/who-we-are#locations" },
        ],
      },
      {
        label: "Careers",
        href: "/careers",
        children: [
          { label: "Working at DSRC", href: "/careers" },
          { label: "Job Opportunities", href: "/careers#opportunities" },
          { label: "Career Enquiry", href: "/contact" },
        ],
      },
    ],
    footer: {
      quickLinks: [
        { label: "We are DSRC!", href: "/who-we-are" },
        { label: "Services", href: "/services" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
        { label: "Sitemap", href: "/" },
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
        { region: "United Kingdom", phone: "+44 2078703112", flag: "🇬🇧" },
        { region: "Ireland", phone: "+353 818687435", flag: "🇮🇪" },
        { region: "Europe", phone: "+31 20 808 2165", flag: "🇪🇺" },
        { region: "United States & Canada", phone: "+1 201 534 6351", flag: "🇺🇸" },
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
      heroSlides: [
        {
          title: "Modernise Legacy Systems & Embrace Future-Ready Technology",
          subtitle: "Re-engineer legacy platforms, adopt microservices, APIs, cloud-containerisation and GenAI powered automation to boost performance and reduce tech-debt.",
          cta: { label: "LEARN MORE...", href: "/services#digital" },
          bgImage: "/images/hero-slide-1.webp",
        },
        {
          title: "Engineer the Future with DSRC",
          subtitle: "Collaborate with passionate technologists building next-gen platforms for global enterprises. Discover opportunities to innovate, learn, and excel in a culture that values creativity and excellence.",
          cta: { label: "JOIN OUR TEAM", href: "/careers" },
          bgImage: "/images/hero-slide-4.webp",
        },
        {
          title: "Partner with DSRC to Engineer Cloud-Native Platforms",
          subtitle: "Partner with DSRC to engineer cloud-native platforms and products that align with your business strategy, delivering agility, scalability and sustainability.",
          cta: { label: "LEARN MORE...", href: "/services#cloud" },
          bgImage: "/images/hero-slide-3.webp",
        },
      ],
      whoWeAre: {
        sectionTitle: "WHO WE ARE",
        paragraphs: [
          "DSRC blends proven engineering strength with agile innovation to help organisations modernise, build smarter, and achieve measurable business impact.",
          "With over five decades of technology and engineering expertise, DSRC serves as a trusted global partner for businesses seeking to innovate and scale with confidence.",
          "We bring ideas to life through modern technologies, flexible engagement models, and a collaborative approach that ensures clarity, agility, and dependable delivery.",
          "Our 350+ skilled engineers work closely with clients to design and develop secure, scalable, and future-ready digital solutions tailored to their goals.",
          "Focused on quality, performance, and long-term value, DSRC enables startups, SMEs, and enterprises to accelerate digital transformation and achieve meaningful outcomes.",
          "We remain committed to professionalism, client satisfaction, and continuous innovation in everything we do.",
        ],
        cta: { label: "Learn More", href: "/who-we-are" },
      },
      services: {
        sectionTitle: "WHAT WE CAN DO FOR YOU",
        subtitle: "We deliver agile, cost-effective technology solutions tailored for start-ups, scale-ups, and mid-sized businesses!",
        items: [
          {
            title: "PLATFORM & PRODUCT DEVELOPMENT",
            description: "Deliver end-to-end platform and product development through agile, scalable teams — expanding your capabilities cost-effectively, accelerating time-to-market, and keeping you ahead of the competition.",
            image: "/images/service-platform.webp",
            href: "/services#platform",
          },
          {
            title: "APPLICATION SERVICES",
            description: "Unleashing innovation, agility and advancement, empowering Enterprise businesses with modern Web, Mobile, and cross-platform applications built with state-of-the-art technologies and frameworks.",
            image: "/images/service-application.webp",
            href: "/services#application",
          },
          {
            title: "DIGITAL TRANFORMATION SERVICES",
            description: "Helping businesses in the digital transformation journey, modernizing their IT business systems and applications, process, and the way their workforce operates internally and how they deal with their customers.",
            image: "/images/service-digital.jpg",
            href: "/services#digital",
          },
          {
            title: "CLOUD MANAGEMENT SERVICES",
            description: "We can help design, build, and manage comprehensive cloud solutions covering DevOps, Deployment, SysOps covering Cloud Infrastructure and IT Operations Management and Cloud Security Management!",
            image: "/images/service-cloud.webp",
            href: "/services#cloud",
          },
        ],
      },
      customers: {
        logos: [
          "/images/customer-1.png",
          "/images/customer-2.png",
          "/images/customer-3.png",
          "/images/customer-4.png",
          "/images/customer-5.png",
        ],
      },
      testimonials: {
        sectionTitle: "WHAT OUR CLIENTS SAY",
        items: [
          {
            quote: "Working with the DSRC team on the NestLink project has been an excellent experience from start to finish. The team demonstrated great professionalism, creativity, and a strong commitment to quality throughout the engagement. DSRC's collaborative approach and technical expertise have been instrumental in delivering a robust and well-designed product that aligns with our vision. We look forward to continuing our partnership as we take NestLink to the next stage of development.",
            author: "Susan Ashworth",
            role: "Product owner at Watkins Property Ventures, United Kingdom",
            image: "/images/testimonial-1.jpg",
          },
          {
            quote: "DSRC has been a big part of our success here at Keyhouse. The team at DSRC has been instrumental in development and design for many projects here at Keyhouse. Their level of ownership and expertise provides a very trusting experience and engagement. DSRC is a valuable and trusted partner in our business!",
            author: "Stephen Keogh",
            role: "CEO & Technical Director at Dye & Durham, Ireland",
            image: "/images/testimonial-2.png",
          },
          {
            quote: "We've had the opportunity to work with DSRC for several years across a diverse range of projects. Their team consistently demonstrates deep technical expertise, delivering solutions that bring meaningful value to our work. Professional, friendly, approachable, and proactive, they are always willing to go the extra mile. DSRC has been a trusted and collaborative partner, and we sincerely appreciate their continued commitment and support.",
            author: "Bashar Nassar",
            role: "VP of Engineering at SystemWeaver, Sweden",
            image: "/images/testimonial-3.png",
          },
        ],
      },
      careers: {
        sectionTitle: "CAREERS AT DSRC",
        heading: "Are you creative, passionate, entrepreneurial and can solve problems with a little ingenuity?",
        description: "We are constantly looking for top talent, come let's work together and support in our endeavour to delight customers with scalable and performance-driven, innovative, next-generation software solution.",
        cta: { label: "View Opportunities", href: "/careers" },
      },
    },
    contact: {
      seo: {
        title: "Contact DSRC - Get in Touch",
        description: "Contact DSRC for your software engineering and digital transformation needs.",
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
