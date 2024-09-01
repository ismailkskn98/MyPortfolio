"use client";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Paragraph from "@tiptap/extension-paragraph";
import FontFamily from "@tiptap/extension-font-family";
import Document from "@tiptap/extension-document";

type TiptapProps = {
  initialContent: string;
  onSave: (newContent: string) => void;
};

const Tiptap: React.FC<TiptapProps> = ({ initialContent, onSave }) => {
  const [content, setContent] = useState(initialContent);

  const editor = useEditor({
    extensions: [Document, StarterKit, Underline, Blockquote, TextStyle, Color, Paragraph, FontFamily],
    content: content,
    onUpdate: ({ editor }: { editor: Editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const handleSave = () => {
    onSave(content);
  };

  return (
    <div className="flex flex-col gap-1">
      <Toolbar content={content} editor={editor} />
      <EditorContent editor={editor as Editor | null} className="tiptap border-[3px] border-solid border-BG2 outline-none rounded mb-3 px-10 py-4" />
      <button onClick={handleSave} className="self-center mt-2 px-4 py-2 rounded border-none outline-none bg-BG2 text-white font-semibold hover:bg-BG1 cursor-pointer">
        Kaydet
      </button>
    </div>
  );
};

export default Tiptap;
