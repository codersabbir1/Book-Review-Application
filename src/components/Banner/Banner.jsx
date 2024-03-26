import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto px-4 py-20 bg-slate-300 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-6">
          <div className="flex flex-col gap-8">
            <h1 className="text-center lg:text-left font-bold text-5xl text-black">
              Books to freshen up <br />
              your bookshelf
            </h1>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/book-list"
                className="btn btn-success text-white font-bold px-10"
              >
                View The List
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="/img/pngwing 1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
