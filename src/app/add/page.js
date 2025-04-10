'use client';
import HandleSubmit from "@/helper/action";
import { useActionState } from "react";


export default function AddPage() {
   
    const [state, action, metadata] = useActionState(HandleSubmit,null);
 
    return (
        
        <div className="container mt-5">
            {state?.success && <div className="alert alert-success">Form submitted successfully!</div>}
            {state?.error && <div className="alert alert-danger">{state.error}</div>}
            <h1 className="mb-4">Submit Form</h1>
            <form action={action}  className="w-50">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        id
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="id"
                        name="id"
                       
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        position
                    </label>
                    <input
                        type="text "
                        className="form-control"
                        id="position"
                        name="position"
                        
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        department
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="department"
                        name="department"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}