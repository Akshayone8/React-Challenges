import React, { useEffect, useState } from "react";

const InputSearch = () => {
  const [userData, setUserData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getUserData();
  }, [text]);

  const getUserData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    setUserData(json);
  };
  return (
    <div className="flex flex-col  items-center border-spacing-2 border w-[400px] h-auto my-8 mx-auto rounded-3xl">
      <h1 className="text-3xl my-2 text-center"> Search Filters 🔎</h1>
      <input
        type="text"
        placeholder="Search Names"
        className="border m-10 p-1 rounded-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ul className="m-10">
        {userData
          .filter((users) => users.name.includes(text))
          .map((users) => {
            return (
              <li key={users.id}>
                <span>{users.id}</span>.{users.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default InputSearch;
