import React from "react";
import Restaurant from "./components/basics/Restaurant";
import UseEffect from "./components/hooks/useEffect";
import UseReducer from "./components/hooks/useReducer";
import Usestate from "./components/hooks/useState";
import Todo from "./components/ToDo/Todo";
import Temp from "./components/weatherApp/Temp";

const App = () => {
  return (
    <div>
      {/* <Restaurant /> */}
      {/* <Usestate/> */}
      {/* <UseEffect/> */}
      {/* <UseReducer/> */}
      {/* <Todo/> */}
      <Temp/>
    </div>
  );
};

export default App;
