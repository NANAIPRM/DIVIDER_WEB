import React, { useState } from 'react'
import validateRegister from '../../validator/validate-register'

interface FormData {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

interface Errors {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
    confirmPassword?: string
}

function Register() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setErrors] = useState<Errors>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = validateRegister(formData) as Errors // Specify the type here
        if (Object.keys(validationErrors).length === 0) {
            // The form is valid, you can submit it here
            console.log('Form is valid, submitting...')
        } else {
            // There are validation errors, update the state with the error messages
            setErrors(validationErrors)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <p>{errors.firstName}</p>}
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <p>{errors.lastName}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>

            <button type="submit">Register</button>
        </form>
    )
}

export default Register
