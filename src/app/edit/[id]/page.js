// This file is located at src/app/edit/[id]/page.js
import EditForm from "@/helper/editForm";
import getEmployeeByID from "@/helper/getEmployeeByID";
export default async function Page({params}) {

    const  {id}  = await params
    if (!id) {
        return <div>Invalid ID</div>;
    }
    // Fetch employee details using the ID
    const employeeDetails = await getEmployeeByID(id);
    if (!employeeDetails) {
        return <div>Employee not found</div>;
    }

    return (
        <div>
        <EditForm employee={employeeDetails} />
        </div>
    );
}