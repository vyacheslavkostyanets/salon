import React from "react";
import { motion } from "framer-motion";

const BackDropModal = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdropmodal"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      BackDropModal
      {children}
    </motion.div>
  );
};

export { BackDropModal };
