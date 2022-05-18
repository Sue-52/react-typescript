import ReactDOM from "react-dom/client";
import AppComponent from "./app.component";
import { Provider } from "react-redux";
import { store } from "@/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>
);
