import React from 'react'

const Sidebar = () => {
    return (
        <div>
                      <aside className="left-sidebar">
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar">
              {/* Sidebar navigation*/}
              <nav className="sidebar-nav">
                <ul id="sidebarnav">
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark profile-dd"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <img
                        src="ample/src/assets/images/users/1.jpg"
                        className="rounded-circle ms-2"
                        width={30}
                      />
                      <span className="hide-menu">Steve Jection </span>
                    </a>
                    <ul aria-expanded="false" className="collapse  first-level">
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="ti-user" />
                          <span className="hide-menu"> My Profile </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="ti-wallet" />
                          <span className="hide-menu"> My Balance </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="ti-email" />
                          <span className="hide-menu"> Inbox </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="ti-settings" />
                          <span className="hide-menu"> Account Setting </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="fas fa-power-off" />
                          <span className="hide-menu"> Logout </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-av-timer" />
                      <span className="hide-menu">Dashboard</span>
                      <span className="badge bg-inverse rounded-pill ms-auto me-3 font-weight-medium px-2 py-1">
                        6
                      </span>
                    </a>
                    <ul aria-expanded="false" className="collapse  first-level">
                      <li className="sidebar-item">
                        <a href="index.html" className="sidebar-link">
                          <i className="mdi mdi-adjust" />
                          <span className="hide-menu"> Dashboard 1 </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="index2.html" className="sidebar-link">
                          <i className="mdi mdi-adjust" />
                          <span className="hide-menu"> Dashboard 2 </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="index3.html" className="sidebar-link">
                          <i className="mdi mdi-adjust" />
                          <span className="hide-menu"> Dashboard 3 </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="index4.html" className="sidebar-link">
                          <i className="mdi mdi-adjust" />
                          <span className="hide-menu"> Dashboard 4 </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="index5.html" className="sidebar-link">
                          <i className="mdi mdi-adjust" />
                          <span className="hide-menu"> Dashboard 5 </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="index6.html" className="sidebar-link">
                          <i className="mdi mdi-adjust" />
                          <span className="hide-menu"> Dashboard 6 </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-cart-outline" />
                      <span className="hide-menu">Ecommerce</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="eco-products.html" className="sidebar-link">
                          <i className="mdi mdi-cards-variant" />
                          <span className="hide-menu">Products</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="eco-products-cart.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-cart" />
                          <span className="hide-menu">Products Cart</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="eco-products-edit.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-cart-plus" />
                          <span className="hide-menu">Products Edit</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="eco-products-detail.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-camera-burst" />
                          <span className="hide-menu">Product Details</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="eco-products-orders.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-chart-pie" />
                          <span className="hide-menu">Product Orders</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="eco-products-checkout.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-clipboard-check" />
                          <span className="hide-menu">Products Checkout</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-format-color-fill" />
                      <span className="hide-menu">Ui Elements </span>
                      <span className="badge bg-info rounded-pill ms-auto me-3 font-weight-medium px-2 py-1">
                        12
                      </span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="ui-accordian.html" className="sidebar-link">
                          <i className="mdi mdi-box-shadow" />
                          <span className="hide-menu"> Accordian</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-badge.html" className="sidebar-link">
                          <i className="mdi mdi-application" />
                          <span className="hide-menu"> Badge</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-buttons.html" className="sidebar-link">
                          <i className="mdi mdi-toggle-switch" />
                          <span className="hide-menu"> Buttons</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-modals.html" className="sidebar-link">
                          <i className="mdi mdi-tablet" />
                          <span className="hide-menu"> Modals</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-tab.html" className="sidebar-link">
                          <i className="mdi mdi-sort-variant" />
                          <span className="hide-menu"> Tab</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="ui-tooltip-popover.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-image-filter-vintage" />
                          <span className="hide-menu">
                            {" "}
                            Tooltip &amp; Popover
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-notification.html" className="sidebar-link">
                          <i className="mdi mdi-message-bulleted" />
                          <span className="hide-menu"> Notification</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-progressbar.html" className="sidebar-link">
                          <i className="mdi mdi-poll" />
                          <span className="hide-menu"> Progressbar</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-typography.html" className="sidebar-link">
                          <i className="mdi mdi-format-line-spacing" />
                          <span className="hide-menu"> Typography</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-bootstrap.html" className="sidebar-link">
                          <i className="mdi mdi-bootstrap" />
                          <span className="hide-menu"> Bootstrap Ui</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-breadcrumb.html" className="sidebar-link">
                          <i className="mdi mdi-equal" />
                          <span className="hide-menu"> Breadcrumb</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-lists.html" className="sidebar-link">
                          <i className="mdi mdi-file-video" />
                          <span className="hide-menu"> Lists</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-grid.html" className="sidebar-link">
                          <i className="mdi mdi-view-module" />
                          <span className="hide-menu"> Grid</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-carousel.html" className="sidebar-link">
                          <i className="mdi mdi-view-carousel" />
                          <span className="hide-menu"> Carousel</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-scrollspy.html" className="sidebar-link">
                          <i className="mdi mdi-crop-free" />
                          <span className="hide-menu"> Scrollspy</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-spinner.html" className="sidebar-link">
                          <i className="mdi mdi-application" />
                          <span className="hide-menu"> Spinner</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-toasts.html" className="sidebar-link">
                          <i className="mdi mdi-apple-safari" />
                          <span className="hide-menu"> Toasts</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-content-copy" />
                      <span className="hide-menu">Sample Pages</span>
                      <span className="badge bg-warning text-white rounded-pill ms-auto me-3 font-weight-medium px-2 py-1">
                        25
                      </span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="starter-kit.html" className="sidebar-link">
                          <i className="mdi mdi-crop-free" />
                          <span className="hide-menu">Starter Kit</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="has-arrow sidebar-link"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-email-open-outline" />
                          <span className="hide-menu">Email Templates</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="email-templete-alert.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-message-alert" />
                              <span className="hide-menu"> Alert </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="email-templete-basic.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-message-bulleted" />
                              <span className="hide-menu"> Basic</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="email-templete-billing.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-message-draw" />
                              <span className="hide-menu"> Billing</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="email-templete-password-reset.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-message-bulleted-off" />
                              <span className="hide-menu"> Password-Reset</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="has-arrow sidebar-link"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-account-circle" />
                          <span className="hide-menu">Authentication</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="authentication-login1.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-account-key" />
                              <span className="hide-menu"> Login </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="authentication-login2.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-account-key" />
                              <span className="hide-menu"> Login 2 </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="authentication-login3.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-account-key" />
                              <span className="hide-menu"> Login 3 </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="authentication-register1.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-account-plus" />
                              <span className="hide-menu"> Register</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="authentication-register2.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-account-plus" />
                              <span className="hide-menu"> Register 2</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="authentication-lockscreen.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-account-off" />
                              <span className="hide-menu"> Lockscreen</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="authentication-recover-password.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-account-convert" />
                              <span className="hide-menu">
                                {" "}
                                Recover password
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="has-arrow sidebar-link"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-alert-box" />
                          <span className="hide-menu">Error Pages</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            <a href="error-400.html" className="sidebar-link">
                              <i className="mdi mdi-alert-outline" />
                              <span className="hide-menu"> Error 400 </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a href="error-403.html" className="sidebar-link">
                              <i className="mdi mdi-alert-outline" />
                              <span className="hide-menu"> Error 403</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a href="error-404.html" className="sidebar-link">
                              <i className="mdi mdi-alert-outline" />
                              <span className="hide-menu"> Error 404</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a href="error-500.html" className="sidebar-link">
                              <i className="mdi mdi-alert-outline" />
                              <span className="hide-menu"> Error 500</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a href="error-503.html" className="sidebar-link">
                              <i className="mdi mdi-alert-outline" />
                              <span className="hide-menu"> Error 503</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a href="pages-animation.html" className="sidebar-link">
                          <i className="mdi mdi-debug-step-over" />
                          <span className="hide-menu">Animation</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="pages-search-result.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-search-web" />
                          <span className="hide-menu">Search Result</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="pages-gallery.html" className="sidebar-link">
                          <i className="mdi mdi-camera-iris" />
                          <span className="hide-menu">Gallery</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="pages-treeview.html" className="sidebar-link">
                          <i className="mdi mdi-file-tree" />
                          <span className="hide-menu">Treeview</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="pages-block-ui.html" className="sidebar-link">
                          <i className="mdi mdi-codepen" />
                          <span className="hide-menu">Block UI</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="pages-session-timeout.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-timer-off" />
                          <span className="hide-menu">Session Timeout</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="pages-session-idle-timeout.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-timer-sand-empty" />
                          <span className="hide-menu">
                            Session Idle Timeout
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="pages-utility-classes.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-tune" />
                          <span className="hide-menu">Helper Classes</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="pages-maintenance.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-camera-iris" />
                          <span className="hide-menu">Maintenance Page</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-apps" />
                      <span className="hide-menu">Apps</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="app-chats.html" className="sidebar-link">
                          <i className="mdi mdi-comment-processing-outline" />
                          <span className="hide-menu">Chat Message</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="app-contacts.html"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-account-box" />
                          <span className="hide-menu">Contact Table</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="app-notes.html"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-arrange-bring-forward" />
                          <span className="hide-menu">Notes</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="app-todo.html"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-clipboard-text" />
                          <span className="hide-menu">Todo</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="app-invoice.html"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-book" />
                          <span className="hide-menu">Invoice</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="has-arrow sidebar-link"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-inbox-arrow-down" />
                          <span className="hide-menu">Inbox</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            <a href="inbox-email.html" className="sidebar-link">
                              <i className="mdi mdi-email" />
                              <span className="hide-menu"> Email </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="inbox-email-detail.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-email-alert" />
                              <span className="hide-menu"> Email Detail </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="inbox-email-compose.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-email-secure" />
                              <span className="hide-menu"> Email Compose </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="has-arrow sidebar-link"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="ti-user" />
                          <span className="hide-menu">Contacts</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="contact-list.html"
                              className="sidebar-link"
                            >
                              <i className="icon-people" />
                              <span className="hide-menu"> Contact List </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="contact-grid.html"
                              className="sidebar-link"
                            >
                              <i className="icon-user-follow" />
                              <span className="hide-menu"> Contacts Grid </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="has-arrow sidebar-link"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-bookmark-plus-outline" />
                          <span className="hide-menu">Tickets</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            <a href="ticket-list.html" className="sidebar-link">
                              <i className="mdi mdi-book-multiple" />
                              <span className="hide-menu"> Ticket List </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="ticket-detail.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-book-plus" />
                              <span className="hide-menu"> Ticket Detail </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a href="app-taskboard.html" className="sidebar-link">
                          <i className="mdi mdi-bulletin-board" />
                          <span className="hide-menu"> Taskboard </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <div className="devider" />
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-tune-vertical" />
                      <span className="hide-menu">Sidebar Type </span>
                    </a>
                    <ul aria-expanded="false" className="collapse  first-level">
                      <li className="sidebar-item">
                        <a
                          href="sidebar-type-minisidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-view-quilt" />
                          <span className="hide-menu"> Minisidebar </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="sidebar-type-iconsidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-view-parallel" />
                          <span className="hide-menu"> Icon Sidebar </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="sidebar-type-overlaysidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-view-day" />
                          <span className="hide-menu"> Overlay Sidebar </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="sidebar-type-fullsidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-view-array" />
                          <span className="hide-menu"> Full Sidebar </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-content-copy" />
                      <span className="hide-menu">Page Layouts </span>
                    </a>
                    <ul aria-expanded="false" className="collapse  first-level">
                      <li className="sidebar-item">
                        <a
                          href="layout-inner-fixed-left-sidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-format-align-left" />
                          <span className="hide-menu">
                            {" "}
                            Inner Fixed Left Sidebar{" "}
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="layout-inner-fixed-right-sidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-format-align-right" />
                          <span className="hide-menu">
                            {" "}
                            Inner Fixed Right Sidebar{" "}
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="layout-inner-left-sidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-format-float-left" />
                          <span className="hide-menu">
                            {" "}
                            Inner Left Sidebar{" "}
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="layout-inner-right-sidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-format-float-right" />
                          <span className="hide-menu">
                            {" "}
                            Inner Right Sidebar{" "}
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="page-layout-fixed-header.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-view-quilt" />
                          <span className="hide-menu"> Fixed Header </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="page-layout-fixed-sidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-view-parallel" />
                          <span className="hide-menu"> Fixed Sidebar </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="page-layout-fixed-header-sidebar.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-view-column" />
                          <span className="hide-menu">
                            {" "}
                            Fixed Header &amp; Sidebar{" "}
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="page-layout-boxed-layout.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-view-carousel" />
                          <span className="hide-menu"> Box Layout </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <div className="devider" />
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-clipboard-text" />
                      <span className="hide-menu">Forms</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-collage" />
                          <span className="hide-menu">Form Elements</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a href="form-inputs.html" className="sidebar-link">
                              <i className="mdi mdi-priority-low" />
                              <span className="hide-menu"> Forms Input</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-input-groups.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-rounded-corner" />
                              <span className="hide-menu"> Input Groups</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-input-grid.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-select-all" />
                              <span className="hide-menu"> Input Grid</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-checkbox-radio.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-shape-plus" />
                              <span className="hide-menu">
                                {" "}
                                Checkboxes &amp; Radios
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-bootstrap-touchspin.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-switch" />
                              <span className="hide-menu">
                                {" "}
                                Bootstrap Touchspin
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-bootstrap-switch.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-toggle-switch-off" />
                              <span className="hide-menu">
                                {" "}
                                Bootstrap Switch
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-select2.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-relative-scale" />
                              <span className="hide-menu"> Select2</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-dual-listbox.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-tab-unselected" />
                              <span className="hide-menu"> Dual Listbox</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-xditable.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-loop" />
                              <span className="hide-menu"> X-editable</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-receipt" />
                          <span className="hide-menu">Form Layouts</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a href="form-basic.html" className="sidebar-link">
                              <i className="mdi mdi-vector-difference-ba" />
                              <span className="hide-menu"> Basic Forms</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-horizontal.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-file-document-box" />
                              <span className="hide-menu">
                                {" "}
                                Form Horizontal
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-actions.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-code-greater-than" />
                              <span className="hide-menu"> Form Actions</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-row-separator.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-code-equal" />
                              <span className="hide-menu"> Row Separator</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-bordered.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-flip-to-front" />
                              <span className="hide-menu"> Form Bordered</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-striped-row.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-content-duplicate" />
                              <span className="hide-menu"> Striped Rows</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a href="form-detail.html" className="sidebar-link">
                              <i className="mdi mdi-cards-outline" />
                              <span className="hide-menu"> Form Detail</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-material.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-content-duplicate" />
                              <span className="hide-menu"> Form Material</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-float-input.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-logout" />
                              <span className="hide-menu">
                                {" "}
                                Form Float Input
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-code-equal" />
                          <span className="hide-menu">Form Addons</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="form-paginator.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-export" />
                              <span className="hide-menu"> Paginator</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-img-cropper.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-crop" />
                              <span className="hide-menu"> Image Cropper</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-dropzone.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-crosshairs-gps" />
                              <span className="hide-menu"> Dropzone</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a href="form-mask.html" className="sidebar-link">
                              <i className="mdi mdi-box-shadow" />
                              <span className="hide-menu"> Form Mask</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-typeahead.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-cards-variant" />
                              <span className="hide-menu"> Form Typehead</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-alert-box" />
                          <span className="hide-menu">Form Validation</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="form-bootstrap-validation.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-credit-card-scan" />
                              <span className="hide-menu">
                                {" "}
                                Bootstrap Validation
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-custom-validation.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-credit-card-plus" />
                              <span className="hide-menu">
                                {" "}
                                Custom Validation
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-pencil-box-outline" />
                          <span className="hide-menu">Form Pickers</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="form-picker-colorpicker.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-calendar-plus" />
                              <span className="hide-menu">
                                {" "}
                                Form Colorpicker
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-picker-datetimepicker.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-calendar-clock" />
                              <span className="hide-menu">
                                {" "}
                                Form Datetimepicker
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-picker-bootstrap-rangepicker.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-calendar-range" />
                              <span className="hide-menu">
                                {" "}
                                Form Bootstrap Rangepicker
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-picker-bootstrap-datepicker.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-calendar-check" />
                              <span className="hide-menu">
                                {" "}
                                Form Bootstrap Datepicker
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-picker-material-datepicker.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-calendar-text" />
                              <span className="hide-menu">
                                {" "}
                                Form Material Datepicker
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-dns" />
                          <span className="hide-menu">Form Editor</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="form-editor-ckeditor.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Ck Editor</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-editor-quill.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-drupal" />
                              <span className="hide-menu">Quill Editor</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-editor-summernote.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-brightness-6" />
                              <span className="hide-menu">
                                Summernote Editor
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="form-editor-tinymce.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-bowling" />
                              <span className="hide-menu">Tinymce Edtor</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-wizard.html" className="sidebar-link">
                          <i className="mdi mdi-cube-send" />
                          <span className="hide-menu">Form Wizard</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-repeater.html" className="sidebar-link">
                          <i className="mdi mdi-creation" />
                          <span className="hide-menu">Form Repeater</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-table" />
                      <span className="hide-menu">Tables</span>
                      <span className="badge bg-danger text-white rounded-pill ms-auto me-3 font-weight-medium px-2 py-1">
                        11
                      </span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-border-none" />
                          <span className="hide-menu">Bootstrap Tables</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a href="table-basic.html" className="sidebar-link">
                              <i className="mdi mdi-border-all" />
                              <span className="hide-menu">Basic Table </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="table-dark-basic.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-border-start" />
                              <span className="hide-menu">
                                Dark Basic Table{" "}
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="table-sizing.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-border-outside" />
                              <span className="hide-menu">Sizing Table </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="table-layout-coloured.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-border-bottom" />
                              <span className="hide-menu">
                                Coloured Table Layout
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-border-inside" />
                          <span className="hide-menu">Datatables</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="table-datatable-basic.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-border-vertical" />
                              <span className="hide-menu">
                                {" "}
                                Basic Initialisation
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="table-datatable-api.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-blur-linear" />
                              <span className="hide-menu"> API</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="table-datatable-advanced.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-border-style" />
                              <span className="hide-menu">
                                {" "}
                                Advanced Initialisation
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a href="table-bootstrap.html" className="sidebar-link">
                          <i className="mdi mdi-border-horizontal" />
                          <span className="hide-menu">Table Bootstrap</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="table-jsgrid.html" className="sidebar-link">
                          <i className="mdi mdi-border-top" />
                          <span className="hide-menu">Table Jsgrid</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="table-responsive.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-border-style" />
                          <span className="hide-menu">Table Responsive</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="table-footable.html" className="sidebar-link">
                          <i className="mdi mdi-tab-unselected" />
                          <span className="hide-menu">Table Footable</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-chart-bar" />
                      <span className="hide-menu">Charts</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="chart-morris.html" className="sidebar-link">
                          <i className="mdi mdi-image-filter-tilt-shift" />
                          <span className="hide-menu">Morris Chart</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-chart-js.html" className="sidebar-link">
                          <i className="mdi mdi-svg" />
                          <span className="hide-menu">Chartjs</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-sparkline.html" className="sidebar-link">
                          <i className="mdi mdi-chart-histogram" />
                          <span className="hide-menu">Sparkline Chart</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-chartist.html" className="sidebar-link">
                          <i className="mdi mdi-blur" />
                          <span className="hide-menu">Chartist Chart</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-blur-radial" />
                          <span className="hide-menu">Apex Charts</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="chart-apex-line.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-chart-line" />
                              <span className="hide-menu">Line Chart</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-apex-area.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-chart-areaspline" />{" "}
                              <span className="hide-menu">Area Chart</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-apex-bar.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-chart-gantt" />
                              <span className="hide-menu">Bar Chart</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-apex-pie.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-chart-pie" />
                              <span className="hide-menu">Pie Chart</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-apex-radial.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-chart-arc" />
                              <span className="hide-menu">Radial Chart</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-apex-radar.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-hexagon-outline" />{" "}
                              <span className="hide-menu">Radar Chart</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-chemical-weapon" />
                          <span className="hide-menu">C3 Charts</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="chart-c3-axis.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-arrange-bring-to-front" />
                              <span className="hide-menu">Axis Chart</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-c3-bar.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-arrange-send-to-back" />
                              <span className="hide-menu">Bar Chart</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-c3-data.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-backup-restore" />
                              <span className="hide-menu">Data Chart</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-c3-line.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-backburger" />
                              <span className="hide-menu">Line Chart</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-chart-areaspline" />
                          <span className="hide-menu">Echarts</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="chart-echart-basic.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-chart-line" />
                              <span className="hide-menu">Basic Charts</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-echart-bar.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-chart-scatterplot-hexbin" />
                              <span className="hide-menu">Bar Chart</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="chart-echart-pie-doughnut.html"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-chart-pie" />
                              <span className="hide-menu">
                                Pie &amp; Doughnut Chart
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <div className="devider" />
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-credit-card-multiple" />
                      <span className="hide-menu">Cards</span>
                    </a>
                    <ul aria-expanded="false" className="collapse  first-level">
                      <li className="sidebar-item">
                        <a href="ui-cards.html" className="sidebar-link">
                          <i className="mdi mdi-layers" />
                          <span className="hide-menu"> Basic Cards</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-card-customs.html" className="sidebar-link">
                          <i className="mdi mdi-credit-card-scan" />
                          <span className="hide-menu">Custom Cards</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-card-weather.html" className="sidebar-link">
                          <i className="mdi mdi-weather-fog" />
                          <span className="hide-menu">Weather Cards</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="ui-card-draggable.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-bandcamp" />
                          <span className="hide-menu">Draggable Cards</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-credit-card-multiple" />
                      <span className="hide-menu">Components</span>
                    </a>
                    <ul aria-expanded="false" className="collapse  first-level">
                      <li className="sidebar-item">
                        <a
                          href="component-sweetalert.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-layers" />
                          <span className="hide-menu"> Sweet Alert</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="component-nestable.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-credit-card-scan" />
                          <span className="hide-menu">Nestable</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="component-noui-slider.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-weather-fog" />
                          <span className="hide-menu">Noui slider</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="component-rating.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-bandcamp" />
                          <span className="hide-menu">Rating</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="component-toastr.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-poll" />
                          <span className="hide-menu">Toastr</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <div className="devider" />
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-settings" />
                      <span className="hide-menu">Widgets </span>
                    </a>
                    <ul aria-expanded="false" className="collapse  first-level">
                      <li className="sidebar-item">
                        <a href="widgets-feeds.html" className="sidebar-link">
                          <i className="mdi mdi-account-box" />
                          <span className="hide-menu"> Feed Widgets </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="widgets-apps.html" className="sidebar-link">
                          <i className="mdi mdi-comment-processing-outline" />
                          <span className="hide-menu"> Apps Widgets </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="widgets-data.html" className="sidebar-link">
                          <i className="mdi mdi-calendar" />
                          <span className="hide-menu"> Data Widgets </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="widgets-charts.html" className="sidebar-link">
                          <i className="mdi mdi-bulletin-board" />
                          <span className="hide-menu"> Charts Widgets</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-face" />
                      <span className="hide-menu">Icons</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="icon-material.html" className="sidebar-link">
                          <i className="mdi mdi-feather" />
                          <span className="hide-menu"> Feather Icons </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="icon-material.html" className="sidebar-link">
                          <i className="mdi mdi-emoticon" />
                          <span className="hide-menu"> Material Icons </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="icon-fontawesome.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-emoticon-cool" />
                          <span className="hide-menu"> Fontawesome Icons</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="icon-themify.html" className="sidebar-link">
                          <i className="mdi mdi-chart-bubble" />
                          <span className="hide-menu"> Themify Icons</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="icon-weather.html" className="sidebar-link">
                          <i className="mdi mdi-weather-cloudy" />
                          <span className="hide-menu"> Weather Icons</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="icon-simple-lineicon.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi mdi-image-broken-variant" />
                          <span className="hide-menu"> Simple Line icons</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="icon-flag.html" className="sidebar-link">
                          <i className="mdi mdi-flag-triangle" />
                          <span className="hide-menu"> Flag Icons</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="map-google.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-google-maps" />
                      <span className="hide-menu">Google Map</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="map-vector.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-map-marker-radius" />
                      <span className="hide-menu">Vector Map</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-account-multiple" />
                      <span className="hide-menu">Users</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="ui-user-card.html" className="sidebar-link">
                          <i className="mdi mdi-account-box" />
                          <span className="hide-menu"> User Card </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="pages-profile.html" className="sidebar-link">
                          <i className="mdi mdi-account-network" />
                          <span className="hide-menu"> User Profile</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="ui-user-contacts.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-account-star-variant" />
                          <span className="hide-menu"> User Contact</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-ungroup" />
                      <span className="hide-menu">Invoice</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="pages-invoice.html" className="sidebar-link">
                          <i className="mdi mdi-vector-triangle" />
                          <span className="hide-menu"> Invoice Layout </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="pages-invoice-list.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-vector-rectangle" />
                          <span className="hide-menu"> Invoice List</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-apple-safari" />
                      <span className="hide-menu">Timeline</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="timeline-center.html" className="sidebar-link">
                          <i className="mdi mdi-clock-fast" />
                          <span className="hide-menu"> Center Timeline </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="timeline-horizontal.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-clock-end" />
                          <span className="hide-menu">
                            {" "}
                            Horizontal Timeline
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="timeline-left.html" className="sidebar-link">
                          <i className="mdi mdi-clock-in" />
                          <span className="hide-menu"> Left Timeline</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="timeline-right.html" className="sidebar-link">
                          <i className="mdi mdi-clock-start" />
                          <span className="hide-menu"> Right Timeline</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="app-calendar.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-calendar-check" />
                      <span className="hide-menu">Calendar</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-notification-clear-all" />
                      <span className="hide-menu">Multi level dd</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="mdi mdi-octagram" />
                          <span className="hide-menu"> item 1.1</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="mdi mdi-octagram" />
                          <span className="hide-menu"> item 1.2</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="has-arrow sidebar-link"
                          href="javascript:void(0)"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-playlist-plus" />
                          <span className="hide-menu">Menu 1.3</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            <a
                              href="javascript:void(0)"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-octagram" />
                              <span className="hide-menu"> item 1.3.1</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="javascript:void(0)"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-octagram" />
                              <span className="hide-menu"> item 1.3.2</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="javascript:void(0)"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-octagram" />
                              <span className="hide-menu"> item 1.3.3</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a
                              href="javascript:void(0)"
                              className="sidebar-link"
                            >
                              <i className="mdi mdi-octagram" />
                              <span className="hide-menu"> item 1.3.4</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="mdi mdi-playlist-check" />
                          <span className="hide-menu"> item 1.4</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <div className="devider" />
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="../../../docs/documentation.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-adjust text-danger" />
                      <span className="hide-menu">Documentation</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="authentication-login3.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-adjust text-info" />
                      <span className="hide-menu">Log Out</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="pages-faq.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-adjust text-success" />
                      <span className="hide-menu">FAQs</span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
          </aside>
        </div>
    )
}

export default Sidebar
