import { useContext, useRef } from "react";
import useForm from "../hooks/useForm";
import { Modal } from "./ModalContext";
import StyledPostModal, { PostForm } from "./styled/PostModal.styled";
// import { useQuery } from "react-query";

const PostModal = () => {
  const [formValues, setForm, clearForm] = useForm({ post: "" });
  const { togglePostModal } = useContext(Modal);
  const modalBackground = useRef();
  return (
    <StyledPostModal
      ref={modalBackground}
      onClick={e => {
        if (e.target === modalBackground.current) {
          togglePostModal();
        }
      }}
    >
      <PostForm
        onSubmit={e => {
          e.preventDefault();
          if (formValues.post === "") return;

          // send post to server
          fetch(`${process.env.REACT_APP_SERVER_URL}/new_post`, {
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            method: "POST",
            body: JSON.stringify({ post: formValues.post }),
          })
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(data => {
              console.log(data.posts);
            });

          clearForm({ post: "" });
          togglePostModal();
        }}
      >
        <h1>New Post</h1>
        <textarea
          name="post"
          value={formValues.post}
          onChange={setForm}
          maxLength="255"
        />
        <sub>Characters Left: {255 - formValues.post.length}</sub>
        <button type="submit">Create Post</button>
      </PostForm>
    </StyledPostModal>
  );
};

export default PostModal;
