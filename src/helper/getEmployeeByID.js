'use server';
async function getEmployeeByID(id) {
    if (!id) {
        console.error("ID is required to fetch employee details");
        return;
    }
    // Fetch employee details from the API using the provided ID

    const response = await fetch(`http://localhost:5000/employees/${id}`);
    if (!response.ok) {
        console.error("Failed to fetch employee details");
        return;
    }
    const employeeDetails = await response.json();
    // Check if the employee exists
    return  employeeDetails;
}

export default getEmployeeByID;