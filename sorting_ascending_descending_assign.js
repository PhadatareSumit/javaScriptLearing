class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id,
        this.emp_name = emp_name,
        this.emp_dept = emp_dept,
        this.emp_salary = emp_salary,
        this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000,"TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000,"Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000,"TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000,"Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000,"Wipro");
const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000,"TCS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000,"Infy");

const emp_Array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh]

console.log(`========Ascending order of employee id=========`);
emp_Array.sort((employ1, employ2) => {
return employ1.emp_id > employ2.emp_id ? 1: -1;
}) ; 
emp_Array.forEach((currentValue) => {
        console.log(`Employee ID: ${currentValue.emp_id}, Employee Name: ${currentValue.emp_name}, Employee Dept: ${currentValue.emp_dept}`);
});

console.log(`========Ascending order of employee Department=========`);
emp_Array.sort((employ1, employ2) => {
    return employ1.emp_dept > employ2.emp_dept ? 1: -1;
    }) ; 
    emp_Array.forEach((currentValue) => {
            console.log(`Employee ID: ${currentValue.emp_id},  Employee Dept: ${currentValue.emp_dept},  Employee Company: ${currentValue.emp_company},`);
    });

    console.log(`========Descending order of employee Salary========`);
    emp_Array.sort((employ1, employ2) => {
        return employ1.emp_salary < employ2.emp_salary ? 1: -1;
        }) ; 
        emp_Array.forEach((currentValue) => {
                console.log(`Employee Name: ${currentValue.emp_name},  Employee Salary: ${currentValue.emp_salary},  Employee Company: ${currentValue.emp_company},`);
        });