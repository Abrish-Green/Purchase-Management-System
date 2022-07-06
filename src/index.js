import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
      </Routes>
      </BrowserRouter>
  </Provider>
);