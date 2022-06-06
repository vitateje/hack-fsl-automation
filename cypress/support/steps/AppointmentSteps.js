/* global Given, Then, When */

import AppointmentPage from '../pageobjects/AppointmentPage'
const appointmentPage = new AppointmentPage

Given("that the user access the app", () => {
    appointmentPage.acessSite();
})

Given("that the user create an appointment", () => {
    appointmentPage.acessSite();
    appointmentPage.addPetName();
    appointmentPage.addOwnerName();
    appointmentPage.addDate();
    appointmentPage.addTime();
    appointmentPage.addSymptoms();
    appointmentPage.clickAddAppointmentButton();
})

When("the clicks on the delete button", () => {
    appointmentPage.clickDeleteButton();
})

And("the user fill all the fields", () => {
    appointmentPage.addPetName();
    appointmentPage.addOwnerName();
    appointmentPage.addDate();
    appointmentPage.addTime();
    appointmentPage.addSymptoms();
})

And("the user not fill all the fields", () => {
    appointmentPage.addPetName();
    appointmentPage.addOwnerName();
    appointmentPage.addDate();
    appointmentPage.addTime();
})

When("the clicks on the add appointment button", () => {
    appointmentPage.clickAddAppointmentButton();
})

Then("should see the your appointment in the list", () => {
    appointmentPage.seePetName();
})

Then("the user should see the error message", () => {
    appointmentPage.seeAlertMessage();
})

Then("the user should not see the appointment anymore", () => {
    appointmentPage.notSeePetName();
})
