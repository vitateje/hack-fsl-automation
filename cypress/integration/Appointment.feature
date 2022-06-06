Feature: Appointment Management

    Background: Access the application
        Given that the user access the app

    @positive
    Scenario: Create an appointment
        And the user fill all the fields
        When the clicks on the add appointment button
        Then should see the your appointment in the list

    @alternative
    Scenario: Create an appointment with no all fields filled
        And the user not fill all the fields
        When the clicks on the add appointment button
        Then the user should see the error message

    @alternative
    Scenario: Delete an appointment
        Given that the user create an appointment
        When the clicks on the delete button
        Then the user should not see the appointment anymore