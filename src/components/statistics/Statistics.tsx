import TopCategories from "./TopCategories";
import TopItems from "./TopItems";
import YearlySummary from "./YearlySummary";

const Statistics = () => {
  return (
    <div className="md:grid md:grid-cols-[1fr,24rem]">
      <div className="flex max-w-4xl flex-wrap p-3">
        <TopItems />
        <TopCategories />
        <YearlySummary />
      </div>
    </div>
  );
};

export default Statistics;
