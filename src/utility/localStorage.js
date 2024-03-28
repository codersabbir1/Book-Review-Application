// Get Read list data // Local-Storage
const getReadList = () => {
  const storedBook = localStorage.getItem("read-list-book");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};
// Save Data on Read List  // Local-storage
const saveReadList = (id) => {
  const storedBook = getReadList();
  const exist = storedBook.find((bookId) => bookId === id);
  if (!exist) {
    storedBook.push(id);
    localStorage.setItem("read-list-book", JSON.stringify(storedBook));
  }
};
//
// Get Read list data // Local-Storage
const getWishList = () => {
  const storedWishList = localStorage.getItem("wish-list-book");
  if (storedWishList) {
    return JSON.parse(storedWishList);
  }
  return [];
};
// Save data on Wish List  // Local-storage
const saveWishList = (id) => {
  const storedWishList = getWishList();
  const exist = storedWishList.find((bookId) => bookId === id);
  if (!exist) {
    storedWishList.push(id);
    localStorage.setItem("wish-list-book", JSON.stringify(storedWishList));
  }
};
export { getReadList, saveReadList, getWishList, saveWishList };
