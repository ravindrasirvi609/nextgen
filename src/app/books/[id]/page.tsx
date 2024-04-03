"use client";
import PDFViewer from "@/components/pdfviewer";
import React, { useEffect, useState } from "react";

interface PageProps {
  pdfUrl: string;
}

const Page: React.FC<PageProps> = ({ pdfUrl }) => {
  const pdfFileUrl = "/dummy.pdf";
  return (
    <div className="py-44">
      <h1>Page</h1>
      <PDFViewer src={pdfFileUrl} />
    </div>
  );
};

export default Page;
