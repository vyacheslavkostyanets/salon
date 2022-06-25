import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "./Modal";

let ModalButton = ({ text, name }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="open-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        {name}
      </motion.button>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} text={text} handleClose={close} />
        )}
      </AnimatePresence>
    </div>
  );
};

export { ModalButton };
