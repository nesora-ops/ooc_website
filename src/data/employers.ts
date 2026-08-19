// Seed records for the certified employer directory.
//
// The directory now merges these with live certified organisations from
// CertifyDB (see src/lib/certified-employers.ts). These four remain only so
// the page never looks empty while real certifications are still few.
//
// TO REMOVE THEM: empty this array. Nothing else needs to change — the
// directory renders whatever the merge produces, and handles an API-only list
// (or an empty one) on its own.

export type CertificationLevel = "Silver" | "Gold" | "Platinum" | "Diamond";

export type Employer = {
  id: string;
  name: string;
  industry: string;
  location: string;
  level: CertificationLevel;
  /** Absent on live records: CertifyDB has no scope field on a certificate. */
  scope?: "Entire organisation" | "Specific locations or divisions";
  validity: string;
};

export const seedEmployers: Employer[] = [
  {
    id: "seed-aurora-logistics",
    name: "Aurora Logistics Pvt. Ltd.",
    industry: "Logistics & Supply Chain",
    location: "Pune",
    level: "Silver",
    scope: "Entire organisation",
    validity: "Certified through Mar 2027",
  },
  {
    id: "seed-meridian-health-sciences",
    name: "Meridian Health Sciences",
    industry: "Healthcare",
    location: "Bengaluru",
    level: "Diamond",
    scope: "Entire organisation",
    validity: "Certified through Nov 2027",
  },
  {
    id: "seed-bluewave-fintech",
    name: "Bluewave Fintech Solutions",
    industry: "Financial Services",
    location: "Mumbai",
    level: "Platinum",
    scope: "Entire organisation",
    validity: "Certified through Jan 2028",
  },
  {
    id: "seed-nimbus-cloud-technologies",
    name: "Nimbus Cloud Technologies",
    industry: "Information Technology",
    location: "Hyderabad",
    level: "Gold",
    scope: "Entire organisation",
    validity: "Certified through Sep 2027",
  },
];
