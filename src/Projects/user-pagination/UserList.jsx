import React, { useEffect, useState } from "react";

const UserList = () => {
  const [getInfo, setGetInfo] = useState([]);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  let limitUser = 10;

  const fetchUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${
        page * limitUser
      }&_limit=${limitUser}`
    );
    const data = await response.json();
    setIsLastPage(data.length < limitUser);
    setGetInfo(data);
  };

  useEffect(() => {
    fetchUser();
  }, [page]);

  const previousPage = () => {
    setPage(page > 0 ? page - 1 : 0);
  };
  const nextPage = () => {
    if (!isLastPage) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-blue-500">User List-</h1>
      {isLastPage ? (
        <h1 className="text-3xl">user List completed</h1>
      ) : (
        getInfo.map((item, i) => <li key={i}>{item.title}</li>)
      )}
      <button
        className="m-20 border p-3 border-blue-500 rounded-lg"
        onClick={previousPage}
      >
        prev
      </button>
      <button
        className="m-20 border p-3 border-blue-500 rounded-lg"
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default UserList;
