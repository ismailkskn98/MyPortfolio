import React from "react";

type Props = {
  createdAt: string;
  author: string;
  tag: string;
};

const Info: React.FC<Props> = ({ createdAt, author, tag }) => {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const setMonth = month < 10 ? `0${month}` : month;
  const day = date.getDate();
  return (
    <div id="label" className="flex flex-col md:items-center md:flex-row gap-6 text-White mt-2">
      <div className="flex items-center justify-center flex-nowrap bg-Grey rounded-2xl px-2 py-1 Label-u-l h-min w-min">
        <p className="w-full min-w-[97px]">{tag}</p>
      </div>
      <div className="flex items-center gap-6">
        <span className="Label-u-l flex items-center gap-2">
          <span className="Label-u-m">Text </span>
          <span>{author}</span>
        </span>
        <span className="Label-u-l flex items-center gap-2">
          <span className="Label-u-m">Date </span>
          <span>
            {day}/{setMonth}/{year}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Info;
