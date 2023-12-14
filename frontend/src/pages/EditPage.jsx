import React from "react";
import Editor from "../component/Editor";
const EditPage = () => {
  return (
    <form>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="summary" placeholder="summary" />
      <input type="file" name="file" id="file" />
      <Editor />
      <button>Creat post</button>
    </form>
  );
};

export default EditPage;
