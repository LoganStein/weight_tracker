import "./css/main.css";
import Header from "./Header";
import Input from "./Input";

function App() {
  return (
    <>
      <Header />
      <center>
        <p>
          *bug with fake data. When you delete an entry from fake data the
          change fails to update until there is a change in the input box or
          more fake data is added
        </p>
      </center>
      <div className="mainContent">
        <Input />
      </div>
    </>
  );
}

export default App;
