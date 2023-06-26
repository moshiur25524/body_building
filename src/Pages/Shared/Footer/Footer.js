import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-5">
        <footer className="bg-light text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#333333" }}
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            &copy; 2016 - {new Date().getFullYear()} Copyright: Md. Moshiur
            Rahman
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
