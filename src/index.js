import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import Navbar from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";
import Redacted from "./Redacted";
import Sidebar from "./Sidebar";
import { Sparklines, SparklinesLine } from "react-sparklines";

import Table from "react-bootstrap/Table";

import "./index.css";

HC_more(Highcharts);

const options = {
  chart: {
    type: "bubble",
    plotBorderWidth: 1,
    zoomType: "xy",
  },

  legend: {
    enabled: false,
  },

  title: {
    text: "Zero search results term",
  },

  //   subtitle: {
  //     text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>',
  //   },

  accessibility: {
    point: {
      valueDescriptionFormat:
        "{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.",
    },
  },

  xAxis: {
    gridLineWidth: 1,
    title: {
      text: "Searches",
    },
    labels: {
      format: "{value} gr",
    },
    // plotLines: [
    //   {
    //     color: "black",
    //     dashStyle: "dot",
    //     width: 2,
    //     value: 65,
    //     label: {
    //       rotation: 0,
    //       y: 15,
    //       style: {
    //         fontStyle: "italic",
    //       },
    //       //    text: "Safe fat intake 65g/day",
    //     },
    //     zIndex: 3,
    //   },
    // ],
    accessibility: {
      rangeDescription: "Range: 60 to 200 grams.",
    },
  },

  yAxis: {
    startOnTick: false,
    endOnTick: false,
    title: {
      text: "Zero results frequency",
    },
    labels: {
      format: "{value} gr",
    },
    maxPadding: 0.2,
    // plotLines: [
    //   {
    //     color: "black",
    //     dashStyle: "dot",
    //     width: 2,
    //     value: 50,
    //     label: {
    //       align: "right",
    //       style: {
    //         fontStyle: "italic",
    //       },
    //       //  text: "Safe sugar intake 50g/day",
    //       x: -20,
    //     },
    //     zIndex: 3,
    //   },
    // ],
    accessibility: {
      rangeDescription: "Range: 0 to 160 grams.",
    },
  },

  tooltip: {
    useHTML: true,
    headerFormat: "<table>",
    pointFormat:
      '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
      "<tr><th>Fat intake:</th><td>{point.x}g</td></tr>" +
      "<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>" +
      "<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>",
    footerFormat: "</table>",
    followPointer: true,
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
    },
  },

  series: [
    {
      data: [
        {
          x: 95,
          y: 95,
          z: 100.8,
          name: "BE",
          country: "Belgium",
          color: "#228B22",
        },
        { x: 86.5, y: 202.9, z: 14.7, name: "DE", country: "Germany" },
        { x: 80.8, y: 91.5, z: 15.8, name: "FI", country: "Finland" },
        { x: 80.4, y: 202.5, z: 12, name: "NL", country: "Netherlands" },
        { x: 80.3, y: 86.1, z: 11.8, name: "SE", country: "Sweden" },
        { x: 78.4, y: 200.1, z: 16.6, name: "ES", country: "Spain" },
        { x: 74.2, y: 68.5, z: 14.5, name: "FR", country: "France" },
        { x: 73.5, y: 83.1, z: 20, name: "NO", country: "Norway" },
        { x: 71, y: 93.2, z: 24.7, name: "UK", country: "United Kingdom" },
        { x: 69.2, y: 57.6, z: 20.4, name: "IT", country: "Italy" },
        { x: 68.6, y: 20, z: 16, name: "RU", country: "Russia" },
        { x: 65.5, y: 126.4, z: 35.3, name: "US", country: "United States" },
        { x: 65.4, y: 50.8, z: 28.5, name: "HU", country: "Hungary" },
        { x: 63.4, y: 51.8, z: 15.4, name: "PT", country: "Portugal" },
        { x: 64, y: 82.9, z: 31.3, name: "NZ", country: "New Zealand" },
      ],
    },
  ],
};

const App = () => (
  <div className="container">
    <div className="navBar">
      <Navbar />
    </div>
    <div className="sideBar">
      <Sidebar />
    </div>
    <div className="mainContent">
      <div className="mainContent-container">
        <div className="breadcrumbs">
          <Breadcrumbs />
        </div>
        <div className="labels">
          <Redacted />
        </div>
        <div className="graphs">
          <HighchartsReact highcharts={Highcharts} options={options} />

          <table id="customers">
            <tr>
              <th>Search Terms</th>
              <th>Lost Engagement</th>
              <th>Search Count</th>
              <th width="200px"></th>
              <th>Category</th>
              <th>Sessions</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany </td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>UK</td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>France</td>
              <td>
                <Sparklines
                  data={[5, 20, 5, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    {/* <Navbar />
    <HighchartsReact highcharts={Highcharts} options={options} /> */}
  </div>
);

render(<App />, document.getElementById("root"));
