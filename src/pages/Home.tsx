import { useState } from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [word, setWord] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const navigate = useNavigate();

  // arrow function
  // const myFunction = async () => {
  //   return "test";
  // };

  // function declative
  async function handleSearchDefinition() {
    // change loading state to true
    setLoading(true);

    // call api using the word
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    //   if the serched word is a legit word, convert to json and navigate
    if (response.status === 200) {
      const jsonData = await response.json();

      navigate("/" + word, {
        state: jsonData,
      });
    } else {
      setError(true);
    }
    setLoading(false);
  }

  // const handleSubmit = () => {
  //   console.log('form submitted ✅');
  //   handleSearchDefinition();
  // };

  // useEffect(() => {
  //   const keyDownHandler = (event:any) => {

  //     if (event.key === 'Enter') {
  //       event.preventDefault();
  //       setWord(event.target.value);
  //       handleSubmit();
  //     }
  //   };

  //   document.addEventListener('keydown', keyDownHandler);

  //   return () => {
  //     document.removeEventListener('keydown', keyDownHandler);
  //   };
  // }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{
        width: "600px",
        height: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderWidth: "4px",
        borderRadius: "6px",
        borderColor: "bisque",
        backgroundColor: "white",
      }}>
      <h1 className="text-3xl">Pocket Dictionary</h1>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <input
          style={{ width: "400px", height: "30px"}}
          type="text"
          name="word"
          id="word"
          placeholder="  Insert a word to search"
          onChange={(e) => {
            setError(false);
            setWord(e.target.value);
          }}
        />
        <div style={{ padding: "10px" }}>
          <button
            onClick={handleSearchDefinition}
            style={{ width: "100px", height: "30px", backgroundColor: "whitesmoke", borderWidth: "2px",
            borderRadius: "4px", borderColor: "bisque"}}
          >
            Search
          </button>{" "}
        </div>
        {isLoading ? (
          <span>
            <img src="./images/spinner.gif" alt="" width={50} height={50} />
          </span>
        ) : null}
      </div>
      {isError ? <span>Invalid input</span> : null}
      </div>
    </div>
  );
}

export default Home;
