import "./css/main.css";
import Header from "./Header";
import Input from "./Input";

function App() {
  return (
    <>
      <Header />
      <center>
        <p>
          **Bug thats not really a bug but rather something that I didn't want
          to try and fix yet: when you remove an entry the chart won't update
          until a change is made in the input field. Just type something there
          and it will update.**
        </p>
        <p>
          *I'll need to tell the chart to re-render when a removal request is
          made.
        </p>
      </center>
      <div className="mainContent">
        <Input />
      </div>
    </>
  );
}

export default App;
