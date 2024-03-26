// Write your solution in this file!
// Define the functions

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Initialize the employee object
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};

// Test the functions
console.log("Initial employee object:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'position', 'Manager');
console.log("After updating (non-destructive):", updatedEmployee);

console.log("Employee object after non-destructive update:", employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'department', 'HR');
console.log("After updating (destructive):", employee);

const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log("After deleting (non-destructive):", employeeWithoutStreetAddress);

console.log("Employee object after non-destructive deletion:", employee);

destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log("After deleting (destructive):", employee);
