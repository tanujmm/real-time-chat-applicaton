import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [currState, setcurrState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currState === "Sign Up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
    login(currState === "Sign Up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />

      <form
        onSubmit={onSubmitHandler}
        action=""
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          )}
        </h2>

        {currState === "Sign Up" && !isDataSubmitted && (
          <input
            type="text"
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            onChange={(evt) => setFullName(evt.target.value)}
            value={fullName}
            placeholder="Full Name"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              type="email"
              onChange={(evt) => setEmail(evt.target.value)}
              value={email}
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              onChange={(evt) => setPassword(evt.target.value)}
              value={password}
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}

        {currState === "Sign Up" && isDataSubmitted && (
          <textarea
            placeholder="Provide a Short Bio..."
            required
            onChange={(evt) => setBio(evt.target.value)}
            value={bio}
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        )}
        {/* {currState === "Sign Up" && (
          <>
            <input
              type="text"
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              onChange={(evt) => setFullName(evt.target.value)}
              value={fullName}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              onChange={(evt) => setEmail(evt.target.value)}
              value={email}
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              onChange={(evt) => setPassword(evt.target.value)}
              value={password}
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {isDataSubmitted && (
              <textarea
                placeholder="Provide a Short Bio..."
                required
                onChange={(evt) => setBio(evt.target.value)}
                value={bio}
                className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            )}
          </>
        )} */}

        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
        >
          {currState === "Sign Up" ? "Create Account" : "Login Now"}
        </button>
        <div className="flex gap-2 items-center text-sm text-gray-500">
          <input type="checkbox" />
          <p className="">Agree to the terms of use & privacy policy.</p>
        </div>

        <div className="flex flex-col gap-2">
          {currState === "Sign Up" ? (
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <span
                className="font-medium text-violet-500 cursor-pointer"
                onClick={() => {
                  setcurrState("Login");
                  // isDataSubmitted(false);
                  setIsDataSubmitted(false);
                }}
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Create an account{" "}
              <span
                className="font-medium text-violet-500 cursor-pointer"
                onClick={() => {
                  setcurrState("Sign Up");
                }}
              >
                Click Here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

// import React, { useContext, useState } from "react";
// import assets from "../assets/assets";
// import { AuthContext } from "../../context/AuthContext";

// const LoginPage = () => {
//   const [currState, setcurrState] = useState("Sign Up");
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [bio, setBio] = useState("");

//   const { login } = useContext(AuthContext);

//   const onSubmitHandler = (event) => {
//     event.preventDefault();

//     if (currState === "Sign Up") {
//       if (!fullName || !email || !password || !bio) {
//         alert("Please fill all the fields.");
//         return;
//       }
//     } else {
//       if (!email || !password) {
//         alert("Please enter email and password.");
//         return;
//       }
//     }

//     login(currState === "Sign Up" ? "signup" : "login", {
//       fullName,
//       email,
//       password,
//       bio,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
//       <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />

//       <form
//         onSubmit={onSubmitHandler}
//         className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded shadow-lg"
//       >
//         <h2 className="font-medium text-2xl">
//           {currState === "Sign Up" ? "Sign Up" : "Login"}
//         </h2>

//         {currState === "Sign Up" && (
//           <>
//             <input
//               type="text"
//               onChange={(evt) => setFullName(evt.target.value)}
//               value={fullName}
//               placeholder="Full Name"
//               className="p-2 border border-gray-500 rounded-md focus:outline-none"
//               required
//             />
//           </>
//         )}

//         <input
//           type="email"
//           onChange={(evt) => setEmail(evt.target.value)}
//           value={email}
//           placeholder="Email Address"
//           className="p-2 border border-gray-500 rounded-md focus:outline-none"
//           required
//         />

//         <input
//           type="password"
//           onChange={(evt) => setPassword(evt.target.value)}
//           value={password}
//           placeholder="Password"
//           className="p-2 border border-gray-500 rounded-md focus:outline-none"
//           required
//         />

//         {currState === "Sign Up" && (
//           <textarea
//             placeholder="Write a short bio"
//             onChange={(evt) => setBio(evt.target.value)}
//             value={bio}
//             className="p-2 border border-gray-500 rounded-md focus:outline-none"
//             required
//           />
//         )}

//         <button
//           type="submit"
//           className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
//         >
//           {currState === "Sign Up" ? "Create Account" : "Login Now"}
//         </button>

//         <div className="text-sm text-gray-500">
//           {currState === "Sign Up" ? (
//             <p>
//               Already have an account?{" "}
//               <span
//                 className="font-medium text-violet-500 cursor-pointer"
//                 onClick={() => {
//                   setcurrState("Login");
//                 }}
//               >
//                 Login here
//               </span>
//             </p>
//           ) : (
//             <p>
//               Don't have an account?{" "}
//               <span
//                 className="font-medium text-violet-500 cursor-pointer"
//                 onClick={() => {
//                   setcurrState("Sign Up");
//                 }}
//               >
//                 Sign up
//               </span>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
