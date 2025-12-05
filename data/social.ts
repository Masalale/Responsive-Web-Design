import { Mail, Linkedin, Github, LucideIcon } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:c.chomba@alustudent.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/clarenchomba",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Masalale",
    icon: Github,
    external: true,
  },
];
