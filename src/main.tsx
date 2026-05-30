import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

import App from "./App";
import "./index.css";

// Route-level code splitting: each page ships as its own chunk, loaded on demand.
const Home = lazy(() => import("./routes/Home").then(m => ({ default: m.Home })));
const About = lazy(() =>
  import("./routes/About").then(m => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("./routes/Contact").then(m => ({ default: m.Contact })),
);
const TechStack = lazy(() =>
  import("./routes/TechStack").then(m => ({ default: m.TechStack })),
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tech" element={<TechStack />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
