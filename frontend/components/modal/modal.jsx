import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

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
    switch (modal) {
        case 'createReview':
            // component = <CreateReviewContainer />
            break
        case 'updateReview':
            // component = <UpdateReviewContainer />
            break
        default:
            return null
    }
    
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

export default connect(mSTP, mDTP)(Modal)