import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  describe("Button => type", () => {
    test("renders primary button", () => {
      render(<Button type="primary">Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("bg-blue-500");
    });

    test("renders secondary button", () => {
      render(<Button type="secondary">Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("bg-orange-500");
    });

    test("renders danger button", () => {
      render(<Button type="danger">Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("bg-red-500");
    });
  });

  describe("Button => variant", () => {
    test("renders contained button", () => {
      render(<Button variant="contained">Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("bg-blue-500");
    });

    test("renders outlined button", () => {
      render(<Button variant="outlined">Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("border");
      expect(button.classList).toContain("border-blue-500");
      expect(button.classList).toContain("text-blue-500");
    });
  });

  describe("Button => fullWidth", () => {
    test("renders full width button", () => {
      render(
        <Button variant="outlined" fullWidth>
          Click me
        </Button>
      );

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("w-full");
    });
  });

  describe("Button => size", () => {
    test("renders small button", () => {
      render(<Button size="small">Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("py-1");
      expect(button.classList).toContain("px-2");
    });

    test("renders medium button", () => {
      render(<Button size="medium">Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("py-2");
      expect(button.classList).toContain("px-4");
    });

    test("renders large button", () => {
      render(<Button size="large">Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("py-4");
      expect(button.classList).toContain("px-8");
    });
  });

  describe("Button => className", () => {
    test("adds custom class name", () => {
      render(<Button className="custom-class">Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("custom-class");
    });
  });

  describe("Button => disabled", () => {
    test("renders disabled button", () => {
      render(<Button disabled>Click me</Button>);

      const button = screen.getByText("Click me");
      expect(button).toBeDefined();
      expect(button.classList).toContain("bg-gray-400");
      expect(button.classList).toContain("text-gray-500");
      expect(button).toHaveProperty("disabled");
    });
  });
});
