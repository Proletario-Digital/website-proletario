export interface ServicePackage {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
}

export interface FreelancerService {
  name: string;
}

export interface FreelancerMethodologyStep {
  text: string;
}

export interface ServicesData {
  sitesPackages: ServicePackage[];
  emailPackages: ServicePackage[];
  freelancerServices: string[];
  freelancerMethodology: string[];
}
