console.log("I am a tutorial on Loops")

let a = 1;


for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
 
for (const key in obj) {  
    let value = obj[key];
        console.log(key, value);
}

for (const c of "Aman") {
    console.log(c)
}

let i = 0;
while (i<6) {
    console.log(i)
    i++;
}

let j = 10;
do {
    console.log(j)
    j++;
} while (j<6);