import React from "react";
import Dictionary from "./Dictionary";
import { emojipedia } from "../emojipedia";

function getEmoji(eachEmoji) {
  return (
    <Dictionary
      key={eachEmoji.id}
      emojiIcon={eachEmoji.emoji}
      emojiName={eachEmoji.name}
      emojiMean={eachEmoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(getEmoji)}
    </div>
  );
}

export default App;
