import {BrowserRouter} from "react-router-dom"
import Router from "./Router/Router";
import CompHeader from "./Components/Header";

import { AndandoPorAi } from "./Components/AndandoPorAI"


function App() {
  return(

    <BrowserRouter>
      {/* <AndandoPorAi /> */}
      <CompHeader />
      <Router />
    </BrowserRouter>
  );
}

export default App;
