export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Academic' | 'Examination' | 'General' | 'Workshop';
  important: boolean;
  content: string;
  refNo?: string;
}

export interface StaffMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  department?: string;
  email?: string;
  phone?: string;
  image?: string;
  isLeadership: boolean;
  bio?: string;
}

export interface Course {
  id: string;
  title: string;
  mode: 'Regular' | 'ODL (Need-based)';
  duration: string;
  intake: number;
  eligibility: string;
  objectives: string[];
  outline: string;
  fees: { term: string; amount: string }[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  impact?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'Campus' | 'Training' | 'Academics' | 'Events';
}

export interface AccessibilityConfig {
  fontSizeLevel: number; // 0 = standard, 1 = large, 2 = extra large
  isHighContrast: boolean;
  isReadableFont: boolean;
}
