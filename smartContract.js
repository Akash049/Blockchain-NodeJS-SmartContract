//This is an important place where the logic for data stored if applied
class DrivingRecordSmartContract{
    apply(transaction, blocks){
        //Go through all blocks
        blocks.forEach((block)=>{
            block.transactions.forEach((trans)=>{
                if(transaction.driverLicenseNumber == trans.driverLicenseNumber){
                    console.log("Same violator found");
                    transaction.noOfViolations += 1

                    if(transaction.noOfViolations > 5){
                        transaction.isDriverLicenseSuspended = true
                    }
                }
            })
        })
    }
}

module.exports = DrivingRecordSmartContract