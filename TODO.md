# TODO: Add Tracks, Country, State, City Fields to Registration

## Backend Changes
- [x] Update registrationModel.js: Add tracks, country, state, city columns to registrations table
- [x] Update registrationService.js: Modify saveRegistration to insert tracks, country, state, city
- [x] Update registrationController.js: Extract tracks, country, state, city from req.body and pass to service

## Frontend Changes
- [x] Update Registration.jsx: Add tracks select field with options from Admin.jsx
- [x] Update Registration.jsx: Add country select field, fetch countries from API on load
- [x] Update Registration.jsx: Add state select field, fetch states based on selected country
- [x] Update Registration.jsx: Add city input field (or select if needed)
- [x] Update Registration.jsx: Include new fields in formData and validation
- [x] Update Registration.jsx: Update handleSubmit to send new fields

## API Integration
- [x] Implement fetchCountries function using countrystatecity.in API with provided key
- [x] Implement fetchStates function for selected country
- [x] Implement fetchCities function for selected state (if needed)

## Testing
- [ ] Test registration form with new fields
- [ ] Verify API calls for country/state work
- [ ] Check backend saves new fields correctly
