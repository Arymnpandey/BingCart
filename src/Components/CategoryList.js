import CategoryData from "../Data/categoryData";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  return (
    <div className="flex w-[98.5%] mx-auto mt-2 justify-evenly bg-slate-100">
      {CategoryData.map((item) => {
        return <CategoryItem key={item.key} item={item}></CategoryItem>;
      })}
    </div>
  );
}

export default CategoryList;
