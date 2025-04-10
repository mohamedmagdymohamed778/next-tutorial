'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const EditForm = ({employee}) => {
    // Assuming you have a function to fetch the employee data by ID
    const [updateStatus, setUpdateStatus] = React.useState(null);
    
   
    const formik = useFormik({
        initialValues: {
       id: employee.id,
      name: employee.name,
      position: employee.position,
      department: employee.department,
      email: employee.email
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, 'Name must be 50 characters or less')
                .required('Name is required'),
                position: Yup.string()
                .max(50, 'Name must be 50 characters or less')
                .required('Name is required'),
                department: Yup.string()
                .max(50, 'Name must be 50 characters or less')
                .required('Name is required'),
            email: Yup.string('thie my message to srting')
                .email('Invalid email address')
                .required('Email is required'),
            
        }),
        onSubmit: (values) => {
        axios.put(`http://localhost:5000/employees/${formik.values.id}`, values)
            .then(response => {
                setUpdateStatus('success')
                window.location.href = '/';
              
            })
            .catch(error => {
                setUpdateStatus('error');
            });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="container mt-4">
            {updateStatus === 'success' && (
                <div className="alert alert-success" role="alert">
                    Employee updated successfully!
                </div>
            )}
            {updateStatus === 'error' && (
                <div className="alert alert-danger" role="alert">
                    Failed to update employee. Please try again.
                </div>
            )}
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className="invalid-feedback">{formik.errors.name}</div>
            ) : null}
            </div>

            <div className="mb-3">
            <label htmlFor="position" className="form-label">position</label>
            <input
                id="position"
                name="position"
                type="string"
                className={`form-control ${formik.touched.position && formik.errors.position ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.position}
            />
            {formik.touched.position && formik.errors.position ? (
                <div className="invalid-feedback">{formik.errors.position}</div>
            ) : null}
            </div>

            <div className="mb-3">
            <label htmlFor="department" className="form-label">department</label>
            <input
                id="department"
                name="department"
                type="string"
                className={`form-control ${formik.touched.department && formik.errors.department ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.department}
            />
            {formik.touched.department && formik.errors.department ? (
                <div className="invalid-feedback">{formik.errors.department}</div>
            ) : null}
            </div>

            <div className="mb-3">
            <label htmlFor="email" className="form-label">email</label>
            <input
                id="email"
                name="email"
                type="email"
                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
    );
};

export default EditForm;