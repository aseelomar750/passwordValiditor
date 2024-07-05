
function isValidPassword(password,username){
    // Check if password is at least 8 characters long
    if (

        password.length<8 ||
        password.indexOf(' ')!==-1||
        password.indexOf(username)!==-1
    ){

        return false;
    }

    return true;
}

// Test cases
console.log(isValidPassword('Strong Pass1!', 'user123')); // false contain space
console.log(isValidPassword('StrongPass1!', 'user456')); // true
console.log(isValidPassword('weakPas', 'user123')); // false short password
console.log(isValidPassword('user12345678', 'user123')); // has simmiler name  





