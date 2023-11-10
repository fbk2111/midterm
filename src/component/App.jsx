import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import initialNotes from "./notes"; // Renamed the import for clarity
import NoteInput from "./CreateArea"; // Renamed CreateArea for a more descriptive name

function App() {
  const [allNotes, updateNotes] = useState(initialNotes); // Renamed variables for clarity

  const handleNewNote = (noteData) => {
    // Changed parameter name for clarity
    const newNote = { ...noteData, key: Date.now() }; // Constructing new note object
    updateNotes([...allNotes, newNote]);
  };

  const handleNoteDeletion = (noteId) => {
    // More descriptive parameter name
    const updatedNotes = allNotes.filter((note) => note.key !== noteId);
    updateNotes(updatedNotes);
  };

  return (
    <div>
      <Header />
      <NoteInput onAddNote={handleNewNote} />
      {allNotes.map((
        singleNote // Changed the variable name for map function
      ) => (
        <Note
          key={singleNote.key}
          id={singleNote.key}
          title={singleNote.title}
          content={singleNote.content}
          onDelete={handleNoteDeletion}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
