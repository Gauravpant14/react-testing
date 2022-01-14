import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import axiosMock from "axios";
import App from "./App";


describe("<App />", () => {
  it("fetches and displays data", async () => {
    await act(async() => {
      render(<App />);
    });
    const loadingSpan = screen.getByTestId("loading");
    expect(loadingSpan).toBeInTheDocument();
    await waitFor(() => expect(axiosMock.get.mockResolvedValueOnce({title: 'abc'})).toHaveBeenCalledTimes(1))
    // await waitFor(() => screen.getByTestId('resolved'));
    // expect(screen.getByTestId('resolved')).toBeInTheDocument();
  });
})
