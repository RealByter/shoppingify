interface Props {
  className?: string;
}

const SideCard: React.FC<Props> = ({ children, className }) => (
  <div
    className={
      "h-screen w-[calc(100vw-56px)] max-w-md sm:w-[calc(100vw-72px)] md:w-96" +
      " " +
      className
    }
  ></div>
);

export default SideCard;
