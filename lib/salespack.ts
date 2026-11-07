// What goes into a sales pack. Kept in one place so the promise page and the
// seller checklist page always say the same thing.

export type PackItem = { title: string; note: string };
export type PackGroup = { heading: string; intro?: string; items: PackItem[] };

export const packGroups: PackGroup[] = [
  {
    heading: "Every sale",
    items: [
      {
        title: "Title register and title plan",
        note: "Official copies from HM Land Registry, plus copies of any deeds, transfers or covenants the title refers to.",
      },
      {
        title: "TA6 Property Information Form",
        note: "You complete it, honestly and in full. The current Law Society edition is the 6th, used for new transactions since 30 March 2026.",
      },
      {
        title: "TA10 Fittings and Contents Form",
        note: "Sets out exactly what is staying and what is going, so there are no arguments on moving day.",
      },
      {
        title: "Energy Performance Certificate (EPC)",
        note: "Needed before marketing. Valid for 10 years, and we can check yours or arrange a new one.",
      },
      {
        title: "Photo ID and proof of address",
        note: "Required by law for anti-money-laundering checks before we can act for you.",
      },
      {
        title: "Mortgage details",
        note: "Your lender and an idea of the settlement figure, so your solicitor can plan ahead.",
      },
    ],
  },
  {
    heading: "If your home is leasehold",
    intro: "Leasehold sales need more, and some of it takes weeks. We start these on day one.",
    items: [
      { title: "TA7 Leasehold Information Form", note: "Completed by you, alongside the TA6." },
      { title: "The full lease", note: "Plus any deeds of variation or lease extension documents." },
      {
        title: "Management information pack (LPE1)",
        note: "Ground rent, service charges and building details from your freeholder or managing agent. It can take 4 to 8 weeks to arrive.",
      },
    ],
  },
  {
    heading: "If your home is on an estate",
    intro: "Common on newer Aylesbury developments with shared roads, landscaping or drainage.",
    items: [
      { title: "Estate management information", note: "From the management company, if there is one." },
      { title: "Latest estate charge demand", note: "Shows what you pay and whether you are up to date." },
    ],
  },
  {
    heading: "Where they apply",
    items: [
      { title: "New-build warranty and building guarantees", note: "For example NHBC or similar cover." },
      { title: "Building work and replacement windows", note: "Planning, building regulation and FENSA certificates for any work you have had done." },
      { title: "Gas and electrical safety certificates", note: "Boiler servicing records are useful too." },
      { title: "Probate or Power of Attorney papers", note: "If you are selling on behalf of someone else." },
      { title: "Company documents", note: "For a share of freehold." },
    ],
  },
];

export const materialInfo = [
  {
    part: "Part A",
    title: "On the front of every listing",
    body: "Asking price, tenure and council tax band.",
  },
  {
    part: "Part B",
    title: "For every property",
    body: "Property type and construction, number of rooms, utilities and heating, broadband, mobile signal and parking.",
  },
  {
    part: "Part C",
    title: "Only where it applies",
    body: "Building safety, restrictions and rights such as covenants, flood risk, planning and development nearby, accessibility and adaptations, and mining.",
  },
];
