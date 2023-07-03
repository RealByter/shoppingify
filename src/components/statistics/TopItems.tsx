import Stat from "./Stat";
import ListItem from "../list/ListItem.interface";

interface Props {
  items: ListItem[];
}

const TopItems: React.FC<Props> = ({ items }) => {
  const occurrences: any = {};
  items.forEach((item) => {
    if (item.itemId in occurrences) {
      occurrences[item.itemId]++;
    } else {
      occurrences[item.itemId] = 1;
    }
  });

  const highest = {
    first: { itemId: "", amount: 0 },
    second: { itemId: "", amount: 0 },
    third: { itemId: "", amount: 0 },
  };
  for (const key in occurrences) {
    const amount = occurrences[key];
    if (amount > highest.first.amount) {
      highest.third = highest.second;
      highest.second = highest.first;
      highest.first = { itemId: key, amount: amount };
    } else if (amount > highest.second.amount) {
      highest.third = highest.second;
      highest.second = { itemId: key, amount: amount };
    } else if (amount > highest.third.amount) {
      highest.third = { itemId: key, amount: amount };
    }
  }

  const highestInfo = [];
  highestInfo.push({
    amount: highest.first.amount,
    item: items.find((item) => item.itemId === highest.first.itemId),
  });
  highestInfo.push({
    amount: highest.second.amount,
    item: items.find((item) => item.itemId === highest.second.itemId),
  });
  highestInfo.push({
    amount: highest.third.amount,
    item: items.find((item) => item.itemId === highest.third.itemId),
  });

  return (
    <div className="mx-auto max-w-xs grow basis-64">
      <h2 className="mb-6 text-xl md:text-2xl lg:mb-9">Top Items</h2>
      <div className="flex flex-col gap-y-6 lg:gap-y-7">
        {highestInfo.map(
          (info, index) =>
            !!info.amount && (
              <Stat
                key={index}
                color="#F9A109"
                name={info.item?.name}
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

export default TopItems;
