import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("Rendering welcome to mailbox client", () => {
  render(<WelcomePage />);

  const welcomeElement = screen.getByText('WElCOME TO MAILBOX CLIENT');
  expect(welcomeElement).toBeInTheDocument();
});
