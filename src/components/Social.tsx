import { useState } from "react";

type SocialProps = {
  icon: string;
  link: string;
  tooltip: string;
};

export default function Social({ icon, link, tooltip }: SocialProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative w-12 h-12"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a
        href={link}
        target="_blank"
        title={tooltip}
        rel="noopener noreferrer"
        className="w-12 h-12 flex justify-center items-center rounded-full border-2 bg-gray-200 hover:bg-white transition-colors duration-200"
      >
        <img src={icon} alt="social-icon" className="w-6 h-6 object-contain" />
      </a>
      {showTooltip && (
        <div className="mt-2 bg-black text-white text-sm rounded px-2 py-1">
          {tooltip}
        </div>
      )}
    </div>
  );
}
