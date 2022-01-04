import {BrowserRouter} from "react-router-dom"
import Router from "./Router/Router";

import { AndandoPorAi } from "./Components/AndandoPorAI"


function App() {
  return(
    <BrowserRouter>
      <AndandoPorAi />
      <Router />
    </BrowserRouter>
  );
}

export default App;
