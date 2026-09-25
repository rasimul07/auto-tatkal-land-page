export const site = {
  name: "IRCTC Tatkal Auto Booking",
  shortName: "Auto Tatkal",
  tagline: "Save your journey. Auto-fill IRCTC. You complete CAPTCHA, OTP & payment.",
  description:
    "Independent Chrome extension assistant for IRCTC train booking. Not affiliated with IRCTC or Indian Railways.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  chromeStoreUrl:
    process.env.NEXT_PUBLIC_CHROME_STORE_URL?.trim() || "#",
  bmcUrl:
    process.env.NEXT_PUBLIC_BMC_URL?.trim() ||
    "https://buymeacoffee.com/mritools",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "",
};

export const features = [
  {
    title: "Save once, book faster",
    description:
      "Store journey, passengers, login, and payment preferences in the extension popup.",
  },
  {
    title: "Auto-fill on IRCTC",
    description:
      "Step through train search, passengers, review, and payment on irctc.co.in (e-ticket & nget).",
  },
  {
    title: "Tatkal alarm",
    description:
      "Optional schedule for AC (10:00 IST) or non-AC (11:00 IST) Tatkal windows.",
  },
  {
    title: "You stay in control",
    description:
      "CAPTCHA, OTP, and bank/UPI approval are always completed by you — never bypassed.",
  },
];

export const steps = [
  {
    title: "Install extension",
    description: "Add to Chrome from the Web Store and pin it to your toolbar.",
  },
  {
    title: "Save your details",
    description: "Fill Login, Journey, Passengers, and Payment tabs in the popup.",
  },
  {
    title: "Start on IRCTC",
    description: "Click Start Auto-Booking to open train-search and run the flow.",
  },
  {
    title: "Pay manually",
    description: "Complete CAPTCHA, OTP, and payment on IRCTC or the payment gateway.",
  },
];

export const plans = [
  {
    name: "Trial",
    price: "Free",
    detail: "Unlimited extension use for a limited period after BMC signup.",
  },
  {
    name: "Coffee",
    price: "Per coffee",
    detail: "Token-based booking — 5 tokens / 30 days for 12 months per purchase.",
  },
  {
    name: "Basic",
    price: "Membership",
    detail: "Unlimited booking on the Chrome extension.",
  },
  {
    name: "Pro",
    price: "Membership",
    detail: "Unlimited on extension plus planned mobile apps.",
  },
];
