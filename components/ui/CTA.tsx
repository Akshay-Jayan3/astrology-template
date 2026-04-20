import { waLink } from "../../lib/utils";

type Props = {
  type: 'whatsapp' | 'facebook';
  phone?: string;
  url?: string;
  message?: string;
  label?: string;
  theme: any;
};

export default function CTA({ type, phone, url, message, label, theme }: Props) {
  const baseStyle = {
    backgroundColor: theme?.primary,
    color: theme?.textOnPrimary,
  };

  const secondaryStyle = {
    backgroundColor: "transparent",
    color: theme?.secondary,
    border: `1px solid ${theme?.borderSoft}`,
  };

  if (type === 'whatsapp' && phone) {
    return (
      <a
        href={waLink(phone, message || '')}
        style={baseStyle}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:opacity-90 inline-flex items-center gap-2"
      >
        {label || 'Chat on WhatsApp'}
      </a>
    );
  }

  // Facebook (Messenger or Page)
  return (
    <a
      href={url || "#"}
      style={secondaryStyle}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 inline-flex items-center gap-2 text-gray-700 bg-white"
    >
      {label || 'Message on Facebook'}
    </a>
  );
}