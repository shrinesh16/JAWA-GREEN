import React from "react";
import "./Home.css"; // Custom CSS for extra styling

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background */}
      <div className="hero-section">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
          <a className="navbar-brand fs-2 fw-bold" href="https://www.google.com/maps/place/Java+Green+Food+Court/@12.8233255,80.0444982,955m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52f70d2d3edc67:0xa5bcea4871048c90!8m2!3d12.8233255!4d80.0444982!16s%2Fg%2F1tgj_1j0?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
  JAVA GREEN
</a>

            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-light">Log in</a>
              <a href="#" className="btn btn-outline-light">Sign up</a>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        <div className="hero-content text-center text-white">
          <h1 className="fw-bold">Foods & Drinks in SRM university</h1>
          <div className="search-bar">
            <select className="form-select location">
              <option>SRM</option>
            </select>
            <input type="text" className="form-control" placeholder="Search for restaurant, cuisine or a dish" />
          </div>
        </div>
      </div>

      {/* Order & Dining Options */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/031/415/194/small_2x/tasty-food-plate-on-a-black-background-ai-generated-photo.jpg" className="card-img-top" alt="Food"/>
              <div className="card-body">
                <h5 className="card-title">Order Online</h5>
                <p className="card-text">Stay home and order to your doorstep</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9574.jpg" className="card-img-top" alt="Dining"/>
              <div className="card-body">
                <h5 className="card-title">Dining</h5>
                <p className="card-text">View the city’s favourite dining venues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
