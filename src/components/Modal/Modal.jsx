import "./Modal.css";
import PropTypes from "prop-types";
// export default function Modal({children}) {
//   return (
//     <div className='modal_container'>
//      {children}
//     </div>
//   )
// }

import React from "react";

export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal_container">
        <p>{this.props.message}</p>
        {this.props.children}
      </div>
    );
  }
}
Modal.defaultProps = {
  message: "شما موفق شدید",
};
Modal.propTypes = {
  message: PropTypes.string,
};
