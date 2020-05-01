/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Main from './Main'
// hmm, why aren't styles applied when loading
// import  "../style.scss"

// we can import CSV files, since Webpack config has a loader for it
import CsvData from "../mycsv.csv"

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

  it('loaded CSV correctly', () => {
    expect(CsvData).to.have.length(5)
    expect(CsvData[1]).to.deep.equal([
      'Raja',
      'Sem Corporation',
      'pede.ultrices.a@tinciduntpedeac.co.uk',
      'January 21st, 2019'
    ])
  })
})
