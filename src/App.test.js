import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test("the counter start at 0",()=>{
  render(<App/>)
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
})

test("plus button has corrct text",()=>{
 render(<App/>)
    const buttonElement=screen.getByTestId("plus-button");
    expect(buttonElement).toHaveTextContent("+");
})

test("minus button has corrct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("When the + button is pressed,the counter change to 1",() => {
  render(<App/>)
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
   const counterElement = screen.getByTestId("counter");
   expect(counterElement).toHaveTextContent("1");
})

test("When the - button is pressed,the counter change to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("1");
});
