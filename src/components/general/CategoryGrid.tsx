interface Props {
  name: string;
}

const CategoryGrid: React.FC<Props> = ({ name, children }) => (
  <div className="mx-auto max-w-3xl">
    <h3 className="mb-4 mt-12 w-fit text-lg font-medium">{name}</h3>
    <div className="grid gap-x-2 gap-y-6 min-[375px]:grid-cols-[repeat(2,minmax(140px,1fr))] min-[482px]:grid-cols-[repeat(3,minmax(130px,1fr))] min-[700px]:grid-cols-[repeat(4,minmax(140px,1fr))] md:grid-cols-[repeat(2,minmax(140px,1fr))] md:gap-x-5 min-[948px]:grid-cols-[repeat(3,minmax(140px,1fr))] min-[1112px]:grid-cols-[repeat(4,minmax(140px,1fr))]">{children}</div>
  </div>
);

export default CategoryGrid;
