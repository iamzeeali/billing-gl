import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [chartData, setChartData] = useState({
    LineChartData: {},
    barChartData: {},
  });

  useEffect(() => {
    setChartData({
      ...chartData,
      LineChartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Products",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      barChartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Business Partners",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    //eslint-diable-next-line
  }, []);

  const { LineChartData, barChartData } = chartData;

  return (
    <div>
      <div className='content-wrapper'>
        <div className='container-fluid'>
          <Link to='/create-pq'>Create PQ</Link>
          <div className='row'>
            <div className='col-xl-3 col-sm-6 mb-3'>
              <div className='card text-white bg-primary o-hidden h-100'>
                <div className='card-body'>
                  <div className='card-body-icon'>
                    <i className='fa fa-fw fa-comments'></i>
                  </div>
                  <div className='mr-5'>26 New Messages!</div>
                </div>
                <a
                  className='card-footer text-white clearfix small z-1'
                  href='#'
                >
                  <span className='float-left'>View Details</span>
                  <span className='float-right'>
                    <i className='fa fa-angle-right'></i>
                  </span>
                </a>
              </div>
            </div>
            <div className='col-xl-3 col-sm-6 mb-3'>
              <div className='card text-white bg-warning o-hidden h-100'>
                <div className='card-body'>
                  <div className='card-body-icon'>
                    <i className='fa fa-fw fa-list'></i>
                  </div>
                  <div className='mr-5'>11 New Tasks!</div>
                </div>
                <a
                  className='card-footer text-white clearfix small z-1'
                  href='#'
                >
                  <span className='float-left'>View Details</span>
                  <span className='float-right'>
                    <i className='fa fa-angle-right'></i>
                  </span>
                </a>
              </div>
            </div>
            <div className='col-xl-3 col-sm-6 mb-3'>
              <div className='card text-white bg-success o-hidden h-100'>
                <div className='card-body'>
                  <div className='card-body-icon'>
                    <i className='fa fa-fw fa-shopping-cart'></i>
                  </div>
                  <div className='mr-5'>123 New Orders!</div>
                </div>
                <a
                  className='card-footer text-white clearfix small z-1'
                  href='#'
                >
                  <span className='float-left'>View Details</span>
                  <span className='float-right'>
                    <i className='fa fa-angle-right'></i>
                  </span>
                </a>
              </div>
            </div>
            <div className='col-xl-3 col-sm-6 mb-3'>
              <div className='card text-white bg-danger o-hidden h-100'>
                <div className='card-body'>
                  <div className='card-body-icon'>
                    <i className='fa fa-fw fa-support'></i>
                  </div>
                  <div className='mr-5'>13 New Tickets!</div>
                </div>
                <a
                  className='card-footer text-white clearfix small z-1'
                  href='#'
                >
                  <span className='float-left'>View Details</span>
                  <span className='float-right'>
                    <i className='fa fa-angle-right'></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <p style={{ marginTop: "100px" }} className='lead'>
            Dashboard Analytics
          </p>
          <div className='row'>
            <div className='col-sm-6 col-md-6 animated fadeIn'>
              <div className=''>
                <Bar
                  data={barChartData}
                  options={{
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>

            <div className='col-sm-6 col-md-6 animated fadeIn'>
              <div className=''>
                <Line
                  data={LineChartData}
                  options={{
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
