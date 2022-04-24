import Modal, { Props as ModalProps } from "react-modal";

export interface ImodalProps extends ModalProps {
  onClose: () => void;
}

const IModal = ({ children, onClose, ...props }: ImodalProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal closeTimeoutMS={500} onRequestClose={handleClose} {...props}>
      {children}
    </Modal>
  );
};

export default IModal;
