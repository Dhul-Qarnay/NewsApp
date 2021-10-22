export default function error() {
  return (
    <div>
      <div className="preloader" id="preloader">
        <div className="spinner-grow text-secondary" role="status">
          <div className="sr-only">Loading...</div>
        </div>
      </div>
      {/* <!-- Header Area--> */}
      <div className="header-area" id="headerArea">
        <div className="container h-100 d-flex align-items-center justify-content-between">
          {/* <!-- Back Button--> */}
          <div className="back-button">
            <a href="home.html">
              <i className="lni lni-chevron-left"></i>
            </a>
          </div>
          {/* <!-- Page Title--> */}
          <div className="page-heading">
            <h6 className="mb-0">Page Not Found</h6>
          </div>
          {/* <!-- Search Form--> */}
          <div className="search-form">
            <a href="search.html">
              <i className="fa fa-search"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Sidenav Black Overlay--> */}
      <div className="sidenav-black-overlay"></div>
      {/* <!-- Side Nav Wrapper--> */}
      <div className="sidenav-wrapper" id="sidenavWrapper">
        {/* <!-- Time - Weather--> */}
        <div
          className="time-date-weather-wrapper text-center py-5"
          style="background-image: url('img/bg-img/1.jpg')"
        >
          <div className="weather-update mb-4">
            <l className="icon lni lni-cloudy-sun"></l>
            <h4 className="mb-1">92°F</h4>
            <h6 className="mb-0">Dhaka</h6>
            <p className="mb-0">Mostly sunny</p>
          </div>
          <div className="time-date">
            <div id="dashboardDate"></div>
            <div className="running-time d-flex justify-content-center">
              <div id="hours"></div>
              <span>:</span>
              <div id="min"></div>
              <span>:</span>
              <div id="sec"></div>
            </div>
          </div>
        </div>

        <ul className="sidenav-nav">
          <li>
            <a href="live.html">
              <i className="lni lni-play"></i>Live
              <span className="red-circle ml-2 flashing-effect"></span>
            </a>
          </li>
          <li>
            <a href="profile.html">
              <i className="lni lni-user"></i>My Profile
            </a>
          </li>
          <li>
            <a href="pages.html">
              <i className="lni lni-files"></i>All Pages
              <span className="ml-2 badge badge-danger">HOT</span>
            </a>
          </li>
          <li>
            <a href="catagory.html">
              <i className="lni lni-grid-alt"></i>All Category{" "}
              <span className="ml-2 badge badge-warning">14+</span>
            </a>
          </li>
          <li>
            <a href="settings.html">
              <i className="lni lni-cog"></i>Settings
            </a>
          </li>
          <li>
            <a href="login.html">
              <i className="lni lni-power-switch"></i>Log In
            </a>
          </li>
        </ul>

        <div className="go-home-btn" id="goHomeBtn">
          <i className="lni lni-arrow-left"></i>
        </div>
      </div>
      <div className="page-content-wrapper d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="error-content text-center">
            <img className="mb-3" src="img/bg-img/404.png" alt="" />
            <h3 className="mb-3">Oops! Page not found</h3>
            <p className="mb-4">
              We couldn't find any results for your search. <br /> Try again.
            </p>
            <a className="btn btn-primary" href="home.html">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
