import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../reducers/postsSlice';

import { ModalContainer, Modal } from './DeleteModal.styles';
import { DeleteButton, CancelButton } from '../../shared';

const DeleteModal = ({ isShowing, setModal, postId }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const onConfirmDeleteClicked = async () => {
    await dispatch(deletePost(postId));

    history.push('/');
  };

  const onCancelClicked = () => {
    setModal(!isShowing);
  };

  return (
    <ModalContainer isShowing={isShowing}>
      <Modal>
        <h3>Are you sure you wanna delete this post?</h3>
        <span>This action is irreversible</span>
        <div>
          <DeleteButton type="button" onClick={onConfirmDeleteClicked}>
            Yes, delete this post 🗑
          </DeleteButton>
          <CancelButton onClick={onCancelClicked}>No, my bad 😅</CancelButton>
        </div>
      </Modal>
    </ModalContainer>
  );
};

DeleteModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
};

export default DeleteModal;
