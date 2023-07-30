import { render } from "react-dom";
import { Counter } from "./components/counter/counter";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";


render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

