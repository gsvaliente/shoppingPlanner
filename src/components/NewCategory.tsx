import { FormEvent, useState } from "react";

interface Props {
  onAddCategory: (category: string) => void;
}

export const NewCategory = ({ onAddCategory }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!category) return;
    onAddCategory(category);
    setCategory("");
    setIsClicked(false);
  };
  return (
    <>
      <div className="mb-4 fixed bottom-0 left-2 md:bottom-10 md:left-5 lg:left-1/4 ">
        <button
          className="font-semibold shadow-lg bg-yellow-100 border-2 border-black rounded-full w-10 h-10 text-2xl"
          onClick={() => setIsClicked(!isClicked)}
        >
          +
        </button>
      </div>
      <div className={`${isClicked ? "block" : "hidden"} mb-4`}>
        <form onSubmit={handleSubmit} className="space-x-4">
          <input
            type="text"
            value={category}
            placeholder="...category"
            className="bg-gray-200 border-2 border-black p-1 rounded-lg focus:outline-none focus:border-blue-500 "
            onChange={(e) => setCategory(e.target.value)}
          />
          <button className="bg-blue-400 px-5 py-1 text-black border-2 border-black font-semibold rounded-lg">
            Add
          </button>
        </form>
      </div>
    </>
  );
};
