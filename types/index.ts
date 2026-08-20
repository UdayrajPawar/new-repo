export interface DocumentItem {
  id: string;
  title: string;
  file: string;
  verified: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  status: string;
}

export interface QuickLink {
  label: string;
  href: string;
}

export interface CompanyData {
  companyName: string;
  tagline: string;
  description: string;
  subDescription: string;
  about: {
    title: string;
    paragraphs: string[];
  };
  services: ServiceItem[];
  documents: DocumentItem[];
  contact: {
    companyName: string;
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
  };
  footer: {
    quickLinks: QuickLink[];
    copyright: string;
  };
}

export interface SocialItem {
  id: string;
  name: string;
  url: string;
}
