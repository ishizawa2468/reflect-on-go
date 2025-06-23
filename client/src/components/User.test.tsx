import { render, screen } from "@testing-library/react";
import { User } from "./User";

describe("User", () => {
  it("APIのユーザー名を表示する", async () => {
    render(<User />);
    expect(await screen.findByText("Hello, Taro!")).toBeInTheDocument();
  });
});
