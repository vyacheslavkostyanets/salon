import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "./Modal";

let ModalButton = () => {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis neque, earum nihil ipsum dolorem aliquam ducimus accusantium, maiores molestias perferendis culpa atque fugit? Odio, nam. Incidunt hic quia velit.";
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
        Launch modal
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
