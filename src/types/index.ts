// Asset types
export interface GalleryImage {
  largeImage: string;
  smallImage: string;
}

export interface TestimonialImage {
  img: string;
}

export interface TeamMember {
  img: string;
}

export interface SocialLinks {
  facebook: string;
  twitter: string;
  youtube: string;
}

export interface Assets {
  logo: string;
  gallery: GalleryImage[];
  testimonials: TestimonialImage[];
  team: TeamMember[];
  social: SocialLinks;
}

// Component props types
export interface ContactProps {
  data?: {
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
}

export interface HeaderProps {
  data?: {
    title?: string;
    paragraph?: string;
  };
}

export interface AboutProps {
  data?: {
    paragraph?: string;
    Why?: string[];
    Why2?: string[];
  };
}

export interface ServicesProps {
  data?: {
    title?: string;
    services?: ServiceItem[];
  };
}

export interface ServiceItem {
  icon?: string;
  name?: string;
  text?: string;
}

export interface FeaturesProps {
  data?: {
    title?: string;
    features?: FeatureItem[];
  };
}

export interface FeatureItem {
  icon?: string;
  title?: string;
  text?: string;
}

export interface GalleryProps {
  data?: {
    title?: string;
    images?: GalleryImage[];
  };
}

export interface TestimonialsProps {
  data?: {
    title?: string;
    testimonials?: TestimonialItem[];
  };
}

export interface TestimonialItem {
  img?: string;
  text?: string;
  name?: string;
}

export interface TeamProps {
  data?: {
    title?: string;
    team?: TeamMemberData[];
  };
}

export interface TeamMemberData {
  img?: string;
  name?: string;
  job?: string;
}

export interface NavigationProps {
  data?: {
    logo?: string;
  };
}

// Form types
export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

// Language types
export interface LanguageSwitcherProps {
  className?: string;
}

// Image component types
export interface ImageProps {
  title: string;
  largeImage: string;
  smallImage: string;
} 