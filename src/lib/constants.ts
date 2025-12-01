// Global constants for the application

// Site Information
export const SITE_NAME = "Arrival Research Center"
export const SITE_DESCRIPTION = "A.R.C. means Arrival Research Center. It is the experimental arm of Arrival Works, dedicated to research, experimentation, and the open exchange of process knowledge."
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

// Contact Information
export const CONTACT_EMAIL = "mail@arrivalworks.com"
// export const CONTACT_PHONE = "+1 (555) 123-4567";

// Social Media Links
export const SOCIAL_LINKS = {
  //   twitter: "https://twitter.com/arrivalworks",
  linkedin: "https://linkedin.com/company/arrivalworks",
  instagram: "https://instagram.com/arrival.works",
  tiktok: "https://tiktok.com/@arrival.works",
  youtube: "https://youtube.com/@arrivalworks",
  //   github: "https://github.com/arrivalworks",
} as const

// API Configuration
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

// App Configuration
export const APP_CONFIG = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  supportedImageTypes: ["image/jpeg", "image/png", "image/webp"],
  itemsPerPage: 12,
} as const

// Theme Configuration
export const THEME = {
  primaryColor: "#000000",
  secondaryColor: "#ffffff",
  accentColor: "#0070f3",
} as const

// Navigation
export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  footer: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
} as const

// Environment
export const IS_PRODUCTION = process.env.NODE_ENV === "production"
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development"
