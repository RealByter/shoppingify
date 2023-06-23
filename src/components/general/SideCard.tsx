interface Props {
  className?: string;
}

const SideCard: React.FC<Props> = ({ children, className }) => (
  <div
    className={
      "h-screen w-[calc(100vw-56px)] max-w-sm px-[4.32vw] md:px-[3vw] sm:w-[calc(100vw-56px)] xl:px-11 md:w-96" +
      " " +
      className
    }
  >
    {children}
  </div>
);

export default SideCard;
