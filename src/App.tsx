import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./components/AppLayout/AppLayout.tsx";
import Homepage from "./pages/HomePage";
import Section from "./pages/Section";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<Homepage />} />
              <Route path="section/:section" element={<Section />} />
              <Route path="search/:searchParam" element={<Search />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
