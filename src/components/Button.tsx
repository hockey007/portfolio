import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  name: string;
  link: string;
  isPrimary: boolean;
  isIconButton?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
} & ComponentPropsWithoutRef<'a'>;

export default function Button({
  name,
  link,
  isPrimary,
  isIconButton = false,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  if (isIconButton && !icon) {
    console.warn("IconButton requires an icon.");
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={isIconButton ? name : undefined}
      className={`${isIconButton && "inline-flex items-center"} 
      px-4 py-2 text-sm font-medium border rounded-lg focus:ring-2 focus:outline-none 
      ${isPrimary ? "bg-gray-300 text-gray-900" : "bg-gray-800 text-gray-400 border-gray-600"} hover:text-white hover:bg-gray-700 focus:ring-gray-700`}
    >
      {isIconButton && iconPosition === "left" && icon}
      <span className={isIconButton ? "mx-2" : ""}>{name}</span>
      {isIconButton && iconPosition === "right" && icon}
    </a>
  );
}
