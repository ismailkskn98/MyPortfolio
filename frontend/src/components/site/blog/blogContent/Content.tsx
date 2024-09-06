import React from "react";
import parse from "html-react-parser";

type ContentProps = {
  description: string;
};

const Content: React.FC<ContentProps> = ({ description }) => {
  return (
    <article className="article-u">
      <div>{parse(description)}</div>
    </article>
  );
};

export default Content;