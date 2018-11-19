import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">
              Sign In With
              <i class="fab fa-google-plus" />
            </a>
          </li>
        );

      default:
        return (
          <li>
            <a href="/api/logout">
              Signout
              <i class="fas fa-sign-out-alt" />
            </a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav className="cyan darken-3">
        <div className="nav-wrapper">
          <Link
            to={this.props.user ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Surveryfy
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
