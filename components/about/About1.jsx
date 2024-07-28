import React from "react";
import Link from "next/link";
function About1() {
  return (
    <>
      <div className="about1-section pt-120 pb-120">
        <img
          src="assets/images/bg/section-bg1.png"
          className="img-fluid section-bg1"
          alt="image"
        />
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 order-lg-1 order-2">
              <div
                className="about1-content wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span>-About Our Company-</span>
                <h3>
                  We are committed to providing our customers with exceptional.
                </h3>
                <p className="para">
                  Lorem Ipsum is simply dummy text of free available in market
                  the way printing and typesetting industry has been the
                  industrys standard dummy text ever.
                </p>
                <ul className="about-list">
                  <li>Price of additional materials or parts (if needed)</li>
                  <li>Transportation cost for carrying new materials/parts</li>
                  <li>Interpreting services is our specialty</li>
                </ul>
                <Link href="/about">
                  <a
                    style={{ cursor: "pointer" }}
                    className="eg-btn btn--primary btn--lg"
                  >
                    KNOW MORE
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div
                className="about-images wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="row g-0">
                  <div className="col-6">
                    <img
                      src="assets/images/bg/about11.png"
                      className="about11 img-fluid"
                      alt="image"
                    />
                    <div className="experience-tag">
                      <div className="tag-inner">
                        <img
                          src="assets/images/icons/medal-icon.svg"
                          alt="image"
                        />
                        <h5>10+ Years Experience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 position-relative">
                    <img
                      src="assets/images/bg/about12.png"
                      className="about12 img-fluid"
                      alt="image"
                    />
                    <img
                      src="assets/images/bg/about13.png"
                      className="about13 img-fluid"
                      alt="image"
                    />
                    <img
                      src="assets/images/icons/sun-icon.svg"
                      className="sun-icon"
                      alt="image"
                    />
                    <img
                      src="assets/images/icons/about-dot.svg"
                      className="about-dot"
                      alt="image"
                    />
                    <img
                      src="assets/images/icons/about-triangle.svg"
                      className="about-triangle"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About1;
