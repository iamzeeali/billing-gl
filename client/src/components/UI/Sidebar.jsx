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
        <nav class='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
          <Link class='navbar-brand lead' to='/'>
            bigbiz{" "}
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarColor01'
            aria-controls='navbarColor01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarColor01'>
            <ul class='navbar-nav mr-auto'>
              <li class='nav-item active'>
                <Link to='/dashboard' className='nav-link' title='Dashboard'>
                  <i className='fa fa-tachometer-alt'></i>
                </Link>
              </li>

              <li className='nav-item  active dropdown'>
                <Link
                  className='nav-link'
                  data-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  title='Purchase'
                >
                  <i className='fa fa-shopping-cart'></i>
                </Link>
                <div className='dropdown-menu'>
                  <li>
                    <Link to='/purchase-quotation' className='dropdown-item'>
                      Purchase Quotation
                    </Link>
                  </li>

                  <li>
                    <Link to='/purchase-order' className='dropdown-item'>
                      Purchase Order
                    </Link>
                  </li>
                  <li>
                    <Link to='/goods-receipt' className='dropdown-item'>
                      Goods Receipt
                    </Link>
                  </li>
                  <li>
                    <Link to='/goods-return' className='dropdown-item'>
                      Goods Return
                    </Link>
                  </li>
                  <li>
                    <Link to='/purchase-invoice' className='dropdown-item'>
                      Purchase Invoice
                    </Link>
                  </li>
                </div>
              </li>

              <li className='nav-item  active dropdown'>
                <Link
                  className='nav-link '
                  data-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  title='Sales'
                >
                  <i className='fa  fa-dollar-sign'></i>
                </Link>
                <div className='dropdown-menu'>
                  <li>
                    <Link to='/sales-enquiry' className='dropdown-item'>
                      Sales Enquiry
                    </Link>
                  </li>
                  <li>
                    <Link to='/sales-quotation' className='dropdown-item'>
                      Sales Quotation
                    </Link>
                  </li>

                  <li>
                    <Link to='/sales-order' className='dropdown-item'>
                      Sales Order
                    </Link>
                  </li>
                  <li>
                    <Link to='/delivery' className='dropdown-item'>
                      Delivery
                    </Link>
                  </li>
                  <li>
                    <Link to='/return' className='dropdown-item'>
                      Return
                    </Link>
                  </li>
                  <li>
                    <Link to='/sales-invoice' className='dropdown-item'>
                      Sales Invoice
                    </Link>
                  </li>
                </div>
              </li>

              <li className='nav-item  active dropdown'>
                <Link
                  className='nav-link'
                  data-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  title='Customer'
                >
                  <i className='far fa-handshake'></i>
                </Link>
                <div className='dropdown-menu'>
                  <li>
                    <Link to='/customers' className='dropdown-item'>
                      Customers
                    </Link>
                  </li>
                  <li>
                    <Link to='/create-customer' className='dropdown-item'>
                      Create Customer
                    </Link>
                  </li>
                  <li>
                    <Link to='/customer-groups' className='dropdown-item'>
                      Customer Group
                    </Link>
                  </li>
                </div>
              </li>

              <li className='nav-item  active dropdown'>
                <Link
                  className='nav-link'
                  data-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  title='Supplier'
                >
                  <i className='fa fa-users'></i>
                </Link>
                <div className='dropdown-menu'>
                  <li>
                    <Link to='/suppliers' className='dropdown-item'>
                      Suppliers
                    </Link>
                  </li>
                  <li>
                    <Link to='/create-supplier' className='dropdown-item'>
                      Create Supplier
                    </Link>
                  </li>
                  <li>
                    <Link to='/supplier-groups' className='dropdown-item'>
                      Supplier Group
                    </Link>
                  </li>
                </div>
              </li>

              <li className='nav-item  active dropdown'>
                <Link
                  className='nav-link'
                  data-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  title='Inventory'
                >
                  <i className='fa fa-box-open'></i>
                </Link>
                <div className='dropdown-menu'>
                  <li>
                    <Link to='/items' className='dropdown-item'>
                      Items
                    </Link>
                  </li>
                  <li>
                    <Link to='/create-item' className='dropdown-item'>
                      Create Item
                    </Link>
                  </li>
                  <li>
                    <Link to='/item-groups' className='dropdown-item'>
                      Item Group
                    </Link>
                  </li>
                  <li>
                    <Link to='/inventory' className='dropdown-item'>
                      Inventory
                    </Link>
                  </li>
                  <li>
                    <Link to='/warehouses' className='dropdown-item'>
                      Warehouse
                    </Link>
                  </li>
                  <li>
                    <Link to='/uoms' className='dropdown-item'>
                      UoM
                    </Link>
                  </li>
                </div>
              </li>

              <li className='nav-item  active dropdown'>
                <Link
                  className='nav-link'
                  data-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  title='Banking'
                >
                  <i className='fa fa-university'></i>
                </Link>
                <div className='dropdown-menu'>
                  <li>
                    <Link to='/employees' className='dropdown-item'>
                      Receive Payment
                    </Link>
                  </li>
                  <li>
                    <Link to='/create-employee' className='dropdown-item'>
                      Deposit
                    </Link>
                  </li>
                  <li>
                    <Link to='/attendance' className='dropdown-item'>
                      Send Payment
                    </Link>
                  </li>
                </div>
              </li>

              <li className='nav-item  active dropdown'>
                <Link
                  className='nav-link'
                  data-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  title='HR'
                >
                  <i className='far fa-user'></i>
                </Link>
                <div className='dropdown-menu'>
                  <li>
                    <Link to='/employees' className='dropdown-item'>
                      Employees
                    </Link>
                  </li>
                  <li>
                    <Link to='/create-employee' className='dropdown-item'>
                      Create Employee
                    </Link>
                  </li>
                  <li>
                    <Link to='/attendance' className='dropdown-item'>
                      Attendance
                    </Link>
                  </li>
                  <li>
                    <Link to='/payroll' className='dropdown-item'>
                      Payroll
                    </Link>
                  </li>
                </div>
              </li>

              <li className='nav-item  active dropdown'>
                <Link
                  className='nav-link'
                  data-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  title='Reports'
                >
                  <i className='fa fa-chart-line'></i>
                </Link>
                <div className='dropdown-menu'>
                  <li>
                    <Link to='/sales-order' className='dropdown-item'>
                      Sales Report
                    </Link>
                  </li>
                  <li>
                    <Link to='/sales-invoice' className='dropdown-item'>
                      Purcase Report
                    </Link>
                  </li>
                  <li>
                    <Link to='/sales-invoice' className='dropdown-item'>
                      Profit & Loss Report
                    </Link>
                  </li>
                </div>
              </li>

              <li class='nav-item active'>
                <Link to='/settings' className='nav-link' title='Settings'>
                  <i className='fa fa-cog'></i>
                </Link>
              </li>
            </ul>

            <div className='form-inline my-2 my-lg-0'>
              <span className='navbar-text'>Hi, {user && user.name}</span>

              <Link
                className='navbar-text nav-link'
                onClick={this.onLogoutHandler.bind(this)}
              >
                <i className='fas fa-sign-out-alt'></i> Logout
              </Link>
            </div>
          </div>
        </nav>
        <div className='page-wrapper chiller-theme toggled'>
          <a id='show-sidebar' className='btn btn-sm btn-dark' href='#'>
            <i className='fas fa-bars'></i>
          </a>
          <nav id='sidebar' className='sidebar-wrapper'>
            <div className='sidebar-content '>
              <div className='sidebar-brand float-right'>
                <div id='close-sidebar'>
                  <i className='fas fa-times-circle'></i>
                </div>
              </div>

              <div className='sidebar-menu'>
                <ul>
                  <li className='header-menu p-3 text-light'>
                    <i className='fa fa-circle text-success'></i>{" "}
                    {user && user.name}, Globus Labs <br />{" "}
                  </li>
                  <li className='mt-4'>
                    <Link to='/dashboard'>
                      <i className='fa fa-tachometer-alt'></i>
                      <span>Dashboard</span>
                    </Link>
                  </li>

                  <li className='sidebar-dropdown'>
                    <a href='#'>
                      <i className='fa fa-shopping-cart'></i>
                      <span>Purchase</span>
                    </a>
                    <div className='sidebar-submenu'>
                      <ul>
                        <li>
                          <Link to='/purchase-quotation'>
                            Purchase Quotation
                          </Link>
                        </li>

                        <li>
                          <Link to='/purchase-order'>Purchase Order</Link>
                        </li>
                        <li>
                          <Link to='/goods-receipt'>Goods Receipt</Link>
                        </li>
                        <li>
                          <Link to='/goods-return'>Goods Return</Link>
                        </li>
                        <li>
                          <Link to='/purchase-invoice'>Purchase Invoice</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className='sidebar-dropdown'>
                    <a href='#'>
                      <i className='fa  fa-dollar-sign'></i>
                      <span>Sales</span>
                    </a>
                    <div className='sidebar-submenu'>
                      <ul>
                        <li>
                          <Link to='/sales-enquiry'>Sales Enquiry</Link>
                        </li>
                        <li>
                          <Link to='/sales-quotation'>Sales Quotation</Link>
                        </li>

                        <li>
                          <Link to='/sales-order'>Sales Order</Link>
                        </li>
                        <li>
                          <Link to='/delivery'>Delivery</Link>
                        </li>
                        <li>
                          <Link to='/return'>Return</Link>
                        </li>
                        <li>
                          <Link to='/sales-invoice'>Sales Invoice</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className='sidebar-dropdown'>
                    <a href='#'>
                      <i className='far fa-handshake'></i>
                      <span>Customer</span>
                    </a>
                    <div className='sidebar-submenu'>
                      <ul>
                        <li>
                          <Link to='/customers'>Customers</Link>
                        </li>
                        <li>
                          <Link to='/create-customer'>Create Customer</Link>
                        </li>
                        <li>
                          <Link to='/customer-groups'>Customer Group</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className='sidebar-dropdown'>
                    <a href='#'>
                      <i className='fa fa-users'></i>
                      <span>Supplier/Vendor</span>
                    </a>
                    <div className='sidebar-submenu'>
                      <ul>
                        <li>
                          <Link to='/suppliers'>Suppliers</Link>
                        </li>
                        <li>
                          <Link to='/create-supplier'>Create Supplier</Link>
                        </li>
                        <li>
                          <Link to='/supplier-groups'>Supplier Group</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className='sidebar-dropdown'>
                    <a href='#'>
                      <i className='fa fa-box-open'></i>
                      <span>Inventory</span>
                    </a>
                    <div className='sidebar-submenu'>
                      <ul>
                        <li>
                          <Link to='/items'>Items</Link>
                        </li>
                        <li>
                          <Link to='/create-item'>Create Item</Link>
                        </li>
                        <li>
                          <Link to='/item-groups'>Item Group</Link>
                        </li>
                        <li>
                          <Link to='/inventory'>Inventory</Link>
                        </li>
                        <li>
                          <Link to='/warehouses'>Warehouse</Link>
                        </li>
                        <li>
                          <Link to='/uoms'>UoM</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className='sidebar-dropdown'>
                    <a href='#'>
                      <i className='fa fa-university'></i>
                      <span>Banking</span>
                    </a>
                    <div className='sidebar-submenu'>
                      <ul>
                        <li>
                          <Link to='/employees'>Receive Payment</Link>
                        </li>
                        <li>
                          <Link to='/create-employee'>Deposit</Link>
                        </li>
                        <li>
                          <Link to='/attendance'>Send Payment</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className='sidebar-dropdown'>
                    <a href='#'>
                      <i className='far fa-user'></i>
                      <span>Human Resource (HR)</span>
                    </a>
                    <div className='sidebar-submenu'>
                      <ul>
                        <li>
                          <Link to='/employees'>Employees</Link>
                        </li>
                        <li>
                          <Link to='/create-employee'>Create Employee</Link>
                        </li>
                        <li>
                          <Link to='/attendance'>Attendance</Link>
                        </li>
                        <li>
                          <Link to='/payroll'>Payroll</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className='sidebar-dropdown'>
                    <a href='#'>
                      <i className='fa fa-chart-line'></i>
                      <span>Reports</span>
                    </a>
                    <div className='sidebar-submenu'>
                      <ul>
                        <li>
                          <Link to='/sales-order'>Sales Report</Link>
                        </li>
                        <li>
                          <Link to='/sales-invoice'>Purcase Report</Link>
                        </li>
                        <li>
                          <Link to='/sales-invoice'>Profit & Loss Report</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a href='#'>
                      <i className='fa fa-cog'></i>
                      <span>Settings</span>
                    </a>
                  </li>

                  <li>
                    <a href='#'>
                      <i className='fa fa-question-circle'></i>
                      <span>Help & Support</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='sidebar-footer'>
              <a href='#'>
                <i className='fa fa-bell'></i>
                <span className='badge badge-pill badge-warning notification'>
                  3
                </span>
              </a>
              <a href='#'>
                <i className='fa fa-envelope'></i>
                <span className='badge badge-pill badge-success notification'>
                  7
                </span>
              </a>
              <a href='#'>
                <i className='fa fa-cog'></i>
                <span className='badge-sonar'></span>
              </a>
              <a
                href=''
                onClick={this.onLogoutHandler.bind(this)}
                className='tooltip-test'
                data-toggle='tooltip'
                data-placement='top'
                title='Logout'
              >
                <i className='fa fa-power-off'></i>
              </a>
            </div>
          </nav>{" "}
          <main className='page-content'>{this.props.children}</main>
        </div>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-primary'>
          <Link className='navbar-brand lead' to='/'>
            bigbiz{" "}
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarColor01'
            aria-controls='navbarColor01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarColor01'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  FAQ
                </a>
              </li>
            </ul>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Body Content */}
        <main className='page-content'>
          <div className=''>{this.props.children}</div>
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
