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
      format: "{value} k",
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
      format: "{value} %",
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
      "<tr><th>Searches:</th><td>{point.x}</td></tr>" +
      "<tr><th>Zero Results Frequency:</th><td>{point.y}%</td></tr>" +
      "<tr><th>Lost Site Engagement:</th><td>{point.z}%</td></tr>",
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
          x: 99,
          y: 36.430464039415966,
          z: 47.56649168853893,
          name: "christmas",
          country: "christmas",
          color: "#00C0C7",
        },
        {
          x: 95,
          y: 86.98209428149644,
          z: 42.89938757655293,
          name: "kombucha",
          country: "kombucha",
          color: "#E8871A",
        },
        {
          x: 91,
          y: 43.176743212991886,
          z: 40.86832895888014,
          name: "store locator",
          country: "store locator",
          color: "#E8871A",
        },
        {
          x: 86,
          y: 75.61616778435406,
          z: 38.062117235345582,
          name: "seltzer",
          country: "seltzer",
          color: "#DA3490",
        },
        {
          x: 80,
          y: 72.07,
          z: 37.2555,
          name: "gift certificate",
          country: "gift certificate",
          color: "#9089FA",
        },
        {
          x: 77,
          y: 80.1,
          z: 34.9,
          name: "dextrose",
          country: "dextrose",
          color: "#00C0C7",
        },
        {
          x: 72,
          y: 68.5,
          z: 31.59,
          name: "no",
          country: "no",
          color: "#5144D3",
        },
        {
          x: 69,
          y: 29.67,
          z: 29.4,
          name: "beer",
          country: "beer",
          color: "#E8871A",
        },
        {
          x: 68,
          y: 67.35,
          z: 26.4,
          name: "ale",
          country: "ale",
          color: "#DA3490",
        },
        {
          x: 63,
          y: 31.76,
          z: 25.64,
          name: "kegerator",
          country: "kegerator",
          color: "#9089FA",
        },
        {
          x: 59,
          y: 31.07,
          z: 25.64,
          name: "cranberry",
          country: "cranberry",
          color: "#00C0C7",
        },
        {
          x: 52,
          y: 70.4,
          z: 22.64,
          name: "premium edition",
          country: "premium edition",
          color: "#5144D3",
        },
        {
          x: 47,
          y: 71.9,
          z: 21.83,
          name: "killians red",
          country: "killians red",
          color: "#E8871A",
        },
        {
          x: 47,
          y: 5.8,
          z: 20.833,
          name: "discounts",
          country: "discounts",
          color: "#DA3490",
        },
        {
          x: 44,
          y: 4.25,
          z: 18.833,
          name: "status",
          country: "status",
          color: "#9089FA",
        },
        {
          x: 40,
          y: 52.9,
          z: 16.83,
          name: "grainfather",
          country: "grainfather",
          color: "#5144D3",
        },
        {
          x: 39,
          y: 35.9,
          z: 15.3,
          name: "carbonatio",
          country: "carbonatio",
          color: "#E8871A",
        },
        {
          x: 34,
          y: 60.9,
          z: 12.3,
          name: "sugar conversion",
          country: "sugar conversion",
          color: "#DA3490",
        },
        {
          x: 30,
          y: 22.9,
          z: 10.3,
          name: "wort chiller",
          country: "wort chiller",
          color: "#9089FA",
        },
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
              <th>Lost Engagement(%)</th>
              <th>Search Count</th>
              <th width="200px"></th>
              <th>Category</th>
              <th>Sessions</th>
            </tr>
            <tr>
              <td>christmas</td>
              <td>47.56</td>
              <td>99</td>
              <td>
                <Sparklines
                  data={[5, 20, 56, 41]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>
              <td>Festive</td>
              <td>80k</td>
            </tr>
            <tr>
              <td>kombucha</td>
              <td>42.89</td>
              <td>95</td>
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
              <td>Beverages</td>
              <td>80k</td>
            </tr>
            <tr>
              <td>store locator</td>
              <td>40.86</td>
              <td>91</td>
              <td>
                <Sparklines
                  data={[5, 20, 80, 40]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Location</td>
              <td>77k</td>
            </tr>
            <tr>
              <td>seltzer</td>
              <td>38.06</td>
              <td>86</td>
              <td>
                <Sparklines
                  data={[15, 5, 15, 40]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Beverages</td>
              <td>75k</td>
            </tr>
            <tr>
              <td>gift certificate</td>
              <td>37.25</td>
              <td>80</td>
              <td>
                <Sparklines
                  data={[12, 20, 25, 3]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Offers</td>
              <td>25k</td>
            </tr>
            <tr>
              <td>dextrose</td>
              <td>34.90</td>
              <td>77</td>
              <td>
                <Sparklines
                  data={[51, 10, 15, 70]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>41k</td>
            </tr>
            <tr>
              <td>no</td>
              <td>29.4</td>
              <td>72</td>
              <td>
                <Sparklines
                  data={[25, 50, 59, 80]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>2k</td>
            </tr>
            <tr>
              <td>beer</td>
              <td>29.4</td>
              <td>69</td>
              <td>
                <Sparklines
                  data={[75, 20, 85, 40]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Beverages</td>
              <td>50k</td>
            </tr>
            <tr>
              <td>ale</td>
              <td>25.64</td>
              <td>68</td>
              <td>
                <Sparklines
                  data={[53, 20, 45, 6]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>
              <td>Beverages</td>
              <td>75k</td>
            </tr>
            <tr>
              <td>kegerator</td>
              <td>25.64</td>
              <td>63</td>
              <td>
                <Sparklines
                  data={[51, 89, 51, 70]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>30k</td>
            </tr>

            <tr>
              <td>cranberry</td>
              <td>25.64</td>
              <td>59</td>
              <td>
                <Sparklines
                  data={[5, 89, 51, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Beverages</td>
              <td>60k</td>
            </tr>

            <tr>
              <td>premium edition</td>
              <td>22.64</td>
              <td>52</td>
              <td>
                <Sparklines
                  data={[1, 8, 51, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>9k</td>
            </tr>

            <tr>
              <td>killians red</td>
              <td>21.83</td>
              <td>47</td>
              <td>
                <Sparklines
                  data={[12, 4, 47, 84]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>Beverages</td>
              <td>56k</td>
            </tr>

            <tr>
              <td>discounts</td>
              <td>20.833</td>
              <td>47</td>
              <td>
                <Sparklines
                  data={[12, 89, 56, 23]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>60k</td>
            </tr>

            <tr>
              <td>status</td>
              <td>18.833</td>
              <td>44</td>
              <td>
                <Sparklines
                  data={[31, 39, 81, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>20k</td>
            </tr>

            <tr>
              <td>grainfather</td>
              <td>16.83</td>
              <td>40</td>
              <td>
                <Sparklines
                  data={[21, 69, 83, 10]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>50k</td>
            </tr>

            <tr>
              <td>carbonatio</td>
              <td>15.3</td>
              <td>39</td>
              <td>
                <Sparklines
                  data={[12, 23, 5, 60]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>8k</td>
            </tr>

            <tr>
              <td>sugar conversion</td>
              <td>12.3</td>
              <td>34</td>
              <td>
                <Sparklines
                  data={[38, 33, 71, 20]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>1k</td>
            </tr>

            <tr>
              <td>wort chiller</td>
              <td>10.3</td>
              <td>30</td>
              <td>
                <Sparklines
                  data={[45, 23, 12, 90]}
                  limit={5}
                  width={200}
                  height={20}
                  margin={2}
                >
                  <SparklinesLine color="lightBlue" />
                </Sparklines>
              </td>{" "}
              <td>-</td>
              <td>20k</td>
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
