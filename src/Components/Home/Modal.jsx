import { motion } from "framer-motion";
import { BackDropModal } from "./BackDropModal";

const Modal = ({ handleClose, text }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <div className="modal__container">
      <BackDropModal onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="modal__info__wrapper">
            <p>{text}</p>

            <button onClick={handleClose} className="close-button">
              Закрити
            </button>
          </div>
        </motion.div>
      </BackDropModal>
    </div>
  );
};

export { Modal };
