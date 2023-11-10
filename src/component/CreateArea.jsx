import React, { useState } from "react";

function NoteInput(props) {
  // Renamed component for a more descriptive name
  const [inputData, setInputData] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((currentData) => ({ ...currentData, [name]: value }));
  };

  const submitNewNote = (event) => {
    event.preventDefault();
    props.onAddNote(inputData);
    setInputData({ title: "", content: "" });
  };

  return (
    <div>
      <form onSubmit={submitNewNote}>
        <input
          name="title"
          value={inputData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={inputData.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NoteInput;
