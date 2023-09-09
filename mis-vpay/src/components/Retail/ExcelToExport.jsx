import * as XLSX from "xlsx";
import excel from "../Assets/images/excel_icon.png";

export const ExcelToExport = () => {
  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();

    // Sales Table
    const SalesData = document.getElementById("table1");
    const table1Data = Array.from(SalesData.querySelectorAll("tr")).map((row) =>
      Array.from(row.querySelectorAll("td, th")).map((cell) => cell.textContent)
    );

    // Redemption Table
    const RedemptionData = document.getElementById("table2");
    const table2Data = Array.from(RedemptionData.querySelectorAll("tr")).map(
      (row) =>
        Array.from(row.querySelectorAll("td, th")).map(
          (cell) => cell.textContent
        )
    );

    // NetSales Table
    const NetSalesData = document.getElementById("table3");
    const table3Data = Array.from(NetSalesData.querySelectorAll("tr")).map(
      (row) =>
        Array.from(row.querySelectorAll("td, th")).map(
          (cell) => cell.textContent
        )
    );

    const table1Worksheet = XLSX.utils.aoa_to_sheet(table1Data);
    XLSX.utils.book_append_sheet(workbook, table1Worksheet, "SalesData");

    const table2Worksheet = XLSX.utils.aoa_to_sheet(table2Data);
    XLSX.utils.book_append_sheet(workbook, table2Worksheet, "RedemptionData");

    const table3Worksheet = XLSX.utils.aoa_to_sheet(table3Data);
    XLSX.utils.book_append_sheet(workbook, table3Worksheet, "NetSalesData");

    XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    const blob = new Blob(
      [XLSX.write(workbook, { bookType: "xlsx", type: "array" })],
      {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }
    );

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "SummaryTransactionReport.xlsx";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button onClick={exportToExcel} className="border-0">
      <img src={excel} alt="excelicon" />{" "}
    </button>
  );
};
