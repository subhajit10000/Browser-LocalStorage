let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to set");

if (key) {
    localStorage.setItem(key, value);
    console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
    
   
    if (key === "red" || key === "blue") {
        localStorage.removeItem(key);
        console.log(`${key} was removed immediately`);
    }
    
    
    if (key === "0") {
        localStorage.clear();
        console.log("localStorage cleared");
    }
} else {
    console.log("No key entered. Nothing stored.");
}
