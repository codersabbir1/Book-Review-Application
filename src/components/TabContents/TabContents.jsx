/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BookCard from "../BookCard/BookCard";
import { getReadList, getWishList } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";

function TabContents() {
  const [tabIndex, setTabIndex] = useState(0);

  const [readBooks, setReadBooks] = useState([]);
  const storedId = getReadList();
  const [wishedBooks, setWishedBooks] = useState([]);
  const wishlistStoredId = getWishList();

  const data = useLoaderData();

  useEffect(() => {
    const uniqueIds = Array.from(new Set(storedId));
    const newReadBooks = uniqueIds
      .map((bookId) => data.find((item) => item.id === bookId))
      .filter(Boolean);
    setReadBooks(newReadBooks);
  }, [data]);

  useEffect(() => {
    const uniqueIds = Array.from(new Set(wishlistStoredId));
    const newWishBooks = uniqueIds
      .map((bookId) => data.find((item) => item.id === bookId))
      .filter(Boolean);
    setWishedBooks(newWishBooks);
  }, [data]);

  const dataUnavailable = (
    <div className="text-center font-bold text-3xl py-8 text-orange-600">
      <h1>No data Available</h1>
    </div>
  );

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel>
        <div className="py-5">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 w-full">
              {readBooks.length > 0
                ? readBooks.map((item) => (
                    <BookCard book={item} key={item.id} />
                  ))
                : dataUnavailable}
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="py-5">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 w-full">
              {wishedBooks.length > 0
                ? wishedBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))
                : dataUnavailable}
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default TabContents;
