import React from "react";
import { Link } from "react-router-dom";

function UserProfileBig() {
  return (
    <div className="menu-position-side menu-side-left full-screen with-content-panel">
      <div className="all-wrapper with-side-panel solid-bg-all">
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
                  <Link className="ssg-item" to="/users_profile_big.html">
                    <div
                      className="item-media"
                      style={{ "background-image": "url(img/company6.png)" }}
                    ></div>
                    <div className="item-name">
                      Integ<span>ration</span> with API
                    </div>
                  </Link>
                  <Link className="ssg-item" to="/users_profile_big.html">
                    <div
                      className="item-media"
                      style={{ "background-image": "url(img/company7.png)" }}
                    ></div>
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
                  <Link className="ssg-item" to="/users_profile_big.html">
                    <div
                      className="item-media"
                      style={{ "background-image": "url(img/avatar1.jpg)" }}
                    ></div>
                    <div className="item-name">
                      John Ma<span>yer</span>s
                    </div>
                  </Link>
                  <Link className="ssg-item" to="/users_profile_big.html">
                    <div
                      className="item-media"
                      style={{ "background-image": "url(img/avatar2.jpg)" }}
                    ></div>
                    <div className="item-name">
                      Th<span>omas</span> Mullier
                    </div>
                  </Link>
                  <Link className="ssg-item" to="/users_profile_big.html">
                    <div
                      className="item-media"
                      style={{ "background-image": "url(img/avatar3.jpg)" }}
                    ></div>
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
              <Link className="mm-logo" to="/index.html">
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
                  <div className="logged-user-name">Maria Gomez</div>
                  <div className="logged-user-role">Administrator</div>
                </div>
              </div>
              <ul className="main-menu">
                <li className="has-sub-menu">
                  <Link to="/index.html">
                    <div className="icon-w">
                      <div className="os-icon os-icon-layout"></div>
                    </div>
                    <span>Dashboard</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/index.html">Dashboard 1</Link>
                    </li>
                    <li>
                      <Link to="/apps_crypto.html">
                        Crypto Dashboard{" "}
                        <strong className="badge badge-danger">Hot</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_support_dashboard.html">Dashboard 3</Link>
                    </li>
                    <li>
                      <Link to="/apps_projects.html">Dashboard 4</Link>
                    </li>
                    <li>
                      <Link to="/apps_bank.html">Dashboard 5</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_top_image.html">Dashboard 6</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/layouts_menu_top_image.html">
                    <div className="icon-w">
                      <div className="os-icon os-icon-layers"></div>
                    </div>
                    <span>Menu Styles</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/layouts_menu_side_full.html">
                        Side Menu Light
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_full_dark.html">
                        Side Menu Dark
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_transparent.html">
                        Side Menu Transparent{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_pipeline.html">Side &amp; Top Dark</Link>
                    </li>
                    <li>
                      <Link to="/apps_projects.html">Side &amp; Top</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_mini.html">
                        Mini Side Menu
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_mini_dark.html">
                        Mini Menu Dark
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_compact.html">
                        Compact Side Menu
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_compact_dark.html">
                        Compact Menu Dark
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_right.html">Right Menu</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_top.html">Top Menu Light</Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_top_dark.html">
                        Top Menu Dark
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_top_image.html">
                        Top Menu Image{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_sub_style_flyout.html">
                        Sub Menu Flyout
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_sub_style_flyout_dark.html">
                        Sub Flyout Dark
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_sub_style_flyout_bright.html">
                        Sub Flyout Bright
                      </Link>
                    </li>
                    <li>
                      <Link to="/layouts_menu_side_compact_click.html">
                        Menu Inside Click
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <Link to="/apps_bank.html">
                    <div className="icon-w">
                      <div className="os-icon os-icon-package"></div>
                    </div>
                    <span>Applications</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/apps_email.html">Email Application</Link>
                    </li>
                    <li>
                      <Link to="/apps_support_dashboard.html">
                        Support Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_support_index.html">Tickets Index</Link>
                    </li>
                    <li>
                      <Link to="/apps_crypto.html">
                        Crypto Dashboard{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_projects.html">Projects List</Link>
                    </li>
                    <li>
                      <Link to="/apps_bank.html">
                        Banking{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/apps_full_chat.html">Chat Application</Link>
                    </li>
                    <li>
                      <Link to="/apps_todo.html">
                        To Do Application{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/misc_chat.html">Popup Chat</Link>
                    </li>
                    <li>
                      <Link to="/apps_pipeline.html">CRM Pipeline</Link>
                    </li>
                    <li>
                      <Link to="/rentals_index_grid.html">
                        Property Listing{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/misc_calendar.html">Calendar</Link>
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
                      <Link to="/misc_invoice.html">Invoice</Link>
                    </li>
                    <li>
                      <Link to="/ecommerce_order_info.html">
                        Order Info{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/rentals_index_grid.html">
                        Property Listing{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/misc_charts.html">Charts</Link>
                    </li>
                    <li>
                      <Link to="/auth_login.html">Login</Link>
                    </li>
                    <li>
                      <Link to="/auth_register.html">Register</Link>
                    </li>
                    <li>
                      <Link to="/auth_lock.html">Lock Screen</Link>
                    </li>
                    <li>
                      <Link to="/misc_pricing_plans.html">Pricing Plans</Link>
                    </li>
                    <li>
                      <Link to="/misc_error_404.html">Error 404</Link>
                    </li>
                    <li>
                      <Link to="/misc_error_500.html">Error 500</Link>
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
                      <Link to="/uikit_modals.html">
                        Modals{" "}
                        <strong className="badge badge-danger">New</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to="/uikit_alerts.html">Alerts</Link>
                    </li>
                    <li>
                      <Link to="/uikit_grid.html">Grid</Link>
                    </li>
                    <li>
                      <Link to="/uikit_progress.html">Progress</Link>
                    </li>
                    <li>
                      <Link to="/uikit_popovers.html">Popover</Link>
                    </li>
                    <li>
                      <Link to="/uikit_tooltips.html">Tooltips</Link>
                    </li>
                    <li>
                      <Link to="/uikit_buttons.html">Buttons</Link>
                    </li>
                    <li>
                      <Link to="/uikit_dropdowns.html">Dropdowns</Link>
                    </li>
                    <li>
                      <Link to="/uikit_typography.html">Typography</Link>
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
                      <Link to="/emails_welcome.html">Welcome Email</Link>
                    </li>
                    <li>
                      <Link to="/emails_order.html">Order Confirmation</Link>
                    </li>
                    <li>
                      <Link to="/emails_payment_due.html">Payment Due</Link>
                    </li>
                    <li>
                      <Link to="/emails_forgot.html">Forgot Password</Link>
                    </li>
                    <li>
                      <Link to="/emails_activate.html">Activate Account</Link>
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
                      <Link to="/users_profile_big.html">Big Profile</Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small.html">
                        Compact Profile
                      </Link>
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
                      <Link to="/forms_regular.html">Regular Forms</Link>
                    </li>
                    <li>
                      <Link to="/forms_validation.html">Form Validation</Link>
                    </li>
                    <li>
                      <Link to="/forms_wizard.html">Form Wizard</Link>
                    </li>
                    <li>
                      <Link to="/forms_uploads.html">File Uploads</Link>
                    </li>
                    <li>
                      <Link to="/forms_wisiwig.html">Wisiwig Editor</Link>
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
                      <Link to="/tables_regular.html">Regular Tables</Link>
                    </li>
                    <li>
                      <Link to="/tables_datatables.html">Data Tables</Link>
                    </li>
                    <li>
                      <Link to="/tables_editable.html">Editable Tables</Link>
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
                      <Link to="/icon_fonts_simple_line_icons.html">
                        Simple Line Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_feather.html">Feather Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_themefy.html">Themefy Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_picons_thin.html">Picons Thin</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_dripicons.html">Dripicons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_eightyshades.html">
                        Eightyshades
                      </Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_entypo.html">Entypo</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_font_awesome.html">
                        Font Awesome
                      </Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_foundation_icon_font.html">
                        Foundation Icon Font
                      </Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_metrize_icons.html">
                        Metrize Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_picons_social.html">
                        Picons Social
                      </Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_batch_icons.html">Batch Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_dashicons.html">Dashicons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_typicons.html">Typicons</Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_weather_icons.html">
                        Weather Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icon_fonts_light_admin.html">Light Admin</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu-w color-scheme-light color-style-default menu-position-side menu-side-left menu-layout-mini sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover menu-has-selected-link">
            <div className="logo-w">
              <Link className="logo" to="/index.html">
                <div className="logo-element"></div>
                <div className="logo-label">Olive Agro</div>
              </Link>
            </div>
            <div className="logged-user-w avatar-inline">
              <div className="logged-user-i">
                <div className="avatar-w">
                  <img alt="" src="img/avatar1.jpg" />
                </div>
                <div className="logged-user-info-w">
                  <div className="logged-user-name">Maria Gomez</div>
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
                      <div className="logged-user-name">Maria Gomez</div>
                      <div className="logged-user-role">Administrator</div>
                    </div>
                  </div>
                  <div className="bg-icon">
                    <i className="os-icon os-icon-wallet-loaded"></i>
                  </div>
                  <ul>
                    <li>
                      <Link to="/apps_email.html">
                        <i className="os-icon os-icon-mail-01"></i>
                        <span>Incoming Mail</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_big.html">
                        <i className="os-icon os-icon-user-male-circle2"></i>
                        <span>Profile Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small.html">
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
                      <Link to="/users_profile_small.html">
                        <i className="os-icon os-icon-ui-49"></i>
                        <span>Profile Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small.html">
                        <i className="os-icon os-icon-grid-10"></i>
                        <span>Billing Info</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small.html">
                        <i className="os-icon os-icon-ui-44"></i>
                        <span>My Invoices</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users_profile_small.html">
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
                <Link to="/index.html">
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
                        <Link to="/index.html">Dashboard 1</Link>
                      </li>
                      <li>
                        <Link to="/apps_crypto.html">
                          Crypto Dashboard{" "}
                          <strong className="badge badge-danger">Hot</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_support_dashboard.html">
                          Dashboard 3
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_projects.html">Dashboard 4</Link>
                      </li>
                      <li>
                        <Link to="/apps_bank.html">Dashboard 5</Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_top_image.html">
                          Dashboard 6
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <Link to="/layouts_menu_top_image.html">
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
                        <Link to="/layouts_menu_side_full.html">
                          Side Menu Light
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_full_dark.html">
                          Side Menu Dark
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_transparent.html">
                          Side Menu Transparent{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_pipeline.html">
                          Side &amp; Top Dark
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_projects.html">Side &amp; Top</Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_mini.html">
                          Mini Side Menu
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/layouts_menu_side_mini_dark.html">
                          Mini Menu Dark
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_compact.html">
                          Compact Side Menu
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_compact_dark.html">
                          Compact Menu Dark
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_right.html">Right Menu</Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_top.html">Top Menu Light</Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_top_dark.html">
                          Top Menu Dark
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/layouts_menu_top_image.html">
                          Top Menu Image{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_sub_style_flyout.html">
                          Sub Menu Flyout
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_sub_style_flyout_dark.html">
                          Sub Flyout Dark
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_sub_style_flyout_bright.html">
                          Sub Flyout Bright
                        </Link>
                      </li>
                      <li>
                        <Link to="/layouts_menu_side_compact_click.html">
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
                <Link to="/apps_bank.html">
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
                        <Link to="/apps_email.html">Email Application</Link>
                      </li>
                      <li>
                        <Link to="/apps_support_dashboard.html">
                          Support Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_support_index.html">Tickets Index</Link>
                      </li>
                      <li>
                        <Link to="/apps_crypto.html">
                          Crypto Dashboard{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps_projects.html">Projects List</Link>
                      </li>
                      <li>
                        <Link to="/apps_bank.html">
                          Banking{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/apps_full_chat.html">Chat Application</Link>
                      </li>
                      <li>
                        <Link to="/apps_todo.html">
                          To Do Application{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/misc_chat.html">Popup Chat</Link>
                      </li>
                      <li>
                        <Link to="/apps_pipeline.html">CRM Pipeline</Link>
                      </li>
                      <li>
                        <Link to="/rentals_index_grid.html">
                          Property Listing{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/misc_calendar.html">Calendar</Link>
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
                        <Link to="/misc_invoice.html">Invoice</Link>
                      </li>
                      <li>
                        <Link to="/ecommerce_order_info.html">
                          Order Info{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/rentals_index_grid.html">
                          Property Listing{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/misc_charts.html">Charts</Link>
                      </li>
                      <li>
                        <Link to="/auth_login.html">Login</Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/auth_register.html">Register</Link>
                      </li>
                      <li>
                        <Link to="/auth_lock.html">Lock Screen</Link>
                      </li>
                      <li>
                        <Link to="/misc_pricing_plans.html">Pricing Plans</Link>
                      </li>
                      <li>
                        <Link to="/misc_error_404.html">Error 404</Link>
                      </li>
                      <li>
                        <Link to="/misc_error_500.html">Error 500</Link>
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
                        <Link to="/uikit_modals.html">
                          Modals{" "}
                          <strong className="badge badge-danger">New</strong>
                        </Link>
                      </li>
                      <li>
                        <Link to="/uikit_alerts.html">Alerts</Link>
                      </li>
                      <li>
                        <Link to="/uikit_grid.html">Grid</Link>
                      </li>
                      <li>
                        <Link to="/uikit_progress.html">Progress</Link>
                      </li>
                      <li>
                        <Link to="/uikit_popovers.html">Popover</Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/uikit_tooltips.html">Tooltips</Link>
                      </li>
                      <li>
                        <Link to="/uikit_buttons.html">Buttons</Link>
                      </li>
                      <li>
                        <Link to="/uikit_dropdowns.html">Dropdowns</Link>
                      </li>
                      <li>
                        <Link to="/uikit_typography.html">Typography</Link>
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
                        <Link to="/emails_welcome.html">Welcome Email</Link>
                      </li>
                      <li>
                        <Link to="/emails_order.html">Order Confirmation</Link>
                      </li>
                      <li>
                        <Link to="/emails_payment_due.html">Payment Due</Link>
                      </li>
                      <li>
                        <Link to="/emails_forgot.html">Forgot Password</Link>
                      </li>
                      <li>
                        <Link to="/emails_activate.html">Activate Account</Link>
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
                        <Link to="/users_profile_big.html">Big Profile</Link>
                      </li>
                      <li>
                        <Link to="/users_profile_small.html">
                          Compact Profile
                        </Link>
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
                        <Link to="/forms_regular.html">Regular Forms</Link>
                      </li>
                      <li>
                        <Link to="/forms_validation.html">Form Validation</Link>
                      </li>
                      <li>
                        <Link to="/forms_wizard.html">Form Wizard</Link>
                      </li>
                      <li>
                        <Link to="/forms_uploads.html">File Uploads</Link>
                      </li>
                      <li>
                        <Link to="/forms_wisiwig.html">Wisiwig Editor</Link>
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
                        <Link to="/tables_regular.html">Regular Tables</Link>
                      </li>
                      <li>
                        <Link to="/tables_datatables.html">Data Tables</Link>
                      </li>
                      <li>
                        <Link to="/tables_editable.html">Editable Tables</Link>
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
                        <Link to="/icon_fonts_simple_line_icons.html">
                          Simple Line Icons
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_feather.html">Feather Icons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_themefy.html">Themefy Icons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_picons_thin.html">
                          Picons Thin
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_dripicons.html">Dripicons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_eightyshades.html">
                          Eightyshades
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/icon_fonts_entypo.html">Entypo</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_font_awesome.html">
                          Font Awesome
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_foundation_icon_font.html">
                          Foundation Icon Font
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_metrize_icons.html">
                          Metrize Icons
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_picons_social.html">
                          Picons Social
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_batch_icons.html">
                          Batch Icons
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/icon_fonts_dashicons.html">Dashicons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_typicons.html">Typicons</Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_weather_icons.html">
                          Weather Icons
                        </Link>
                      </li>
                      <li>
                        <Link to="/icon_fonts_light_admin.html">
                          Light Admin
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div className="side-menu-magic">
              <h4>Light Admin</h4>
              <p>Clean Bootstrap 4 Template</p>
              <div className="btn-w">
                <Link
                  className="btn btn-white btn-rounded"
                  to="/https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin"
                  target="_blank"
                >
                  Purchase Now
                </Link>
              </div>
            </div>
          </div>
          <div className="content-w">
            <div className="top-bar color-scheme-transparent">
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
                            <h6 className="message-title">
                              Payment Confirmation
                            </h6>
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
                        <Link to="/users_profile_small.html">
                          <i className="os-icon os-icon-ui-49"></i>
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/users_profile_small.html">
                          <i className="os-icon os-icon-grid-10"></i>
                          <span>Billing Info</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/users_profile_small.html">
                          <i className="os-icon os-icon-ui-44"></i>
                          <span>My Invoices</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/users_profile_small.html">
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
                          <div className="logged-user-name">Maria Gomez</div>
                          <div className="logged-user-role">Administrator</div>
                        </div>
                      </div>
                      <div className="bg-icon">
                        <i className="os-icon os-icon-wallet-loaded"></i>
                      </div>
                      <ul>
                        <li>
                          <Link to="/apps_email.html">
                            <i className="os-icon os-icon-mail-01"></i>
                            <span>Incoming Mail</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/users_profile_big.html">
                            <i className="os-icon os-icon-user-male-circle2"></i>
                            <span>Profile Details</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/users_profile_small.html">
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
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/index.html">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/index.html">Products</Link>
              </li>
              <li className="breadcrumb-item">
                <span>Laptop with retina screen</span>
              </li>
            </ul>
            <div className="content-panel-toggler">
              <i className="os-icon os-icon-grid-squares-22"></i>
              <span>Sidebar</span>
            </div>
            <div className="content-i">
              <div className="content-box">
                <div className="element-wrapper">
                  <div className="user-profile">
                    <div
                      className="up-head-w"
                      style={{ "background-image": "url(img/profile_bg1.jpg)" }}
                    >
                      <div className="up-social">
                        <Link to="/#">
                          <i className="os-icon os-icon-twitter"></i>
                        </Link>
                        <Link to="/#">
                          <i className="os-icon os-icon-facebook"></i>
                        </Link>
                      </div>
                      <div className="up-main-info">
                        <div className="user-avatar-w">
                          <div className="user-avatar">
                            <img alt="" src="img/avatar1.jpg" />
                          </div>
                        </div>
                        <h1 className="up-header">John Mayers</h1>
                        <h5 className="up-sub-header">
                          Product Designer at Facebook
                        </h5>
                      </div>
                      <svg
                        className="decor"
                        width="842px"
                        height="219px"
                        viewBox="0 0 842 219"
                        preserveAspectRatio="xMaxYMax meet"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(-381.000000, -362.000000)"
                          fill="#FFFFFF"
                        >
                          <path
                            className="decor-path"
                            d="M1223,362 L1223,581 L381,581 C868.912802,575.666667 1149.57947,502.666667 1223,362 Z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="up-controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="value-pair">
                            <div className="label">Status:</div>
                            <div className="value badge badge-pill badge-success">
                              Online{" "}
                            </div>
                          </div>
                          <div className="value-pair">
                            <div className="label">Member Since:</div>
                            <div className="value">2011</div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-right">
                          <Link className="btn btn-primary btn-sm" to="/#">
                            <i className="os-icon os-icon-link-3"></i>
                            <span>Add to Friends</span>
                          </Link>
                          <Link className="btn btn-secondary btn-sm" to="/#">
                            <i className="os-icon os-icon-email-forward"></i>
                            <span>Send Message</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="up-contents">
                      <h5 className="element-header">Profile Statistics</h5>
                      <div className="row m-b">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="col-sm-6 b-r b-b">
                              <div className="el-tablo centered padded">
                                <div className="value">3814</div>
                                <div className="label">Products Sold</div>
                              </div>
                            </div>
                            <div className="col-sm-6 b-b b-r">
                              <div className="el-tablo centered padded">
                                <div className="value">47.5K</div>
                                <div className="label">Followers</div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6 b-r">
                              <div className="el-tablo centered padded">
                                <div className="value">$95</div>
                                <div className="label">Daily Earnings</div>
                              </div>
                            </div>
                            <div className="col-sm-6 b-r">
                              <div className="el-tablo centered padded">
                                <div className="value">12</div>
                                <div className="label">Products</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="padded">
                            <div className="element-info-with-icon smaller">
                              <div className="element-info-icon">
                                <div className="os-icon os-icon-bar-chart-stats-up"></div>
                              </div>
                              <div className="element-info-text">
                                <h5 className="element-inner-header">
                                  Monthly Revenue
                                </h5>
                                <div className="element-inner-desc">
                                  Calculated every month
                                </div>
                              </div>
                            </div>
                            <div className="el-chart-w">
                              <canvas
                                height="130"
                                id="liteLineChart"
                                width="300"
                              ></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="os-tabs-w">
                        <div className="os-tabs-controls">
                          <ul className="nav nav-tabs bigger">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                data-toggle="tab"
                                to="/#tab_overview"
                              >
                                Activity
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                data-toggle="tab"
                                to="/#tab_sales"
                              >
                                Daily Sales
                              </Link>
                            </li>
                          </ul>
                          <ul className="nav nav-pills smaller d-none d-md-flex">
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                data-toggle="tab"
                                to="/#"
                              >
                                Today
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                data-toggle="tab"
                                to="/#"
                              >
                                7 Days
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                data-toggle="tab"
                                to="/#"
                              >
                                14 Days
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                data-toggle="tab"
                                to="/#"
                              >
                                Last Month
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab_overview">
                            <div className="timed-activities padded">
                              <div className="timed-activity">
                                <div className="ta-date">
                                  <span>21st Jan, 2017</span>
                                </div>
                                <div className="ta-record-w">
                                  <div className="ta-record">
                                    <div className="ta-timestamp">
                                      <strong>11:55</strong> am
                                    </div>
                                    <div className="ta-activity">
                                      Created a post called{" "}
                                      <Link to="/#">Register new symbol</Link>{" "}
                                      in Rogue
                                    </div>
                                  </div>
                                  <div className="ta-record">
                                    <div className="ta-timestamp">
                                      <strong>2:34</strong> pm
                                    </div>
                                    <div className="ta-activity">
                                      Commented on story{" "}
                                      <Link to="/#">How to be a leader</Link> in{" "}
                                      <Link to="/#">Financial</Link> category
                                    </div>
                                  </div>
                                  <div className="ta-record">
                                    <div className="ta-timestamp">
                                      <strong>7:12</strong> pm
                                    </div>
                                    <div className="ta-activity">
                                      Added <Link to="/#">John Silver</Link> as
                                      a friend
                                    </div>
                                  </div>
                                  <div className="ta-record">
                                    <div className="ta-timestamp">
                                      <strong>9:39</strong> pm
                                    </div>
                                    <div className="ta-activity">
                                      Started following user{" "}
                                      <Link to="/#">Ben Mosley</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="timed-activity">
                                <div className="ta-date">
                                  <span>3rd Feb, 2017</span>
                                </div>
                                <div className="ta-record-w">
                                  <div className="ta-record">
                                    <div className="ta-timestamp">
                                      <strong>9:32</strong> pm
                                    </div>
                                    <div className="ta-activity">
                                      Added <Link to="/#">John Silver</Link> as
                                      a friend
                                    </div>
                                  </div>
                                  <div className="ta-record">
                                    <div className="ta-timestamp">
                                      <strong>5:14</strong> pm
                                    </div>
                                    <div className="ta-activity">
                                      Commented on story{" "}
                                      <Link to="/#">How to be a leader</Link> in{" "}
                                      <Link to="/#">Financial</Link> category
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="timed-activity">
                                <div className="ta-date">
                                  <span>21st Jan, 2017</span>
                                </div>
                                <div className="ta-record-w">
                                  <div className="ta-record">
                                    <div className="ta-timestamp">
                                      <strong>11:55</strong> am
                                    </div>
                                    <div className="ta-activity">
                                      Created a post called{" "}
                                      <Link to="/#">Register new symbol</Link>{" "}
                                      in Rogue
                                    </div>
                                  </div>
                                  <div className="ta-record">
                                    <div className="ta-timestamp">
                                      <strong>2:34</strong> pm
                                    </div>
                                    <div className="ta-activity">
                                      Commented on story{" "}
                                      <Link to="/#">How to be a leader</Link> in{" "}
                                      <Link to="/#">Financial</Link> category
                                    </div>
                                  </div>
                                  <div className="ta-record">
                                    <div className="ta-timestamp">
                                      <strong>9:39</strong> pm
                                    </div>
                                    <div className="ta-activity">
                                      Started following user{" "}
                                      <Link to="/#">Ben Mosley</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="tab_sales">
                            <div className="el-tablo">
                              <div className="label">Unique Visitors</div>
                              <div className="value">12,537</div>
                            </div>
                            <div className="el-chart-w">
                              <canvas
                                height="150px"
                                id="lineChart"
                                width="600px"
                              ></canvas>
                            </div>
                          </div>
                          <div className="tab-pane" id="tab_conversion"></div>
                        </div>
                      </div>
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
                <div className="floated-chat-btn">
                  <i className="os-icon os-icon-mail-07"></i>
                  <span>Demo Chat</span>
                </div>
                <div className="floated-chat-w">
                  <div className="floated-chat-i">
                    <div className="chat-close">
                      <i className="os-icon os-icon-close"></i>
                    </div>
                    <div className="chat-head">
                      <div className="user-w with-status status-green">
                        <div className="user-avatar-w">
                          <div className="user-avatar">
                            <img alt="" src="img/avatar1.jpg" />
                          </div>
                        </div>
                        <div className="user-name">
                          <h6 className="user-title">John Mayers</h6>
                          <div className="user-role">Account Manager</div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-messages">
                      <div className="message">
                        <div className="message-content">
                          Hi, how can I help you?
                        </div>
                      </div>
                      <div className="date-break">Mon 10:20am</div>
                      <div className="message">
                        <div className="message-content">
                          Hi, my name is Mike, I will be happy to assist you
                        </div>
                      </div>
                      <div className="message self">
                        <div className="message-content">
                          Hi, I tried ordering this product and it keeps showing
                          me error code.
                        </div>
                      </div>
                    </div>
                    <div className="chat-controls">
                      <input
                        className="message-input"
                        placeholder="Type your message here..."
                      />
                      <div className="chat-extra">
                        <Link to="/#">
                          <span className="extra-tooltip">Attach Document</span>
                          <i className="os-icon os-icon-documents-07"></i>
                        </Link>
                        <Link to="/#">
                          <span className="extra-tooltip">Insert Photo</span>
                          <i className="os-icon os-icon-others-29"></i>
                        </Link>
                        <Link to="/#">
                          <span className="extra-tooltip">Upload Video</span>
                          <i className="os-icon os-icon-ui-51"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-panel">
                <div className="content-panel-close">
                  <i className="os-icon os-icon-close"></i>
                </div>
                <div className="element-wrapper">
                  <h6 className="element-header">Support Agents</h6>
                  <div className="element-box-tp">
                    <div className="profile-tile">
                      <Link
                        className="profile-tile-box"
                        to="/users_profile_small.html"
                      >
                        <div className="pt-avatar-w">
                          <img alt="" src="img/avatar1.jpg" />
                        </div>
                        <div className="pt-user-name">John Mayers</div>
                      </Link>
                      <div className="profile-tile-meta">
                        <ul>
                          <li>
                            Last Login:<strong>Online Now</strong>
                          </li>
                          <li>
                            Tickets:
                            <strong>
                              <Link to="/apps_support_index.html">12</Link>
                            </strong>
                          </li>
                          <li>
                            Response Time:<strong>2 hours</strong>
                          </li>
                        </ul>
                        <div className="pt-btn">
                          <Link
                            className="btn btn-success btn-sm"
                            to="/apps_full_chat.html"
                          >
                            Send Message
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="profile-tile">
                      <Link
                        className="profile-tile-box"
                        to="/users_profile_small.html"
                      >
                        <div className="pt-avatar-w">
                          <img alt="" src="img/avatar3.jpg" />
                        </div>
                        <div className="pt-user-name">Ben Gossman</div>
                      </Link>
                      <div className="profile-tile-meta">
                        <ul>
                          <li>
                            Last Login:<strong>Offline</strong>
                          </li>
                          <li>
                            Tickets:
                            <strong>
                              <Link to="/apps_support_index.html">9</Link>
                            </strong>
                          </li>
                          <li>
                            Response Time:<strong>3 hours</strong>
                          </li>
                        </ul>
                        <div className="pt-btn">
                          <Link
                            className="btn btn-secondary btn-sm"
                            to="/apps_full_chat.html"
                          >
                            Send Message
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="element-wrapper">
                  <h6 className="element-header">Team Members</h6>
                  <div className="element-box-tp">
                    <div className="input-search-w">
                      <input
                        className="form-control rounded bright"
                        placeholder="Search team members..."
                        type="search"
                      />
                    </div>
                    <div className="users-list-w">
                      <div className="user-w with-status status-green">
                        <div className="user-avatar-w">
                          <div className="user-avatar">
                            <img alt="" src="img/avatar1.jpg" />
                          </div>
                        </div>
                        <div className="user-name">
                          <h6 className="user-title">John Mayers</h6>
                          <div className="user-role">Account Manager</div>
                        </div>
                        <div className="user-action">
                          <div className="os-icon os-icon-email-forward"></div>
                        </div>
                      </div>
                      <div className="user-w with-status status-green">
                        <div className="user-avatar-w">
                          <div className="user-avatar">
                            <img alt="" src="img/avatar2.jpg" />
                          </div>
                        </div>
                        <div className="user-name">
                          <h6 className="user-title">Ben Gossman</h6>
                          <div className="user-role">Administrator</div>
                        </div>
                        <div className="user-action">
                          <div className="os-icon os-icon-email-forward"></div>
                        </div>
                      </div>
                      <div className="user-w with-status status-red">
                        <div className="user-avatar-w">
                          <div className="user-avatar">
                            <img alt="" src="img/avatar3.jpg" />
                          </div>
                        </div>
                        <div className="user-name">
                          <h6 className="user-title">Phil Nokorin</h6>
                          <div className="user-role">HR Manger</div>
                        </div>
                        <div className="user-action">
                          <div className="os-icon os-icon-email-forward"></div>
                        </div>
                      </div>
                      <div className="user-w with-status status-green">
                        <div className="user-avatar-w">
                          <div className="user-avatar">
                            <img alt="" src="img/avatar4.jpg" />
                          </div>
                        </div>
                        <div className="user-name">
                          <h6 className="user-title">Jenny Miksa</h6>
                          <div className="user-role">Lead Developer</div>
                        </div>
                        <div className="user-action">
                          <div className="os-icon os-icon-email-forward"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="display-type"></div>
      </div>
    </div>
  );
}

export default UserProfileBig;
