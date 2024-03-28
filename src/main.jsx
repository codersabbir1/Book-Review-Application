import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import App from "./App";
import BookList from "./pages/BookList/BookList.jsx";
import ReadPages from "./pages/ReadPages/ReadPages.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import About from "./pages/About/About.jsx";
import Feedback from "./pages/Feedback/Feedback.jsx";

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
        path: "/:id",
        loader: () => fetch("/booksData.json"),
        element: <BookDetails />,
      },
      {
        path: "/book-list",
        loader: () => fetch("/booksData.json"),
        element: <BookList />,
      },
      {
        path: "/read-pages",
        loader: () => fetch("/booksData.json"),
        element: <ReadPages />,
      },
      {
        path: "/about",
        loader: () => fetch("/aboutContent.json"),
        element: <About />,
      },
      {
        path:"/feedback",
        element: <Feedback />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
