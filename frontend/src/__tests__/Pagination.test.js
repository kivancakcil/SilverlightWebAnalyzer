import React from "react";
import { render, screen } from "@testing-library/react";
import Pagination from "../components//AnalysisPage/Pagination";

test("renders pagination with correct page numbers", () => {
  render(<Pagination urlsPerPage={3} totalUrls={10} currentPage={1} />);
  const pageNumbers = screen.getAllByRole("button");
  expect(pageNumbers).toHaveLength(4);
});
