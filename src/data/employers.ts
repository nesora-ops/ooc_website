// BACKEND TODO: replace these temporary records with certified-employer
// records from the production API.

export type CertificationLevel = "Silver" | "Gold" | "Platinum" | "Diamond";

export type Employer = {
  id: string;
  name: string;
  industry: string;
  location: string;
  level: CertificationLevel;
  scope: "Entire organisation" | "Specific locations or divisions";
  validity: string;
};

export const employers: Employer[] = [
  {
    id: "aurora-logistics",
    name: "Aurora Logistics Pvt. Ltd.",
    industry: "Logistics & Supply Chain",
    location: "Pune",
    level: "Silver",
    scope: "Entire organisation",
    validity: "Certified through Mar 2027",
  },
  {
    id: "meridian-health-sciences",
    name: "Meridian Health Sciences",
    industry: "Healthcare",
    location: "Bengaluru",
    level: "Diamond",
    scope: "Entire organisation",
    validity: "Certified through Nov 2027",
  },
  {
    id: "solaris-renewable-energy",
    name: "Solaris Renewable Energy",
    industry: "Energy & Utilities",
    location: "Ahmedabad",
    level: "Gold",
    scope: "Specific locations or divisions",
    validity: "Certified through Jul 2027",
  },
  {
    id: "bluewave-fintech",
    name: "Bluewave Fintech Solutions",
    industry: "Financial Services",
    location: "Mumbai",
    level: "Platinum",
    scope: "Entire organisation",
    validity: "Certified through Jan 2028",
  },
  {
    id: "crestline-manufacturing",
    name: "Crestline Manufacturing Co.",
    industry: "Manufacturing",
    location: "Chennai",
    level: "Silver",
    scope: "Specific locations or divisions",
    validity: "Certified through May 2027",
  },
  {
    id: "nimbus-cloud-technologies",
    name: "Nimbus Cloud Technologies",
    industry: "Information Technology",
    location: "Hyderabad",
    level: "Gold",
    scope: "Entire organisation",
    validity: "Certified through Sep 2027",
  },
  {
    id: "harborline-retail-group",
    name: "Harborline Retail Group",
    industry: "Retail",
    location: "Delhi NCR",
    level: "Platinum",
    scope: "Specific locations or divisions",
    validity: "Certified through Feb 2027",
  },
  {
    id: "evergreen-agrotech",
    name: "Evergreen AgroTech Pvt. Ltd.",
    industry: "Agriculture & Agro-processing",
    location: "Nagpur",
    level: "Diamond",
    scope: "Entire organisation",
    validity: "Certified through Aug 2027",
  },
];
