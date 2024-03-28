import { useLoaderData } from "react-router-dom";
import AboutContent from "../../components/AboutContent/AboutContent";

function About() {
  const data = useLoaderData();

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-8 bg-slate-200 rounded-lg workSans">
          <h1 className="text-3xl text-center  font-bold">Welcome to Our Book Page</h1>
        </div>

        {data.map((content) => (
          <AboutContent key={content.id} data={content} />
        ))}
      </div>
    </div>
  );
}

export default About;
