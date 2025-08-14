
export type ViewType = 'Dashboard' | 'USDA NRCS' | 'USDA AMS' | 'SCDA' | 'USDA NIFA' | 'Other Grants' | 'CSP Enhancements' | 'Analysis';

export interface GrantProgram {
  id: string;
  name: string;
  agency: string;
  details: string;
  eligibility: string;
  funding: string;
  deadlines: string[];
  submission: {
    forms: string;
    steps: string[];
  };
  scSpecific: string;
  sample: string;
  analysis: string;
  successRate?: number;
}

export type CspLandUse = 'Crop' | 'Pasture/Range' | 'Forest' | 'Associated Ag Land/Farmstead' | 'All';

export interface CspEnhancement {
  code: string;
  name:string;
  csaf: boolean;
  landUse: CspLandUse;
  details: string;
  references: string;
  grantSuccessPoints: string;
  complementaryGrants: string;
  scEstimate: string;
  analysis: string;
  submissionSpecifics: string;
}

export const ACRONYMS: { [key: string]: string } = {
    "AC": "Acre",
    "AMA": "Agricultural Management Assistance",
    "AMS": "Agricultural Marketing Service",
    "BFRDP": "Beginning Farmer and Rancher Development Program",
    "CAP": "Conservation Activity Plan",
    "CIG": "Conservation Innovation Grants",
    "CRP": "Conservation Reserve Program",
    "CSAF": "Climate-Smart Agriculture and Forestry",
    "CSP": "Conservation Stewardship Program",
    "DHEC": "Department of Health and Environmental Control (SC)",
    "EPI": "Environmental Benefits Index",
    "EPA": "Environmental Protection Agency",
    "EQIP": "Environmental Quality Incentives Program",
    "FMPP": "Farmers Market Promotion Program",
    "FSA": "Farm Service Agency",
    "FSMIP": "Federal State Marketing Improvement Program",
    "FY": "Fiscal Year",
    "GAP": "Good Agricultural Practices",
    "IPM": "Integrated Pest Management",
    "IRA": "Inflation Reduction Act",
    "NFWF": "National Fish and Wildlife Foundation",
    "NIFA": "National Institute of Food and Agriculture",
    "NRCS": "Natural Resources Conservation Service",
    "OCSP": "Organic Cost Share Program",
    "OM": "Organic Matter",
    "RCPP": "Regional Conservation Partnership Program",
    "RFP": "Request for Proposals",
    "ROI": "Return on Investment",
    "SARE": "Sustainable Agriculture Research and Education",
    "SC": "South Carolina",
    "SCBGP": "Specialty Crop Block Grant Program",
    "SCDA": "South Carolina Department of Agriculture",
    "SCI": "Soil Conditioning Index",
    "STIR": "Soil Tillage Intensity Rating",
    "TA": "Technical Assistance",
    "TSP": "Technical Service Provider",
    "USDA": "United States Department of Agriculture",
    "USFWS": "United States Fish and Wildlife Service",
    "VAPG": "Value-Added Producer Grants",
    "WHEG": "Wildlife Habitat Evaluation Guide",
};
