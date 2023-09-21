import React, { useMemo } from "react";
import { useRegionApi } from "../../Retail/RetailApi/Link_api";
import Loader from "../Loader";

const RegionWiseRedemption = ({
  formatNumberToIndianFormat,regions,loading
}) => {

  let totalEquity = 0;
  let totalHybrid = 0;
  let totalArbitrage = 0;
  let totalPassive = 0;
  let totalFixedIncome = 0;
  let totalCash = 0;
  let grandTotal = 0;

  return (
    <div>
      <div className="head">
        <h4>
          <b>REDEMPTION</b>
        </h4>
        <h5>
          <b className="gray-color">(In Lakhs)</b>
        </h5>
      </div>
      <div className="col-md-3" />
      <div className="col-md-12">
        {loading ? (
          <Loader />
        ) : regions.length === 0 ? (
          <p>No data available.</p>
        ) : (
          <table
            className="mt-3 table active "
            style={{
              backgroundColor: "white",
              border: "2px solid",
              borderColor: "#EE8B3A",
              borderBottomColor: "white",
            }}
            id="region2"
          >
            <thead>
              <tr className="colorwhite BgcolorOrange">
                <th scope="col">REGION</th>
                <th scope="col" className="text-end">
                  Equity
                </th>
                <th scope="col" className="text-end">
                  Hybrid
                </th>
                <th scope="col" className="text-end">
                  Arbitrage
                </th>
                <th scope="col" className="text-end">
                  {" "}
                  Passive(ex-Debt)
                </th>
                <th scope="col" className="text-end">
                  Fixed Income
                </th>
                <th scope="col" className="text-end">
                  Cash
                </th>
                <th scope="col" className="text-end">
                  Total
                </th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#DADADA" }}>
              {regions.map((summary, index) => {
                totalEquity += parseFloat(summary.REQUITY);
                totalHybrid += parseFloat(summary.RHYBRID);
                totalArbitrage += parseFloat(summary.RARBITRAGE);
                totalPassive += parseFloat(summary.RPASSIVE);
                totalFixedIncome += parseFloat(summary.RFIXED_INCOME);
                totalCash += parseFloat(summary.RCASH);
                grandTotal += parseFloat(summary.RTOTAL);

                return (
                  <tr>
                    <td>
                      <button className="textlink">
                        {summary.REGION_NAME}{" "}
                      </button>
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(summary.REQUITY).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(summary.RHYBRID).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(summary.RARBITRAGE).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(summary.RPASSIVE).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(summary.RFIXED_INCOME).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(summary.RCASH).toFixed(2)
                      )}
                    </td>
                    <td className="text-end" id="total">
                      {formatNumberToIndianFormat(
                        parseFloat(summary.RTOTAL).toFixed(2)
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr className="colorwhite BgcolorOrange">
                <td>TOTAL</td>
                <td className="text-end">
                  {formatNumberToIndianFormat(
                    parseFloat(totalEquity.toFixed(2))
                  )}
                </td>
                <td className="text-end">
                  {formatNumberToIndianFormat(
                    parseFloat(totalHybrid.toFixed(2))
                  )}
                </td>
                <td className="text-end">
                  {formatNumberToIndianFormat(
                    parseFloat(totalArbitrage.toFixed(2))
                  )}
                </td>
                <td className="text-end">
                  {formatNumberToIndianFormat(
                    parseFloat(totalPassive.toFixed(2))
                  )}
                </td>
                <td className="text-end">
                  {formatNumberToIndianFormat(
                    parseFloat(totalFixedIncome.toFixed(2))
                  )}
                </td>
                <td className="text-end">
                  {formatNumberToIndianFormat(parseFloat(totalCash.toFixed(2)))}
                </td>
                <td className="text-end">
                  {formatNumberToIndianFormat(
                    parseFloat(grandTotal.toFixed(2))
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RegionWiseRedemption;
