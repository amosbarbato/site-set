import type { LucideIcon } from "lucide-react";

interface SupportCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "blue" | "cyan";
}

export default function SupportCard({
  icon: Icon,
  title,
  description,
  color,
}: SupportCardProps) {
  const iconColors = {
    blue: "bg-blue-300",
    cyan: "bg-cyan-200",
  };

  const bgColors = {
    blue: "bg-blue-400",
    cyan: "bg-cyan-300",
  };

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl p-6 text-start ${bgColors[color]}`}
    >
      <span
        className={`flex size-9 items-center justify-center rounded-lg ${iconColors[color]}`}
      >
        <Icon className="text-white" size={20} />
      </span>
      <div className="flex flex-col gap-2">
        <strong className="heading-sm font-sans text-gray-100">{title}</strong>
        <p className="body-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}
