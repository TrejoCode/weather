/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Application entry point
 * @process 2
 */

import { Provider } from "react-redux";
import { store } from "./redux/store";
import PageHome from "pages/Home";

const App = () => {
  return (
    <Provider store={store}>
      <PageHome />
    </Provider>
  );
};

export default App;
