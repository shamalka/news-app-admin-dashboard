import React from "react";
import App from "./App";
import {render, screen} from "@testing-library/react";

describe("App Component", function () {
    it("should have hello world message", function () {
        render(<App />);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
        // expect(screen).toMatchSnapshot();
    });
});
