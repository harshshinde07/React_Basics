import React, { Component } from "react";
// Stateless Functional Cpmponent

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand mb-0 h1" href="#">
        Navbar{" "}
        <span className="bage bage-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand mb-0 h1" href="#">
//           Navbar{" "}
//           <span className="bage bage-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
