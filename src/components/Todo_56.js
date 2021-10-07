import { useState } from "react";
import Modal_56 from "../components/Modal_56";
import Backdrop_56 from "../components/Backdrop_56";

function Todo_56(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }
  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>Add</button>
        </div>
      </div>
      {showModal && <Backdrop_56 onClose={closeModalHandler} />}
      {showModal && (
        <Modal_56 text='Are you sure?' onClose={closeModalHandler} />
      )}
    </div>
  );
}

export default Todo_56;
