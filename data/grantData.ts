
import type { GrantProgram, CspEnhancement } from '../types';

export const nrcsPrograms: GrantProgram[] = [
  {
    id: 'csp',
    name: 'Conservation Stewardship Program (CSP)',
    agency: 'USDA NRCS',
    details: 'Enhances conservation on working lands (e.g., soil health, habitat). Ideal for <5 acres via enhancements (e.g., E327B, E329D). Annual payments for existing/new practices. All enhancements listed below.',
    eligibility: 'Producers with land control; no min acreage; priority for beginning/socially disadvantaged. Must address SC priority resource concerns (e.g., soil erosion, water quality, wildlife habitat).',
    funding: '$20-40/ac avg; $4K min contract; CSAF +20% via IRA. SC estimates: $2.36-$985.07/ac.',
    deadlines: ['Continuous; ranking Dec 27, 2024'],
    submission: {
      forms: 'NRCS-CPA-1200 (Application), NRCS-CPA-1202 (Contract), NRCS-CPA-1155 (Plan/Schedule). Download: https://www.nrcs.usda.gov/resources/forms. Conservation Activity Plan (CAP) via TSP for E199A.',
      steps: [
        'Contact SC NRCS (Shaun Worley, 803-253-3512, shaun.worley@usda.gov) for eligibility screening.',
        'Submit NRCS-CPA-1200 with operation details (land use, acreage, practices).',
        'Complete Conservation Program Application Worksheet (assess resource concerns, e.g., SCI for soil).',
        'Work with NRCS for ranking (WHEG for wildlife, SCI for soil); priority for CSAF (e.g., E328E).',
        'Sign NRCS-CPA-1202 with approved enhancements (e.g., E327B for monarchs).',
      ]
    },
    scSpecific: 'Submit to local NRCS office (e.g., Columbia Service Center). Use CSP Worksheet to document thresholds; SC prioritizes water quality, soil health, wildlife.',
    sample: 'A 3-acre organic vegetable farm in Charleston County plans to implement enhancement E329D (No-till to reduce soil health degradation) and E328J (Crop rotation to benefit pollinators). The plan includes planting a diverse cover crop mix of rye and vetch to improve soil organic matter by an estimated 0.5% over 3 years.',
    analysis: 'ROI 2-3x via yield gains; success 53%; stack with EQIP for 30% impact. SC tip Whitelisting: Select CSAF enhancements for IRA boost; document WHEG/SCI.',
    successRate: 53
  },
  {
    id: 'eqip',
    name: 'Environmental Quality Incentives Program (EQIP)',
    agency: 'USDA NRCS',
    details: 'Cost-share for practices (e.g., high tunnels, cover crops). High tunnel initiative ideal for <5 acres.',
    eligibility: 'Ag producers; no min acreage; 90% cost-share for underserved. SC priorities: water quality, soil health.',
    funding: '50-90% cost-share; SC avg $14M (e.g., $9.1M cover crops). Caps: $450K general, $140K organic.',
    deadlines: ['Batching: Oct 25, 2024', 'Jan 10, 2025', 'Feb 10, 2025', 'Mar 7, 2025'],
    submission: {
      forms: 'NRCS-CPA-1200, NRCS-CPA-1155, NRCS-CPA-1156 (Payment Application).',
      steps: [
        'Contact SC NRCS for pre-application meeting.',
        'Submit NRCS-CPA-1200 with practice details (e.g., Practice 325).',
        'Provide farm map, deed/lease, resource concern data.',
        'NRCS ranks (priority for underserved, CSAF like 340).',
        'Sign contract; submit NRCS-CPA-1156 for payments.',
      ]
    },
    scSpecific: 'Submit to local NRCS. SC prioritizes Practice 325, 340. Advance payments (50%) for underserved.',
    sample: 'A 2-acre farm in Greenville County requests cost-share for a high tunnel system (Practice 325) to extend their growing season for leafy greens. The project will increase local food production and allow the farm to meet market demand for fresh produce during winter months. The applicant is a beginning farmer, qualifying for a 90% cost-share rate.',
    analysis: 'Success 44%; ROI 2x via productivity; high tunnels +30% yields. SC tip: Apply early; underserved priority.',
    successRate: 44
  },
  {
    id: 'crp',
    name: 'Conservation Reserve Program (CRP)',
    agency: 'USDA NRCS',
    details: 'Rental payments for conservation (e.g., pollinator buffers). Continuous signup suits <5 acres.',
    eligibility: 'Cropland/pasture; no min acreage if eligible; priority for beginning farmers.',
    funding: '$50-200/ac/yr; SC avg ~$100/ac; bonuses for underserved.',
    deadlines: ['Continuous; general signup TBD'],
    submission: {
      forms: 'CRP-1 (Contract), CRP-2 (Offer Worksheet).',
      steps: [
        'Contact SC FSA (803-806-3820) for eligibility.',
        'Submit CRP-1 with land details.',
        'Select practices (e.g., CP42); complete CRP-2.',
        'NRCS/FSA ranks (EPI score).',
        'Sign CRP-1; annual payments.',
      ]
    },
    scSpecific: 'Submit to local FSA. SC prioritizes SAFE.',
    sample: 'A 1-acre buffer strip of marginal cropland along a creek in the Pee Dee watershed will be enrolled in the Continuous CRP signup under practice CP42 (Pollinator Habitat). A mix of native wildflowers and grasses will be planted to provide habitat for pollinators and improve water quality by filtering runoff.',
    analysis: 'Success 70%; ROI via rentals; pairs with CSP. SC tip: Use CP42.',
    successRate: 70
  },
  {
    id: 'ama',
    name: 'Agricultural Management Assistance (AMA)',
    agency: 'USDA NRCS',
    details: 'Conservation for risk management (e.g., irrigation). SC eligible; suits <5 acres.',
    eligibility: 'Producers in SC; no min acreage; underserved priority.',
    funding: 'Up to $50K cost-share.',
    deadlines: ['Continuous'],
    submission: {
      forms: 'NRCS-CPA-1200, NRCS-CPA-1155.',
      steps: [
        'Contact SC NRCS for eligibility.',
        'Submit NRCS-CPA-1200 with practice details.',
        'Provide land documentation, resource concern data.',
        'NRCS approves; sign contract.',
        'Implement; submit for payment.',
      ]
    },
    scSpecific: 'Submit to local NRCS. SC prioritizes water efficiency.',
    sample: 'A 4-acre specialty crop farm in Lexington County seeks to install a micro-irrigation system (Practice 441) to replace an inefficient overhead sprinkler system. This will reduce water consumption by an estimated 40%, mitigate drought risk, and improve water quality by minimizing runoff.',
    analysis: 'Success 50%; ROI 2x via risk reduction. SC tip: Pair with EQIP.',
    successRate: 50
  },
  {
    id: 'cig',
    name: 'Conservation Innovation Grants (CIG)',
    agency: 'USDA NRCS',
    details: 'Funds innovative conservation (e.g., soil sensors). On-farm trials suit <5 acres.',
    eligibility: 'Producers via partnerships; no min acreage.',
    funding: '$5K-$75K on-farm; $1M+ total.',
    deadlines: ['RFP TBD'],
    submission: {
      forms: 'SF-424, SF-424A, SF-424B.',
      steps: [
        'Partner with org (e.g., Clemson).',
        'Submit via grants.gov with proposal.',
        'Include budget, assurances.',
        'NRCS reviews; award contract.',
      ]
    },
    scSpecific: 'Submit via grants.gov; SC prioritizes soil health.',
    sample: 'In partnership with Clemson Extension, a 3-acre farm will conduct an on-farm trial to evaluate the effectiveness of biochar amendments for improving soil moisture retention and nutrient availability in sandy coastal soils. The project will measure changes in soil health and crop yields over two growing seasons.',
    analysis: 'Success 25%; high ROI; stack with SARE. SC tip: Partner with Clemson.',
    successRate: 25
  },
  {
    id: 'rcpp',
    name: 'Regional Conservation Partnership Program (RCPP)',
    agency: 'USDA NRCS',
    details: 'Partner-led conservation (e.g., watershed protection).',
    eligibility: 'Small farms via partners; no min acreage.',
    funding: '$10M+ per project.',
    deadlines: ['Rolling'],
    submission: {
      forms: 'Varies by partner; typically SF-424.',
      steps: [
        'Join RCPP project via SC NRCS.',
        'Submit partner forms.',
        'Partner manages; NRCS approves.',
      ]
    },
    scSpecific: 'Contact SC NRCS (e.g., Pee Dee watershed).',
    sample: 'As part of the "Longleaf Pine Conservation" RCPP project, a 2-acre parcel of former cropland will be restored to native longleaf pine savanna. The project will involve planting longleaf seedlings and implementing a prescribed burn plan to enhance habitat for at-risk species like the gopher tortoise.',
    analysis: 'Success 40%; high impact. SC tip: Join existing projects.',
    successRate: 40
  }
];

export const amsPrograms: GrantProgram[] = [
    {
      id: 'vapg',
      name: 'Value-Added Producer Grants (VAPG)',
      agency: 'USDA AMS',
      details: 'Funds planning/capital for value-added products (e.g., jams).',
      eligibility: 'Small producers; <5 acres ok.',
      funding: '$75K planning; $250K capital.',
      deadlines: ['RFP TBD'],
      submission: {
        forms: 'SF-424, SF-424A, SF-424B.',
        steps: [
            'Submit via grants.gov with business plan.',
            'Include budget, feasibility study.',
            'AMS reviews; award contract.'
        ]
      },
      scSpecific: 'Contact SCDA (Betsy Dorton, bdorton@scda.sc.gov).',
      sample: 'A 3-acre herb farm plans to use a VAPG working capital grant to launch a line of artisanal herb-infused teas. Funds will cover packaging, marketing materials, and commercial kitchen rental fees to process and package the value-added product, increasing farm revenue by a projected 25%.',
      analysis: 'Success 30%; sales +25%. SC tip: Focus on specialty crops.',
      successRate: 30
    },
    {
      id: 'fmpp',
      name: 'Farmers Market Promotion Program (FMPP)',
      agency: 'USDA AMS',
      details: 'Supports direct marketing (e.g., CSAs).',
      eligibility: 'Small farms; no min acreage.',
      funding: '$50K-$500K.',
      deadlines: ['RFP TBD'],
      submission: {
        forms: 'SF-424, SF-424A, SF-424B.',
        steps: [
            'Submit via grants.gov with marketing plan.',
            'Include budget, community impact.',
            'AMS reviews; award contract.'
        ]
      },
      scSpecific: 'Contact SCDA.',
      sample: 'To increase direct-to-consumer sales, a 2-acre farm will use FMPP funds to develop a robust CSA (Community Supported Agriculture) marketing campaign. The project includes creating a professional website with an online signup portal, printing promotional brochures, and running targeted social media ads to reach 100 new CSA members.',
      analysis: 'Success 35%; sales +20%. SC tip: Highlight local food systems.',
      successRate: 35
    },
    {
      id: 'scbgp',
      name: 'Specialty Crop Block Grant Program (SCBGP)',
      agency: 'USDA AMS',
      details: 'Enhances specialty crops (e.g., vegetables).',
      eligibility: 'Via SCDA; small growers.',
      funding: '$100K+ via state.',
      deadlines: ['SCDA RFPs (TBD)'],
      submission: {
        forms: 'SCDA application.',
        steps: [
            'Submit to SCDA with project proposal.',
            'Include budget, specialty crop focus.',
            'SCDA ranks; submits to AMS.'
        ]
      },
      scSpecific: 'Contact SCDA.',
      sample: 'This project will implement an Integrated Pest Management (IPM) program for a 4-acre berry operation to combat the invasive spotted wing drosophila. Funds will support pest monitoring, the installation of exclusion netting, and farmer training workshops, enhancing the competitiveness of SC berries.',
      analysis: 'Success 40%; competitiveness +15%. SC tip: Align with SCDA priorities.',
      successRate: 40
    },
    {
      id: 'ocsp',
      name: 'Organic Cost Share Program (OCSP)',
      agency: 'USDA AMS',
      details: 'Reimburses organic certification costs.',
      eligibility: 'Small organic producers; no min acreage.',
      funding: '50% up to $500/scope.',
      deadlines: ['Continuous'],
      submission: {
        forms: 'SCDA OCSP form.',
        steps: [
            'Contact SCDA (Betsy Dorton).',
            'Submit form with certification invoice.',
            'SCDA reimburses.'
        ]
      },
      scSpecific: 'Apply via SCDA.',
      sample: 'A 1-acre certified organic herb farm seeks reimbursement for its annual certification costs. The farm is certified under the "Crops" scope and will submit its invoice from a USDA-accredited certifier to receive a 50% reimbursement, up to $500.',
      analysis: 'Success 90%; ROI via premiums (+20%). SC tip: Apply post-certification.',
      successRate: 90
    },
    {
      id: 'fsmip',
      name: 'Federal State Marketing Improvement Program (FSMIP)',
      agency: 'USDA AMS',
      details: 'Marketing research via SCDA.',
      eligibility: 'Small producers via state.',
      funding: 'Matching; $50K avg.',
      deadlines: ['Annual (TBD)'],
      submission: {
        forms: 'SF-424, SCDA forms.',
        steps: [
            'Submit to SCDA with marketing proposal.',
            'Include matching funds plan.',
            'SCDA/AMS review.'
        ]
      },
      scSpecific: 'Contact SCDA.',
      sample: 'In collaboration with the SC Department of Agriculture, this project will conduct a feasibility study for a regional food hub in the Upstate. The study will assess the potential for small farms (under 5 acres) to aggregate products and access larger wholesale and institutional markets.',
      analysis: 'Success 30%; market +20%. SC tip: Secure matching funds.',
      successRate: 30
    }
];

export const scdaPrograms: GrantProgram[] = [
    {
      id: 'scda-gap',
      name: 'SCDA GAP Cost-Share Program',
      agency: 'SCDA',
      details: 'Reimburses Good Agricultural Practices (GAP) audit costs.',
      eligibility: 'SC specialty crop growers; <5 acres ok.',
      funding: '$750 first audit; $300 subsequent.',
      deadlines: ['Continuous'],
      submission: {
        forms: 'SCDA GAP application.',
        steps: [
            'Apply to SCDA pre-audit.',
            'Submit audit invoice.',
            'SCDA reimburses.'
        ]
      },
      scSpecific: 'Contact SCDA.',
      sample: 'A 2-acre vegetable farm producing tomatoes and lettuce will apply for cost-share to cover 75% of their initial GAP/GHP audit. This certification is required by a major grocery chain and will open up a new, significant market for the farm.',
      analysis: 'Success 80%; ROI via market access. SC tip: Apply pre-audit.',
      successRate: 80
    },
    {
      id: 'scda-water',
      name: 'SCDA Water Quality Analysis Cost-Share',
      agency: 'SCDA',
      details: 'Reimburses water testing for E. coli/coliform.',
      eligibility: 'SC specialty crop growers; <5 acres ok.',
      funding: 'Up to $1,000/yr.',
      deadlines: ['Continuous'],
      submission: {
        forms: 'SCDA Water Quality form.',
        steps: [
            'Submit to SCDA with lab plan.',
            'Provide test results, invoice.',
            'SCDA reimburses.'
        ]
      },
      scSpecific: 'Use SCDA-certified labs.',
      sample: 'To comply with GAP water quality standards, a 3-acre farm will use this cost-share program to test its irrigation pond for generic E. coli. The farm will submit water samples to a SCDA-certified lab and receive reimbursement for the testing costs, up to $1,000.',
      analysis: 'Success 85%; ROI via compliance. SC tip: Use certified labs.',
      successRate: 85
    },
    {
      id: 'scda-coolbot',
      name: 'SCDA DIY Cold Storage Cost-Share',
      agency: 'SCDA',
      details: 'Reimburses CoolBot cooler systems.',
      eligibility: 'SC farmers; <5 acres ok.',
      funding: '$750/unit (max 2).',
      deadlines: ['Continuous'],
      submission: {
        forms: 'SCDA CoolBot form.',
        steps: [
            'Apply to SCDA with purchase plan.',
            'Submit invoice, proof of installation.',
            'SCDA reimburses.'
        ]
      },
      scSpecific: 'Contact SCDA.',
      sample: 'To improve post-harvest quality and extend the shelf life of its produce, a 2-acre farm will build a walk-in cooler using a CoolBot and a standard air conditioning unit. The farm will apply for the $750 reimbursement to offset the cost of the CoolBot unit.',
      analysis: 'Success 80%; shelf life +20%. SC tip: Document costs.',
      successRate: 80
    }
];

export const nifaPrograms: GrantProgram[] = [
    {
      id: 'bfrdp',
      name: 'Beginning Farmer and Rancher Development Program (BFRDP)',
      agency: 'USDA NIFA',
      details: 'Education/training for new farmers.',
      eligibility: 'Small/beginning farmers via partnerships.',
      funding: '$100K-$1M.',
      deadlines: ['RFP TBD'],
      submission: {
        forms: 'SF-424, SF-424A, SF-424B.',
        steps: [
            'Partner with org (e.g., Clemson).',
            'Submit via grants.gov with training plan.',
            'Include budget, impact statement.',
            'NIFA reviews; award contract.'
        ]
      },
      scSpecific: 'Contact Clemson Extension.',
      sample: 'In partnership with a local non-profit, this project will provide a year-long training program for 15 beginning farmers in urban agriculture techniques. The curriculum covers business planning, sustainable production on small plots, and direct marketing, addressing the needs of new farmers in metro areas.',
      analysis: 'Success 25%; skills +30%. SC tip: Partner with Extension.',
      successRate: 25
    },
    {
      id: 'sare',
      name: 'Sustainable Agriculture Research and Education (SARE) Grants',
      agency: 'USDA NIFA',
      details: 'Funds sustainable ag research. Producer Grants suit <5 acres.',
      eligibility: 'SC farmers; no min acreage.',
      funding: 'Producer: $15K-$25K; Research: $100K+.',
      deadlines: ['Pre-proposals Jun (closed); full Nov; next Mar 2026'],
      submission: {
        forms: 'SARE online application.',
        steps: [
            'Submit via Southern SARE portal.',
            'Include research plan, budget.',
            'SARE reviews; award funds.'
        ]
      },
      scSpecific: 'Contact Clemson SARE coordinator.',
      sample: 'A Producer Grant will fund a 2-acre on-farm trial comparing the effectiveness of three different cover crop mixes for suppressing nematodes in a sweet potato rotation. The project will measure nematode populations and sweet potato yields to provide practical, data-driven recommendations for other small farmers in the region. (Example Project ID: LS22-374)',
      analysis: 'Success 20-35%; ROI 3x. SC tip: Focus on soil/pollinators.',
      successRate: 28 // Average of 20-35
    }
];

export const otherPrograms: GrantProgram[] = [
    {
      id: 'epa319',
      name: 'EPA Section 319 Nonpoint Source Grants',
      agency: 'EPA',
      details: 'Water quality projects (e.g., runoff buffers).',
      eligibility: 'Via SC DHEC; small farms.',
      funding: '$50K-$500K.',
      deadlines: ['Annual RFPs'],
      submission: {
        forms: 'DHEC application.',
        steps: [
            'Contact DHEC for RFP.',
            'Submit proposal with water quality plan.',
            'DHEC reviews; award contract.'
        ]
      },
      scSpecific: 'Coastal watershed focus.',
      sample: 'Within the Edisto River watershed, this project will establish a 3-acre vegetative buffer strip along a drainage ditch to reduce nutrient and sediment runoff from an adjacent crop field. The project will contribute to the local watershed\'s Total Maximum Daily Load (TMDL) reduction goals.',
      analysis: 'Success 30%; water +20-30%. SC tip: Target coastal areas.',
      successRate: 30
    },
    {
      id: 'usfws',
      name: 'USFWS Partners for Fish and Wildlife',
      agency: 'USFWS',
      details: 'Habitat restoration (e.g., wetlands).',
      eligibility: 'Small landowners; 10-yr min.',
      funding: '$10K-$100K.',
      deadlines: ['Rolling'],
      submission: {
        forms: 'USFWS agreement form.',
        steps: [
            'Contact USFWS SC office (843-727-4707).',
            'Submit habitat plan, land details.',
            'USFWS approves; sign agreement.'
        ]
      },
      scSpecific: 'Contact USFWS.',
      sample: 'A landowner will restore a 4-acre fallow field into a native wetland habitat. The 10-year agreement with USFWS will provide technical and financial assistance for earthmoving, plugging drainage ditches, and planting native wetland vegetation to support migratory waterfowl.',
      analysis: 'Success 50%; biodiversity +25%. SC tip: Pair with CSP.',
      successRate: 50
    },
    {
      id: 'nfwf',
      name: 'NFWF Conservation Partners Program',
      agency: 'NFWF',
      details: 'Technical assistance for conservation.',
      eligibility: 'Small farms via partners.',
      funding: '$200K-$1M.',
      deadlines: ['Closed Jul 15; next Aug 2026'],
      submission: {
        forms: 'NFWF online application.',
        steps: [
            'Partner with org (e.g., SC NRCS).',
            'Submit via NFWF portal.',
            'Include TA plan, budget.',
            'NFWF awards; report outcomes.'
        ]
      },
      scSpecific: 'Contact SC NRCS.',
      sample: 'Through a local conservation district, a technical assistance provider will work with 10 small landowners to develop and implement pollinator habitat plans. The provider will offer on-site consultations, customized planting guides, and assistance with applying for EQIP and CSP to fund the habitat projects.',
      analysis: 'Success 20-40%; leverage 1:4. SC tip: Join existing projects.',
      successRate: 30 // Average of 20-40
    },
    {
      id: 'xerces',
      name: 'Xerces Society Monarch Habitat Grants',
      agency: 'Xerces Society',
      details: 'Pollinator habitat (e.g., milkweed).',
      eligibility: 'Small farms; <5 acres ok.',
      funding: '$5K-$20K.',
      deadlines: ['Rolling'],
      submission: {
        forms: 'Xerces online form.',
        steps: [
            'Submit via Xerces website.',
            'Include planting plan, budget.',
            'Xerces reviews; award funds.'
        ]
      },
      scSpecific: 'Use SC-native milkweed.',
      sample: 'A 2-acre farm will use grant funds to purchase and plant 1,000 plugs of SC-native milkweed (Asclepias tuberosa) and other nectar-rich wildflowers. This project will create a dedicated monarch breeding and foraging habitat, complementing an existing CSP contract for pollinator conservation.',
      analysis: 'Success 50%; pollinators +25%. SC tip: Pair with CSP E327B.',
      successRate: 50
    }
];

export const cspEnhancements: CspEnhancement[] = [
    { code: 'E328C', name: 'CRP crop rotation', csaf: false, landUse: 'Crop', details: 'Low STIR (<10) on recent CRP.', references: 'NRCS erosion tech', grantSuccessPoints: 'STIR calcs; transitions', complementaryGrants: 'CRP: Continuous; EQIP (328): Dec 3, 2024', scEstimate: '$3.31-$3.55/ac', analysis: 'Success 60%; OM +10-15%. SC tip: Post-CRP transition.', submissionSpecifics: 'Submit STIR calcs; document CRP conversion (<2 yrs).' },
    { code: 'E328D', name: 'Standing grain for wildlife', csaf: false, landUse: 'Crop', details: 'Unharvested grain for wildlife.', references: 'None', grantSuccessPoints: 'B000CPL23; quantify acres', complementaryGrants: 'EQIP (420): Jan 10, 2025; SC Habitat: Annual', scEstimate: '$4.08-$4.65/ac', analysis: 'Success 50%; habitat +20%. SC tip: Low-cost add-on.', submissionSpecifics: 'Specify grain acres; submit with WHEG data.' },
    { code: 'E328E', name: 'Soil health rotation', csaf: true, landUse: 'Crop', details: 'Diverse rotation for OM.', references: 'NRCS SCI', grantSuccessPoints: 'B000CPL24; SCI data', complementaryGrants: 'AMA: Mar 7, 2025; SARE: Nov', scEstimate: '$5.52-$5.92/ac', analysis: 'Success 30%; OM +15%. SC tip: IRA boost 20%.', submissionSpecifics: 'Submit SCI calcs; include 4 crop types.' },
    { code: 'E328F', name: 'Soil health modifications', csaf: true, landUse: 'Crop', details: 'Assess/modify for OM.', references: 'NRCS SCI', grantSuccessPoints: 'E328A pair; Year 1/3', complementaryGrants: 'EQIP (216): Feb 10, 2025; NFWF: Jul 15, 2025', scEstimate: '$2.36-$2.58/ac', analysis: 'Success 44%; OM +10-20%. SC tip: Cost-effective.', submissionSpecifics: 'Submit soil health assessment; Year 1/3 focus.' },
    { code: 'E328G', name: 'CRP rotation for OM', csaf: false, landUse: 'Crop', details: 'Diverse on recent CRP.', references: 'CSP Conserving Crops', grantSuccessPoints: 'OM transition', complementaryGrants: 'CRP: Continuous; EQIP Organic: Oct 25, 2024', scEstimate: '$5.52-$5.92/ac', analysis: 'Success 70%; soil +15%. SC tip: CRP synergy.', submissionSpecifics: 'Document CRP history; submit SCI data.' },
    { code: 'E328H', name: 'Rotation for salts', csaf: true, landUse: 'Crop', details: 'Saline seep reduction.', references: 'State lists; water balance', grantSuccessPoints: 'Nutrient synergy; water data', complementaryGrants: 'EQIP (610): Jan 10, 2025; EPA 319: Annual', scEstimate: '$4.41-$4.73/ac', analysis: 'Success 30%; salt -20-30%. SC tip: Coastal priority.', submissionSpecifics: 'Submit water balance; coastal SC focus.' },
    { code: 'E328J', name: 'Rotation for pollinators', csaf: false, landUse: 'Crop', details: 'Pollinator crops; IPM.', references: 'NRCS Leaflet 34', grantSuccessPoints: 'IPM; 5% acres', complementaryGrants: 'EQIP (595): Mar 7, 2025; SARE: Nov', scEstimate: '$88.27-$94.74/ac', analysis: 'Success 25%; pollinators +25%. SC tip: High rate.', submissionSpecifics: 'Submit IPM plan; document 5% acres.' },
    { code: 'E328K', name: 'Multiple crops for wildlife', csaf: false, landUse: 'Crop', details: 'Strips for food.', references: 'CSP Conserving Crops', grantSuccessPoints: 'B000CPL23; arrangement', complementaryGrants: 'CRP: Continuous; NFWF: Jul 15, 2025', scEstimate: '$5.52-$5.92/ac', analysis: 'Success 50%; diversity +20%. SC tip: Low barrier.', submissionSpecifics: 'Specify strip layout; submit with WHEG.' },
    { code: 'E328L', name: 'Tall residue for wildlife', csaf: false, landUse: 'Crop', details: '>14" residue until Feb 15.', references: 'None', grantSuccessPoints: 'Dates; height', complementaryGrants: 'EQIP (329): Feb 10, 2025; SC Habitat: Annual', scEstimate: '$11.03-$11.84/ac', analysis: 'Success 50%; habitat +15%. SC tip: Minimal disruption.', submissionSpecifics: 'Document residue height; Feb 15 deadline.' },
    { code: 'E328O', name: 'Perennial grain rotation', csaf: true, landUse: 'Crop', details: 'Perennial +2 crops.', references: 'None', grantSuccessPoints: 'SCI; stability', complementaryGrants: 'AMA: Mar 7, 2025; SARE: Nov', scEstimate: '$159.61-$168.97/ac', analysis: 'Success 30%; resilience +25%. SC tip: IRA eligible.', submissionSpecifics: 'Submit SCI; document perennial crops.' },
    { code: 'E328P', name: 'Low N rotation', csaf: false, landUse: 'Crop', details: 'Less N benchmark.', references: 'None', grantSuccessPoints: 'Compare; reduction', complementaryGrants: 'EQIP (590): Jan 10, 2025; EPA 319: Annual', scEstimate: '$28.31-$30.15/ac', analysis: 'Success 30%; N loss -20%. SC tip: Water quality focus.', submissionSpecifics: 'Submit N benchmark; water quality data.' },
    { code: 'E329A', name: 'No till erosion reduction', csaf: true, landUse: 'Crop', details: 'STIR <=10.', references: 'NRCS tech', grantSuccessPoints: 'B000CPL18; calcs', complementaryGrants: 'EQIP (329): Dec 3, 2024; RCPP: Rolling', scEstimate: '$3.31-$3.55/ac', analysis: 'Success 44%; soil loss -30%. SC tip: Cost-effective.', submissionSpecifics: 'Submit STIR (<10); pair with EQIP 329.' },
    { code: 'E329B', name: 'No till particulate matter', csaf: true, landUse: 'Crop', details: 'PM reduction.', references: 'NRCS tech', grantSuccessPoints: 'STIR; air quality', complementaryGrants: 'AMA: Feb 10, 2025; NFWF: Jul 15, 2025', scEstimate: '$3.31-$3.55/ac', analysis: 'Success 40%; PM -25%. SC tip: Urban-adjacent.', submissionSpecifics: 'Submit STIR; document PM reduction.' },
    { code: 'E329C', name: 'No till moisture', csaf: true, landUse: 'Crop', details: '60% residue.', references: 'NRCS tech', grantSuccessPoints: 'Irrigation; cover', complementaryGrants: 'EQIP (449): Mar 7, 2025; RCPP: Rolling', scEstimate: '$3.31-$3.55/ac', analysis: 'Success 44%; moisture +15%. SC tip: Drought resilience.', submissionSpecifics: 'Submit residue data; pair with EQIP 449.' },
    { code: 'E329D', name: 'No till soil health', csaf: true, landUse: 'Crop', details: 'OM build via no-till.', references: 'NRCS tech', grantSuccessPoints: 'Bundles', complementaryGrants: 'EQIP (340): Jan 10, 2025; SARE: Nov', scEstimate: '$4.41-$4.73/ac', analysis: 'Success 44%; OM +10%. SC tip: Cost-effective.', submissionSpecifics: 'Submit STIR; pair with EQIP 340.' },
    { code: 'E340A', name: 'Cover crop basic', csaf: true, landUse: 'Crop', details: 'Basic cover crop.', references: 'NRCS tech', grantSuccessPoints: 'Soil health', complementaryGrants: 'EQIP (340): Jan 10, 2025; SARE: Nov', scEstimate: '$30-$50/ac', analysis: 'Success 44%; soil +15%. SC tip: High adoption.', submissionSpecifics: 'Submit cover crop plan; species list.' },
    { code: 'E340B', name: 'Intensive cover crops', csaf: true, landUse: 'Crop', details: 'Multi-species cover.', references: 'NRCS tech', grantSuccessPoints: 'B000CPL25', complementaryGrants: 'EQIP (340): Jan 10, 2025; SARE: Nov', scEstimate: '$40-$60/ac', analysis: 'Success 40%; OM +20%. SC tip: High impact.', submissionSpecifics: 'Submit multi-species plan; SCI data.' },
    { code: 'E340C', name: 'Cover crop wildlife', csaf: true, landUse: 'Crop', details: 'Wildlife-friendly cover.', references: 'NRCS tech', grantSuccessPoints: 'B000CPL23', complementaryGrants: 'EQIP (420): Mar 7, 2025; Xerces: Rolling', scEstimate: '$35-$55/ac', analysis: 'Success 50%; habitat +20%. SC tip: Pair with Xerces.', submissionSpecifics: 'Submit WHEG; wildlife species list.' },
    { code: 'E340E', name: 'Cover crop pest suppression', csaf: true, landUse: 'Crop', details: 'Pest-reducing cover.', references: 'NRCS tech', grantSuccessPoints: 'IPM synergy', complementaryGrants: 'EQIP (595): Mar 7, 2025; SARE: Nov', scEstimate: '$35-$55/ac', analysis: 'Success 40%; pests -20%. SC tip: IPM focus.', submissionSpecifics: 'Submit IPM plan; cover crop species.' },
    { code: 'E340F', name: 'Advanced cover crop', csaf: true, landUse: 'Crop', details: 'Advanced cover crop system.', references: 'NRCS tech', grantSuccessPoints: 'B000CPL24', complementaryGrants: 'EQIP (340): Jan 10, 2025; SARE: Nov', scEstimate: '$45-$65/ac', analysis: 'Success 40%; soil +20%. SC tip: High ROI.', submissionSpecifics: 'Submit SCI; advanced cover plan.' },
    { code: 'E340H', name: 'Cover crop soil health', csaf: true, landUse: 'Crop', details: 'Soil health cover crop.', references: 'NRCS tech', grantSuccessPoints: 'B000CPL24', complementaryGrants: 'EQIP (340): Jan 10, 2025; SARE: Nov', scEstimate: '$40-$60/ac', analysis: 'Success 40%; OM +15%. SC tip: IRA priority.', submissionSpecifics: 'Submit SCI; cover crop plan.' },
    { code: 'E345A', name: 'Reduced tillage erosion', csaf: true, landUse: 'Crop', details: 'Reduced till (STIR <30).', references: 'NRCS tech', grantSuccessPoints: 'B000CPL18', complementaryGrants: 'EQIP (345): Dec 3, 2024; RCPP: Rolling', scEstimate: '$3-$4/ac', analysis: 'Success 44%; erosion -25%. SC tip: Entry-level.', submissionSpecifics: 'Submit STIR (<30); pair with EQIP 345.' },
    { code: 'E345C', name: 'Reduced tillage moisture', csaf: true, landUse: 'Crop', details: 'Reduced till for moisture.', references: 'NRCS tech', grantSuccessPoints: 'Irrigation synergy', complementaryGrants: 'EQIP (449): Mar 7, 2025; RCPP: Rolling', scEstimate: '$3-$4/ac', analysis: 'Success 44%; moisture +15%. SC tip: Drought focus.', submissionSpecifics: 'Submit STIR; moisture data.' },
    { code: 'E345D', name: 'Reduced tillage soil health', csaf: true, landUse: 'Crop', details: 'Reduced till for OM.', references: 'NRCS tech', grantSuccessPoints: 'B000CPL22', complementaryGrants: 'EQIP (345): Dec 3, 2024; SARE: Nov', scEstimate: '$4-$5/ac', analysis: 'Success 44%; OM +10%. SC tip: Pair with SARE.', submissionSpecifics: 'Submit STIR; SCI data.' },
    { code: 'E386B', name: 'Field border wildlife', csaf: true, landUse: 'Crop', details: 'Wildlife border.', references: 'None', grantSuccessPoints: 'B000CPL23', complementaryGrants: 'EQIP (386): Jan 10, 2025; Xerces: Rolling', scEstimate: '$100-$150/ac', analysis: 'Success 50%; habitat +20%. SC tip: Pollinator focus.', submissionSpecifics: 'Submit WHEG; border plan.' },
    { code: 'E386C', name: 'Field border erosion', csaf: true, landUse: 'Crop', details: 'Erosion control border.', references: 'None', grantSuccessPoints: 'B000CPL23', complementaryGrants: 'EQIP (386): Jan 10, 2025; RCPP: Rolling', scEstimate: '$100-$150/ac', analysis: 'Success 50%; erosion -25%. SC tip: Edge management.', submissionSpecifics: 'Submit erosion data; border plan.' },
    { code: 'E386E', name: 'Field border pollinators', csaf: true, landUse: 'Crop', details: 'Pollinator border.', references: 'None', grantSuccessPoints: 'B000CPL23', complementaryGrants: 'EQIP (386): Jan 10, 2025; Xerces: Rolling', scEstimate: '$100-$150/ac', analysis: 'Success 50%; pollinators +25%. SC tip: Pair with Xerces.', submissionSpecifics: 'Submit WHEG; pollinator species list.' },
    { code: 'E390A', name: 'Riparian herbaceous cover', csaf: true, landUse: 'Crop', details: 'Herbaceous cover for water quality.', references: 'None', grantSuccessPoints: 'B000CPL16', complementaryGrants: 'EQIP (390): Jan 10, 2025; EPA 319: Annual', scEstimate: '$200-$300/ac', analysis: 'Success 50%; water +20%. SC tip: Coastal priority.', submissionSpecifics: 'Submit water quality plan; pair with EPA 319.' },
    { code: 'E391A', name: 'Riparian forest buffer', csaf: true, landUse: 'Crop', details: 'Forest buffer for water quality.', references: 'None', grantSuccessPoints: 'B000CPL17', complementaryGrants: 'EQIP (391): Jan 10, 2025; USFWS: Rolling', scEstimate: '$300-$400/ac', analysis: 'Success 50%; habitat +25%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit forest plan; WHEG data.' },
    { code: 'E393A', name: 'Filter strip', csaf: true, landUse: 'Crop', details: 'Filter strip for runoff.', references: 'None', grantSuccessPoints: 'B000BFF1', complementaryGrants: 'EQIP (393): Jan 10, 2025; EPA 319: Annual', scEstimate: '$150-$200/ac', analysis: 'Success 50%; runoff -30%. SC tip: Coastal focus.', submissionSpecifics: 'Submit runoff data; filter strip plan.' },
    { code: 'E420A', name: 'Wildlife habitat planting', csaf: true, landUse: 'Crop', details: 'Wildlife habitat planting.', references: 'None', grantSuccessPoints: 'B000CPL19', complementaryGrants: 'EQIP (420): Mar 7, 2025; Xerces: Rolling', scEstimate: '$500-$600/ac', analysis: 'Success 50%; habitat +20%. SC tip: Pollinator focus.', submissionSpecifics: 'Submit WHEG; planting plan.' },
    { code: 'E484A', name: 'Mulching organic', csaf: true, landUse: 'Crop', details: 'Organic mulch for soil health.', references: 'None', grantSuccessPoints: 'B000CPL21', complementaryGrants: 'EQIP (484): Jan 10, 2025; SARE: Nov', scEstimate: '$50-$75/ac', analysis: 'Success 44%; soil +15%. SC tip: Organic priority.', submissionSpecifics: 'Submit mulch plan; pair with EQIP 484.' },
    { code: 'E590A', name: 'Nutrient management basic', csaf: true, landUse: 'Crop', details: 'Basic nutrient management.', references: 'None', grantSuccessPoints: 'B000CPL13', complementaryGrants: 'EQIP (590): Jan 10, 2025; EPA 319: Annual', scEstimate: '$5-$10/ac', analysis: 'Success 44%; nutrient loss -20%. SC tip: Water quality.', submissionSpecifics: 'Submit nutrient plan; soil tests.' },
    { code: 'E590B', name: 'Nutrient management precision', csaf: true, landUse: 'Crop', details: 'Precision nutrient management.', references: 'None', grantSuccessPoints: 'B000CPL18', complementaryGrants: 'EQIP (590): Jan 10, 2025; SARE: Nov', scEstimate: '$10-$15/ac', analysis: 'Success 40%; nutrient loss -25%. SC tip: Precision focus.', submissionSpecifics: 'Submit precision tech plan; soil tests.' },
    { code: 'E595A', name: 'IPM basic', csaf: false, landUse: 'Crop', details: 'Basic IPM.', references: 'None', grantSuccessPoints: 'B000CPL18', complementaryGrants: 'EQIP (595): Mar 7, 2025; SARE: Nov', scEstimate: '$5-$10/ac', analysis: 'Success 40%; pests -20%. SC tip: Pair with SARE.', submissionSpecifics: 'Submit IPM plan; pest data.' },
    { code: 'E595B', name: 'IPM advanced', csaf: false, landUse: 'Crop', details: 'Advanced IPM.', references: 'None', grantSuccessPoints: 'B000CPL21', complementaryGrants: 'EQIP (595): Mar 7, 2025; SARE: Nov', scEstimate: '$10-$15/ac', analysis: 'Success 40%; pests -25%. SC tip: High impact.', submissionSpecifics: 'Submit advanced IPM plan; pest data.' },
    { code: 'E314A', name: 'Brush management for wildlife', csaf: true, landUse: 'Pasture/Range', details: 'Brush for habitat.', references: 'SC Wildlife Plan', grantSuccessPoints: 'WHEG; forest bundles', complementaryGrants: 'EQIP (645): Oct 25, 2024; USFWS: Rolling', scEstimate: '$17.50-$46.14/ac', analysis: 'Success 50%; habitat +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit WHEG; align with EQIP 645; up to 3 times.' },
    { code: 'E315A', name: 'Herbaceous weed treatment', csaf: true, landUse: 'Pasture/Range', details: 'Weed control for plant communities.', references: 'None', grantSuccessPoints: 'Grazing bundles', complementaryGrants: 'EQIP (595): Jan 10, 2025; SARE: Nov', scEstimate: '$17.55-$38.81/ac', analysis: 'Success 40%; pests -40%. SC tip: Pair with SARE.', submissionSpecifics: 'Submit weed treatment plan; avoid nesting season.' },
    { code: 'E472A', name: 'Access control grazing', csaf: false, landUse: 'Pasture/Range', details: 'Control grazing access.', references: 'None', grantSuccessPoints: 'B000GRZ2', complementaryGrants: 'EQIP (472): Jan 10, 2025; RCPP: Rolling', scEstimate: '$10-$20/ac', analysis: 'Success 50%; soil +15%. SC tip: Grazing focus.', submissionSpecifics: 'Submit access control plan; fencing details.' },
    { code: 'E528A', name: 'Prescribed grazing basic', csaf: true, landUse: 'Pasture/Range', details: 'Basic grazing management.', references: 'None', grantSuccessPoints: 'B000GRZ5', complementaryGrants: 'EQIP (528): Jan 10, 2025; SARE: Nov', scEstimate: '$5-$10/ac', analysis: 'Success 50%; soil +15%. SC tip: Entry-level.', submissionSpecifics: 'Submit grazing plan; pair with EQIP 528.' },
    { code: 'E528J', name: 'Prescribed grazing wildlife', csaf: true, landUse: 'Pasture/Range', details: 'Grazing for wildlife.', references: 'None', grantSuccessPoints: 'B000PST5', complementaryGrants: 'EQIP (528): Jan 10, 2025; USFWS: Rolling', scEstimate: '$10-$15/ac', analysis: 'Success 50%; habitat +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit WHEG; grazing plan.' },
    { code: 'E528L', name: 'Prescribed grazing soil health', csaf: true, landUse: 'Pasture/Range', details: 'Grazing for soil health.', references: 'None', grantSuccessPoints: 'B000GRZ1', complementaryGrants: 'EQIP (528): Jan 10, 2025; SARE: Nov', scEstimate: '$10-$15/ac', analysis: 'Success 50%; OM +15%. SC tip: Pair with SARE.', submissionSpecifics: 'Submit SCI; grazing plan.' },
    { code: 'E580A', name: 'Streambank protection', csaf: false, landUse: 'Pasture/Range', details: 'Protect streambanks.', references: 'None', grantSuccessPoints: 'B000GRZ2', complementaryGrants: 'EQIP (580): Jan 10, 2025; EPA 319: Annual', scEstimate: '$10-$20/ft', analysis: 'Success 50%; water +20%. SC tip: Coastal focus.', submissionSpecifics: 'Submit streambank plan; pair with EPA 319.' },
    { code: 'E645A', name: 'Upland wildlife habitat', csaf: false, landUse: 'Pasture/Range', details: 'Upland habitat management.', references: 'None', grantSuccessPoints: 'B000GRZ1', complementaryGrants: 'EQIP (645): Mar 7, 2025; USFWS: Rolling', scEstimate: '$5-$10/ac', analysis: 'Success 50%; habitat +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit WHEG; habitat plan.' },
    { code: 'E666A', name: 'Forest management plan', csaf: true, landUse: 'Forest', details: 'Develop forest plan.', references: 'None', grantSuccessPoints: 'B000FST1', complementaryGrants: 'NFWF: Jul 15, 2025; USFWS: Rolling', scEstimate: '$100-$200/ac', analysis: 'Success 50%; planning ROI. SC tip: Pair with NFWF.', submissionSpecifics: 'Submit TSP forest plan; NRCS-CPA-1155.' },
    { code: 'E666D', name: 'Forest stand improvement', csaf: true, landUse: 'Forest', details: 'Improve forest stand.', references: 'None', grantSuccessPoints: 'B000FST1', complementaryGrants: 'EQIP (666): Jan 10, 2025; USFWS: Rolling', scEstimate: '$50-$100/ac', analysis: 'Success 50%; forest health +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit stand improvement plan; WHEG.' },
    { code: 'E666E', name: 'Firebreak management', csaf: true, landUse: 'Forest', details: 'Firebreak maintenance.', references: 'None', grantSuccessPoints: 'B000FST2', complementaryGrants: 'EQIP (394): Jan 10, 2025; NFWF: Jul 15, 2025', scEstimate: '$20-$30/ac', analysis: 'Success 50%; fire risk -20%. SC tip: Coastal focus.', submissionSpecifics: 'Submit firebreak plan; avoid nesting season.' },
    { code: 'E666F', name: 'Post-fire restoration', csaf: true, landUse: 'Forest', details: 'Post-fire restoration.', references: 'None', grantSuccessPoints: 'B000FST2', complementaryGrants: 'EQIP (666): Jan 10, 2025; NFWF: Jul 15, 2025', scEstimate: '$100-$150/ac', analysis: 'Success 50%; forest recovery +20%. SC tip: Post-fire focus.', submissionSpecifics: 'Submit restoration plan; document fire event.' },
    { code: 'E666G', name: 'Fire risk reduction', csaf: true, landUse: 'Forest', details: 'Reduce fire risk along roads.', references: 'None', grantSuccessPoints: 'None', complementaryGrants: 'EQIP (666): Jan 10, 2025; NFWF: Jul 15, 2025', scEstimate: '$50-$75/ac', analysis: 'Success 50%; fire risk -20%. SC tip: Roadside focus.', submissionSpecifics: 'Submit daylighting plan; avoid nesting season.' },
    { code: 'E666H', name: 'Carbon storage', csaf: true, landUse: 'Forest', details: 'Increase carbon storage.', references: 'None', grantSuccessPoints: 'B000FST5', complementaryGrants: 'EQIP (666): Jan 10, 2025; NFWF: Jul 15, 2025', scEstimate: '$50-$75/ac', analysis: 'Success 50%; carbon +20%. SC tip: IRA priority.', submissionSpecifics: 'Submit carbon plan; pair with NFWF.' },
    { code: 'E666I', name: 'Mast production', csaf: true, landUse: 'Forest', details: 'Crop tree for mast.', references: 'None', grantSuccessPoints: 'B000FST1', complementaryGrants: 'EQIP (666): Jan 10, 2025; USFWS: Rolling', scEstimate: '$50-$75/ac', analysis: 'Success 50%; wildlife food +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit crop tree plan; WHEG data.' },
    { code: 'E666J', name: 'Oak regeneration', csaf: true, landUse: 'Forest', details: 'Facilitate oak regeneration.', references: 'None', grantSuccessPoints: 'None', complementaryGrants: 'EQIP (666): Jan 10, 2025; USFWS: Rolling', scEstimate: '$75-$100/ac', analysis: 'Success 50%; oak +20%. SC tip: Forester oversight.', submissionSpecifics: 'Submit forester plan; seedling data.' },
    { code: 'E666K', name: 'Structural diversity', csaf: true, landUse: 'Forest', details: 'Patch openings for diversity.', references: 'None', grantSuccessPoints: 'None', complementaryGrants: 'EQIP (666): Jan 10, 2025; USFWS: Rolling', scEstimate: '$50-$75/ac', analysis: 'Success 50%; diversity +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit patch plan; WHEG data.' },
    { code: 'E666L', name: 'Hardwood rehabilitation', csaf: true, landUse: 'Forest', details: 'Rehabilitate degraded hardwood stands.', references: 'None', grantSuccessPoints: 'B000FST3', complementaryGrants: 'EQIP (666): Jan 10, 2025; USFWS: Rolling', scEstimate: '$75-$100/ac', analysis: 'Success 50%; forest health +20%. SC tip: Forester oversight.', submissionSpecifics: 'Submit silvicultural plan; document high-grading.' },
    { code: 'E666O', name: 'Snags and debris', csaf: true, landUse: 'Forest', details: 'Snags, debris for habitat.', references: 'None', grantSuccessPoints: 'B000FST1', complementaryGrants: 'EQIP (666): Jan 10, 2025; USFWS: Rolling', scEstimate: '$50-$75/ac', analysis: 'Success 50%; habitat +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit WHEG; snag retention plan.' },
    { code: 'E666P', name: 'Bat roosting habitat', csaf: true, landUse: 'Forest', details: 'Bat roost trees.', references: 'None', grantSuccessPoints: 'None', complementaryGrants: 'EQIP (666): Jan 10, 2025; USFWS: Rolling', scEstimate: '$50-$75/ac', analysis: 'Success 50%; bat habitat +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit WHEG; roost tree plan.' },
    { code: 'E666R', name: 'Songbird habitat', csaf: true, landUse: 'Forest', details: 'Songbird habitat maintenance.', references: 'None', grantSuccessPoints: 'None', complementaryGrants: 'EQIP (666): Jan 10, 2025; USFWS: Rolling', scEstimate: '$75-$100/ac', analysis: 'Success 50%; songbird +20%. SC tip: Forester oversight.', submissionSpecifics: 'Submit Audubon plan; bird monitoring data.' },
    { code: 'E199A', name: 'CSP Comprehensive Plan', csaf: false, landUse: 'All', details: 'TSP-led plan.', references: 'E199A Guidelines', grantSuccessPoints: '+10% CSP score', complementaryGrants: 'EQIP CAPs: Nov 1, 2025; NFWF: Jul 15, 2025', scEstimate: '$7,296-$15,101/no', analysis: 'Success 80%; contract value +15%. SC tip: Whole-farm planning.', submissionSpecifics: 'Include TSP certification; scenario per Guidelines.' },
    { code: 'E327B', name: 'Monarch butterfly habitat', csaf: true, landUse: 'Associated Ag Land/Farmstead', details: 'Milkweed seeding.', references: '327 Fact Sheet', grantSuccessPoints: 'Biodiversity metrics', complementaryGrants: 'EQIP (420): Mar 7, 2025; Xerces: Rolling', scEstimate: '$892.04-$985.07/ac', analysis: 'Success 55%; pollinators +25%. SC tip: High rate.', submissionSpecifics: 'Submit SC-native milkweed list; NRCS-CPA-1155.' },
    { code: 'E327C', name: 'Wildlife nesting habitat', csaf: true, landUse: 'Associated Ag Land/Farmstead', details: 'Grass/legume refuge.', references: 'SC Planting Guide', grantSuccessPoints: 'WHEG; novelty', complementaryGrants: 'CRP: Continuous; EQIP (645): Feb 10, 2025', scEstimate: '$500-$1,000/ac', analysis: 'Success 55%; biodiversity +20%. SC tip: New enhancement.', submissionSpecifics: 'Submit WHEG; nesting dates (4/15-8/15).' },
    { code: 'E612B', name: 'Tree/shrub establishment', csaf: true, landUse: 'Associated Ag Land/Farmstead', details: 'Tree/shrub for habitat.', references: 'None', grantSuccessPoints: 'B000FST1', complementaryGrants: 'EQIP (612): Jan 10, 2025; USFWS: Rolling', scEstimate: '$300-$400/ac', analysis: 'Success 50%; habitat +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit planting plan; WHEG data.' },
    { code: 'E612D', name: 'Tree/shrub wildlife', csaf: true, landUse: 'Associated Ag Land/Farmstead', details: 'Tree/shrub for wildlife.', references: 'None', grantSuccessPoints: 'B000CPL21', complementaryGrants: 'EQIP (612): Jan 10, 2025; USFWS: Rolling', scEstimate: '$300-$400/ac', analysis: 'Success 50%; habitat +20%. SC tip: Pair with USFWS.', submissionSpecifics: 'Submit WHEG; tree/shrub plan.' },
    { code: 'E612F', name: 'Tree/shrub sugar maple', csaf: true, landUse: 'Associated Ag Land/Farmstead', details: 'Sugar maple stand improvement.', references: 'None', grantSuccessPoints: 'B000FST4', complementaryGrants: 'EQIP (612): Jan 10, 2025; NFWF: Jul 15, 2025', scEstimate: '$300-$400/ac', analysis: 'Success 50%; maple +20%. SC tip: Niche focus.', submissionSpecifics: 'Submit maple plan; forester oversight.' },
    { code: 'E612G', name: 'Tree/shrub pollinators', csaf: true, landUse: 'Associated Ag Land/Farmstead', details: 'Tree/shrub for pollinators.', references: 'None', grantSuccessPoints: 'B000CPL23', complementaryGrants: 'EQIP (612): Jan 10, 2025; Xerces: Rolling', scEstimate: '$300-$400/ac', analysis: 'Success 50%; pollinators +25%. SC tip: Pair with Xerces.', submissionSpecifics: 'Submit WHEG; pollinator tree plan.' },
];