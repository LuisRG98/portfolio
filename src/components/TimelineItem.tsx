interface Props {
  year: string;
  title: string;
}

export default function TimelineItem({
  year,
  title,
}: Props) {
  return (
    <div className="flex gap-6">
      <div className="text-blue-400 font-bold">
        {year}
      </div>

      <div>
        <h3 className="font-bold">
          {title}
        </h3>
      </div>
    </div>
  );
}