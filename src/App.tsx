import { AppProviders } from "@/app-providers";
import { Home } from "@/pages/home";
import { Stats } from "@/pages/stats";
import { BrowserRouter, Route, Routes } from "react-router";

export const App = () => {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/stats">
            <Route path=":steamId" element={<Stats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
};
