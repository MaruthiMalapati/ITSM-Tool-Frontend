// import { useState } from "react";
// import React from "react";

// function UserDetailsForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     gender: "",
//     dob: "",
//     // address: "",
//     // country: "",
//     // pincode: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch("http://localhost:3001/userdetails", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     alert("User details submitted!");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>User Registration</h2>

//       <input name="name" placeholder="Full Name" onChange={handleChange} />
//       <input
//         name="email"
//         type="email"
//         placeholder="Email"
//         onChange={handleChange}
//       />
//       <input name="phone" placeholder="Phone Number" onChange={handleChange} />
//       <input name="dob" type="date" onChange={handleChange} />
//       <label>
//         Gender:
//         <select name="gender" onChange={handleChange}>
//           <option value="">Select</option>
//           <option>Male</option>
//           <option>Female</option>
//           <option>Others</option>
//         </select>
//       </label>
//       <textarea name="address" placeholder="Address" onChange={handleChange} />
//       <input name="country" placeholder="Country" onChange={handleChange} />
//       <input
//         name="pincode"
//         type="number"
//         placeholder="Pin/Zip Code"
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default UserDetailsForm;
import { useState } from "react";
import React from "react";
import "./UserDetailsForm.css";

function UserDetailsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    country: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(
      "https://itsm-tool-backend-production.up.railway.app/userdetails",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    alert("User details submitted!");
  };

  return (
    <div className="form-wrapper">
      <form className="modern-form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Register</h2>

        <div className="input-row">
          <div className="input-group">
            <label>Name</label>
            <input name="name" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input name="email" type="email" onChange={handleChange} required />
          </div>
        </div>
        {/* 
        <div className="input-row">
          <div className="input-group">
            <label>Phone</label>
            <input name="phone" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Date of Birth</label>
            <input name="dob" type="date" onChange={handleChange} required />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Gender</label>
            <select name="gender" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="input-group">
            <label>Country</label>
            <input name="country" onChange={handleChange} required />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Address</label>
            <textarea name="address" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Pin Code</label>
            <input
              name="pincode"
              type="number"
              onChange={handleChange}
              required
            />
          </div>
        </div> */}

        <button type="submit" className="animated-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserDetailsForm;

// 3

// import { useState } from "react";
// import React from "react";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./UserDetailsForm.css";

// function UserDetailsForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dob: "",
//     gender: "",
//     address: "",
//     country: "",
//     pincode: "",
//   });

//   const [step, setStep] = useState(1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleNext = () => {
//     setStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setStep((prev) => prev - 1);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch("http://localhost:3001/userdetails", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     toast.success("User details submitted successfully!");
//   };

//   return (
//     <div className="form-wrapper">
//       <form className="modern-form" onSubmit={handleSubmit}>
//         <h2 className="form-heading">Register</h2>

//         <div className="progress-bar">
//           <div style={{ width: `${(step / 3) * 100}%` }} className="progress" />
//         </div>

//         {step === 1 && (
//           <motion.div
//             className="input-row"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="input-group">
//               <label>Name</label>
//               <input name="name" onChange={handleChange} required />
//             </div>

//             <div className="input-group">
//               <label>Email</label>
//               <input
//                 name="email"
//                 type="email"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </motion.div>
//         )}

//         {step === 2 && (
//           <motion.div
//             className="input-row"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="input-group">
//               <label>Phone</label>
//               <input name="phone" onChange={handleChange} required />
//             </div>

//             <div className="input-group">
//               <label>Date of Birth</label>
//               <input name="dob" type="date" onChange={handleChange} required />
//             </div>

//             <div className="input-group">
//               <label>Gender</label>
//               <select name="gender" onChange={handleChange} required>
//                 <option value="">Select</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Others">Others</option>
//               </select>
//             </div>
//           </motion.div>
//         )}

//         {step === 3 && (
//           <motion.div
//             className="input-row"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="input-group">
//               <label>Address</label>
//               <textarea name="address" onChange={handleChange} required />
//             </div>

//             <div className="input-group">
//               <label>Country</label>
//               <input name="country" onChange={handleChange} required />
//             </div>

//             <div className="input-group">
//               <label>Pin Code</label>
//               <input
//                 name="pincode"
//                 type="number"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </motion.div>
//         )}

//         <div className="button-group">
//           {step > 1 && (
//             <button type="button" onClick={handlePrev}>
//               Previous
//             </button>
//           )}
//           {step < 3 && (
//             <button type="button" onClick={handleNext}>
//               Next
//             </button>
//           )}
//           {step === 3 && (
//             <button type="submit" className="animated-button">
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar
//         theme="colored"
//       />
//     </div>
//   );
// }

// export default UserDetailsForm;
