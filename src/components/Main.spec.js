/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Main from './Main'
// hmm, why aren't styles applied when loading
// import  "../style.scss"

describe('Main', () => {
  it('loads', () => {
    mount(<Main />, {
      // served by webpack dev server
      stylesheet: '/css/app.css'
    })
    cy.contains('Hello from react!').should('be.visible')
      // check if the style has been applied
      .and('have.css', 'color', 'rgb(255, 0, 0)')
  })
})
