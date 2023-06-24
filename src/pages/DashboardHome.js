import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import ChartA from "../components/ChartA";
import ChartB from "../components/ChartB";
import "react-calendar/dist/Calendar.css";
import Map from "./Map";

const DashboardHome = () => {
  const [value, onChange] = useState(new Date());

  return (
    <main>
      <div className="container-fluid ">
        <h1 className="h3 mb-3">
          <strong>Analytics</strong> Dashboard
        </h1>

        <div className="row">
          <div className="col-xl-6 col-xxl-5 d-flex">
            <div className="w-100">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Review</h5>
                        </div>

                        <div className="col-auto">
                          <div className="stat text-primary">
                            <i
                              className=" fa-solid fa-book-open align-middle svg"
                              data-feather="truck"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3">79</h1>
                      <div className="mb-0">
                        <span className="text-danger">
                          <i className="mdi mdi-arrow-bottom-right fa-solid fa-arrow-down"></i>{" "}
                          -3.65%{" "}
                        </span>

                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Visitors</h5>
                        </div>

                        <div className="col-auto">
                          <div className="stat text-primary">
                            <i
                              className="fa-solid fa-users svg "
                              data-feather="users"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3">14.212</h1>
                      <div className="mb-0">
                        <span className="text-success">
                          <i className="mdi mdi-arrow-bottom-right fa-solid fa-arrow-up "></i>{" "}
                          5.25%{" "}
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">schedule</h5>
                        </div>

                        <div className="col-auto">
                          <div className="stat text-primary">
                            <i
                              className=" fa-solid fa-calendar-minus align-middle svg"
                              data-feather="dollar-sign"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3">3</h1>
                      <div className="mb-0">
                        <span className="text-success">
                          <i className="mdi mdi-arrow-bottom-right fa-solid fa-arrow-up"></i>{" "}
                          6.65%{" "}
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Message</h5>
                        </div>

                        <div className="col-auto">
                          <div className="stat text-primary">
                            <i
                              className="align-middle fa-regular fa-message svg"
                              data-feather="shopping-cart"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3">24</h1>
                      <div className="mb-0">
                        <span className="text-danger">
                          <i className="mdi mdi-arrow-bottom-righ fa-solid fa-arrow-down"></i>{" "}
                          -2.25%{" "}
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-xxl-7">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">Recent Movement</h5>
              </div>
              <div className="card-body py-3">
                <div className="chart chart-sm">
                  <ChartA />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="col-12 col-lg-8 col-xxl-9 d-flex">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Applicants Summary</h5>
            </div>
            <div className="card-body px-4">
              <ChartB />
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-12 col-lg-8 col-xxl-9 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h5 className="card-title mb-0">Latest Projects</h5>
            </div>
            <table className="table table-hover my-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="d-none d-xl-table-cell">Start Date</th>
                  <th className="d-none d-xl-table-cell">End Date</th>
                  <th>Status</th>
                  <th className="d-none d-md-table-cell">Assignee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project Apollo</td>
                  <td className="d-none d-xl-table-cell">01/01/2023</td>
                  <td className="d-none d-xl-table-cell">31/06/2023</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                </tr>
                <tr>
                  <td>Project Fireball</td>
                  <td className="d-none d-xl-table-cell">01/01/2023</td>
                  <td className="d-none d-xl-table-cell">31/06/2023</td>
                  <td>
                    <span className="badge bg-danger">Cancelled</span>
                  </td>
                  <td className="d-none d-md-table-cell">William Harris</td>
                </tr>
                <tr>
                  <td>Project Hades</td>
                  <td className="d-none d-xl-table-cell">01/01/2023</td>
                  <td className="d-none d-xl-table-cell">31/06/2023</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">Sharon Lessman</td>
                </tr>
                <tr>
                  <td>Project Nitro</td>
                  <td className="d-none d-xl-table-cell">01/01/2023</td>
                  <td className="d-none d-xl-table-cell">31/06/2023</td>
                  <td>
                    <span className="badge bg-warning">In progress</span>
                  </td>
                  <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                </tr>
                <tr>
                  <td>Project Phoenix</td>
                  <td className="d-none d-xl-table-cell">01/01/2023</td>
                  <td className="d-none d-xl-table-cell">31/06/2023</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">William Harris</td>
                </tr>
                <tr>
                  <td>Project X</td>
                  <td className="d-none d-xl-table-cell">01/01/2023</td>
                  <td className="d-none d-xl-table-cell">31/06/2023</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">Sharon Lessman</td>
                </tr>
                <tr>
                  <td>Project Romeo</td>
                  <td className="d-none d-xl-table-cell">01/01/2023</td>
                  <td className="d-none d-xl-table-cell">31/06/2023</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">Christina Mason</td>
                </tr>
                <tr>
                  <td>Project Wombat</td>
                  <td className="d-none d-xl-table-cell">01/01/2023</td>
                  <td className="d-none d-xl-table-cell">31/06/2023</td>
                  <td>
                    <span className="badge bg-warning">In progress</span>
                  </td>
                  <td className="d-none d-md-table-cell">William Harris</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
          <div className="card flex-fill">
            <div className="card-header">
              <h5 className="card-title mb-0">Calendar</h5>
            </div>
            <div className="card-body d-flex">
              <div className="align-self-center w-100">
                <div className="chart">
                  <div>
                    {" "}
                    <Calendar onChange={onChange} value={value} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardHome;
