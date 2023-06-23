import { Transition } from "@headlessui/react";

interface Props {
  isShowing: boolean;
  zIndex?: number;
}

const zIndexVariants = ["z-0", "z-10", "z-20", "z-30"];

const SideDrawer: React.FC<Props> = ({ isShowing, children, zIndex = 20 }) => (
  <Transition
    show={isShowing}
    as="div"
    className={`$ absolute right-0 top-0 ${zIndexVariants[zIndex / 10]}`}
    enter="transition-transform duration-300"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transition-transform duration-300"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    {children}
  </Transition>
);

export default SideDrawer;
