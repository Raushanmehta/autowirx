import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type AutoWirxSchema = typeof siteData.AutoWirx;
export type AutoWirxSections = AutoWirxSchema["sections"];

// Reference schema convention aliases
export type ServicesSchema = AutoWirxSchema;
export type ServicesSections = AutoWirxSections;

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type AutoWirxTopbarData = AutoWirxSections["topbar"]["variants"]["AutoWirxTopbar1"];
export type AutoWirxNavbarData = AutoWirxSections["navbar"]["variants"]["AutoWirxNavbar1"];
export type AutoWirxFooterData = AutoWirxSections["footer"]["variants"]["AutoWirxFooter1"];
export type AutoWirxHeroData = AutoWirxSections["hero"]["variants"]["AutoWirxHero1"];

export type AutoWirxProcessData = AutoWirxSections["process"]["variants"]["AutoWirxProcess1"];
export type AutoWirxWhyChooseUsData = AutoWirxSections["whyChooseUs"]["variants"]["AutoWirxWhyChooseUs1"];
export type AutoWirxCtaData = AutoWirxSections["cta"]["variants"]["AutoWirxCta1"];
export type AutoWirxTestimonialsData = AutoWirxSections["testimonials"]["variants"]["AutoWirxTestimonials1"];
export type AutoWirxBlogData = AutoWirxSections["blog"]["variants"]["AutoWirxBlog1"];
export type AutoWirxAboutData = AutoWirxSections["about"]["variants"]["AutoWirxAbout1"];
export type AutoWirxAboutMissionData = AutoWirxSections["about"]["variants"]["AutoWirxAboutMission1"];
export type AutoWirxPageHeaderData = AutoWirxSections["pageHeader"]["variants"]["AutoWirxPageHeader1"];
export type AutoWirxTeamData = AutoWirxSections["team"]["variants"]["AutoWirxTeam1"];
export type AutoWirxServicesData = AutoWirxSections["services"]["variants"]["AutoWirxServices1"];
export type AutoWirxBrandsWeRepairData = AutoWirxSections["brandsWeRepair"]["variants"]["AutoWirxBrands1"];
export type AutoWirxGalleryData = AutoWirxSections["gallery"]["variants"]["AutoWirxGallery1"];
export type AutoWirxPricingData = AutoWirxSections["pricing"]["variants"]["AutoWirxPricing1"];
export type AutoWirxFaqsData = AutoWirxSections["faqs"]["variants"]["AutoWirxFaqs1"];
export type AutoWirxBookRepairData = AutoWirxSections["bookARepair"]["variants"]["AutoWirxBookRepair1"];

// ── Canonical Mapped Site Data Object ──
const sec = siteData.AutoWirx.sections;
export const siteMap = {
  // Compatibility section shortcuts
  topbar: sec.topbar.variants.AutoWirxTopbar1,
  navbar: sec.navbar.variants.AutoWirxNavbar1,
  footer: sec.footer.variants.AutoWirxFooter1,
  hero: sec.hero.variants.AutoWirxHero1,
  services: sec.services.variants.AutoWirxServices1,
  process: sec.process.variants.AutoWirxProcess1,
  whyChooseUs: sec.whyChooseUs.variants.AutoWirxWhyChooseUs1,
  cta: sec.cta.variants.AutoWirxCta1,
  testimonials: sec.testimonials.variants.AutoWirxTestimonials1,
  blog: sec.blog.variants.AutoWirxBlog1,
  about: sec.about.variants.AutoWirxAbout1,
  aboutMission: sec.about.variants.AutoWirxAboutMission1,
  pageHeader: sec.pageHeader.variants.AutoWirxPageHeader1,
  team: sec.team.variants.AutoWirxTeam1,
  brandsWeRepair: sec.brandsWeRepair.variants.AutoWirxBrands1,
  gallery: sec.gallery.variants.AutoWirxGallery1,
  pricing: sec.pricing.variants.AutoWirxPricing1,
  faqs: sec.faqs.variants.AutoWirxFaqs1,
  bookARepair: sec.bookARepair.variants.AutoWirxBookRepair1,

  // Compatibility section shortcuts
  topbarData: sec.topbar.variants.AutoWirxTopbar1,
  navbarData: sec.navbar.variants.AutoWirxNavbar1,
  footerData: sec.footer.variants.AutoWirxFooter1,
  heroData: sec.hero.variants.AutoWirxHero1,
  servicesData: sec.services.variants.AutoWirxServices1,
  processData: sec.process.variants.AutoWirxProcess1,
  whyChooseUsData: sec.whyChooseUs.variants.AutoWirxWhyChooseUs1,
  ctaData: sec.cta.variants.AutoWirxCta1,
  testimonialsData: sec.testimonials.variants.AutoWirxTestimonials1,
  blogData: sec.blog.variants.AutoWirxBlog1,
  aboutData: sec.about.variants.AutoWirxAbout1,
  aboutMissionData: sec.about.variants.AutoWirxAboutMission1,
  pageHeaderData: sec.pageHeader.variants.AutoWirxPageHeader1,
  teamData: sec.team.variants.AutoWirxTeam1,
  brandsWeRepairData: sec.brandsWeRepair.variants.AutoWirxBrands1,
  galleryData: sec.gallery.variants.AutoWirxGallery1,
  pricingData: sec.pricing.variants.AutoWirxPricing1,
  faqsData: sec.faqs.variants.AutoWirxFaqs1,
  bookARepairData: sec.bookARepair.variants.AutoWirxBookRepair1,

  // Root Tree
  AutoWirx: siteData.AutoWirx,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default siteData;
