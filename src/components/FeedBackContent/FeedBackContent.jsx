import FeedbackForm from "../FeedbackForm/FeedbackForm";
import FeedbackInfo from "../FeedbackInfo/FeedbackInfo";

function FeedBackContent() {
  return (
    <div>
      <div className="flex justify-center items-center py-8 bg-slate-200 rounded-lg workSans">
        <h1 className="text-3xl text-center  font-bold">FeedBack</h1>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 items-center text-center ">
        <FeedbackInfo />
        <FeedbackForm />
      </div>
    </div>
  );
}

export default FeedBackContent;
