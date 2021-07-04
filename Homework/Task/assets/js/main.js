try{
    const firstName=prompt("Your Firstname:");
    const lastName=prompt("Your Lastname:");
    let age;
    age=prompt("Your Age:");
    if(age<=0){
        alert("Invalid age.. Please, try again...");
    }
    else if(age<18)
    {
        alert("Sorry.. You can't access to our page! :(");
    }
    else{
        alert("You can access to our page :)");
    }
}
catch(err){
    alert(err);
}