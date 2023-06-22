interface Props {
  className?: string;
}

const SideCard: React.FC<Props> = ({ children, className }) => (
  <div
    className={
      "h-screen w-[calc(100vw-56px)] max-w-sm sm:w-[calc(100vw-56px)] md:w-96" +
      " " +
      className
    }
  >
    {children}
  </div>
);

export default SideCard;
