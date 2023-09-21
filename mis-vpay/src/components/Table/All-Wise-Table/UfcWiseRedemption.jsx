import React from "react";
import Loader from "../Loader";

const UfcWiseRedemption = ({ formatNumberToIndianFormat, ufc, loading }) => {
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
        ) : ufc.length === 0 ? (
          <p>No data available.</p>
        ) : (
          <table className="mt-3 table "id="ufc2" style={{ fontSize: 14 }}>
            <thead style={{ backgroundColor: "#4C6072", color: "white" }}>
              <tr>
                <th scope="col">UFC Code</th>
                <th scope="col">UFC NAME</th>
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
              {ufc.map((ufc, index) => {
                totalEquity += parseFloat(ufc.REQUITY);
                totalHybrid += parseFloat(ufc.RHYBRID);
                totalArbitrage += parseFloat(ufc.RARBITRAGE);
                totalPassive += parseFloat(ufc.RPASSIVE);
                totalFixedIncome += parseFloat(ufc.RFIXED_INCOME);
                totalCash += parseFloat(ufc.RCASH);
                grandTotal += parseFloat(ufc.RTOTAL);
                return (
                  <tr key={index}>
                    <td>{ufc.UFC_CODE}</td>
                    <td>{ufc.UFC_NAME}</td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.REQUITY).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.RHYBRID).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.RARBITRAGE).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.RPASSIVE).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.RFIXED_INCOME).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.RCASH).toFixed(2)
                      )}
                    </td>
                    <td className="text-end" id="total">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.RTOTAL).toFixed(2)
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr style={{ backgroundColor: "#4C6072", color: "white" }}>
                <td>TOTAL</td>
                <td></td>
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

export default UfcWiseRedemption;
