import { useState } from "react";
import '../App.css'
import { register } from "../api/auth";


function Register(){
    const [formData,  setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
                [name]: value,
            
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if(!formData.username) newErrors.username = "Username is required";
        if(!formData.email) {newErrors.email = "Email is required";
        }else if (!/\S+@\S\+\.\S+/.test(formData.email)){
            newErrors.email = "Email is not valid";
        }

        if(!formData.password) newErrors.password = "Password is required";
        if(formData.password !== formData.password_confirmation){
            newErrors.password_confirmation = "Password not match";
        }

        return newErrors;

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0){
            alert("Form submitted Successfully");
        }
    };

    return (
        <div>
             <h1>Register</h1>
             <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="input"
                        />
                        {errors.username && <span className="error">{errors.username}</span>}
                </div>

                <div className="form-group">
                <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}      
                </div>

                <div className="form-group">
                <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="input"
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                </div>

                <div className="form-group">
                <label htmlFor="password_confirmation">Password_Confirmation</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            className="input"
                        />
                        {errors.password_confirmation && <span className="error">{errors.password_confirmation}</span>}
                    
                </div>

             
                <button type="submit" className="submit-btn">Register</button>
             </form>   
        </div>
    )
}

export default Register;