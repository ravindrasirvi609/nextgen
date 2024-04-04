"use client";
import PDFViewer from "@/components/pdfviewer";
import React, { useEffect, useState } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const BooksById = () => {
  const pdfFileUrl = "/dummy.pdf";
  return (
    <div className="py-44 w-full bg-gray-100 flex justify-center items-center">
      <div className="bg-gray-900 p-4 shadow-lg rounded-lg">
        <PDFViewer src={pdfFileUrl} />
      </div>
    </div>
  );
};

export default BooksById;
