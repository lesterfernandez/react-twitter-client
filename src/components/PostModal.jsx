import { useContext, useRef } from "react";
import useForm from "../hooks/useForm";
import useSendPost from "../hooks/useSendPost";
import { Modal } from "./ModalContext";
import StyledPostModal, { PostForm } from "./styled/PostModal.styled";

const PostModal = () => {
  const [formValues, setForm, clearForm] = useForm({ post: "" });
  const { togglePostModal } = useContext(Modal);
  const modalBackground = useRef();

  const { mutate: sendPost } = useSendPost();

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

          sendPost(JSON.stringify({ post: formValues.post }));

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
