import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import CreateReviewContainer from '../review/create_review_container'
import UpdateReviewContainer from '../review/update_review_container'

const mSTP = state => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

function Modal({ modal, closeModal}) {
    if (!modal) {
        return null
    }

    let component
    switch (modal.type) {
        case 'createReview':
            component = <CreateReviewContainer />
            break
        case 'updateReview':
            component = <UpdateReviewContainer review={modal.review} />
            break
        default:
            return null
    }
    
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

export default connect(mSTP, mDTP)(Modal)