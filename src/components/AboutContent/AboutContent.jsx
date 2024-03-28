/* eslint-disable react/prop-types */
function AboutContent({ data }) {
  const { heading, content } = data;
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold workSans py-5">{heading}</h1>
      <p className="text-lg text-slate-600 workSans">{content}</p>
    </div>
  );
}

export default AboutContent;
