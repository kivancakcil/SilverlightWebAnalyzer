import React from "react";
import { render, screen } from "@testing-library/react";
import UrlInput from "../components/AnalysisPage/UrlInput";
import "@testing-library/jest-dom";

test("renders url input with analyze button", () => {
  render(<UrlInput />);
  const urlInput = screen.getByPlaceholderText("URL want to be checked");
  expect(urlInput).toBeInTheDocument();
  
  const analyzeButton = screen.getByRole("button", { name: "Analyze" });
  expect(analyzeButton).toBeInTheDocument();
});
