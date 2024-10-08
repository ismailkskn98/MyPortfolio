"use client";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import { useField } from "formik";
import Toolbar from "../tiptap/Toolbar";

type TiptapProps = {
  name: string;
};

const Tiptap: React.FC<TiptapProps> = ({ name }) => {
  const [field, , helpers] = useField(name);
  const { value } = field;
  const { setValue } = helpers;

  const editor = useEditor({
    extensions: [StarterKit, Underline, TextStyle, Color, FontFamily],
    content: value || "",
    onUpdate: ({ editor }) => {
      setValue(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && editor.getHTML() !== value) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div className="flex flex-col gap-1">
      <Toolbar content={value} editor={editor} />
      <EditorContent editor={editor as Editor | null} className="w-full min-h-14 mb-3 px-10 py-4 rounded border-[3px] border-solid border-gray-600 outline-none bg-BG1" />
    </div>
  );
};

export default Tiptap;
