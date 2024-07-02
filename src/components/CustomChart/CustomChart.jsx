/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getReadList, getWishList } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function CustomChart() {
  const [readBooks, setReadBooks] = useState([]);
  const storedId = getReadList();
  const [wishedBooks, setWishedBooks] = useState([]);
  const wishlistStoredId = getWishList();

  const booksData = useLoaderData();

  useEffect(() => {
    const uniqueIds = Array.from(new Set(storedId));
    const newReadBooks = uniqueIds
      .map((bookId) => booksData.find((item) => item.id === bookId))
      .filter(Boolean);
    setReadBooks(newReadBooks);
  }, [booksData]);

  useEffect(() => {
    const uniqueIds = Array.from(new Set(wishlistStoredId));
    const newWishBooks = uniqueIds
      .map((bookId) => booksData.find((item) => item.id === bookId))
      .filter(Boolean);
    setWishedBooks(newWishBooks);
  }, [booksData]);

  const data = [
    {
      name: "Read List Book's Page",
      uv: readBooks.reduce((acc, cur) => acc + cur.pages, 0),
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Wish List Book's Page",
      uv: wishedBooks.reduce((acc, cur) => acc + cur.pages, 0),
      pv: 1398,
      amt: 2210,
    },
  ];

  return (
    <div
      className="py-20 px-5 rounded-lg bg-gray-200 w-full lg:w-[80%]"
      style={{ height: 500 }}
    >
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

CustomChart.demoUrl =
  "https://codesandbox.io/s/bar-chart-with-customized-shape-dusth";
