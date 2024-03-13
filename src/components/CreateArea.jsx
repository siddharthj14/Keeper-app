import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [showFull, setShowFull] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    props.addItem();
    setShowFull(false);
  }
  function handleShowFull() {
    setShowFull(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {showFull && (
          <input
            name="title"
            placeholder="Title"
            onChange={props.handleInput}
            value={props.input.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={showFull ? 3 : 1}
          onChange={props.handleInput}
          value={props.input.content}
          onClick={handleShowFull}
        />

        <Zoom in={showFull}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
