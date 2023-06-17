import Logo from "../../favicon.svg";
import {
  MdInsertChartOutlined,
  MdOutlineReplay,
  MdFormatListBulleted,
  MdOutlineShoppingCart,
} from "react-icons/md";
import Link from "./Link";

const NavBar = () => {
  return (
    <nav className="flex h-screen w-fit flex-col justify-between bg-white">
      <img src={Logo} alt="logo" className="relative top-4 mx-auto h-12 w-12" />
      <div className="flex flex-col items-center">
        <Link to="/" Icon={MdFormatListBulleted} />
        <Link to="/history" Icon={MdOutlineReplay} />
        <Link to="/statistics" Icon={MdInsertChartOutlined} />
      </div>
      <MdOutlineShoppingCart className="relative bottom-6 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 text-white" />
    </nav>
  );
};

export default NavBar;
