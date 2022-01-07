import {BrowserRouter} from "react-router-dom"
import Router from "./Router/Router";
import CompHeader from "./Components/Header";
import GlobalState from "./global/GlobalState";


function App() {
  return(
    <GlobalState>
        <Router />
    </GlobalState>
  );
}

export default App;
