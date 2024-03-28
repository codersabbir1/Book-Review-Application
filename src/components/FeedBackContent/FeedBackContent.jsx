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
      <hr />
      <div className="flex flex-col gap-5 py-10">
        <div className="flex flex-col">
          <h1 className="text-3xl py-2 font-semibold">Privacy Policy</h1>
          <p className="text-xl text-gray-500 py-1">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and safeguard the personal information you provide
            when submitting feedback through this form.
          </p>
          <p className="font-bold text-2xl mt-7">Update Policy</p>
          <p className="text-xl text-gray-500 py-1">
            We may update this Privacy Policy from time to time to reflect
            changes in our data handling practices or legal requirements. We
            encourage you to review this Privacy Policy periodically for any
            updates.
          </p>

          <p className="text-xl text-gray-700 py-3">
            If you have any questions or concerns about your privacy or our data
            handling practices, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedBackContent;
