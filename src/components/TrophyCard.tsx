import { Trophy } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function TrophyCard({
  title,
  description,
}: Props) {
  return (
    <div
      className="
      bg-zinc-900
      rounded-2xl
      p-6
      border border-zinc-800
      hover:border-blue-500
      transition
      "
    >
      <Trophy size={40} />

      <h3 className="mt-4 text-xl font-bold">
        {title}
      </h3>

      <p className="text-zinc-400 mt-2">
        {description}
      </p>
    </div>
  );
}