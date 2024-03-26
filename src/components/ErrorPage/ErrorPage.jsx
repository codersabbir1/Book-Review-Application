import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const handleErrorButton = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-2xl text-gray-400 mb-8">Page Not Found</p>
        <button
          onClick={() => handleErrorButton()}
          className="btn btn-link text-blue-600 text-xl"
        >
          Back home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
