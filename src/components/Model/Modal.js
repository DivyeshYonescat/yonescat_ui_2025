import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, auth, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-stone-900/95 bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // close when clicking outside
        >
          <motion.div
            className=""
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // prevent close on content click
          >
            {/* <button className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-600" onClick={onClose}> &times;</button> */}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
