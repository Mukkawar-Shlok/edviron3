# Edviron Task3

API's for reconciling transactions and disbursing funds to schools.

## Installation

Use the package manager npm or yarn to install expressJs,mongoose.

```bash
npm install expressjs

```

```bash
npm install mongoose
```
OR
```bash
npm install
```
Above command will install everything through package.json

Start the application using the following command:
```
$ node server.js
```

Open the application in your web browser by visiting the following URL:
```
$ http://localhost:3000
```

## API Reference
This backend system provides following endpoints

* GET /disbursement gets all disbursement
* POST /disbursement create disbursement

* GET /transactions gets all transaction
* GET/transactions/:id gets transaction with specific id. 
* PUT /transaction/:id/reconcile changes the status of specific transaction from pending to Success.

## POSTMAN COLLECTION
* It contains postman collection of requests and examples of each request and endpoints.
