const accountId = 144334
let accountEmail = "biswajit@someone.com"
/*
Prefer not to use var, because of issue in block scope 
and functional scope.
*/
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState; // this is an undefined variable.

// accountId = 2 // not allowed

accountEmail = "Biswajit@someone.com"
accountPassword = "221133"
accountCity = "Odisha"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])