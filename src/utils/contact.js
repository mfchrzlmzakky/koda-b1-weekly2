import { RiMapPinFill, RiMailLine, RiPhoneFill, RiTimeLine } from "@remixicon/react";

export const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "Indonesia", "Other"];

export const contactMethods = ["Email", "Phone", "Whatsapp"];

export const technologies = ["React", "Node.js", "Python", "TypeScript", "React Native", "Vue.js", "Django", "Express.js"];

export const officeInfo = [
  {
    label: "Location",
    value: "San Francisco, CA 94105",
    icon: RiMapPinFill,
    color: "text-[#FB2C36]",
  },
  {
    label: "Email",
    value: "alex.carter@email.com",
    href: "mailto:alex.carter@email.com",
    icon: RiMailLine,
    color: "text-[#99A1AF]",
  },
  {
    label: "Phone",
    value: "+1 (415) 555-0192",
    icon: RiPhoneFill,
    color: "text-[#364153]",
  },
  {
    label: "Hours",
    value: "Mon – Fri, 9 AM – 6 PM PST",
    icon: RiTimeLine,
    color: "text-[#99A1AF]",
  },
];

export const onlineLinks = [
  { name: "GitHub", handle: "@alexcarter", href: "https://github.com/mfchrzlmzakky/" },
  { name: "LinkedIn", handle: "Alex Carter", href: "https://www.linkedin.com/in/mochammadfachrizalmuzakky/" },
  { name: "Twitter", handle: "@alexcodes", href: "https://github.com/mfchrzlmzakky/" },
  { name: "Dev.to", handle: "@alexcarter", href: "https://dev.to/" },
];
