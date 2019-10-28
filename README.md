# Blockchain-NodeJS-SmartContract
A simple implementation of blockchain with smart contract in car insurance sector

## Steps to start
* npm install
* npm start


## Following are the urls:
* /blockchain : 
    * GET
    * This will generate a Blockchain, if not created, with a genesis block and will return the list of transactions
* /transactions: 
    * POST
    * This adds a transaction to the list of transactions
* /mine:
    * GET
    * This will mine the hash and add the newly added transaction to the list
* /driving-records/<driver_license_number>
    * GET
    * This will fetch the record of all the transaction with this license numbers

## Steps to use
* Generate the transaction using "localhost:3000/blockchain"
* The add a new transaction( car violation details) to the block
* Mine the block to add the transaction to the blockchain
* Fetch the transaction using the given url