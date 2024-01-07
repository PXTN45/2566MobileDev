import "./App.css";
import { UserContextProvier } from "./context/UserContext";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatPage from "./pages/CreatPage";
import PostPage from "./pages/PostPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <UserContextProvier>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="create" element={<CreatPage />} />
          <Route path="post/:id" element={<PostPage />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="edit/:id" element={<EditPage />} />
        </Route>
      </Routes>
    </UserContextProvier>
  );
}

export default App;
