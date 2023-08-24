import React from "react";

const TableRowWithCollapseRedemption = () => {
  return (
    <>
      <div className="new-component container-fluid p-0">
        <table className="table" style={{ backgroundColor: "white" }}>
          <thead>
            <tr className="">
              <th scope="col">S no.</th>

              <th scope="col">UFC code</th>

              <th scope="col">UFC</th>

              <th scope="col">
                Region{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Equity{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Hybrid{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Arbitrage{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Passive(ex-Debt){" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Fixed Income{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Cash{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Total{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
            </tr>
          </thead>

          <tbody>
            <tr style={{ backgroundColor: "#DADADA" }}>
              {" "}
              <td>1.</td>
              <td>
                <button className="textlink">
                  <b>203</b>
                </button>
              </td>
              <td>
                <button className="textlink">
                  <b>PATNA</b>
                </button>
              </td>
              <td>50445.55</td>
              <td>8400.66</td>
              <td>851.86</td>
              <td>851.86</td>
              <td>8701.79</td>
              <td>49287.18</td>
              <td>39089.01</td>
              <td>156776.05</td>
            </tr>

            <tr style={{ backgroundColor: "#C5C5C5" }}>
              {" "}
              <td>2.</td>
              <td>
                <button className="textlink">
                  <b>431</b>
                </button>
              </td>
              <td>
                <button className="textlink">
                  <b>BHAGALPUR</b>
                </button>
              </td>
              <td>102.45</td>
              <td>18.54</td>
              <td>1.05</td>
              <td>1.05</td>
              <td>62.47</td>
              <td>37.6</td>
              <td>657.39</td>
              <td>879.5</td>
            </tr>

            <tr style={{ backgroundColor: "#DADADA" }}>
              {" "}
              <td>3.</td>
              <td>
                <button className="textlink">
                  <b>442</b>
                </button>
              </td>
              <td>
                <button className="textlink">
                  <b>GAYA</b>
                </button>
              </td>
              <td>50445.55</td>
              <td>8400.66</td>
              <td>851.86</td>
              <td>851.86</td>
              <td>8701.79</td>
              <td>49287.18</td>
              <td>39089.01</td>
              <td>156776.05</td>
            </tr>

            <tr style={{ backgroundColor: "#C5C5C5" }}>
              {" "}
              <td>4.</td>
              <td>
                <button className="textlink">
                  <b>445</b>
                </button>
              </td>
              <td>
                <button className="textlink">
                  <b>DARBHANGA</b>
                </button>
              </td>
              <td>102.45</td>
              <td>18.54</td>
              <td>1.05</td>
              <td>1.05</td>
              <td>62.47</td>
              <td>37.6</td>
              <td>657.39</td>
              <td>879.5</td>
            </tr>

            <tr style={{ backgroundColor: "#DADADA" }}>
              {" "}
              <td>5.</td>
              <td>
                <button className="textlink">
                  <b>446</b>
                </button>
              </td>
              <td>
                <button className="textlink">
                  <b>MUZAFFARPUR</b>
                </button>
              </td>
              <td>50445.55</td>
              <td>8400.66</td>
              <td>851.86</td>
              <td>851.86</td>
              <td>8701.79</td>
              <td>49287.18</td>
              <td>39089.01</td>
              <td>156776.05</td>
            </tr>

            <tr className="">
              <td>Total</td>

              <td />

              <td />

              <td>50445.55</td>

              <td>8400.66</td>

              <td>851.86</td>

              <td>8701.79</td>

              <td>49287.18</td>

              <td>39089.01</td>

              <td>39089.01</td>

              <td>156776.05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRowWithCollapseRedemption;
