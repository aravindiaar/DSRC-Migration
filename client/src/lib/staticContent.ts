import globalData from "@content/global.json";
import homeData from "@content/home.json";
import servicesData from "@content/services.json";
import whoWeAreData from "@content/who-we-are.json";
import careersData from "@content/careers.json";
import contactData from "@content/contact.json";
import platformProductDevelopmentData from "@content/services/platform-product-development.json";
import applicationServicesData from "@content/services/application-services.json";
import digitalTransformationData from "@content/services/digital-transformation.json";
import cloudManagementData from "@content/services/cloud-management.json";

export const staticContent = {
  global: globalData,
  pages: {
    home: homeData,
    services: servicesData,
    "who-we-are": whoWeAreData,
    careers: careersData,
    contact: contactData,
  } as Record<string, any>,
  services: {
    "platform-product-development": platformProductDevelopmentData,
    "application-services": applicationServicesData,
    "digital-transformation": digitalTransformationData,
    "cloud-management": cloudManagementData,
  } as Record<string, any>,
};
