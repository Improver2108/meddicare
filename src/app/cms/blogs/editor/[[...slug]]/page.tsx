"use client";
import Editor from "../editor";

type TEditorPageProp = {
  params: {
    slug?: string[];
  };
};

const EditorPage = ({ params: { slug } }: TEditorPageProp) => {
  return <Editor id={slug ? Number(slug[0]) : undefined} />;
};
export default EditorPage;
