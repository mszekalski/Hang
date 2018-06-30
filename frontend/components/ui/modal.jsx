import React from "react";
import { connect } from "react-redux";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render() {
    if (this.props.component) {
      return (
        <div className="modal-container" onClick={this.stopPropagation}>
          {this.props.component}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    component: state.ui.modals.component
  };
};

export default connect(
  mapStateToProps,
  null
)(Modal);
