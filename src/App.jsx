import { Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

// Layout for pages that should have the navigation bar.
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
      </Route>

      {/* 404 is outside Layout, so Header is not displayed. */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;