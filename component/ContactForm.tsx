// "use client";

// import { fetchContact } from "@/lib/contactForm";
// // Fixed import
// import { useState } from "react";

// interface FormErrors {
//   name?: string;
//   email?: string;
//   message?: string;
// }

// export default function ContactForm() {
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [success, setSuccess] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrors({});
//     setSuccess("");
//     setTimeout(() => setErrors({}), 3000);
//     if (!name) {
//       setErrors({ name: "Please Enter Your Full Name" });
//       return;
//     }
//     if (!email) {
//       setErrors({ email: "Please Enter Valid Email" });
//       return;
//     }
//     if (!message) {
//       setErrors({ message: "Please Enter Message" });
//       return;
//     }

//     try {
//       const response = await fetchContact(
//         {},
//         "a7da130c-4fa2-4c0c-a404-e09e7b2cf9ca",
//         { name, email, message }
//       );

//       if (response.success) {
//         setName("");
//         setEmail("");
//         setMessage("");
//         setSuccess("Message sent successfully!");
//         setTimeout(() => setSuccess(""), 3000);
//       } else {
//         setErrors({ email: response.error || "An error occurred" });
//       }
//     } catch (error) {
//       setErrors({ email: "Failed to send message" });
//       setTimeout(() => setErrors({}), 3000);
//     }
//   };

//   return (
//     <div className="col-lg-4 col-sm-12 location" id="contact-us">
//       <h4 className="mt-lg-0 mt-sm-3">Contact</h4>
//       <form id="contact_form" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control name"
//             placeholder="Name*"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <span className="text-danger contact_gap">{errors.name}</span>
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control email"
//             placeholder="Email*"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <span className="text-danger contact_gap">{errors.email}</span>
//         </div>
//         <div className="mb-3">
//           <textarea
//             placeholder="Message*"
//             className="form-control message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <span className="text-danger contact_gap">{errors.message}</span>
//         </div>
//         <div className="submit_btn">
//           <button
//             className="theme-btn btnfos btnfos-4 btn-4 g-recaptcha"
//             type="submit">
//             <span>SUBMIT</span>
//           </button>
//           <div className="text-info text-center contact_gap">{success}</div>
//         </div>
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { submitFormData } from "@/lib/contactForm";

// interface FormErrors {
//   name?: string;
//   email?: string;
//   message?: string;
//   general?: string;
// }

// export default function ContactForm() {
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [success, setSuccess] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrors({});
//     setSuccess("");

//     // Clear errors after 3s
//     setTimeout(() => setErrors({}), 3000);

//     // Simple validation
//     if (!name) {
//       setErrors({ name: "Please Enter Your Full Name" });
//       return;
//     }
//     if (!email) {
//       setErrors({ email: "Please Enter Valid Email" });
//       return;
//     }
//     if (!message) {
//       setErrors({ message: "Please Enter Message" });
//       return;
//     }

//     try {
//       const response = await submitFormData(
//         {},
//         "a7da130c-4fa2-4c0c-a404-e09e7b2cf9ca",
//         { name, email, message }
//       );

//       if (response.success) {
//         setName("");
//         setEmail("");
//         setMessage("");
//         setSuccess("Message sent successfully!");
//         setTimeout(() => setSuccess(""), 3000);
//       } else {
//         setErrors({ general: response.error || "An error occurred" });
//       }
//     } catch (error) {
//       setErrors({ general: "Failed to send message" });
//       setTimeout(() => setErrors({}), 3000);
//     }
//   };

//   return (
//     <div className="col-lg-4 col-sm-12 location" id="contact-us">
//       <h4 className="mt-lg-0 mt-sm-3">Contact</h4>
//       <form id="contact_form" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control name"
//             placeholder="Name*"
//             value={name}
//             required
//             onChange={(e) => setName(e.target.value)}
//           />
//           <span className="text-danger contact_gap">{errors.name}</span>
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control email"
//             placeholder="Email*"
//             value={email}
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <span className="text-danger contact_gap">{errors.email}</span>
//         </div>
//         <div className="mb-3">
//           <textarea
//             placeholder="Message*"
//             className="form-control message"
//             required
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <span className="text-danger contact_gap">{errors.message}</span>
//         </div>
//         <div className="submit_btn">
//           <button
//             className="theme-btn btnfos btnfos-4 btn-4 g-recaptcha"
//             type="submit">
//             <span>SUBMIT</span>
//           </button>
//           <div className="text-info text-center contact_gap">{success}</div>
//           {errors.general && (
//             <div className="text-danger text-center contact_gap">
//               {errors.general}
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { submitFormData } from "@/lib/contactForm";

// interface FormErrors {
//   name?: string;
//   email?: string;
//   message?: string;
//   general?: string;
// }

// export default function ContactForm() {
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [success, setSuccess] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrors({});
//     setSuccess("");

//     // Trim all fields before validating
//     const trimmedName = name.trim();
//     const trimmedEmail = email.trim();
//     const trimmedMessage = message.trim();

//     // Simple validation
//     if (!trimmedName) {
//       setErrors({ name: "Please fill out your full name" });
//       return;
//     }
//     if (!trimmedEmail) {
//       setErrors({ email: "Please fill out your email address" });
//       return;
//     }
//     // Basic email pattern check (optional but good)
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(trimmedEmail)) {
//       setErrors({ email: "Please enter a valid email address" });
//       return;
//     }
//     if (!trimmedMessage) {
//       setErrors({ message: "Please fill out your message" });
//       return;
//     }

//     try {
//       const response = await submitFormData(
//         {},
//         "a7da130c-4fa2-4c0c-a404-e09e7b2cf9ca",
//         { name: trimmedName, email: trimmedEmail, message: trimmedMessage }
//       );

//       if (response.success) {
//         setName("");
//         setEmail("");
//         setMessage("");
//         setSuccess("Message sent successfully!");
//         setTimeout(() => setSuccess(""), 3000);
//       } else {
//         setErrors({ general: response.error || "An error occurred" });
//       }
//     } catch (error) {
//       setErrors({ general: "Failed to send message" });
//     }

//     // Automatically clear error after 3s
//     setTimeout(() => setErrors({}), 3000);
//   };

//   return (
//     <div className="col-lg-4 col-sm-12 location" id="contact-us">
//       <h4 className="mt-lg-0 mt-sm-3">Contact</h4>
//       <form id="contact_form" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control name"
//             placeholder="Name*"
//             value={name}
//             required
//             onChange={(e) => setName(e.target.value)}
//           />
//           <span className="text-danger contact_gap">{errors.name}</span>
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control email"
//             placeholder="Email*"
//             value={email}
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <span className="text-danger contact_gap">{errors.email}</span>
//         </div>
//         <div className="mb-3">
//           <textarea
//             placeholder="Message*"
//             className="form-control message"
//             required
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <span className="text-danger contact_gap">{errors.message}</span>
//         </div>
//         <div className="submit_btn">
//           <button
//             className="theme-btn btnfos btnfos-4 btn-4 g-recaptcha"
//             type="submit">
//             <span>SUBMIT</span>
//           </button>
//           <div className="text-info text-center contact_gap">{success}</div>
//           {errors.general && (
//             <div className="text-danger text-center contact_gap">
//               {errors.general}
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { submitFormData } from "@/lib/contactForm";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    setSuccess("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Name validation
    if (!trimmedName) {
      newErrors.name = "Please fill out your full name";
    }

    // Email validation
    if (!trimmedEmail) {
      newErrors.email = "Please fill out your email address";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Message validation
    if (!trimmedMessage) {
      newErrors.message = "Please fill out your message";
    }

    // Stop if validation errors exist
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      // setTimeout(() => setErrors({}), 3000);
      return;
    }

    // Submit form
    try {
      const response = await submitFormData(
        {},
        "a7da130c-4fa2-4c0c-a404-e09e7b2cf9ca",
        {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        },
      );

      if (response.success) {
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
        setSuccess("Message sent successfully!");

        setTimeout(() => setSuccess(""), 3000);
      } else {
        setErrors({ general: response.error || "Something went wrong" });
      }
    } catch {
      setErrors({ general: "Failed to send message" });
    }
  };

  return (
    <div className="col-lg-4 col-sm-12 location" id="contact-us">
      <h4 className="mt-lg-0 mt-sm-3">Contact</h4>

      <form id="contact_form" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control name"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <span className="text-danger contact_gap">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="text-danger contact_gap">{errors.email}</span>
          )}
        </div>

        {/* Message */}
        <div className="mb-3">
          <textarea
            className="form-control message"
            placeholder="Message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <span className="text-danger contact_gap">{errors.message}</span>
          )}
        </div>

        {/* Submit */}
        <div className="submit_btn">
          <button
            type="submit"
            className="theme-btn btnfos btnfos-4 btn-4 g-recaptcha">
            <span>SUBMIT</span>
          </button>

          {success && (
            <div className="text-info text-center contact_gap">{success}</div>
          )}

          {errors.general && (
            <div className="text-danger text-center contact_gap">
              {errors.general}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
