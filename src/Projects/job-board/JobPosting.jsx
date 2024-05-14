import React from "react";

const JobPosting = ({ url, title, by, time }) => {
  const formattedFate = new Date(time * 1000).toLocaleString;
  return (
    <div className="post" role="listItem">
      <h2 className="post_title">
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className={url ? "" : "inactive-link"}
        >
          {title}
        </a>
      </h2>
      <span className="post_metadata">
        By{by} - {formattedFate}
      </span>
    </div>
  );
};

export default JobPosting;
