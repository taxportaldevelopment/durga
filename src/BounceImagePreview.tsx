import React, { useState } from "react";
import { motion } from "framer-motion";

interface BounceImagePreviewProps {
  src: string;
  alt?: string;
  size?: number;
}

const BounceImagePreview: React.FC<BounceImagePreviewProps> = ({
  src,
  alt = "Image",
  size = 200,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <div className="fixed bottom-40 left-3 z-40">
       
    <div className="flex flex-col items-center justify-center">
      {/* Bounce Animation */}
      <motion.img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-2xl shadow-lg cursor-pointer"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => setIsOpen(true)}
      />

      {/* Preview Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.img
            src={src}
            alt={alt}
            className="max-w-[80%] max-h-[80%] rounded-2xl shadow-2xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      )}
    </div>
     </div>
  );
};

export default BounceImagePreview;
