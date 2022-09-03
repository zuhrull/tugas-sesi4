import React from "react";

const RepoItem = ({title, desc, tag, status}) => {
  return (
    <div className="repo-item__content">
      <p className="repo-item__title">{title}</p>
      <p className="repo-item__desc">{desc}</p>
      <p className="repo-item__tag">{tag}</p>
      <button className="repo-item__status">{status}</button>
    </div>
  );
}

export default RepoItem;