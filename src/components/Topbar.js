import React from 'react';
import { Icon } from '@iconify/react';


const Topbar = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <img src="img/logo.png" alt="React Admin" />
        <span className="d-none d-lg-block">React Admin</span>
      </a>
      <i className="toggle-sidebar-btn"><Icon icon="bi:list" /></i>
    </div>

    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
      </form>
    </div>

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">

        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#search">
            <i className="bi bi-search"><Icon icon="ci:search-small" /></i>
          </a>
        </li>

        <li className="nav-item dropdown">

          <a className="nav-link nav-icon" href="#dropdown" data-bs-toggle="dropdown">
            <i><Icon icon="bi:bell" /></i>
            <span className="badge bg-primary badge-number">4</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <a href="#badge"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
              <i><Icon icon="ant-design:exclamation-circle-outlined" /></i>
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i><Icon icon="bx:bx-x-circle" /></i>
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i><Icon icon="clarity:check-circle-line text-success" /></i>
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
              <i><Icon icon="bi:info-circle text-primary" /></i>
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <a href="#show">Show all notifications</a>
            </li>

          </ul>

        </li>

        <li className="nav-item dropdown">

          <a className="nav-link nav-icon" href="#home" data-bs-toggle="dropdown">
            <i><Icon icon="bi:chat-left-text" /></i>
            <span className="badge bg-success badge-number">3</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              You have 3 new messages
              <a href="#home"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
              <a href="#home">
                <img src="img/messages-1.jpg" alt="" className="rounded-circle" />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
              <a href="#home">
                <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
              <a href="#home">
                <img src="img/messages-3.jpg" alt="" className="rounded-circle" />
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="dropdown-footer">
              <a href="#home">Show all messages</a>
            </li>

          </ul>

        </li>

        <li className="nav-item dropdown pe-3">

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#home" data-bs-toggle="dropdown">
            <img src="img/profile-img.jpg" alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i className="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="#home">
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>

          </ul>
        </li>

      </ul>
    </nav>

  </header>
    )
}

export default Topbar
