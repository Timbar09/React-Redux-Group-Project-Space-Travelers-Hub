import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { MdFactCheck as AcceptIcon } from 'react-icons/md';
import { CgClose as CloseIcon } from 'react-icons/cg';

import { joinLeaveToggle } from '../redux/missions/missionsSlice';

import Button from './Button';

import styles from './Modal.module.css';

/**
 *
 * @param {string} modalId - The unique identifier of the modal.
 * @param {string} title - The title of the modal.
 * @param {elementType} Content - The content Component of the modal.
 * @param {string} itemId - The unique identifier of the item (If any).
 * @param {boolean} blank - The status of the modal content (No header and footer if true).
 * @param {string} size - The size of the modal (modal-xl, modal-lg, modal-sm). modal-md is default.
 *
 * @returns {JSX.Element} Rendered Modal component.
 */

function Modal({ modalId, title, Content, itemId, blank, size }) {
  const dispatch = useDispatch();

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby={`${modalId}Label`}
      aria-hidden="true"
    >
      <div className={`modal-dialog ${size}`}>
        {blank ? (
          <div className={`${styles.modal} modal-content`}>
            <Content itemId={itemId} title={title} />
          </div>
        ) : (
          <div className={`${styles.modal} modal-content`}>
            <div className={`${styles.header} modal-header d-flex justify-content-between`}>
              <h1 className="modal-title fs-5" id={`${modalId}Label`}>
                {title}
              </h1>

              <Button type="tertiary" dataBsDismiss="modal" icon={<CloseIcon />} />
            </div>

            <div className={`${styles.modalBody} modal-body`}>
              <Content />
            </div>

            <div className={`${styles.footer} modal-footer`}>
              <Button
                type="Primary"
                title="Accept and Join Mission"
                dataBsDismiss="modal"
                handleClick={() => dispatch(joinLeaveToggle(itemId))}
                icon={<AcceptIcon />}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  Content: PropTypes.elementType.isRequired,
  itemId: PropTypes.string,
  blank: PropTypes.bool,
  size: PropTypes.string,
};

Modal.defaultProps = {
  itemId: null,
  blank: false,
  size: '',
};

export default Modal;
