import { useContext } from "react";
import { Modal } from "./ModalContext";
import StyledPostModal, { PostForm } from "./styled/PostModal.styled";
import useForm from "./useForm";

const PostModal = () => {
  const [formValues, setForm] = useForm({ post: "" });
  const { togglePostModal } = useContext(Modal);
  return (
    <StyledPostModal onClick={togglePostModal}>
      <PostForm>
        <h1>New Post</h1>
        <textarea
          name="post"
          value={formValues.post}
          onChange={setForm}
          maxLength="255"
        />
        <sub>Maximum: 255 characters</sub>
      </PostForm>
    </StyledPostModal>
  );
};

export default PostModal;
