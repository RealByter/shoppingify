import Logo from "../../favicon.svg";
import {
  MdInsertChartOutlined,
  MdOutlineReplay,
  MdFormatListBulleted,
} from "react-icons/md";
import Link from "./Link";
import ShoppingCart from "./ShoppingCart";

const NavBar = () => {
  return (
    <nav className="flex h-screen w-fit flex-col justify-between bg-white">
      <img src={Logo} alt="logo" className="relative top-4 mx-auto h-12 w-12" />
      <div className="flex flex-col items-center">
        <Link to="/" Icon={MdFormatListBulleted} tooltip="items" />
        <Link to="/history" Icon={MdOutlineReplay} tooltip="history" />
        <Link
          to="/statistics"
          Icon={MdInsertChartOutlined}
          tooltip="statistics"
        />
      </div>
      <ShoppingCart />
    </nav>
  );
};

export default NavBar;
