var age = window.prompt("Enter your age: ; Age ");
if (age >=10){
    alert('Hello, Your age is ' + age);
    console.log(age);
}else if(age<10 && age>=0){
    alert('Your are too young ');
}else{
    alert('Please enter a valid age');
}