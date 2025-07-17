import { ReactNode } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import PulseLoader from "react-spinners/PulseLoader";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outlined" | "text";
  icon?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  iconPosition?: "left" | "right";
  showArrow?: boolean;
}

export const Button = ({
  title,
  type = "button",
  variant = "default",
  icon,
  onClick,
  className,
  disabled = false,
  loading = false,
  fullWidth = false,
  iconPosition = "right",
  showArrow = false,
}: ButtonProps) => {
  let variantClass = "";
  let loadingColor = "white";

  switch (variant) {
    case "default":
      variantClass = "bg-yellow-500 text-white hover:bg-yellow-700";
      loadingColor = "white";
      break;
    case "outlined":
      variantClass =
        "border border-gray-300 text-gray-800 hover:border-gray-500 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800";
      loadingColor = "gray";
      break;
    case "text":
      variantClass = "text-blue-600 hover:text-blue-700";
      loadingColor = "blue";
      break;
  }

  const mergedClassName = twMerge(
    `h-10 px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap 
       ${variantClass} ${fullWidth ? "w-full" : "w-fit"} 
       ${disabled ? "bg-gray-200 text-gray-400 cursor-not-allowed" : ""}`,
    className
  );

  const showIconLeft = iconPosition === "left";
  const showIconRight = iconPosition === "right";

  return (
    <button
      type={type}
      onClick={onClick}
      className={mergedClassName}
      disabled={disabled || loading}
    >
      {loading ? (
        <PulseLoader color={loadingColor} loading={loading} size={15} />
      ) : (
        <>
          {showIconLeft && icon && <span>{icon}</span>}
          {showIconLeft && showArrow && (
            <span>
              <LuChevronLeft size={20} />
            </span>
          )}
          <span>{title}</span>
          {showIconRight && icon ? <span>{icon}</span> : ""}
          {showIconRight && showArrow ? (
            <span>
              <LuChevronRight size={20} />
            </span>
          ) : (
            ""
          )}
        </>
      )}
    </button>
  );
};
