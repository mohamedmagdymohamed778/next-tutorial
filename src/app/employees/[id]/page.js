import Link from "next/link";

export default async function employ({params}) {
  const { id } = await params;
  console.log("Employee ID:", id);
    const response = await fetch(`http://localhost:5000/employees/${id}`);
    if (!response.ok) {
        console.error("Failed to fetch employee details");
        return;
    }
    const employeeDetails = await response.json();
    console.log("Employee Details:", employeeDetails);

  return ( 
    <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
      <div className="card-body">
        <h5 className="card-title">Employee Details</h5>
        <p className="card-text"><strong>ID:</strong> {employeeDetails.id}</p>
        <p className="card-text"><strong>Name:</strong> {employeeDetails.name}</p>
        <p className="card-text"><strong>Position:</strong> {employeeDetails.position}</p>
        <p className="card-text"><strong>Email:</strong> {employeeDetails.email}</p>
        <p className="card-text"><strong>Phone:</strong> {employeeDetails.phone}</p>
      </div>
      <Link href="/" className="btn btn-primary" style={{ margin: "10px" }}>Home</Link>
    
    </div>
   )
  
    // Fetch employee details using the id
    // Function implementation here
}