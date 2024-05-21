"use client";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";

type TiptapProps = {
  initialContent: string;
  onSave: (newContent: string) => void;
};

const Tiptap: React.FC<TiptapProps> = ({ initialContent, onSave }) => {
  const [content, setContent] = useState(initialContent);

  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
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
    <div>
      <Toolbar content={content} editor={editor} />
      <EditorContent
        editor={editor as Editor | null}
        className="border-2 border-solid border-black outline-none rounded mb-3 px-3 py-2"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Tiptap;
