import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import pdf from "../../Assets/images/pdf_icon.png";

const ExportToPDF = () => {
  const generatePdf = (table, fileName) => {
    const pdf = new jsPDF("p", "pt", "letter");
    pdf.autoTable({
      html: table,
      filename: fileName,
      margin: { top: 40, bottom: 40, right: 40, left: 40 },
      styles: {
        font: "Arial",
        fontSize: 10,
        textColor: [0, 0, 255],
      },
      headerStyles: {
        fillColor: false, // Set the background color to false
        textColor: [0, 0, 255], // Set the text color to blue (RGB value)
        fontSize: 12,
      },
      bodyStyles: {
        textColor: 0,
      },
    });
    pdf.save(fileName + ".pdf");
  };
  
  

  const pdfExport = () => {
    const AUM = document.getElementById("AUM");
    const REGION = document.getElementById("REGION");
  
    if (AUM && AUM.className.includes("active")) {
      generatePdf(AUM, "AUMReport");
    } else if (REGION && REGION.className.includes("active")) {
      generatePdf(REGION, "RegionReport");
    }
  };
  
  


  return (
    <button onClick={pdfExport}  className="border-0">
      <img src={pdf} alt="pdficon" />
    </button>
  );
};

export default ExportToPDF;
