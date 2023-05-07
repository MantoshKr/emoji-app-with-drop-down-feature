import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "🥸": "Disguised Face",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "👻": "Ghost",
  "🎃": "Jack-O-Lantern"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
      setSelectedEmoji("");
    } else {
      setMeaning("can't recognise this emoji , pls choose another one");
      setSelectedEmoji("");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
    setSelectedEmoji(inputEmoji);
  }

  return (
    <div className="App">
      <h1>Pick your emoji</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      {/* <h2>{emoji}</h2>
      <h3>{meaning}</h3> */}
      <div style={{ marginTop: "3rem"  }}>
      <select
        value={selectedEmoji}
        style={{ fontSize: "1rem", padding: "0.5rem", minWidth: "30%", height: "2.5rem" }}
        onChange={(event) => {
          setSelectedEmoji(event.target.value);
          setMeaning(emojiDictionary[event.target.value]);
        }}
      >
      
        <option value="">Select an emoji</option>
        {emojis.map((emoji) => (
          <option value={emoji}>{emoji}</option>
        ))}
      </select>
      </div>
      {selectedEmoji && (
        <div>
          <h2>{selectedEmoji}</h2>
          <h3>{emojiDictionary[selectedEmoji]}</h3>
        </div>
      )}
      
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>

      <div style={{ display: "flex", flexWrap: "wrap", width: "30rem", height: "10rem", border: "1px solid black",  margin: "auto" , marginTop: "3rem"  }}>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "0.5 rem", padding: "0.2rem", cursor: "pointer"}}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
      </div>

      
    </div>
  );
}
