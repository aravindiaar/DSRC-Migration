export const HOME_QUERY = `
  query GetHome($relativePath: String!) {
    home(relativePath: $relativePath) {
      id
      seo { title description }
      heroSlides { title subtitle bgImage cta { label href } }
      whoWeAre { sectionTitle paragraphs cta { label href } }
      services {
        sectionTitle subtitle
        items { title description image href }
      }
      customers { logos }
      testimonials { sectionTitle items { quote author role image } }
      careers { sectionTitle heading description cta { label href } }
    }
  }
`;

export const SERVICES_QUERY = `
  query GetServices($relativePath: String!) {
    services(relativePath: $relativePath) {
      id
      seo { title description }
      hero { title subtitle bgImage breadcrumbs }
      coreServices { title subtitle }
      insights {
        title
        items { title description icon link { label href } }
      }
      caseStudies { title description image }
      cta { title subtitle button { label href } }
      ctaVariant
    }
  }
`;

export const WHO_WE_ARE_QUERY = `
  query GetWhoWeAre($relativePath: String!) {
    whoWeAre(relativePath: $relativePath) {
      id
      seo { title description }
      hero { title subtitle bgImage breadcrumbs }
      intro { paragraphs }
      vision { title text }
      mission { title text }
      difference { title subtitle image stats { value label } }
      values { title items { title description } }
      cta { title subtitle button { label href } }
    }
  }
`;

export const CAREERS_QUERY = `
  query GetCareers($relativePath: String!) {
    careers(relativePath: $relativePath) {
      id
      seo { title description }
      hero { title subtitle bgImage breadcrumbs }
      intro { heading subheading question answer paragraphs }
      highlights { title description }
      workingAtDsrc { title sections { title description } }
      cta { title subtitle button { label href } }
    }
  }
`;

export const CONTACT_QUERY = `
  query GetContact($relativePath: String!) {
    contact(relativePath: $relativePath) {
      id
      seo { title description }
      hero { title subtitle bgImage breadcrumbs }
      intro { heading paragraphs }
      officeHours
      offices { title company address phone }
      cta { title subtitle button { label href } }
    }
  }
`;

export const SERVICE_DETAIL_QUERY = `
  query GetServiceDetail($relativePath: String!) {
    serviceDetail(relativePath: $relativePath) {
      id
      seo { title description }
      hero { title subtitle bgImage breadcrumbs }
      ctaVariant
      overview { heading paragraphs }
      whyDsrc { title description items { title icon } }
      capabilities { title items { title description } }
      expertise { title description areas }
      engagementModels { title items { title description } }
      genAI { title description items { title description } }
      process { title steps { title description } }
      caseStudies { title description image }
      cta { title subtitle button { label href } }
      insights { title items { title description icon link { label href } } }
    }
  }
`;
