
var checkBalance = true;
var balance =100;
var isActive = false;


if (checkBalance){ 
        if (!isActive && (balance > 0) ){   
            console.log("your balance is $" + balance)}

        else if(isActive){ 
            console.log("your account is no longer active")
        }

        else if(balance === 0 ){console.log("your account is empty")
        }


        else {
            console.log(" your balance is negative, please contact the bank")
        }
        
                }
else {console.log("thank you, have a nice time")
}


