import "./styles.css";
import Chips from "./chips";
import React from "react";
export default function App() {
  const [searchResults, setSearchResults] = React.useState([]);
  const [chipsItems, setChipsItems] = React.useState([]);

  const handleSearch = async function (e) {
    let searchTerm = e.target.value;
    const data = await fetch(
      "https://dummyjson.com/products/search?q=" + searchTerm
    );
    let jsonData = await data.json();
    setSearchResults(jsonData.products);
  };

  const handleSelection = function (d) {
    debugger;
    setChipsItems((prev) => [...prev, d]);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="container">
        <Chips items={chipsItems} />

        <div className="inputAndResultsContainer">
          <input className="inputSearch" type="text" onChange={handleSearch} />
          <div className="searchResults">
            {searchResults.map((d) => {
              return <div onClick={() => handleSelection(d)}>{d.title}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
