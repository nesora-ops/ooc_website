/**
 * Industry options for the registration form, alphabetical.
 *
 * Unlike COUNTRIES, the "Other" affordance is the last entry of this list rather
 * than being appended by the combobox — picking it reveals a free-text field and
 * what the user types is what gets stored, so the sentinel never reaches the DB.
 */
export const OTHER_INDUSTRY = "Other (Please Specify)"

export const INDUSTRIES = [
  "Agriculture & Agritech",
  "Architecture & Design",
  "Automotive & Auto Components",
  "Banking & Financial Services",
  "Biotechnology",
  "Building Materials",
  "Chemicals & Petrochemicals",
  "Clean Energy & Renewable Energy",
  "Construction & Infrastructure",
  "Consulting & Professional Services",
  "Consumer Goods (FMCG)",
  "Education & EdTech",
  "Electronics & Electrical Equipment",
  "Engineering & Manufacturing",
  "Environmental Services",
  "Fashion, Apparel & Textiles",
  "Food & Beverage",
  "Government & Public Sector",
  "Healthcare & Hospitals",
  "Hospitality & Tourism",
  "Human Resources & Staffing",
  "Information Technology (IT)",
  "IT Enabled Services (ITES/BPO/KPO)",
  "Insurance",
  "Legal Services",
  "Logistics, Supply Chain & Warehousing",
  "Media, Advertising & Entertainment",
  "Mining & Metals",
  "Non-Profit / NGO",
  "Oil & Gas",
  "Pharmaceuticals",
  "Power & Utilities",
  "Real Estate",
  "Retail & E-commerce",
  "Shipping & Maritime",
  "Sports & Fitness",
  "Telecommunications",
  "Transportation & Mobility",
  "Waste Management & Recycling",
  "Water & Wastewater Management",
  "Smart Cities & Urban Development",
  "Sustainability, ESG & Climate Solutions",
  "Social Enterprise",
  "Startups",
  OTHER_INDUSTRY,
]
