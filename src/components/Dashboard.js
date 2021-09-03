import React from 'react'

const Dashboard = () => {
    return (
            <div className="page-wrapper">
            {/* ============================================================== */}
            {/* Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            <div className="page-breadcrumb border-bottom">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-xs-12 justify-content-start d-flex align-items-center">
                  <h5 className="font-weight-medium text-uppercase mb-0">
                    tarter Page
                  </h5>
                </div>
                <div className="col-lg-9 col-md-8 col-xs-12 d-flex justify-content-start justify-content-md-end align-self-center">
                  <nav aria-label="breadcrumb" className="mt-2">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        tarter Page
                      </li>
                    </ol>
                  </nav>
                  <button className="btn btn-danger text-white ms-3 d-none d-md-block">
                    Buy Ample Admin
                  </button>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* -------------------------------------------------------------- */}
            {/* Container fluid  */}
            {/* -------------------------------------------------------------- */}
            <div className="container-fluid page-content">
              {/* -------------------------------------------------------------- */}
              {/* Start Page Content */}
              {/* -------------------------------------------------------------- */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      This is some text within a card block.
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------------------------------------------------- */}
              {/* End PAge Content */}
              {/* -------------------------------------------------------------- */}
            </div>
            {/* -------------------------------------------------------------- */}
            {/* End Container fluid  */}
            {/* -------------------------------------------------------------- */}
            {/* -------------------------------------------------------------- */}
            {/* footer */}
            {/* -------------------------------------------------------------- */}
            
            {/* -------------------------------------------------------------- */}
            {/* End footer */}
            {/* -------------------------------------------------------------- */}
          </div>
    )
}

export default Dashboard
