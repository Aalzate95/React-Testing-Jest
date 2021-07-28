import App from './App';
import {render, fireEvent, screen} from '@testing-library/react'

test('Primer test',()=>{
    expect(true).toBeTruthy();
})

test('Segundo test',()=>{
  expect(false).toBeFalsy();
})

test('App works',()=>{
  const {container} = render(<App/>)
  const buttons = container.querySelectorAll('button')
  //probamos que los botones tengan los valores de texto indicados
  expect(buttons[0].textContent).toBe('+1');
  expect(buttons[1].textContent).toBe('+10');
  expect(buttons[2].textContent).toBe('+100');
  expect(buttons[3].textContent).toBe('+1000');

  //probamos que el contador esté cambiando su valor
  const contador = container.querySelector('span');
  expect(contador.textContent).toBe('0');
  fireEvent.click(buttons[0])
  expect(contador.textContent).toBe('1');
  fireEvent.click(buttons[1]);
  expect(contador.textContent).toBe('11');
  fireEvent.click(buttons[2]);
  expect(contador.textContent).toBe('111');
  fireEvent.click(buttons[3]);
  expect(contador.textContent).toBe('1111');
})