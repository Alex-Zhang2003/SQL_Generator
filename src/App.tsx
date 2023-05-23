import CodeDisplay from "./components/codedisplay";
import Board from "./components/message_board";

function App() {
  const getQuery = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "test"
        })
      };
      console.log(options)
      const response = await fetch("http://localhost:8000/completions", options);
      const data = await response.text();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="app">
      <Board/>
      <input/>
      <CodeDisplay/>
      <div className="button-container">
        <button id="get-query" onClick={getQuery}>
          get query
        </button>
        <button id="clear-chat">
          clear chat
        </button>
      </div>
    </div>
  );
}

export default App;
