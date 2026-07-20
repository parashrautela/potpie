import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  index?: number;
  total?: number;
  title: ReactNode;
  subtitle?: ReactNode;
};

export default function SectionHeader({
  eyebrow,
  index,
  total,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="section-head">
      <div className="eyebrow-row">
        <span className="eyebrow">
          <span className="eyebrow-mark">❯</span>
          {eyebrow}
        </span>
        {index !== undefined && total !== undefined && (
          <span className="counter">
            [{index}/{total}]
          </span>
        )}
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}
