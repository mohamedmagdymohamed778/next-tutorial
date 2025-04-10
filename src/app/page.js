import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import Counter from "@/component/counter"


export default async function Home() {
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/employees");
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      return [];
    }
  };

  const ConterTrigger  = async (id) => {
    'use server'
    return `Hello from server action ${id}`;
  }
  const employees = await fetchEmployees();
  console.log("Fetched employees:", employees);
  return (
    <div className="container py-4">
      <h1 className="text-center text-primary mb-4">Welcome to Next.js!</h1>
      <div className="row">
      {employees.map((employee) => (
          <div key={employee.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <Link className="btn btn-danger"  href={`edit/${employee.id}`}>
                {employee.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 mt-4">
          <Counter ConterTrigger={ConterTrigger}  />
        </div>

      </div>
        
      </div>

  );
}
