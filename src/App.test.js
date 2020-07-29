import React from 'react';
import { render, fireEvent } from '@testing-library/react/';
import App from './App';
import '@testing-library/jest-dom/extend-expect'

it('verify football bounds before and after aniamtion', () => {
  const { container } = render(<App />);
  const circleElement = container.getElementsByClassName('circle')[0];

  expect(elementInViewport(circleElement)).toBeTruthy();
  fireEvent.click(circleElement);
  expect(circleElement).toBeInTheDocument();

  expect(elementInViewport(circleElement)).toBeTruthy();
});

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}