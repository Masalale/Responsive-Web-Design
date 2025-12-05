import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
}

export function SocialLink({ href, label, icon: Icon, external }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="social-link"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <Icon size={20} style={{ marginRight: "0.5rem" }} />
      {label}
    </a>
  );
}
