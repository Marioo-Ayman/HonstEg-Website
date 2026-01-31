// import { CloseIcon } from "../../icons";

type PopupProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
};
export default function Popup({ open, onClose, children }: PopupProps) {
  if (!open) return null; // hide component when closed

  return (
    <div
        onClick={onClose}
        className={`
            fixed inset-0 flex justify-center items-center transition-colors z-10
            ${open ? "visible bg-black/20" : "invisible"}
        `}
        >
        {/* modal */}
        <div
            onClick={(e) => e.stopPropagation()}
            className={`
            bg-white rounded-xl shadow p-6 transition-all  max-w-fit
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}
        > 
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 transition-colors"
        >
          {/* <CloseIcon className="size-6"  /> */}
          <span className="sr-only">Close</span>
        </button>
            {children}
        </div>
    </div>
  );
}