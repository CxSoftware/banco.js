API
===

Bank Module
-----------

Every bank module should implement these methods:

- **Promise void login(...)**: Log into the bank. This should be the first method to be called.
- **Promise Account[] getAccounts()**: List the accounts. Returns an array of Account. See below for details.
- **Promise Number getBalance(accountID)**: Get the balance for this account. The return type should be a number.
- **void dispose()**: Releases all the resources. This should be the last method to be called.

Account
-------

    {
    	id: 'abcdef', // Number or String
    	name: 'abcdef' // Visible name for this account
    }

