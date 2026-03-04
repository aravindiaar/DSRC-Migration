// tina/config.ts
import { defineConfig } from "tinacms";
var seoFields = [
  {
    type: "object",
    name: "seo",
    label: "SEO",
    fields: [
      { type: "string", name: "title", label: "Page Title" },
      { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } }
    ]
  }
];
var heroFields = [
  {
    type: "object",
    name: "hero",
    label: "Hero Section",
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
      { type: "image", name: "bgImage", label: "Background Image" },
      { type: "string", name: "breadcrumbs", label: "Breadcrumbs", list: true }
    ]
  }
];
var ctaObjectFields = [
  { type: "string", name: "title", label: "Title" },
  { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
  {
    type: "object",
    name: "button",
    label: "Button",
    fields: [
      { type: "string", name: "label", label: "Label" },
      { type: "string", name: "href", label: "Link" }
    ]
  }
];
var config_default = defineConfig({
  branch: "",
  clientId: null,
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "client/public"
  },
  media: {
    tina: {
      publicFolder: "client/public",
      mediaRoot: "images"
    }
  },
  schema: {
    collections: [
      // ─── GLOBAL ──────────────────────────────────────────────────
      {
        name: "global",
        label: "Global Settings",
        path: "content",
        match: { include: "global" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "siteName", label: "Site Name" },
          { type: "image", name: "logoUrl", label: "Logo" },
          {
            type: "object",
            name: "nav",
            label: "Navigation",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
              {
                type: "object",
                name: "children",
                label: "Dropdown Items",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              {
                type: "object",
                name: "quickLinks",
                label: "Quick Links",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" }
                ]
              },
              {
                type: "object",
                name: "headquarters",
                label: "Headquarters",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "company", label: "Company" },
                  { type: "string", name: "address", label: "Address", ui: { component: "textarea" } },
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "fax", label: "Fax" }
                ]
              },
              { type: "string", name: "offices", label: "Office Locations", list: true },
              {
                type: "object",
                name: "salesPhones",
                label: "Sales Phone Numbers",
                list: true,
                fields: [
                  { type: "string", name: "region", label: "Region" },
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "flag", label: "Flag Emoji" }
                ]
              },
              { type: "string", name: "copyright", label: "Copyright Text" },
              {
                type: "object",
                name: "social",
                label: "Social Links",
                fields: [
                  { type: "string", name: "linkedin", label: "LinkedIn URL" }
                ]
              }
            ]
          }
        ]
      },
      // ─── HOME PAGE ───────────────────────────────────────────────
      {
        name: "home",
        label: "Home Page",
        path: "content",
        match: { include: "home" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          ...seoFields,
          {
            type: "object",
            name: "heroSlides",
            label: "Hero Slides",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "bgImage", label: "Background Image" },
              {
                type: "object",
                name: "cta",
                label: "CTA Button",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whoWeAre",
            label: "Who We Are Section",
            fields: [
              { type: "string", name: "sectionTitle", label: "Section Title" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "cta",
                label: "CTA",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              { type: "string", name: "sectionTitle", label: "Section Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Cards",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "href", label: "Link" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "customers",
            label: "Customers Section",
            fields: [
              { type: "image", name: "logos", label: "Customer Logos", list: true }
            ]
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials Section",
            fields: [
              { type: "string", name: "sectionTitle", label: "Section Title" },
              {
                type: "object",
                name: "items",
                label: "Testimonials",
                list: true,
                fields: [
                  { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
                  { type: "string", name: "author", label: "Author" },
                  { type: "string", name: "role", label: "Role" },
                  { type: "image", name: "image", label: "Photo" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "careers",
            label: "Careers Section",
            fields: [
              { type: "string", name: "sectionTitle", label: "Section Title" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "cta",
                label: "CTA",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" }
                ]
              }
            ]
          }
        ]
      },
      // ─── SERVICES PAGE ───────────────────────────────────────────
      {
        name: "services",
        label: "Services Page",
        path: "content",
        match: { include: "services" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          ...seoFields,
          ...heroFields,
          {
            type: "object",
            name: "coreServices",
            label: "Core Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "insights",
            label: "Insights Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Insight Cards",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon (briefcase|thumbs-up|star)" },
                  {
                    type: "object",
                    name: "link",
                    label: "Link",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "URL" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "caseStudies",
            label: "Case Studies Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Case Studies",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: ctaObjectFields
          }
        ]
      },
      // ─── WHO WE ARE ──────────────────────────────────────────────
      {
        name: "whoWeAre",
        label: "Who We Are Page",
        path: "content",
        match: { include: "who-we-are" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          ...seoFields,
          ...heroFields,
          {
            type: "object",
            name: "intro",
            label: "Introduction",
            fields: [
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "vision",
            label: "Vision",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "mission",
            label: "Mission",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "difference",
            label: "The DSRC Difference",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "companyOverview",
            label: "Company Overview",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "values",
            label: "Our Values",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Values",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "locations",
            label: "Global Locations",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "offices",
                label: "Offices",
                list: true,
                fields: [
                  { type: "string", name: "city", label: "City / Region" },
                  { type: "string", name: "country", label: "Country" },
                  { type: "string", name: "flag", label: "Flag Image Path" }
                ]
              }
            ]
          }
        ]
      },
      // ─── CAREERS ─────────────────────────────────────────────────
      {
        name: "careers",
        label: "Careers Page",
        path: "content",
        match: { include: "careers" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          ...seoFields,
          ...heroFields,
          {
            type: "object",
            name: "intro",
            label: "Introduction",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subheading", label: "Subheading", ui: { component: "textarea" } },
              { type: "string", name: "question", label: "Question" },
              { type: "string", name: "answer", label: "Answer" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "highlights",
            label: "Highlights",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "workingAtDsrc",
            label: "Working at DSRC",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "sections",
                label: "Sections",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: ctaObjectFields
          }
        ]
      },
      // ─── CONTACT ─────────────────────────────────────────────────
      {
        name: "contact",
        label: "Contact Page",
        path: "content",
        match: { include: "contact" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          ...seoFields,
          ...heroFields,
          {
            type: "object",
            name: "intro",
            label: "Introduction",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "paragraph", label: "Paragraph", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "tabs",
            label: "Contact Tabs",
            list: true,
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "type", label: "Type (form|office)" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "flag", label: "Flag Image Path" },
              { type: "string", name: "company", label: "Company Name" },
              { type: "string", name: "address", label: "Address", ui: { component: "textarea" } },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "buttonLabel", label: "Button Label" },
              { type: "string", name: "formNote", label: "Form Note" }
            ]
          },
          {
            type: "object",
            name: "offices",
            label: "Office Locations",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "company", label: "Company" },
              { type: "string", name: "address", label: "Address", ui: { component: "textarea" } },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "fax", label: "Fax" }
            ]
          }
        ]
      },
      // ─── SERVICE DETAIL PAGES ─────────────────────────────────────
      {
        name: "serviceDetail",
        label: "Service Detail Pages",
        path: "content/services",
        format: "json",
        ui: { allowedActions: { create: true, delete: false } },
        fields: [
          ...seoFields,
          ...heroFields,
          { type: "string", name: "ctaVariant", label: "CTA Style (white|blue)" },
          {
            type: "object",
            name: "whyDsrc",
            label: "Why DSRC Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Icon Boxes",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "image", name: "icon", label: "Icon Image" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whyChoose",
            label: "Why Choose DSRC",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon Key (target|user-plus|infinity|settings|scale|globe)" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "process",
            label: "Process / How We Work",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "expertise",
            label: "Expertise Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Expertise Cards",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "insights",
            label: "Insights Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Insight Cards",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon (briefcase|thumbs-up|star)" },
                  {
                    type: "object",
                    name: "link",
                    label: "Link",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "URL" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "caseStudies",
            label: "Case Studies",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" }
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: ctaObjectFields
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
