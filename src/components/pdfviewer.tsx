import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

const PDFViewer = ({ src }: { src: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
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
      setPageNumber((prevPageNumber) => prevPageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < (numPages ?? 1)) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Document
        file={src}
        onLoadSuccess={onDocumentLoadSuccess}
        onError={onDocumentError}
        className="mb-4"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p className="mb-2">
        Page {pageNumber} of {numPages ?? "..."}
      </p>
      <div className="flex">
        <button
          onClick={handlePrevPage}
          disabled={pageNumber === 1}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={pageNumber === (numPages ?? 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
