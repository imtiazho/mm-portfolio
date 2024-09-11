import React from "react";

const BookModal = ({ projectImage, modalNo }) => {
  console.log(modalNo);
  return (
    <div>
      <input
        type="checkbox"
        id={`my-modal-${modalNo}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-black p-0 rounded-none">
          <label
            htmlFor={`my-modal-${modalNo}`}
            className="btn btn-sm btn-circle absolute right-2 top-2 border-0 hover:bg-[#000] bg-[#000] text-[#fff]"
          >
            ✕
          </label>
          <div className="">
            <img className="object-cover" src={projectImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
