import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

import p1 from '../assets/images/portfolio-1.jpg';
import p2 from '../assets/images/portfolio-2.jpg';
import p3 from '../assets/images/portfolio-3.jpg';
import p4 from '../assets/images/portfolio-4.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">{config.heading}</h1>
        <h3 className="mb-5">
          <em>{config.subHeading}</em>
        </h3>
        <Scroll type="id" element="about" offset={100}>
          <a className="btn btn-primary btn-xl" href="#about">
            About
          </a>
        </Scroll>
      </div>
      <div className="overlay"></div>
    </header>

    <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              Stylish Portfolio is the perfect theme for your next project!
            </h2>
            <p className="lead mb-5">
              This theme features a flexible, UX friendly sidebar menu and stock
              photos from our friends
            </p>
            <Scroll type="id" element="services" offset={100}>
              <a className="btn btn-dark btn-xl" href="#services">
                What We Offer
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

    <section
      className="content-section bg-primary text-white text-center"
      id="services"
    >
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Services</h3>
          <h2 className="mb-5">What We Offer</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-screen-smartphone"></i>
            </span>
            <h4>
              <strong>Responsive</strong>
            </h4>
            <p className="text-faded mb-0">Looks great on any screen size!</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-pencil"></i>
            </span>
            <h4>
              <strong>Redesigned</strong>
            </h4>
            <p className="text-faded mb-0">
              Freshly redesigned for Bootstrap 4.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-like"></i>
            </span>
            <h4>
              <strong>Favorited</strong>
            </h4>
            <p className="text-faded mb-0">
              Millions of users
              <i className="fas fa-heart"></i>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-mustache"></i>
            </span>
            <h4>
              <strong>Question</strong>
            </h4>
            <p className="text-faded mb-0">I mustache you a question...</p>
          </div>
        </div>
      </div>
    </section>

    <section className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5">
          Welcome to
          <em> your </em>
          next website!
        </h2>
        <a
          className="btn btn-primary btn-xl"
          href="https://github.com/anubhavsrivastava/gatsby-starter-stylish"
        >
          Download Now!
        </a>
      </div>
    </section>

    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a
              className="portfolio-item"
              href="https://trajanopastelaria.netlify.app/"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>Trajano Pastelaria</h2>
                  <p className="mb-0">
                    A full responsive website for a restaurant in Brazil
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p1} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a
              className="portfolio-item"
              href="https://joy-coffee-shop.netlify.app/"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>Coffee shop</h2>
                  <p className="mb-0">Not the other kind, just real coffee!</p>
                </span>
              </span>
              <img className="img-fluid" src={p2} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a
              className="portfolio-item"
              href="https://app.netlify.com/sites/backroads-joy/overview"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>Tour Agency</h2>
                  <p className="mb-0">Travel through the stories</p>
                </span>
              </span>
              <img className="img-fluid" src={p3} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="https://joyterra.netlify.app/">
              <span className="caption">
                <span className="caption-content">
                  <h2>Study Project</h2>
                  <p className="mb-0">Where Gatsby started for me</p>
                </span>
              </span>
              <img className="img-fluid" src={p4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-4">The buttons below are impossible to resist...</h2>
        <a href="/#" className="btn btn-xl btn-light mr-4">
          Click Me!
        </a>
        <a href="/#" className="btn btn-xl btn-dark">
          Look at Me!
        </a>
      </div>
    </section>

    <section id="contact" className="contact mt-5">
      <h2 class="h1-responsive text-center mb-5">Contact me :)</h2>
      <form
        action="https://formspree.io/xyynqgdy"
        method="POST"
        className="form"
      >
        <div class="md-form form-group mt-2">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Your name"
            aria-label="Add your name"
          />
        </div>

        <div class="md-form form-group">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Your email"
            aria-label="Add your email"
          />
        </div>

        <div class="md-form form-group">
          <textarea
            name="message"
            id="message"
            rows="10"
            className="form-control"
            placeholder="Write your message"
            aria-label="Add your mensage"
          />
        </div>

        <input
          type="submit"
          value="Send mensage"
          className="submit md-form form-group btn btn-secondary btn-lg btn-block"
          aria-label="Click to send"
        />
      </form>
    </section>

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
