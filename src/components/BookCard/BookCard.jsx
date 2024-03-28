/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineRestorePage } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const {
    id,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    pages,
    category,
    rating,
  } = book;
  const navigate = useNavigate();
  const handleBookDetails = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="  grid grid-cols-4 gap-4 rounded-2xl p-4 border">
      <div className="bg-slate-200 flex justify-center items-center py-4 rounded-xl">
        <img src={image} alt="" />
      </div>
      <div className="col-span-3 flex flex-col gap-3 ">
        <h1 className="font-bold text-2xl"> {bookName} </h1>
        <p className="text-base font-medium workSans">By : {author}</p>
        <div className="flex flex-wrap gap-4 items-center">
          <p className="font-bold text-base workSans">Tag</p>
          {tags.map((tag, i) => (
            <p
              key={i}
              className="text-green-500 font-medium bg-slate-100 rounded-full px-4 pb-2 pt-1"
            >
              {tag}
            </p>
          ))}
          <div className="flex items-center gap-2">
            <CiLocationOn />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center text-base text-gray-500">
          <div className="flex items-center gap-2">
            <IoPeopleOutline />
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineRestorePage />
            <p>Page {pages}</p>
          </div>
        </div>
        <hr />
        <div className="flex gap-4 item-center workSans">
          <p className="py-2 px-6 rounded-full text-base  bg-blue-50 text-blue-500">
            Category: {category}
          </p>
          <p className="py-2 px-6 rounded-full text-base  bg-orange-100 text-[#FFAC33]">
            Rating: {rating}
          </p>
          <p
            onClick={() => handleBookDetails(id)}
            className="py-2 px-6 rounded-full text-base  bg-success text-white cursor-pointer"
          >
            View Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
