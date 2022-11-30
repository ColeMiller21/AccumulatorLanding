/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const HModal = ({ isOpen, toggleOpen }) => {
  const [isMobile, setIsMobile] = useState(false);
  const appWidth = () => {
    if (window.innerWidth <= 1127) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    return window.innerWidth;
  };

  useEffect(() => {
    window.addEventListener("resize", appWidth);
    appWidth();
  }, []);

  return (
    <Modal
      show={isOpen}
      onHide={toggleOpen}
      size={isMobile ? "md" : "lg"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="flex flex-col w-full">
          <div
            className="flex justify-end mb-4 cursor-pointer"
            onClick={toggleOpen}
          >
            <FaTimes />
          </div>
          <img
            src="/images/background/howitworks_blur.png"
            alt="How It Works"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HModal;
