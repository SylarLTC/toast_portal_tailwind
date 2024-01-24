import React from "react";
import { createPortal } from "react-dom";
import { Toast } from "./Toast";

export const ToastContainer = ({ toasts }) => {
  return createPortal(
    <div className="absolute right-0 top-0">
      {toasts.map((toast) => {
        return <Toast key={toast.id} {...toast} />;
      })}
    </div>,
    document.body,
  );
};
