import logo from "./logo.svg";
import "./App.css";
import PasswordChange from '../src/Components/PasswordChange';
import { Provider } from "react-redux";
import store from './Store';
function App() {
  return (
    <>
       <div className="App">
      <Provider store={store}>
        <PasswordChange />
      </Provider>
    </div>
    </>
  );
}

export default App;
