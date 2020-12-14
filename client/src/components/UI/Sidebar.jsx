import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../_actions/authAction";
import PropTypes from "prop-types";
import jQuery from "jquery";

class Sidebar extends Component {
  onLogoutHandler(e) {
    e.preventDefault();
    this.props.logout();
  }

  componentDidMount() {}
  render() {
    const { isAuthenticated, user } = this.props.auth;

    jQuery(function ($) {
      $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
          $(".sidebar-dropdown").removeClass("active");
          $(this).parent().removeClass("active");
        } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this).next(".sidebar-submenu").slideDown(200);
          $(this).parent().addClass("active");
        }
      });
      jQuery(function ($) {
        $("#close-sidebar").click(function () {
          $(".page-wrapper").removeClass("toggled");
        });
        $("#show-sidebar").click(function () {
          $(".page-wrapper").addClass("toggled");
        });
      });
    });

    const authLinks = (
      <Fragment>
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
          <Link class="navbar-brand " to="/">
            Bizvizta
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01"></div>
          <span class="navbar-text">Hi, {user && user.name}</span>
          <Link
            className="navbar-text nav-link"
            onClick={this.onLogoutHandler.bind(this)}
          >
            <i class="fas fa-sign-out-alt"></i> Logout
          </Link>
        </nav>
        <div class="page-wrapper chiller-theme toggled">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
          </a>
          <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content ">
              <div class="sidebar-brand float-right">
                <div id="close-sidebar">
                  <i class="fas fa-times-circle"></i>
                </div>
              </div>

              <div class="sidebar-menu">
                <ul>
                  <li class="header-menu">
                    <span>Globus Labs</span>
                  </li>
                  <li class="">
                    <Link to="/dashboard">
                      <i class="fa fa-tachometer-alt"></i>
                      <span>Dashboard</span>
                    </Link>
                  </li>

                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                      <span>Purchase</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/purchase-enquiry">Purchase Enquiry</Link>
                        </li>
                        <li>
                          <Link to="/purchase-quotation">
                            Purchase Quotation
                          </Link>
                        </li>

                        <li>
                          <Link to="/purchase-order">Purchase Order</Link>
                        </li>
                        <li>
                          <Link to="/goods-receipt">Goods Receipt</Link>
                        </li>
                        <li>
                          <Link to="/purchase-invoice">Purchase Invoice</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="fa  fa-dollar-sign"></i>
                      <span>Sales</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/sales-enquiry">Sales Enquiry</Link>
                        </li>
                        <li>
                          <Link to="/sales-quotation">Sales Quotation</Link>
                        </li>

                        <li>
                          <Link to="/sales-order">Sales Order</Link>
                        </li>
                        <li>
                          <Link to="/sales-invoice">Sales Invoice</Link>
                        </li>
                        <li>
                          <Link to="/delivery">Delivery</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="far fa-handshake"></i>
                      <span>Business Partner</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/business-partners">Business Partners</Link>
                        </li>
                        <li>
                          <Link to="/create-bp">Create BP</Link>
                        </li>
                        <li>
                          <Link to="/bp-groups">BP Group</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="fa fa-box-open"></i>
                      <span>Inventory</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/items">Items</Link>
                        </li>
                        <li>
                          <Link to="/create-item">Create Item</Link>
                        </li>
                        <li>
                          <Link to="/item-groups">Item Group</Link>
                        </li>
                        <li>
                          <Link to="/inventory">Inventory</Link>
                        </li>
                        <li>
                          <Link to="/warehouses">Warehouse</Link>
                        </li>
                        <li>
                          <Link to="/uoms">UoM</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i class="fa fa-university"></i>
                      <span>Banking</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/employees">Receive Payment</Link>
                        </li>
                        <li>
                          <Link to="/create-employee">Deposit</Link>
                        </li>
                        <li>
                          <Link to="/attendance">Send Payment</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="far fa-user"></i>
                      <span>Human Resource (HR)</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/employees">Employees</Link>
                        </li>
                        <li>
                          <Link to="/create-employee">Create Employee</Link>
                        </li>
                        <li>
                          <Link to="/attendance">Attendance</Link>
                        </li>
                        <li>
                          <Link to="/payroll">Payroll</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="fa fa-chart-line"></i>
                      <span>Reports</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/sales-order">Sales Report</Link>
                        </li>
                        <li>
                          <Link to="/sales-invoice">Purcase Report</Link>
                        </li>
                        <li>
                          <Link to="/sales-invoice">Profit & Loss Report</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-cog"></i>
                      <span>Settings</span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-question-circle"></i>
                      <span>Help & Support</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sidebar-footer">
              <a href="#">
                <i class="fa fa-bell"></i>
                <span class="badge badge-pill badge-warning notification">
                  3
                </span>
              </a>
              <a href="#">
                <i class="fa fa-envelope"></i>
                <span class="badge badge-pill badge-success notification">
                  7
                </span>
              </a>
              <a href="#">
                <i class="fa fa-cog"></i>
                <span class="badge-sonar"></span>
              </a>
              <a
                href=""
                onClick={this.onLogoutHandler.bind(this)}
                className="tooltip-test"
                data-toggle="tooltip"
                data-placement="top"
                title="Logout"
              >
                <i class="fa fa-power-off"></i>
              </a>
            </div>
          </nav>{" "}
          <main class="page-content">{this.props.children}</main>
        </div>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
          <Link class="navbar-brand" to="/">
            Bizvizta
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Body Content */}
        <main className="page-content">
          <div className="">{this.props.children}</div>
        </main>
      </Fragment>
    );

    return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
  }
}

Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Sidebar);
