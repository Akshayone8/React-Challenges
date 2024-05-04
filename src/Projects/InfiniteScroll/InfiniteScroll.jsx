import React, { useState, useEffect } from "react";
import "./InfiniteScroll.css";

function InfiniteScroll() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      )
        return;
      if (hasMore) {
        fetchPosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const data = await response.json();
      setPosts([...posts, ...data]);
      setPage(page + 1);
      if (data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
    setLoading(false);
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <img
            src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            alt={index}
            style={{ width: "100px", height: "100px" }}
          />
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {!loading && hasMore && <p>Scroll down for more</p>}
      {!hasMore && <p>No more posts</p>}
    </div>
  );
}

export default InfiniteScroll;

// window.innerHeight first it will take the inner height and this height will be constant and wont s=change even if u  scroll refer below link
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight/firefoxinnervsouterheight2.png

//document.documentElement.scrollTop so this property basicaly tells u where the user is when the user scrolls it will calculates from top till the were the user has scrolled.
// document.documentElement.offsetHeight so this property calculates the height of total cards soppose in the above example we are trying to fetch 10 cards on first loads so total height of 10 cards are 1540
//in nutshell what are we trying to here

//968+20 !== 1540
// here 20 is the user has scrolled till her
// when left value becomes 1540 it returns
