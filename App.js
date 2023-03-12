import "./App.css";
import React, { useState } from "react";
//import { useState } from "react";

//data and info passing down to ALL childs here

function App() {

  const [searchData, setSearchData] = useState(null);

  return (
    <>
    <Home />
    </>
  );
}

export default App;
