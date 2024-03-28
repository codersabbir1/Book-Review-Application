import TabContents from "../TabContents/TabContents";

function BookContainer() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center items-center py-8 bg-slate-200 rounded-lg workSans">
          <h1 className="text-3xl text-center  font-bold">Books</h1>
        </div>
        <div className="workSans py-6 flex justify-center items-center">
          <select className="select select-success bg-success text-white text-base font-normal">
            <option className="bg-white text-slate-300" defaultValue>
              Sort By
            </option>
            <option className="bg-white text-slate-700">Rating</option>
            <option className="bg-white text-slate-700">Number of pages</option>
            <option className="bg-white text-slate-700">Publisher year</option>
          </select>
        </div>
        <TabContents />
      </div>
    </div>
  );
}

export default BookContainer;
