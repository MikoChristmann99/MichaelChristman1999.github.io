//Title: christman-javazon.css
//Author: Michael Christman
//Date: 2/20/2023
//Description: Created and assigned values to variable for the JavaScript classes: Product, Service, and Employee  

//Creating a Product class with a constructor & 4 params.          
class Product {
    constructor(productId, description, price, qty) {
        this.productId = productId;
        this.description = description;
        this.price = price;
        this.qty = qty;
        this.totalValue = (qty * price).toFixed(2); //Format to 2 decimals.
    }
}
//Creating a Service class with a constructor & 4 params. 
class Service {
    constructor(serviceId, description, hrlyRate, minBillHrs) {
        this.serviceId = serviceId;
        this.description = description;
        this.hrlyRate = hrlyRate.toFixed(2); //Format to 2 decimals.
        this.minBillHrs = minBillHrs;
    }
}
//Creating a Employee class with a constructor & 4 params.             
class Employee {
    constructor(empId, fName, lName, salary) {
        this.empId = empId;
        this.fName = fName;
        this.lName = lName;
        this.salary = salary.toFixed(2); //Salary will display two decimals.
    }
}

//Creating 5 Product objects, assigning them to 5 variables.
let product1 = new Product(
    '9781118008188',
    'HTML and CSS: Design and Build Websites',
    22.26,
    10
);

let product2 = new Product(
    '97181491952023',
    'JavaScript: The Definitive Guide 7/E',
    41.33,
    7
);

let product3 = new Product(
    '9781449331818',
    'Learning JavaScript Design Patterns 1/E',
    25.99,
    3
);

let product4 = new Product(
    '97181617292422',
    'Express in Action: Writing, building, and testing Node.js applications 1/E',
    34.91,
    3
);

let product5 = new Product(
    '9781491954461',
    'MongoDB The Definitive Guide',
    33.70,
    8
);




//Creating 3 services objects, assigning them to 3 variables.
let service1 = new Service(
    '100',
    'Website Design',
    149.999,
    25
);

let service2 = new Service(
    '101',
    'DevOps Consulting',
    124.999,
    50
);

let service3 = new Service(
    '102',
    'Database Design',
    124.999,
    15
);




//Creating 5 Employee objects, assigning them to 5 variables.
let employee1 = new Employee(
    '1007',
    'Ludwig',
    'Beethoven',
    13.989,
);
let employee2 = new Employee(
    '1008',
    'Johann',
    'Bach',
    22.299
);
let employee3 = new Employee(
    '1009',
    'Wolfgang',
    'Mozart',
    19.499
);
let employee4 = new Employee(
    '1010',
    'Johannes',
    'Brahms',
    11.999
);
let employee5 = new Employee(
    '1011',
    'Joseph',
    'Haydn',
    32.499
);

//Linking products to table.
document.getElementById("productId1").innerHTML = product1.productId;
document.getElementById("productDesc1").innerHTML = product1.description;
document.getElementById("productPrice1").innerHTML = product1.price;
document.getElementById("productQty1").innerHTML = product1.qty;
document.getElementById("productTotVal1").innerHTML = product1.totalValue;

document.getElementById("productId2").innerHTML = product2.productId;
document.getElementById("productDesc2").innerHTML = product2.description;
document.getElementById("productPrice2").innerHTML = product2.price;
document.getElementById("productQty2").innerHTML = product2.qty;
document.getElementById("productTotVal2").innerHTML = product2.totalValue;


document.getElementById("productId3").innerHTML = product3.productId;
document.getElementById("productDesc3").innerHTML = product3.description;
document.getElementById("productPrice3").innerHTML = product3.price;
document.getElementById("productQty3").innerHTML = product3.qty;
document.getElementById("productTotVal3").innerHTML = product3.totalValue;


document.getElementById("productId4").innerHTML = product4.productId;
document.getElementById("productDesc4").innerHTML = product4.description;
document.getElementById("productPrice4").innerHTML = product4.price;
document.getElementById("productQty4").innerHTML = product4.qty;
document.getElementById("productTotVal4").innerHTML = product4.totalValue;


document.getElementById("productId5").innerHTML = product5.productId;
document.getElementById("productDesc5").innerHTML = product5.description;
document.getElementById("productPrice5").innerHTML = product5.price;
document.getElementById("productQty5").innerHTML = product5.qty;
document.getElementById("productTotVal5").innerHTML = product5.totalValue;



//Linking services to table.
document.getElementById("serviceId1").innerHTML = service1.serviceId;
document.getElementById("serviceDesc1").innerHTML = service1.description;
document.getElementById("serviceHrlyRate1").innerHTML = service1.hrlyRate;
document.getElementById("serviceMinHrs1").innerHTML = service1.minBillHrs;

document.getElementById("serviceId2").innerHTML = service2.serviceId;
document.getElementById("serviceDesc2").innerHTML = service2.description;
document.getElementById("serviceHrlyRate2").innerHTML = service2.hrlyRate;
document.getElementById("serviceMinHrs2").innerHTML = service2.minBillHrs;

document.getElementById("serviceId3").innerHTML = service3.serviceId;
document.getElementById("serviceDesc3").innerHTML = service3.description;
document.getElementById("serviceHrlyRate3").innerHTML = service3.hrlyRate;
document.getElementById("serviceMinHrs3").innerHTML = service3.minBillHrs;




//Linking employees to table.
document.getElementById("empId1").innerHTML = employee1.empId;
document.getElementById("empLastName1").innerHTML = employee1.lName;
document.getElementById("empFirstName1").innerHTML = employee1.fName;
document.getElementById("empSalary1").innerHTML = employee1.salary;


document.getElementById("empId2").innerHTML = employee2.empId;
document.getElementById("empLastName2").innerHTML = employee2.lName;
document.getElementById("empFirstName2").innerHTML = employee2.fName;
document.getElementById("empSalary2").innerHTML = employee2.salary;

document.getElementById("empId3").innerHTML = employee3.empId;
document.getElementById("empLastName3").innerHTML = employee3.lName;
document.getElementById("empFirstName3").innerHTML = employee3.fName;
document.getElementById("empSalary3").innerHTML = employee3.salary;

document.getElementById("empId4").innerHTML = employee4.empId;
document.getElementById("empLastName4").innerHTML = employee4.lName;
document.getElementById("empFirstName4").innerHTML = employee4.fName;
document.getElementById("empSalary4").innerHTML = employee4.salary;

document.getElementById("empId5").innerHTML = employee5.empId;
document.getElementById("empLastName5").innerHTML = employee5.lName;
document.getElementById("empFirstName5").innerHTML = employee5.fName;
document.getElementById("empSalary5").innerHTML = employee5.salary;



let productsTable = document.getElementById('products-table');
let servicesTable = document.getElementById('services-table');
let employeeTable = document.getElementById('employee-table');

//Initially set display to none for all tables.
productsTable.style.display = 'none';
servicesTable.style.display = 'none';
employeeTable.style.display = 'none';


//Executes when button is clicked.
function displayListing() {
    let choice = document.getElementById('listing').value;

    //Switch statement, this will decide what table is displayed based on
    //the user's choice in the dropdown menu.
    switch (choice) {
       //Display products table and hide the rest.
        case "products":
            servicesTable.style.display = 'none';
            productsTable.style.display = 'block';
            employeeTable.style.display = 'none';
            break;
         //Display services table and hide the rest.
        case "services":
            employeeTable.style.display = 'none';
            productsTable.style.display = 'none';
            servicesTable.style.display = 'block';
            break;
         //Display employees table and hide the rest.   
        case "employees":
            productsTable.style.display = 'none';
            employeeTable.style.display = 'block';
            servicesTable.style.display = 'none';
            break;
         //Hide all tables if user doesn't make a selection.
        case "select":
            productsTable.style.display = 'none';
            employeeTable.style.display = 'none';
            servicesTable.style.display = 'none';
            break;
    }
}
