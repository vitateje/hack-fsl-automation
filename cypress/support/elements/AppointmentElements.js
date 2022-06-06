class AppointmentElements {

    petName = () => { return '[data-testid="pet"]' }

    ownerName = () => { return '[data-testid="owner"]' }

    date = () => { return '[data-testid="date"]' }

    time = () => { return '[data-testid="time"]' }

    symptoms = () => { return '[data-testid="symptoms"]' }

    buttonAddAppointment = () => { return '[data-testid="btn-submit"]' }

    buttonDelete = () => { return '[data-testid="btn-delete"]' }

    petNameCreated = () => { return '[data-testid="appointment"] > :nth-child(1) > span' }

    errorMessage = () => { return '[data-testid="alert"]' }

}

export default AppointmentElements;
