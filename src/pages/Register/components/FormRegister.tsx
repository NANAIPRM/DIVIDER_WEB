import React, { useState } from 'react'
import validateRegister from '../../../validator/validate-register'

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

function FormRegister() {
    const defaultFormData: FormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [formData, setFormData] = useState<FormData>(defaultFormData)
    const [errors, setErrors] = useState<Errors>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        // Clear the corresponding error message when the user makes changes
        setErrors({ ...errors, [name]: '' })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = validateRegister(formData) as Errors
        if (Object.keys(validationErrors).length === 0) {
            // The form is valid, you can submit it here
            console.log('Form is valid, submitting...')
        } else {
            // There are validation errors, update the state with the error messages
            setErrors(validationErrors)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-1/2 m-auto gap-5 bg-white"
        >
            <div className="flex flex-col gap-5 w-3/4">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                />
                {errors.firstName && (
                    <p className="text-red-500">{errors.firstName}</p>
                )}
            </div>

            <div className="flex flex-col gap-5 w-3/4">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                />
                {errors.lastName && (
                    <p className="text-red-500">{errors.lastName}</p>
                )}
            </div>

            <div className="flex flex-col gap-5 w-3/4">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-5 w-3/4">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                )}
            </div>

            <div className="flex flex-col gap-5 w-3/4">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                    <p className="text-red-500">{errors.confirmPassword}</p>
                )}
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-full"
            >
                Register
            </button>
        </form>
    )
}

export default FormRegister
