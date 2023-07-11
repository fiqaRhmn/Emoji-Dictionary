import React from "react";
import Term from "./Term";

function Dictionary(props) {
  return (
    <dl className="dictionary">
      <Term
        key={props.key}
        emoji={props.emojiIcon}
        name={props.emojiName}
        meaning={props.emojiMean}
      />
    </dl>
  );
}

export default Dictionary;
