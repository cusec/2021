import { LocationHashEnum } from "@/src/enums";

export const locations: { href: string; label: string }[] = [
  { href: `#${LocationHashEnum.About}`, label: "About" },
  { href: `#${LocationHashEnum.Sponsors}`, label: "Sponsors" },
  { href: `#${LocationHashEnum.Pricing}`, label: "Pricing" },
  { href: `#${LocationHashEnum.FAQ}`, label: "FAQ" },
];
