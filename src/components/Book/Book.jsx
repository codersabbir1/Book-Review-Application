/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";

function Book({ book }) {
  const navigate = useNavigate();
  const handleBookDetails = () => {
    navigate("/sdfsdf");
  };
  const { bookName, author, image, rating, category, tags } = book;
  return (
    <div
      onClick={() => handleBookDetails()}
      className="border rounded-lg p-4 flex flex-col gap-4 cursor-pointer"
    >
      <div className="py-10 text-center bg-slate-200 flex flex-col justify-center items-center rounded-lg">
        <img className="h-64" src={image} alt="" />
      </div>
      <div className="flex gap-2 workSans">
        {tags.map((tag, i) => (
          <p
            key={i}
            className="text-green-500 font-medium bg-slate-100 rounded-full px-4 pb-2 pt-1"
          >
            {tag}
          </p>
        ))}
      </div>
      <h2 className="text-2xl font-bold">{bookName}</h2>
      <div>
        <p className="font-medium text-base workSans">By : {author}</p>
      </div>
      <hr className="border-dashed mt-auto" />
      <div className="flex justify-between gap-2 text-base font-medium workSans items-center  ">
        <p>{category}</p>
        <div className="flex gap-1 items-center">
          <CiStar />
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Book;
