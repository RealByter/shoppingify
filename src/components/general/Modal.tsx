import { Dialog } from "@headlessui/react";

interface Props {
  title: string;
  description: string;
  open: boolean;
  onClose(): any;
}

const Modal: React.FC<Props> = ({
  title,
  description,
  open,
  onClose,
  children,
}) => (
  <Dialog open={open} onClose={onClose}>
    <Dialog.Panel>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{description}</Dialog.Description>
      {children}
      <button onClick={onClose}>Close</button>
    </Dialog.Panel>
  </Dialog>
);

export default Modal;
