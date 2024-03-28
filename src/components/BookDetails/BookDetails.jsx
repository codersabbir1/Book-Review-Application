import { useLoaderData, useParams } from "react-router-dom";
import {
  getReadList, 
  saveReadList,
  saveWishList,
} from "../../utility/localStorage";
import { toast } from "react-toastify";

function BookDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.id == id);
  const {
    bookName,
    review,
    author,
    image,
    category,
    tags,
    pages,
    rating,
    publisher,
    yearOfPublishing,
  } = book;
  const handleReadBooks = (id) => {
    const storedData = getReadList();
    const isExist = storedData.find((data) => data === id);
    if (!isExist) {
      saveReadList(id);
      toast("Books Added to Read List!");
    } else {
      toast.warn("Books already added to Read List!");
    }
  };
  const handleWishList = (id) => {
    const storedData = getReadList();
    const isExist = storedData.find((data) => data === id);
    if (!isExist) {
      saveWishList(id);
      toast("Books Added to Wish List!");
    } else {
      toast.warn("Books already added to Read List!");
    }
  };
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex-col lg:flex-row flex justify-between items-center gap-10">
          <div className="w-full md:w-1/2 bg-slate-200 py-20 flex justify-center items-center rounded-xl">
            <img className="w-1/2" src={image} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">{bookName}</h1>
            <p className="text-xl font-medium workSans">By : {author}</p>
            <hr />
            <p className="text-xl font-medium workSans">{category}</p>
            <hr />
            <div className="workSans">
              <p className="font-base text-slate-600">
                <span className="font-bold text-black">Review: </span>
                {review}
              </p>
            </div>
            <div className="flex gap-3 items-center workSans">
              <strong className="font-bold text-base">Tag</strong>
              {tags.map((tag, i) => (
                <p
                  key={i}
                  className="text-green-500 font-medium bg-slate-100 rounded-full px-4 pb-2 pt-1"
                >
                  {tag}
                </p>
              ))}
            </div>
            <hr />
            <div className="overflow-x-auto workSans">
              <table className="table text-base">
                <tbody>
                  <tr className="border-0">
                    <td className="text-slate-400">Number of Pages:</td>
                    <td className="font-bold">{pages}</td>
                  </tr>
                  <tr className="border-0">
                    <td className="text-slate-400">Publisher:</td>
                    <td className="font-bold">{publisher}</td>
                  </tr>
                  <tr className="border-0">
                    <td className="text-slate-400">Year of Publishing:</td>
                    <td className="font-bold">{yearOfPublishing}</td>
                  </tr>
                  <tr className="border-0">
                    <td className="text-slate-400">Rating:</td>
                    <td className="font-bold">{rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-3 workSans">
              <button
                onClick={() => handleReadBooks(book.id)}
                className="btn btn-outline"
              >
                Read
              </button>
              <button
                onClick={() => handleWishList(book.id)}
                className="btn btn-accent text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
