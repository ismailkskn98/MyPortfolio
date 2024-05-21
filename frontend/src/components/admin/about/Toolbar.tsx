import { Editor } from "@tiptap/react";
import React from "react";
import { BiBold, BiItalic } from "react-icons/bi";

type ToolbarProps = {
  content: string;
  editor: Editor | null;
};

const Toolbar: React.FC<ToolbarProps> = ({ content, editor }) => {
  if (!editor) {
    return null;
  }

  const handleBoldClick = () => {
    editor.chain().focus().toggleBold().run();
  };

  const handleItalicClick = () => {
    editor.chain().focus().toggleItalic().run();
  };

  return (
    <section id="buttons" className="flex items-center gap-2 mb-1">
      <button
        onClick={handleBoldClick}
        className={`${
          editor.isActive("bold") && "bg-red-600 text-white"
        } border-none outline-none px-2 py-1`}
      >
        <BiBold className="w-5 h-5" />
      </button>
      <button
        onClick={handleItalicClick}
        className={`${
          editor.isActive("italic") && "bg-red-600 text-white"
        } border-none outline-none px-2 py-1`}
      >
        <BiItalic className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Toolbar;
