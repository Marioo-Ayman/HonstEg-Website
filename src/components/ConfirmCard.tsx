'use client';

import CheckIcon from '@mui/icons-material/Check';
import InventoryIcon from '@mui/icons-material/Inventory';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { useState } from 'react';

interface ConfirmationCardProps {
  title?: string;
  message?: string;
  onClose?: () => void;
  buyMoreUrl?: string;
}

export default function ConfirmationCard({
  title = 'Payment Successful!',
  message = 'Your data has been submitted successfully. Thank you for your purchase!',
  onClose,
}: ConfirmationCardProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };


  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`w-full max-w-md transform z-10 rounded-lg bg-white p-8 shadow-xl transition-transform duration-300 ${
          isClosing ? 'scale-95' : 'scale-100'
        }`}
      >
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-20"></div>
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-green-400 to-green-600">
              <CheckIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-card-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{message}</p>
        </div>

        {/* Order Summary (Optional) */}
        <div className="mb-8 rounded-lg bg-muted/30 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            Transaction Details
          </p>
          <p className="text-sm font-semibold text-card-foreground">
            Order confirmed and processing
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            You will receive a confirmation email shortly
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary hover:bg-secondary/80 px-4 py-3 font-medium text-secondary-foreground transition-all duration-200 hover:shadow-md active:scale-95"
          >
            {/* <X className="h-4 w-4" /> */}
            <span>Close</span>
          </button>

          {/* Buy More Packages Button */}
            <Link to="/">
            <button
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-3 font-medium text-white transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
                <InventoryIcon className="h-4 w-4" />
                <span>Buy More</span>
            </button>
          </Link>
        </div>

        {/* Optional Close Icon */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-full p-2 hover:bg-muted transition-colors"
          aria-label="Close confirmation"
        >
          <CloseIcon className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
