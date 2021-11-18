# badbank

https://captainpoldark.github.io/badbank/

## About

This project was made to practice using React, React States, React Context creating a user session, 
etc. When first accessing the app from the link above a React Bootstrap card should be shown letting
you know that this isn't the banking app you're looking for. Initially, only the "Create Account" and
"Login" navigation links will be visible.

The "Create Account" page allows you to create an account. The account creation form includes 
validation checks to ensure that all fields have been filled in, that an email address has been 
entered (though it doesn't need to be a real email address), and that the password entered is at least
8 characters long. The submit button will only be enabled after all checks have passed. After clicking 
submit you will then be presented with the option to create another account or to go to the login screen. 
This app temporarily saves your account until you refresh the browser.

The login form includes validation checks. The email address must match one stored in user.json or one of
the user created accounts from the "Create Account" page. If the email address entered matches one
stored in the UsersContext state, which includes the premade and user created accounts, the password
will be checked to see if it matches the password for the entered email address. No information is
sent back to a server at this time.

### If you prefer to use another premade account refer to the credentials section.

After logging in, the "Create Account" and "Login" navigation tabs will be replaced with the
following:

- Deposit - Deposit money. An alert will display if the transaction is not possible.

- Withdraw - Withdraw money. An alert will display if the transaction is not possible.

- Balance - Shows current balance, and Amount and type of last transaction.

- AllData - Presents information, for all users in the current state. Displays balance, transactions,
credentials, and whether the user is logged in or not. Clicking logout won't reset this information.
This allows for logging into mutiple accounts one at a time, and making changes that persist for a
specific account, even when logged into a different account

## Credentials

Though it isn't required to use a pre-made account, they've been created for convenience, and verifying
state information.

There are four pre-made accounts.

### Email: jneutron@protonmail.com
### Password: Goddard

### Email: jmcgill@hhm.com
### Password: SaulGoodman

### Email: capjack@pearl.net
### Password: 193yZYCnN5uB

### Email: mightypirate@scummbucket.io
### Password: porcelain

None of the "user" data provided was meant to represent real email accounts. If a real email address is
identical one of the accounts in the mock database for this app, it was unintentional.

## Roadmap and future improvements

- Styling improvements
- Sending money or requesting money to other users in the state
- Integrate a backend database to securely store user information (the AllData is not meant to be secure)

## Installation

Clone the repository then 'npm install'. To start the development server run 'npm start'

## Use
