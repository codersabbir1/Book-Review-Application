import { useLoaderData } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Book from "./components/Book/Book";

function App() {
  const books = useLoaderData();
  return (
    <>
      <Banner />
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center py-4">Books</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
