import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Loader from "./components/Loader.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a root for rendering
const root = createRoot(document.getElementById("root"));

// Render the application
root.render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
    <ToastContainer /> {/* Moved outside of Suspense */}
  </Provider>
);
