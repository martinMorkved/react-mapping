import React from 'react';
import emojipedia from "./componenets/emojipedia.js";
import Entry from "./componenets/Entry.jsx"
import './App.css';

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}




function App() {
  return (
    <div>
    <h1>
      <span>emojipedia</span>
    </h1>
    <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
  </div>
  );
}

export default App;
