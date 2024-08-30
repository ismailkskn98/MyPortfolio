import { Editor } from "@tiptap/react";
import React from "react";
import { GrRedo, GrUndo } from "react-icons/gr";
import { LuBold, LuCode, LuHeading2, LuHeading3, LuHeading4, LuItalic, LuList, LuListOrdered, LuQuote, LuStrikethrough, LuUnderline } from "react-icons/lu";
import { TfiParagraph } from "react-icons/tfi";

type ToolbarProps = {
  content: string;
  editor: Editor | null;
};

type ToolbarItem = {
  icon: React.ElementType | string;
  tooltip: string;
  action: () => void;
  isActive: string | [string, { [key: string]: number | string }];
};

const Toolbar: React.FC<ToolbarProps> = ({ content, editor }) => {
  if (!editor) {
    return null;
  }

  const toolbarItems: ToolbarItem[] = [
    {
      icon: GrUndo,
      tooltip: "Geri Al",
      action: () => editor.chain().focus().undo().run(),
      isActive: "undo",
    },
    {
      icon: GrRedo,
      tooltip: "İleri Al",
      action: () => editor.chain().focus().redo().run(),
      isActive: "redo",
    },
    {
      icon: LuHeading2,
      tooltip: "Başlık 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: ["heading", { level: 2 }],
    },
    {
      icon: LuHeading3,
      tooltip: "Başlık 3",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: ["heading", { level: 3 }],
    },
    {
      icon: LuHeading4,
      tooltip: "Başlık 4",
      action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: ["heading", { level: 4 }],
    },
    {
      icon: LuBold,
      tooltip: "Kalın",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: "bold",
    },
    {
      icon: LuItalic,
      tooltip: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: "italic",
    },
    {
      icon: LuUnderline,
      tooltip: "Altı Çizili",
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: "underline",
    },
    {
      icon: LuStrikethrough,
      tooltip: "Üstü Çizili",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: "strike",
    },
    {
      icon: LuList,
      tooltip: "Nokta Listesi",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: "bulletList",
    },
    {
      icon: LuListOrdered,
      tooltip: "Numara Listesi",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: "orderedList",
    },
    {
      icon: LuQuote,
      tooltip: "Alıntı",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: "blockquote",
    },
    {
      icon: LuCode,
      tooltip: "Kod Bloğu",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: "codeBlock",
    },
    {
      icon: TfiParagraph,
      tooltip: "Paragraf",
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: "paragraph",
    },
    {
      icon: "Brand1",
      tooltip: "Brand1 Color",
      action: () => editor.chain().focus().setColor("#12F7D6").run(),
      isActive: ["textStyle", { color: "#12F7D6" }],
    },
    {
      icon: "Brand2",
      tooltip: "Brand2 Color",
      action: () => editor.chain().focus().setColor("#98FAEC").run(),
      isActive: ["textStyle", { color: "#98FAEC" }],
    },
  ];

  return (
    <section id="buttons" className="w-full flex items-center gap-2 p-2 sticky top-0 bg-slate-200 z-10">
      {toolbarItems.map((item: ToolbarItem, i) => {
        const isActive: boolean = Array.isArray(item.isActive) ? editor.isActive(item.isActive[0], item.isActive[1]) : editor.isActive(item.isActive);
        const icon = typeof item.icon === "string" ? item.icon : <item.icon className="w-6 h-6" />;
        return (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              return item.action();
            }}
            className={`${isActive ? "bg-BG1 text-Brand1" : "bg-BG2 text-White"} border-none outline-none px-2 py-1 rounded-sm cursor-pointer hover:bg-gray-400`}
          >
            {icon}
          </button>
        );
      })}
      <input
        type="color"
        onInput={(event) => {
          const target = event.target as HTMLInputElement;
          editor.chain().focus().setColor(target.value).run();
        }}
      />
    </section>
  );
};

export default Toolbar;
