import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import Ripple from "../general/Ripple";

interface Props {
  to: string;
  Icon: IconType;
}

const Link: React.FC<Props> = ({ to, children, Icon }) => (
  <NavLink to={to} className="relative block px-4 py-8 sm:px-6">
    <Icon className="text-2xl" />
    <Ripple color="#dddddd" duration={1000} />
  </NavLink>
);

export default Link;
