import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

const PDFViewer = ({ src }: { src: string }) => {
  const [numPages, setNumPages] = useState<number | null>(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function onDocumentError(error: any) {
    console.error("Error loading PDF:", error);
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);

  const handlePrevPage = () => {
    if (pageNumber > 1 && numPages !== null) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages! && numPages !== null) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <Document
        file={src}
        onLoadSuccess={onDocumentLoadSuccess}
        onError={onDocumentError}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={handlePrevPage} disabled={pageNumber === 1}>
        Previous Page
      </button>
      <button onClick={handleNextPage} disabled={pageNumber === numPages}>
        Next Page
      </button>
    </div>
  );
};

export default PDFViewer;
