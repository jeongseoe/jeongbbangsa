interface ProductSortProps {
  sortOptions: string[];
  currentSort: string;
  onSortChange: (sort: string) => void;
}

export default function ProductSort({
  sortOptions,
  currentSort,
  onSortChange,
}: ProductSortProps) {
  return (
    <select
      value={currentSort}
      onChange={(e) => onSortChange(e.target.value)}
      className="px-4 py-2 border rounded-md bg-white"
    >
      {sortOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
