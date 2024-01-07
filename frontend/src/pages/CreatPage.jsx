import { useState } from "react";
import Editor from "../component/Editor";
import { Navigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_BASE_URL;

const CreatPage = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [redirect, setRedirect] = useState(false);

  const createPost = async (e) => {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", file[0]);
    e.preventDefault();
    const response = await fetch(`${baseURL}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  };
  if (redirect) {
    <Navigate to="/" />;
  }
  return (
    <form onSubmit={createPost}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="summary"
        value={summary}
        placeholder="summary"
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => setFile(e.target.files)}
      />
      <Editor value={content} onChange={setContent} />
      <button>Creat post</button>
    </form>
  );
};

export default CreatPage;
