import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import App from "./App";
import BookList from "./pages/BookList/BookList.jsx";
import ReadPages from "./pages/ReadPages/ReadPages.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("/booksData.json"),
        element: <App />,
      },
      {
        path: "/book-list",
        element: <BookList />,
      },
      {
        path: "/read-pages",
        element: <ReadPages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
