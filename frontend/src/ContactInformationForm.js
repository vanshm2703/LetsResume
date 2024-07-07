// import React from "react";
// import "./forms.css";
// function ContactInformationForm({ data, onUpdate }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     onUpdate({ ...data, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//   };

//   return (
//     <div className="form-container">
//       <h2>Contact Information</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={data.email || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone Number</label>
//           <input
//             type="tel"
//             name="phone"
//             value={data.phone || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <button id="save" type="submit">Save</button>
//       </form>
//     </div>
//   );
// }

// export default ContactInformationForm;
