import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import Ripple from "../general/Ripple";

interface Props {
  to: string;
  tooltip: string;
  Icon: IconType;
}

const Link: React.FC<Props> = ({ to, tooltip, Icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `group relative block px-4 py-8 outline-none sm:px-6 ${
        isActive &&
        "before:absolute before:left-0 before:top-1/2 before:h-12 before:w-1.5 before:-translate-y-1/2 before:rounded-r-lg before:bg-primary"
      }`
    }
  >
    <Icon className="text-2xl" />
    <Ripple color="#dddddd" duration={1000} />
    <span className="pointer-events-none absolute -right-12 top-1/2 z-40 flex h-5 w-16 -translate-y-1/2 items-center justify-center rounded-md bg-gray-700 text-xs text-white opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 group-focus-visible:opacity-100">
      {tooltip}
    </span>
  </NavLink>
);

export default Link;
