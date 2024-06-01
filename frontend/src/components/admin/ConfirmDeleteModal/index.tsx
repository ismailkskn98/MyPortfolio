"use client";
import React from "react";

type ConfirmDeleteModalProps = {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg text-BG2">
        <h2 className="text-xl mb-4">Bu öğeyi silmek istediğinize emin misiniz?</h2>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            İptal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
