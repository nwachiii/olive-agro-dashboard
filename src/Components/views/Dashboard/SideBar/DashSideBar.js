import React from "react";
import { Link } from "react-router-dom";
import DemoChat from "../DemoChat/DemoChat";
import "./DashSideBar.css";

export const DashSideBar = () => {
  return (
    <div className="menu-position-side menu-side-left full-screen">
      <div className="all-wrapper solid-bg-all">
        <div className="top-bar color-scheme-bright">
          <div className="logo-w menu-size">
            <Link className="logo" to="/Dashboard">
              <div className="logo-element"></div>
              <div className="logo-label">Olive Agro</div>
            </Link>
          </div>
          <div className="fancy-selector-w">
            <div className="fancy-selector-current">
              <div className="fs-img">
                <img alt="" src="img/card1.png" />
              </div>
              <div className="fs-main-info">
                <div className="fs-name">Agro Express Platinum</div>
                <div className="fs-sub">
                  <span>Balance:</span>
                  <strong>#5,304</strong>
                </div>
              </div>
              <div className="fs-extra-info">
                <strong>5476</strong>
                <span>ending</span>
              </div>
              <div className="fs-selector-trigger">
                <i className="os-icon os-icon-arrow-down4"></i>
              </div>
            </div>
            <div className="fancy-selector-options">
              <div className="fancy-selector-option">
                <div className="fs-img">
                  <img alt="" src="img/card2.png" />
                </div>
                <div className="fs-main-info">
                  <div className="fs-name">Capital One Venture Card</div>
                  <div className="fs-sub">
                    <span>Balance:</span>
                    <strong>#5,304</strong>
                  </div>
                </div>
                <div className="fs-extra-info">
                  <strong>5476</strong>
                  <span>ending</span>
                </div>
              </div>
              <div className="fancy-selector-option active">
                <div className="fs-img">
                  <img alt="" src="img/card1.png" />
                </div>
                <div className="fs-main-info">
                  <div className="fs-name">American Express Platinum</div>
                  <div className="fs-sub">
                    <span>Balance:</span>
                    <strong>#8,274</strong>
                  </div>
                </div>
                <div className="fs-extra-info">
                  <strong>2523</strong>
                  <span>ending</span>
                </div>
              </div>
              <div className="fancy-selector-option">
                <div className="fs-img">
                  <img alt="" src="img/card3.png" />
                </div>
                <div className="fs-main-info">
                  <div className="fs-name">CitiBank Preferred Credit</div>
                  <div className="fs-sub">
                    <span>Balance:</span>
                    <strong>#1,202</strong>
                  </div>
                </div>
                <div className="fs-extra-info">
                  <strong>6345</strong>
                  <span>ending</span>
                </div>
              </div>
              <div className="fancy-selector-actions text-right">
                <Link className="btn btn-primary" to="/#">
                  <i className="os-icon os-icon-ui-22"></i>
                  <span>Add Account</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="top-menu-controls">
            <div className="element-search autosuggest-search-activator">
              <input placeholder="Start typing to search..." />
            </div>
            <div className="messages-notifications os-dropdown-trigger os-dropdown-position-left">
              <i className="os-icon os-icon-mail-14"></i>
              <div className="new-messages-count">12</div>
              <div className="os-dropdown light message-list">
                <ul>
                  <li>
                    <Link to="/#">
                      <div className="user-avatar-w">
                        <img alt="" src="img/avatar1.jpg" />
                      </div>
                      <div className="message-content">
                        <h6 className="message-from">John Mayers</h6>
                        <h6 className="message-title">Account Update</h6>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <div className="user-avatar-w">
                        <img alt="" src="img/avatar2.jpg" />
                      </div>
                      <div className="message-content">
                        <h6 className="message-from">Phil Jones</h6>
                        <h6 className="message-title">Secutiry Updates</h6>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <div className="user-avatar-w">
                        <img alt="" src="img/avatar3.jpg" />
                      </div>
                      <div className="message-content">
                        <h6 className="message-from">Bekky Simpson</h6>
                        <h6 className="message-title">Vacation Rentals</h6>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <div className="user-avatar-w">
                        <img alt="" src="img/avatar4.jpg" />
                      </div>
                      <div className="message-content">
                        <h6 className="message-from">Alice Priskon</h6>
                        <h6 className="message-title">Payment Confirmation</h6>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="top-icon top-settings os-dropdown-trigger os-dropdown-position-left">
              <i className="os-icon os-icon-ui-46"></i>
              <div className="os-dropdown">
                <div className="icon-w">
                  <i className="os-icon os-icon-ui-46"></i>
                </div>
                <ul>
                  <li>
                    <Link to="/users_profile_small">
                      <i className="os-icon os-icon-ui-49"></i>
                      <span>Profile Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/users_profile_small">
                      <i className="os-icon os-icon-grid-10"></i>
                      <span>Billing Info</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/users_profile_small">
                      <i className="os-icon os-icon-ui-44"></i>
                      <span>My Invoices</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/users_profile_small">
                      <i className="os-icon os-icon-ui-15"></i>
                      <span>Cancel Account</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="logged-user-w">
              <div className="logged-user-i">
                <div className="avatar-w">
                  <img alt="" src="img/avatar1.jpg" />
                </div>
                <div className="logged-user-menu color-style-bright">
                  <div className="logged-user-avatar-info">
                    <div className="avatar-w">
                      <img alt="" src="img/avatar1.jpg" />
                    </div>
                    <div className="logged-user-info-w">
                      <div className="logged-user-name">Ishola Babalola</div>
                      <div className="logged-user-role">Administrator</div>
                    </div>
                  </div>
                  <div className="bg-icon">
                    <i className="os-icon os-icon-wallet-loaded"></i>
                  </div>
                  <ul>
                    <li>
                      <Link to="/apps_email">
                        <i className="os-icon os-icon-mail-01"></i>
                        <span>Incoming Mail</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_big">
                        <i className="os-icon os-icon-user-male-circle2"></i>
                        <span>Profile Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small">
                        <i className="os-icon os-icon-coins-4"></i>
                        <span>Billing Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="os-icon os-icon-others-43"></i>
                        <span>Notifications</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="os-icon os-icon-signs-11"></i>
                        <span>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-with-suggestions-w">
          <div className="search-with-suggestions-modal">
            <div className="element-search">
              <input
                className="search-suggest-input"
                placeholder="Start typing to search..."
              />
              <div className="close-search-suggestions">
                <i className="os-icon os-icon-x"></i>
              </div>
            </div>
            <div className="search-suggestions-group">
              <div className="ssg-header">
                <div className="ssg-icon">
                  <div className="os-icon os-icon-box"></div>
                </div>
                <div className="ssg-name">Projects</div>
                <div className="ssg-info">24 Total</div>
              </div>
              <div className="ssg-content">
                <div className="ssg-items ssg-items-boxed">
                  <Link className="ssg-item" to="/users_profile_big">
                    <div className="item-media"></div>
                    <div className="item-name">
                      Integ<span>ration</span> with API
                    </div>
                  </Link>
                  <Link className="ssg-item" to="/users_profile_big">
                    <div className="item-media"></div>
                    <div className="item-name">
                      Deve<span>lopm</span>ent Project
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="search-suggestions-group">
              <div className="ssg-header">
                <div className="ssg-icon">
                  <div className="os-icon os-icon-users"></div>
                </div>
                <div className="ssg-name">Customers</div>
                <div className="ssg-info">12 Total</div>
              </div>
              <div className="ssg-content">
                <div className="ssg-items ssg-items-list">
                  <Link className="ssg-item" to="/users_profile_big">
                    <div className="item-media"></div>
                    <div className="item-name">
                      John Ma<span>yer</span>s
                    </div>
                  </Link>
                  <Link className="ssg-item" to="/users_profile_big">
                    <div className="item-media"></div>
                    <div className="item-name">
                      Th<span>omas</span> Mullier
                    </div>
                  </Link>
                  <Link className="ssg-item" to="/users_profile_big">
                    <div className="item-media"></div>
                    <div className="item-name">
                      Kim C<span>olli</span>ns
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="search-suggestions-group">
              <div className="ssg-header">
                <div className="ssg-icon">
                  <div className="os-icon os-icon-folder"></div>
                </div>
                <div className="ssg-name">Files</div>
                <div className="ssg-info">17 Total</div>
              </div>
              <div className="ssg-content">
                <div className="ssg-items ssg-items-blocks">
                  <Link className="ssg-item" to="/#">
                    <div className="item-icon">
                      <i className="os-icon os-icon-file-text"></i>
                    </div>
                    <div className="item-name">
                      Work<span>Not</span>e.txt
                    </div>
                  </Link>
                  <Link className="ssg-item" to="/#">
                    <div className="item-icon">
                      <i className="os-icon os-icon-film"></i>
                    </div>
                    <div className="item-name">
                      V<span>ideo</span>.avi
                    </div>
                  </Link>
                  <Link className="ssg-item" to="/#">
                    <div className="item-icon">
                      <i className="os-icon os-icon-database"></i>
                    </div>
                    <div className="item-name">
                      User<span>Tabl</span>e.sql
                    </div>
                  </Link>
                  <Link className="ssg-item" to="/#">
                    <div className="item-icon">
                      <i className="os-icon os-icon-image"></i>
                    </div>
                    <div className="item-name">
                      wed<span>din</span>g.jpg
                    </div>
                  </Link>
                </div>
                <div className="ssg-nothing-found">
                  <div className="icon-w">
                    <i className="os-icon os-icon-eye-off"></i>
                  </div>
                  <span>No files were found. Try changing your query...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layout-w">
          <div className="menu-mobile menu-activated-on-click color-scheme-dark">
            <div className="mm-logo-buttons-w">
              <Link className="mm-logo" to="/">
                <img src="img/logo.png" alt="" />
                <span>Clean Admin</span>
              </Link>
              <div className="mm-buttons">
                <div className="content-panel-open">
                  <div className="os-icon os-icon-grid-circles"></div>
                </div>
                <div className="mobile-menu-trigger">
                  <div className="os-icon os-icon-hamburger-menu-1"></div>
                </div>
              </div>
            </div>
            <div className="menu-and-user">
              <div className="logged-user-w">
                <div className="avatar-w">
                  <img alt="" src="img/avatar1.jpg" />
                </div>
                <div className="logged-user-info-w">
                  <div className="logged-user-name">Ishola Babalola</div>
                  <div className="logged-user-role">Administrator</div>
                </div>
              </div>
              <ul className="main-menu">
                <li className="has-sub-menu">
                  <Link to="/">
                    <div className="icon-w">
                      <div className="os-icon os-icon-layout"></div>
                    </div>
                    <span>Dashboard</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">Dashboard 1</Link>
                    </li>
                    <li>
                      <Link to="/">
                        Crypto Dashboard{" "}
                        <strong className="badge badge-danger">Hot</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_support_dashboard">Dashboard 3</Link>
                    </li>
                    <li>
                      <Link to="/apps_projects">Dashboard 4</Link>
                    </li>
                    <li>
                      <Link to="/apps_bank">Dashboard 5</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_top_image">Dashboard 6</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/layouts_menu_top_image ">
                    <div className="icon-w">
                      <div className="os-icon os-icon-layers"></div>
                    </div>
                    <span>Menu Styles</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/layouts_menu_side_full ">Side Menu Light</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_full_dark ">
                        Side Menu Dark
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_transparent ">
                        Side Menu Transparent{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_pipeline ">Side &amp; Top Dark</Link>
                    </li>
                    <li>
                      <Link to="/apps_projects ">Side &amp; Top</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_mini ">Mini Side Menu</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_mini_dark ">
                        Mini Menu Dark
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_compact ">
                        Compact Side Menu
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_compact_dark ">
                        Compact Menu Dark
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_right ">Right Menu</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_top ">Top Menu Light</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_top_dark ">Top Menu Dark</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_top_image ">
                        Top Menu Image{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_sub_style_flyout ">
                        Sub Menu Flyout
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_sub_style_flyout_dark ">
                        Sub Flyout Dark
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_sub_style_flyout_bright ">
                        Sub Flyout Bright
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_compact_click ">
                        Menu Inside Click
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/apps_bank ">
                    <div className="icon-w">
                      <div className="os-icon os-icon-package"></div>
                    </div>
                    <span>Applications</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/apps_email ">Email Application</Link>
                    </li>
                    <li>
                      <Link to="/apps_support_dashboard ">
                        Support Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_support_index ">Tickets Index</Link>
                    </li>
                    <li>
                      <Link to="/apps_crypto ">
                        Crypto Dashboard{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_projects ">Projects List</Link>
                    </li>
                    <li>
                      <Link to="/apps_bank ">
                        Banking{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_full_chat ">Chat Application</Link>
                    </li>
                    <li>
                      <Link to="/apps_todo ">
                        To Do Application{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/misc_chat ">Popup Chat</Link>
                    </li>
                    <li>
                      <Link to="/apps_pipeline ">CRM Pipeline</Link>
                    </li>
                    <li>
                      <Link to="/rentals_index_grid ">
                        Property Listing{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/misc_calendar ">Calendar</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-file-text"></div>
                    </div>
                    <span>Pages</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/misc_invoice ">Invoice</Link>
                    </li>
                    <li>
                      <Link to="/ecommerce_order_info ">
                        Order Info{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/rentals_index_grid ">
                        Property Listing{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/misc_charts ">Charts</Link>
                    </li>
                    <li>
                      <Link to="/auth_login ">Login</Link>
                    </li>
                    <li>
                      <Link to="/auth_register ">Register</Link>
                    </li>
                    <li>
                      <Link to="/auth_lock ">Lock Screen</Link>
                    </li>
                    <li>
                      <Link to="/misc_pricing_plans ">Pricing Plans</Link>
                    </li>
                    <li>
                      <Link to="/misc_error_404 ">Error 404</Link>
                    </li>
                    <li>
                      <Link to="/misc_error_500 ">Error 500</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-life-buoy"></div>
                    </div>
                    <span>UI Kit</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/uikit_modals ">
                        Modals{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/uikit_alerts ">Alerts</Link>
                    </li>
                    <li>
                      <Link to="/uikit_grid ">Grid</Link>
                    </li>
                    <li>
                      <Link to="/uikit_progress ">Progress</Link>
                    </li>
                    <li>
                      <Link to="/uikit_popovers ">Popover</Link>
                    </li>
                    <li>
                      <Link to="/uikit_tooltips ">Tooltips</Link>
                    </li>
                    <li>
                      <Link to="/uikit_buttons ">Buttons</Link>
                    </li>
                    <li>
                      <Link to="/uikit_dropdowns ">Dropdowns</Link>
                    </li>
                    <li>
                      <Link to="/uikit_typography ">Typography</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-mail"></div>
                    </div>
                    <span>Emails</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/emails_welcome ">Welcome Email</Link>
                    </li>
                    <li>
                      <Link to="/emails_order ">Order Confirmation</Link>
                    </li>
                    <li>
                      <Link to="/emails_payment_due ">Payment Due</Link>
                    </li>
                    <li>
                      <Link to="/emails_forgot ">Forgot Password</Link>
                    </li>
                    <li>
                      <Link to="/emails_activate ">Activate Account</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-users"></div>
                    </div>
                    <span>Users</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/users_profile_big ">Big Profile</Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small ">Compact Profile</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-edit-32"></div>
                    </div>
                    <span>Forms</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/forms_regular ">Regular Forms</Link>
                    </li>
                    <li>
                      <Link to="/forms_validation ">Form Validation</Link>
                    </li>
                    <li>
                      <Link to="/forms_wizard ">Form Wizard</Link>
                    </li>
                    <li>
                      <Link to="/forms_uploads ">File Uploads</Link>
                    </li>
                    <li>
                      <Link to="/forms_wisiwig ">Wisiwig Editor</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-grid"></div>
                    </div>
                    <span>Tables</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/tables_regular ">Regular Tables</Link>
                    </li>
                    <li>
                      <Link to="/tables_datatables ">Data Tables</Link>
                    </li>
                    <li>
                      <Link to="/tables_editable ">Editable Tables</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-zap"></div>
                    </div>
                    <span>Icons</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/icon_fonts_simple_line_icons ">
                        Simple Line Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_feather ">Feather Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_themefy ">Themefy Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_picons_thin ">Picons Thin</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_dripicons ">Dripicons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_eightyshades ">Eightyshades</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_entypo ">Entypo</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_font_awesome ">Font Awesome</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_foundation_icon_font ">
                        Foundation Icon Font
                      </Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_metrize_icons ">Metrize Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_picons_social ">Picons Social</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_batch_icons ">Batch Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_dashicons ">Dashicons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_typicons ">Typicons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_weather_icons ">Weather Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_light_admin ">Light Admin</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu-w color-scheme-light color-style-transparent menu-position-side menu-side-left menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover menu-has-selected-link">
            <div className="logged-user-w avatar-inline">
              <div className="logged-user-i">
                <div className="avatar-w">
                  <img alt="" src="img/avatar1.jpg" />
                </div>
                <div className="logged-user-info-w">
                  <div className="logged-user-name">Ishola Babalola</div>
                  <div className="logged-user-role">Administrator</div>
                </div>
                <div className="logged-user-toggler-arrow">
                  <div className="os-icon os-icon-chevron-down"></div>
                </div>
                <div className="logged-user-menu color-style-bright">
                  <div className="logged-user-avatar-info">
                    <div className="avatar-w">
                      <img alt="" src="img/avatar1.jpg" />
                    </div>
                    <div className="logged-user-info-w">
                      <div className="logged-user-name">Ishola Babalola</div>
                      <div className="logged-user-role">Administrator</div>
                    </div>
                  </div>
                  <div className="bg-icon">
                    <i className="os-icon os-icon-wallet-loaded"></i>
                  </div>
                  <ul>
                    <li>
                      <Link to="/apps_email ">
                        <i className="os-icon os-icon-mail-01"></i>
                        <span>Incoming Mail</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_big ">
                        <i className="os-icon os-icon-user-male-circle2"></i>
                        <span>Profile Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small ">
                        <i className="os-icon os-icon-coins-4"></i>
                        <span>Billing Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="os-icon os-icon-others-43"></i>
                        <span>Notifications</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="os-icon os-icon-signs-11"></i>
                        <span>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="menu-actions">
              <div className="messages-notifications os-dropdown-trigger os-dropdown-position-right">
                <i className="os-icon os-icon-mail-14"></i>
                <div className="new-messages-count">12</div>
                <div className="os-dropdown light message-list">
                  <ul>
                    <li>
                      <Link to="/#">
                        <div className="user-avatar-w">
                          <img alt="" src="img/avatar1.jpg" />
                        </div>
                        <div className="message-content">
                          <h6 className="message-from">John Ade</h6>
                          <h6 className="message-title">Account Update</h6>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <div className="user-avatar-w">
                          <img alt="" src="img/avatar2.jpg" />
                        </div>
                        <div className="message-content">
                          <h6 className="message-from">Joseph Chima</h6>
                          <h6 className="message-title">Secutiry Updates</h6>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <div className="user-avatar-w">
                          <img alt="" src="img/avatar3.jpg" />
                        </div>
                        <div className="message-content">
                          <h6 className="message-from">Bekky Daudu</h6>
                          <h6 className="message-title">Vacation Rentals</h6>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <div className="user-avatar-w">
                          <img alt="" src="img/avatar4.jpg" />
                        </div>
                        <div className="message-content">
                          <h6 className="message-from">Alice Johnson</h6>
                          <h6 className="message-title">
                            Payment Confirmation
                          </h6>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="top-icon top-settings os-dropdown-trigger os-dropdown-position-right">
                <i className="os-icon os-icon-ui-46"></i>
                <div className="os-dropdown">
                  <div className="icon-w">
                    <i className="os-icon os-icon-ui-46"></i>
                  </div>
                  <ul>
                    <li>
                      <Link to="/users_profile_small ">
                        <i className="os-icon os-icon-ui-49"></i>
                        <span>Profile Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small ">
                        <i className="os-icon os-icon-grid-10"></i>
                        <span>Billing Info</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small ">
                        <i className="os-icon os-icon-ui-44"></i>
                        <span>My Invoices</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small ">
                        <i className="os-icon os-icon-ui-15"></i>
                        <span>Cancel Account</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="messages-notifications os-dropdown-trigger os-dropdown-position-right">
                <i className="os-icon os-icon-zap"></i>
                <div className="new-messages-count">4</div>
                <div className="os-dropdown light message-list">
                  <div className="icon-w">
                    <i className="os-icon os-icon-zap"></i>
                  </div>
                  <ul>
                    <li>
                      <Link to="/#">
                        <div className="user-avatar-w">
                          <img alt="" src="img/avatar1.jpg" />
                        </div>
                        <div className="message-content">
                          <h6 className="message-from">John Ade</h6>
                          <h6 className="message-title">Account Update</h6>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <div className="user-avatar-w">
                          <img alt="" src="img/avatar2.jpg" />
                        </div>
                        <div className="message-content">
                          <h6 className="message-from">Joseph Chima</h6>
                          <h6 className="message-title">Secutiry Updates</h6>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <div className="user-avatar-w">
                          <img alt="" src="img/avatar3.jpg" />
                        </div>
                        <div className="message-content">
                          <h6 className="message-from">Bekky Daudu</h6>
                          <h6 className="message-title">Vacation Rentals</h6>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <div className="user-avatar-w">
                          <img alt="" src="img/avatar4.jpg" />
                        </div>
                        <div className="message-content">
                          <h6 className="message-from">Alice Johnson</h6>
                          <h6 className="message-title">
                            Payment Confirmation
                          </h6>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="element-search autosuggest-search-activator">
              <input placeholder="Start typing to search..." />
            </div>
            <h1 className="menu-page-header">Page Header</h1>
            <ul className="main-menu">
              <li className="sub-header">
                <span>Layouts</span>
              </li>
              <li className="selected has-sub-menu">
                <Link to="/index ">
                  <div className="icon-w">
                    <div className="os-icon os-icon-layout"></div>
                  </div>
                  <span>Dashboard</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Dashboard</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-layout"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/index ">Dashboard 1</Link>
                      </li>
                      <li>
                        <Link to="/apps_crypto ">
                          Crypto Dashboard{" "}
                          <strong className="badge badge-danger">Hot</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_support_dashboard ">Dashboard 3</Link>
                      </li>
                      <li>
                        <Link to="/apps_projects ">Dashboard 4</Link>
                      </li>
                      <li>
                        <Link to="/apps_bank ">Dashboard 5</Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_top_image ">Dashboard 6</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <Link to="/layouts_menu_top_image ">
                  <div className="icon-w">
                    <div className="os-icon os-icon-layers"></div>
                  </div>
                  <span>Menu Styles</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Menu Styles</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-layers"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/layouts_menu_side_full ">
                          Side Menu Light
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_full_dark ">
                          Side Menu Dark
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_transparent ">
                          Side Menu Transparent{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_pipeline ">Side &amp; Top Dark</Link>
                      </li>
                      <li>
                        <Link to="/apps_projects ">Side &amp; Top</Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_mini ">
                          Mini Side Menu
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/layouts_menu_side_mini_dark ">
                          Mini Menu Dark
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_compact ">
                          Compact Side Menu
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_compact_dark ">
                          Compact Menu Dark
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_right ">Right Menu</Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_top ">Top Menu Light</Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_top_dark ">Top Menu Dark</Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/layouts_menu_top_image ">
                          Top Menu Image{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_sub_style_flyout ">
                          Sub Menu Flyout
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_sub_style_flyout_dark ">
                          Sub Flyout Dark
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_sub_style_flyout_bright ">
                          Sub Flyout Bright
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_compact_click ">
                          Menu Inside Click
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sub-header">
                <span>Options</span>
              </li>
              <li className="has-sub-menu">
                <Link to="/apps_bank ">
                  <div className="icon-w">
                    <div className="os-icon os-icon-package"></div>
                  </div>
                  <span>Applications</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Applications</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-package"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/apps_email ">Email Application</Link>
                      </li>
                      <li>
                        <Link to="/apps_support_dashboard ">
                          Support Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_support_index ">Tickets Index</Link>
                      </li>
                      <li>
                        <Link to="/apps_crypto ">
                          Crypto Dashboard{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_projects ">Projects List</Link>
                      </li>
                      <li>
                        <Link to="/apps_bank ">
                          Banking{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/apps_full_chat ">Chat Application</Link>
                      </li>
                      <li>
                        <Link to="/apps_todo ">
                          To Do Application{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/misc_chat ">Popup Chat</Link>
                      </li>
                      <li>
                        <Link to="/apps_pipeline ">CRM Pipeline</Link>
                      </li>
                      <li>
                        <Link to="/rentals_index_grid ">
                          Property Listing{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/misc_calendar ">Calendar</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <Link to="/#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-file-text"></div>
                  </div>
                  <span>Pages</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Pages</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-file-text"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/misc_invoice ">Invoice</Link>
                      </li>
                      <li>
                        <Link to="/ecommerce_order_info ">
                          Order Info{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/rentals_index_grid ">
                          Property Listing{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/misc_charts ">Charts</Link>
                      </li>
                      <li>
                        <Link to="/auth_login ">Login</Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/auth_register ">Register</Link>
                      </li>
                      <li>
                        <Link to="/auth_lock ">Lock Screen</Link>
                      </li>
                      <li>
                        <Link to="/misc_pricing_plans ">Pricing Plans</Link>
                      </li>
                      <li>
                        <Link to="/misc_error_404 ">Error 404</Link>
                      </li>
                      <li>
                        <Link to="/misc_error_500 ">Error 500</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <Link to="/#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-life-buoy"></div>
                  </div>
                  <span>UI Kit</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">UI Kit</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-life-buoy"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/uikit_modals ">
                          Modals{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/uikit_alerts ">Alerts</Link>
                      </li>
                      <li>
                        <Link to="/uikit_grid ">Grid</Link>
                      </li>
                      <li>
                        <Link to="/uikit_progress ">Progress</Link>
                      </li>
                      <li>
                        <Link to="/uikit_popovers ">Popover</Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/uikit_tooltips ">Tooltips</Link>
                      </li>
                      <li>
                        <Link to="/uikit_buttons ">Buttons</Link>
                      </li>
                      <li>
                        <Link to="/uikit_dropdowns ">Dropdowns</Link>
                      </li>
                      <li>
                        <Link to="/uikit_typography ">Typography</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sub-header">
                <span>Elements</span>
              </li>
              <li className="has-sub-menu">
                <Link to="/#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-mail"></div>
                  </div>
                  <span>Emails</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Emails</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-mail"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/emails_welcome ">Welcome Email</Link>
                      </li>
                      <li>
                        <Link to="/emails_order ">Order Confirmation</Link>
                      </li>
                      <li>
                        <Link to="/emails_payment_due ">Payment Due</Link>
                      </li>
                      <li>
                        <Link to="/emails_forgot ">Forgot Password</Link>
                      </li>
                      <li>
                        <Link to="/emails_activate ">Activate Account</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <Link to="/#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-users"></div>
                  </div>
                  <span>Users</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Users</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-users"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/users_profile_big ">Big Profile</Link>
                      </li>
                      <li>
                        <Link to="/users_profile_small ">Compact Profile</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <Link to="/#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-edit-32"></div>
                  </div>
                  <span>Forms</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Forms</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-edit-32"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/forms_regular ">Regular Forms</Link>
                      </li>
                      <li>
                        <Link to="/forms_validation ">Form Validation</Link>
                      </li>
                      <li>
                        <Link to="/forms_wizard ">Form Wizard</Link>
                      </li>
                      <li>
                        <Link to="/forms_uploads ">File Uploads</Link>
                      </li>
                      <li>
                        <Link to="/forms_wisiwig ">Wisiwig Editor</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <Link to="/#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-grid"></div>
                  </div>
                  <span>Tables</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Tables</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-grid"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/tables_regular ">Regular Tables</Link>
                      </li>
                      <li>
                        <Link to="/tables_datatables ">Data Tables</Link>
                      </li>
                      <li>
                        <Link to="/tables_editable ">Editable Tables</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <Link to="/#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-zap"></div>
                  </div>
                  <span>Icons</span>
                </Link>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Icons</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-zap"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <Link to="/icon_fonts_simple_line_icons ">
                          Simple Line Icons
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_feather ">Feather Icons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_themefy ">Themefy Icons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_picons_thin ">Picons Thin</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_dripicons ">Dripicons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_eightyshades ">Eightyshades</Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/icon_fonts_entypo ">Entypo</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_font_awesome ">Font Awesome</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_foundation_icon_font ">
                          Foundation Icon Font
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_metrize_icons ">
                          Metrize Icons
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_picons_social ">
                          Picons Social
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_batch_icons ">Batch Icons</Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/icon_fonts_dashicons ">Dashicons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_typicons ">Typicons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_weather_icons ">
                          Weather Icons
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_light_admin ">Light Admin</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="content-w">
            <div className="content-i">
              <div className="content-box">
                <div className="element-wrapper compact pt-4">
                  <div className="element-actions">
                    <Link className="btn btn-primary btn-sm" to="/#">
                      <i className="os-icon os-icon-ui-22"></i>
                      <span>Add Account</span>
                    </Link>
                    <Link className="btn btn-success btn-sm" to="/#">
                      <i className="os-icon os-icon-grid-10"></i>
                      <span>Make Payment</span>
                    </Link>
                  </div>
                  <h6 className="element-header">Financial Overview</h6>
                  <div className="element-box-tp">
                    <div className="row">
                      <div className="col-lg-7 col-xxl-6">
                        <div className="element-balances">
                          <div className="balance hidden-mobile">
                            <div className="balance-title">Total Balance</div>
                            <div className="balance-value">
                              <span>$350</span>
                              <span className="trending trending-down-basic">
                                <span>%12</span>
                                <i className="os-icon os-icon-arrow-2-down"></i>
                              </span>
                            </div>
                            <div className="balance-link">
                              <Link
                                className="btn btn-link btn-underlined"
                                to="/#"
                              >
                                <span>View Statement</span>
                                <i className="os-icon os-icon-arrow-right4"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="balance">
                            <div className="balance-title">
                              Credit Available
                            </div>
                            <div className="balance-value">$17,800</div>
                            <div className="balance-link">
                              <Link
                                className="btn btn-link btn-underlined"
                                to="/#"
                              >
                                <span>Request Increase</span>
                                <i className="os-icon os-icon-arrow-right4"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="balance">
                            <div className="balance-title">Due Today</div>
                            <div className="balance-value danger">$180</div>
                            <div className="balance-link">
                              <Link
                                className="btn btn-link btn-underlined btn-gold"
                                to="/#"
                              >
                                <span>Pay Now</span>
                                <i className="os-icon os-icon-arrow-right4"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-xxl-6">
                        <div className="alert alert-warning borderless">
                          <h5 className="alert-heading">
                            Refer Friends. Get Rewarded
                          </h5>
                          <p>
                            You can earn: 15,000 Membership Rewards points for
                            each approved referral – up to 55,000 Membership
                            Rewards points per calendar year.
                          </p>
                          <div className="alert-btn">
                            <Link className="btn btn-white-gold" to="/#">
                              <i className="os-icon os-icon-ui-92"></i>
                              <span>Send Referral</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-7 col-xxl-6">
                    <div className="element-wrapper">
                      <div className="element-box">
                        <div className="element-actions">
                          <div className="form-group">
                            <select className="form-control form-control-sm">
                              <option selected="true">Last 30 days</option>
                              <option>This Week</option>
                              <option>This Month</option>
                              <option>Today</option>
                            </select>
                          </div>
                        </div>
                        <h5 className="element-box-header">Balance History</h5>
                        <div className="el-chart-w">
                          <canvas
                            data-chart-data="13,28,19,24,43,49,40,35,42,46"
                            height="90"
                            id="liteLineChartV2"
                            width="300"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-xxl-6">
                    <div className="element-wrapper">
                      <div className="element-box">
                        <form>
                          <h5 className="element-box-header">Withdraw Money</h5>
                          <div className="row">
                            <div className="col-sm-5">
                              <div className="form-group">
                                <label className="lighter" for="">
                                  Select Amount
                                </label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                  <input
                                    className="form-control"
                                    placeholder="Enter Amount..."
                                    value="0"
                                  />
                                  <div className="input-group-append">
                                    <div className="input-group-text">USD</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-7">
                              <div className="form-group">
                                <label className="lighter" for="">
                                  Transfer to
                                </label>
                                <select className="form-control">
                                  <option value="">Citibank *6382</option>
                                  <option value="">Chase *8372</option>
                                  <option value="">
                                    Bank of America *7363
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-buttons-w text-right compact">
                            <Link className="btn btn-grey" to="/#">
                              <i className="os-icon os-icon-ui-22"></i>
                              <span>Add Account</span>
                            </Link>
                            <Link className="btn btn-primary" to="/#">
                              <span>Transfer</span>
                              <i className="os-icon os-icon-grid-18"></i>
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="element-wrapper">
                  <h6 className="element-header">Recent Transactions</h6>
                  <div className="element-box-tp">
                    <div className="table-responsive">
                      <table className="table table-padded">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th className="text-center">Category</th>
                            <th className="text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="nowrap">
                              <span className="status-pill smaller green"></span>
                              <span>Complete</span>
                            </td>
                            <td>
                              <span>Today</span>
                              <span className="smaller lighter">1:52am</span>
                            </td>
                            <td className="cell-with-media">
                              <img alt="" src="img/company1.png" />
                              <span>Banana Shakes LLC</span>
                            </td>
                            <td className="text-center">
                              <Link className="badge badge-success" to="/#">
                                Shopping
                              </Link>
                            </td>
                            <td className="text-right bolder nowrap">
                              <span className="text-success">+ 1,250 USD</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="nowrap">
                              <span className="status-pill smaller red"></span>
                              <span>Declined</span>
                            </td>
                            <td>
                              <span>Jan 19th</span>
                              <span className="smaller lighter">3:22pm</span>
                            </td>
                            <td className="cell-with-media">
                              <img alt="" src="img/company2.png" />
                              <span>Stripe Payment Processing</span>
                            </td>
                            <td className="text-center">
                              <Link className="badge badge-danger">Cafe</Link>
                            </td>
                            <td className="text-right bolder nowrap">
                              <span className="text-success">+ 952.23 USD</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="nowrap">
                              <span className="status-pill smaller yellow"></span>
                              <span>Pending</span>
                            </td>
                            <td>
                              <span>Yesterday</span>
                              <span className="smaller lighter">7:45am</span>
                            </td>
                            <td className="cell-with-media">
                              <img alt="" src="img/company3.png" />
                              <span>MailChimp Services</span>
                            </td>
                            <td className="text-center">
                              <Link className="badge badge-warning" to="/#">
                                Restaurants
                              </Link>
                            </td>
                            <td className="text-right bolder nowrap">
                              <span className="text-danger">- 320 USD</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="nowrap">
                              <span className="status-pill smaller yellow"></span>
                              <span>Pending</span>
                            </td>
                            <td>
                              <span>Jan 23rd</span>
                              <span className="smaller lighter">2:12pm</span>
                            </td>
                            <td className="cell-with-media">
                              <img alt="" src="img/company1.png" />
                              <span>Starbucks Cafe</span>
                            </td>
                            <td className="text-center">
                              <Link className="badge badge-primary" to="/#">
                                Shopping
                              </Link>
                            </td>
                            <td className="text-right bolder nowrap">
                              <span className="text-success">+ 17.99 USD</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="nowrap">
                              <span className="status-pill smaller green"></span>
                              <span>Complete</span>
                            </td>
                            <td>
                              <span>Jan 12th</span>
                              <span className="smaller lighter">9:51am</span>
                            </td>
                            <td className="cell-with-media">
                              <img alt="" src="img/company4.png" />
                              <span>Ebay Marketplace</span>
                            </td>
                            <td className="text-center">
                              <Link className="badge badge-danger" to="/#">
                                Groceries
                              </Link>
                            </td>
                            <td className="text-right bolder nowrap">
                              <span className="text-danger">- 244 USD</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="nowrap">
                              <span className="status-pill smaller yellow"></span>
                              <span>Pending</span>
                            </td>
                            <td>
                              <span>Jan 9th</span>
                              <span className="smaller lighter">12:45pm</span>
                            </td>
                            <td className="cell-with-media">
                              <img alt="" src="img/company2.png" />
                              <span>Envato Templates Inc</span>
                            </td>
                            <td className="text-center">
                              <Link className="badge badge-primary" to="/#">
                                Business
                              </Link>
                            </td>
                            <td className="text-right bolder nowrap">
                              <span className="text-success">+ 340 USD</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="floated-colors-btn second-floated-btn">
                  <div className="os-toggler-w">
                    <div className="os-toggler-i">
                      <div className="os-toggler-pill"></div>
                    </div>
                  </div>
                  <span>Dark </span>
                  <span>Colors</span>
                </div>
                <div className="floated-customizer-btn third-floated-btn">
                  <div className="icon-w">
                    <i className="os-icon os-icon-ui-46"></i>
                  </div>
                  <span>Customizer</span>
                </div>
                <div className="floated-customizer-panel">
                  <div className="fcp-content">
                    <div className="close-customizer-btn">
                      <i className="os-icon os-icon-x"></i>
                    </div>
                    <div className="fcp-group">
                      <div className="fcp-group-header">Menu Settings</div>
                      <div className="fcp-group-contents">
                        <div className="fcp-field">
                          <label for="">Menu Position</label>
                          <select className="menu-position-selector">
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                            <option value="top">Top</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label for="">Menu Style</label>
                          <select className="menu-layout-selector">
                            <option value="compact">Compact</option>
                            <option value="full">Full</option>
                            <option value="mini">Mini</option>
                          </select>
                        </div>
                        <div className="fcp-field with-image-selector-w">
                          <label for="">With Image</label>
                          <select className="with-image-selector">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label for="">Menu Color</label>
                          <div className="fcp-colors menu-color-selector">
                            <div className="color-selector menu-color-selector color-bright selected"></div>
                            <div className="color-selector menu-color-selector color-dark"></div>
                            <div className="color-selector menu-color-selector color-light"></div>
                            <div className="color-selector menu-color-selector color-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fcp-group">
                      <div className="fcp-group-header">Sub Menu</div>
                      <div className="fcp-group-contents">
                        <div className="fcp-field">
                          <label for="">Sub Menu Style</label>
                          <select className="sub-menu-style-selector">
                            <option value="flyout">Flyout</option>
                            <option value="inside">Inside/Click</option>
                            <option value="over">Over</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label for="">Sub Menu Color</label>
                          <div className="fcp-colors">
                            <div className="color-selector sub-menu-color-selector color-bright selected"></div>
                            <div className="color-selector sub-menu-color-selector color-dark"></div>
                            <div className="color-selector sub-menu-color-selector color-light"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fcp-group">
                      <div className="fcp-group-header">Other Settings</div>
                      <div className="fcp-group-contents">
                        <div className="fcp-field">
                          <label for="">Full Screen?</label>
                          <select className="full-screen-selector">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label for="">Show Top Bar</label>
                          <select className="top-bar-visibility-selector">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label for="">Above Menu?</label>
                          <select className="top-bar-above-menu-selector">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label for="">Top Bar Color</label>
                          <div className="fcp-colors">
                            <div className="color-selector top-bar-color-selector color-bright selected"></div>
                            <div className="color-selector top-bar-color-selector color-dark"></div>
                            <div className="color-selector top-bar-color-selector color-light"></div>
                            <div className="color-selector top-bar-color-selector color-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DemoChat />
              </div>
            </div>
          </div>
          <div className="display-type"></div>
        </div>
      </div>
    </div>
  );
};
