
export interface FormInfo {
  id: string;
  name: string;
  agency: string;
  description: string;
  link: string;
  linkText: string;
}

export const formsData: FormInfo[] = [
  {
    id: 'nrcs-cpa-1200',
    name: 'NRCS-CPA-1200: Conservation Program Application',
    agency: 'USDA NRCS',
    description: 'The main application form to express interest in participating in NRCS conservation programs like EQIP and CSP. This is the first step in the application process.',
    link: 'https://www.nrcs.usda.gov/resources/forms/conservation-program-application-nrcs-cpa-1200',
    linkText: 'View Form Page',
  },
  {
    id: 'nrcs-cpa-1202',
    name: 'NRCS-CPA-1202: Conservation Program Contract',
    agency: 'USDA NRCS',
    description: 'The binding agreement between the participant and NRCS. It outlines the terms, conditions, and obligations for program participation. This form is provided by your local NRCS office during the contracting phase.',
    link: 'https://www.nrcs.usda.gov/getting-assistance/conservation-contracts',
    linkText: 'Learn about Contracts',
  },
  {
    id: 'nrcs-cpa-1155',
    name: 'NRCS-CPA-1155: Conservation Plan or Schedule of Operations',
    agency: 'USDA NRCS',
    description: 'A detailed plan that accompanies the contract, listing the specific conservation practices and enhancements you agree to implement, along with a schedule for completion.',
    link: 'https://www.nrcs.usda.gov/resources/forms/conservation-plan-or-schedule-of-operations-nrcs-cpa-1155',
    linkText: 'View Form Page',
  },
  {
    id: 'nrcs-cpa-1156',
    name: 'NRCS-CPA-1156: Revision of Plan/Schedule or Modification of Contract',
    agency: 'USDA NRCS',
    description: 'Used to make changes to your conservation plan or contract after it has been approved. Any modifications must be agreed upon by both you and NRCS.',
    link: 'https://www.nrcs.usda.gov/resources/forms/revision-of-plan-schedule-of-operations-or-modification-of-a-contract-nrcs-cpa-1156',
    linkText: 'View Form Page',
  },
  {
    id: 'ccc-902',
    name: 'CCC-902: Farm Operating Plan',
    agency: 'USDA FSA',
    description: 'Required by the Farm Service Agency (FSA) to determine payment eligibility and limitations. It details the structure and operation of your farm (individual, partnership, etc.).',
    link: 'https://www.fsa.usda.gov/programs-and-services/farm-bill/farm-policy/ccc-902-farm-operating-plan/index',
    linkText: 'View Form Page',
  },
  {
    id: 'ccc-941',
    name: 'CCC-941: Average AGI Certification',
    agency: 'USDA FSA',
    description: 'Certifies that your average Adjusted Gross Income (AGI) does not exceed the program limitations, a key eligibility requirement for most USDA payments.',
    link: 'https://www.fsa.usda.gov/programs-and-services/farm-bill/farm-policy/ccc-941-agi-certification/index',
    linkText: 'View Form Page',
  },
];
