import React from 'react'

function Footer() {
  return (
    <>
    <br />
    <br />
      <footer className="footer py-4 bg-dark text-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 text-lg-start">Al Karim Website 2022</div>
                    <div className="col-lg-3 text-lg-start">Distributed By Themewagon</div>
                    <div className="col-lg-3 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-3 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer