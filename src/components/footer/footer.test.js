
import {render, screen} from "@testing-library/react";
import Footer from "./footer";

test("Should render", () => {
    render(<Footer/>)
    expect(screen.getByText(/Michael/i)).toBeInTheDocument();
})
