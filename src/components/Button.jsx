import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const variants = {
  primary:
    "bg-primary text-white px-6 py-2 rounded-lg font-semibold no-underline border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer",
  outline:
    "transform bg-white border-primary rounded-lg text-primary font-semibold px-6 py-2 border-2 transition-all duration-300 ease-in-out cursor-pointer",
  outlinegray:
    "transform bg-white border-button rounded-lg text-button font-semibold px-6 py-2 border-2 transition-all duration-300 ease-in-out cursor-pointer",
};

const Button = ({
  label = "Submit",
  variant = "primary",
  icon = null,
  customClass = "",
  style = {},
  link = null,
  target = "_self",
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  const appliedVariant = hovered
    ? variant === "primary"
      ? variants.outline
      : variants.primary
    : variants[variant];

  if (link) {
    // For external links or when target is _blank, use regular <a> tag
    if (target === "_blank" || link.startsWith("http")) {
      return (
        <a
          href={link}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={clsx(appliedVariant, customClass, "inline-block cursor-pointer no-underline")}
          style={style}
          {...props}
        >
          <div className="flex items-center justify-center gap-2">
            {icon && (
              <span className="inline-block duration-300 transition-all !text-white hover:!text-primary align-middle">
                {icon}
              </span>
            )}
            {label}
          </div>
        </a>
      );
    }

    // For internal links with _self target, use Next.js Link
    return (
      <Link href={link} {...props}>
        <span
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={clsx(appliedVariant, customClass, "inline-block cursor-pointer")}
          style={style}
        >
          <div className="flex items-center justify-center gap-2">
            {icon && (
              <span className="inline-block duration-300 transition-all !text-white hover:!text-primary align-middle">
                {icon}
              </span>
            )}
            {label}
          </div>
        </span>
      </Link>
    );
  }

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(appliedVariant, customClass)}
      style={style}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {icon && (
          <span className="inline-block duration-300 transition-all !text-white hover:!text-primary align-middle">
            {icon}
          </span>
        )}
        {label}
      </div>
    </button>
  );
};

export default Button;
