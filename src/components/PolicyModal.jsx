import React, { useEffect } from "react";
import "../style/PolicyModal.scss";

const PolicyModal = ({ isOpen, onClose, title, children }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="policy-overlay" onClick={onClose}>
      <div
        className="policy-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="policy-header">
          <h2>{title}</h2>

          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="policy-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;