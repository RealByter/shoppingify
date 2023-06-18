import { MdAdd } from "react-icons/md";
import Ripple from "../general/Ripple";

interface Props {
  onClick(): any;
}

const CreateItemButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute bottom-6 right-6 overflow-hidden rounded-full bg-white p-4 shadow-lg md:hidden"
  >
    <MdAdd />
    <Ripple duration={1000} color="#dddddd" />
  </button>
);

export default CreateItemButton;
