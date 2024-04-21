import { useState } from "react";
import { dataJSON } from "./data";

const SortTables = () => {
  const [sorting, setSorting] = useState(dataJSON);

  const sortByVote = () => {
    let newArr = [...dataJSON];
    setSorting(newArr.sort((a, b) => a.upVote - b.upVote));
  };

  const sortByDate = () => {
    let newArr = [...dataJSON];
    setSorting(
      newArr.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    );
  };
  return (
    <div className="flex flex-col  items-center border-spacing-2 border w-[400px] h-[300px] my-8 mx-auto rounded-3xl">
      <div>
        <h1 className="text-2xl">Sort By:</h1>

        <button
          className="bg-blue-500 py-1 px-4 rounded-full  text-white mx-2"
          onClick={sortByVote}
        >
          UpVote
        </button>
        <button
          className="bg-blue-500 py-1 px-4 rounded-full  text-white mx-2"
          onClick={sortByDate}
        >
          Date
        </button>
      </div>
      <table class="table-auto mt-5">
        <thead>
          <tr>
            <th>Brand</th>
            <th>UpVote</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {sorting.map((items, index) => {
            return (
              <tr>
                <td>{items.name}</td>
                <td>{items.upVote}</td>
                <td>{items.startDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SortTables;
