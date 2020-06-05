import React from "react";
import { render, screen, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'



test("renders App without crashing", () => {
  render(<App />);
});

// Will run tests for Contact form in here: 
test('contact form adds new contacts to the contact list', () => {
 const {getByTestId, getByLabelText, rerender} =  render(<ContactForm />);

  // query for inputs 
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);

  // Run inputs events

  fireEvent.change(firstNameInput, { target: { value: 'Marta' } })
  fireEvent.change(lastNameInput, { target: { value: 'Krawczyk' } })
  fireEvent.change(emailInput, { target: { value: 'marta@marta.com' } })




  // Click Submit button

    // const submitButton=screen.getByTestId('submit')
// console.log(submitButton)

      fireEvent.submit(getByTestId(/submit/i))
  
      
waitForElement(() => {getByTestId('pre')})

    // const newContact = screen.getByText('Mar')


expect(firstNameInput.value).toBe('Marta')
expect(lastNameInput.value).toBe('Krawczyk')
expect(emailInput.value).toBe('marta@marta.com')



rerender(<ContactForm />)   

waitForElement(() =>  {expect(getByTestId('pre')).toBeInTheDocument()})

//Assert that contact is in the list
// const newUser = screen.getByText(/mar/i)
})