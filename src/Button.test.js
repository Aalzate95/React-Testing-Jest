import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import Button from './Button'

test('+1 Button works', () => {
    let count = 0;
    const incrementCount = increment => {
    count += increment
    }

    const { container } = render(
      <Button increment={1} onClickFunction={incrementCount} />
    )
    const button = container.firstChild
    expect(button.textContent).toBe('+1')
    expect(count).toBe(0)
    fireEvent.click(button)
    expect(count).toBe(1) 
  })

test('+100 Button works',()=>{
    let count =0;
    const incrementCount = increment =>{
        count += increment
    }
    const {container} = render(
      <Button increment={100} onClickFunction={incrementCount}/>
      )
    // Probamos que el texto del botón este correcto
    const button = container.firstChild
    expect(button.textContent).toBe('+100');
    // Probamos que la funcionalidad del botón esté correcta
    expect(count).toBe(0);
    fireEvent.click(button)
    expect(count).toBe(100);

})