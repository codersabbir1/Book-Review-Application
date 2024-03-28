import { useState } from "react";
import { toast } from "react-toastify";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text, name, rating, email);
    toast("Thank you for you FeedBack.");
  };

  return (
    <div className="border rounded-lg py-6 px-5 my-6 w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto flex flex-col workSans text-lg"
      >
        <label htmlFor="feedback" className="block mt-4 text-start">
          Feedback:
        </label>
        <textarea
          required
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your feedback"
          className="textarea textarea-bordered mt-1 mb-4 "
        ></textarea>

        <label htmlFor="name" className="block text-start">
          Your Name:
        </label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="input input-bordered mt-1 mb-4"
        />

        <label htmlFor="email" className="block text-start">
          Your Email:
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="input input-bordered mt-1 mb-4"
        />

        <label htmlFor="rating" className="block text-start">
          Rate your experience:
        </label>
        <select
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="select select-bordered mt-1 mb-4"
        >
          <option value="">Select</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Average</option>
          <option value="4">4 - Good</option>
          <option value="5">5 - Excellent</option>
        </select>
        <button type="submit" className="btn btn-accent text-white">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
