interface Props {
  categoryList: string[];
  onCategorySelect: (category: string) => void;
}

export const CategoryButton = ({ categoryList, onCategorySelect }: Props) => {
  return (
    <div className="flex space-x-4 justify-center">
      {categoryList.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className="p-2 bg-emerald-300 border-2 border-black font-semibold shadow-lg space-x-2 rounded-2xl"
        >
          {category}
        </button>
      ))}
    </div>
  );
};
