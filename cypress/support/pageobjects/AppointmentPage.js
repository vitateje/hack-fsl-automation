/// <reference types="Cypress" />

import AppointmentElements from '../elements/AppointmentElements'
const appointmentElements = new AppointmentElements
const url = Cypress.config("baseUrl")

class AppointmentPage {
    // Acessa o site que será testado
    acessSite() {
        cy.visit(url)
    }

    addPetName() {
        cy.get(appointmentElements.petName()).type("virtrus")
    }

    addOwnerName() {
        cy.get(appointmentElements.ownerName()).type("Vitor")
    }

    addDate() {
        cy.get(appointmentElements.date()).type("1988-05-05")
    }

    addTime() {
        cy.get(appointmentElements.time()).type("13:28")
    }

    addSymptoms() {
        cy.get(appointmentElements.symptoms()).type("Some Comments")
    }

    clickAddAppointmentButton() {
        cy.get(appointmentElements.buttonAddAppointment()).click()
    }

    clickDeleteButton() {
        cy.get(appointmentElements.buttonDelete()).click()
    }

    seePetName() {
        cy.get(appointmentElements.petNameCreated()).should('have.text', 'virtrus')
    }

    notSeePetName() {
        cy.get(appointmentElements.petNameCreated()).should('not.exist')
    }

    seeAlertMessage() {
        cy.get(appointmentElements.errorMessage()).should('have.text', 'All fields are required')
    }
    
}

export default AppointmentPage;
