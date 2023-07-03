import ListItem from "../list/ListItem.interface";
import Stat from "./Stat";

interface Props {
  items: ListItem[];
}

const TopCategories: React.FC<Props> = ({ items }) => {
  const occurrences: any = {};
  items.forEach((item) => {
    if (item.category in occurrences) {
      occurrences[item.category]++;
    } else {
      occurrences[item.category] = 1;
    }
  });

  const highest = {
    first: { category: "", amount: 0 },
    second: { category: "", amount: 0 },
    third: { category: "", amount: 0 },
  };
  for (const key in occurrences) {
    const amount = occurrences[key];
    if (amount > highest.first.amount) {
      highest.third = highest.second;
      highest.second = highest.first;
      highest.first = { category: key, amount: amount };
    } else if (amount > highest.second.amount) {
      highest.third = highest.second;
      highest.second = { category: key, amount: amount };
    } else if (amount > highest.third.amount) {
      highest.third = { category: key, amount: amount };
    }
  }

  const highestInfo = [];
  highestInfo.push(highest.first);
  highestInfo.push(highest.second);
  highestInfo.push(highest.third);

  return (
    <div className="mx-auto max-w-xs grow basis-64">
      <h2 className="mb-6 text-xl md:text-2xl lg:mb-9">Top Categories</h2>
      <div className="flex flex-col gap-y-6 lg:gap-y-7">
        {highestInfo.map(
          (info, index) =>
            !!info.amount && (
              <Stat
                key={index}
                color="#56CCF2"
                name={info.category}
                percentage={Number(
                  ((info.amount / items.length) * 100).toFixed(1)
                )}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TopCategories;
