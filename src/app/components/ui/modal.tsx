import { useState, useEffect } from 'react';
import { AiFillCheckCircle, AiOutlineClose,  AiFillCloseCircle } from "react-icons/ai";
import getMessageForStatus from '@/utils/getMessageForStatus';

export default function Modal ({ type, onClose, statusNumber }: { type: string, onClose: () => void, statusNumber: number }) {

  const [visible, setVisible] = useState(true);

  const message = getMessageForStatus(statusNumber);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 9000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };


  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      role="alert"
      aria-live='assertive'
    >
      <div className="relative bg-white shadow rounded-lg p-8">
        {type === "success" ? (
          <div className="flex items-center justify-center">
            <AiFillCheckCircle className="text-green-500 w-8 h-8 mr-2" />
            <p className="text-green-500" >
              {message}
            </p>
            <AiOutlineClose 
              className="absolute top-2 right-2 cursor-pointer text-black" 
              onClick={handleClose}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <AiFillCloseCircle className="w-8 h-8 mr-2 text-red-600" />
            <p className="text-red-600">
              {message}
            </p>
            <AiOutlineClose 
              className="absolute top-2 right-2 cursor-pointer text-black" 
              onClick={handleClose}
            />
          </div>
        )}
      </div>
    </div>
  )
}