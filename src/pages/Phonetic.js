import "./Phonetic.css";

export default function Phonetic() {

const filteredArray = location.state;
const [filteredWord] = filteredArray;

  return (
    <div className="Phonetic">
      <div>{filteredWord.phonetic.text}</div>
    </div>
  );
}