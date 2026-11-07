// Central place for business details. Contact and compliance details come from
// environment variables so nothing has to be edited in code. Anything left
// blank is hidden on the site rather than shown as a placeholder.

const clean = (v: string | undefined) => (v && v.trim() ? v.trim() : "");

export const site = {
  name: "Ryan & Bartlett",
  shortName: "Ryan & Bartlett",
  tagline: "Sold, and staying sold.",
  url: clean(process.env.NEXT_PUBLIC_SITE_URL).replace(/\/$/, "") || "https://www.ryanandbartlett.co.uk",
  phone: clean(process.env.NEXT_PUBLIC_PHONE),
  email: clean(process.env.NEXT_PUBLIC_EMAIL),
  address: clean(process.env.NEXT_PUBLIC_ADDRESS),
  hours: clean(process.env.NEXT_PUBLIC_OPENING_HOURS),
  companyName: clean(process.env.NEXT_PUBLIC_COMPANY_NAME),
  companyNumber: clean(process.env.NEXT_PUBLIC_COMPANY_NUMBER),
  redressScheme: clean(process.env.NEXT_PUBLIC_REDRESS_SCHEME),
  icoNumber: clean(process.env.NEXT_PUBLIC_ICO_NUMBER),
  founders: ["Clodagh Ryan", "Craig Bartlett"],
};

export const phoneHref = site.phone ? `tel:${site.phone.replace(/[^\d+]/g, "")}` : "";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/certainty-promise", label: "Our promise" },
  { href: "/areas", label: "Areas we cover" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
];

export type Promise = { title: string; short: string; body: string };

export const promises: Promise[] = [
  {
    title: "Verified buyers before viewings",
    short: "Viewings go to buyers who can actually proceed.",
    body: "We check a buyer's finances and position before they view your home, so your time and your viewings go to people who can complete.",
  },
  {
    title: "Sales pack ready at instruction",
    short: "Paperwork done before the board goes up.",
    body: "We gather the legal and property information up front, with you and your solicitor, so a buyer's solicitor is never left waiting weeks for the basics.",
  },
  {
    title: "A named progressor, weekly updates",
    short: "One person owns your sale, start to finish.",
    body: "A named in-house progressor drives your sale from offer to completion and updates you every week, whether or not there is news.",
  },
  {
    title: "Valuations backed by evidence",
    short: "We show our workings, and publish our results.",
    body: "Our valuation comes with the comparable sales behind it, and we publish asking price against achieved price, so you can judge us on facts.",
  },
  {
    title: "No sale, no fee",
    short: "Pay nothing unless we sell your home.",
    body: "You pay nothing unless we sell. We keep the minimum term short, because we would rather earn your trust than tie you in.",
  },
  {
    title: "Free re-marketing if finance falls through",
    short: "If a buyer we vetted collapses, we cover the relaunch.",
    body: "If a buyer we vetted falls through on finance, we re-market your home at no extra cost, up to an agreed cap. Full terms are set out in your agreement.",
  },
];

export const steps = [
  {
    title: "Book a free valuation",
    body: "Tell us about your home. A partner visits, listens to what you need, and talks through timing.",
  },
  {
    title: "Get a price you can trust",
    body: "You receive a valuation with the evidence behind it, and we start your sales pack straight away.",
  },
  {
    title: "Meet verified buyers",
    body: "We market your home properly and only book viewings with buyers whose position we have checked.",
  },
  {
    title: "Complete with confidence",
    body: "Your named progressor chases every link in the chain and updates you each week until completion day.",
  },
];
