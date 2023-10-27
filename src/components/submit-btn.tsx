
import React from "react";
import { FaPaperPlane } from "react-icons/fa";


export default function SubmitBtn() {


  return (
    <button
      type="submit"
      className="group flex items-center justify-center 
      gap-2 h-[3rem] w-[8rem] bg-slate-500 text-black 
      rounded-full outline-none transition-all focus:scale-110 
      hover:scale-110 hover:bg-slate-600 active:scale-105 
      disabled:scale-100 disabled:bg-opacity-65 hover:text-white"
    >

        <div className="h-5 w-5 animate-spin rounded-full
                        border-b-2 border-white"></div>

        <>
          Envoyer{" "}
          <FaPaperPlane className="text-xs text-white opacity-70 transition-all 
          group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>

    </button>
  );
}

// import React from "react";
// import { FaPaperPlane } from "react-icons/fa";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

// export default function SubmitBtn() {
//   const { pending } = useFormStatus();

//   return (
//     <button
//       type="submit"
//       className="group flex items-center justify-center 
//       gap-2 h-[3rem] w-[8rem] bg-slate-500 text-black 
//       rounded-full outline-none transition-all focus:scale-110 
//       hover:scale-110 hover:bg-slate-600 active:scale-105 
//       disabled:scale-100 disabled:bg-opacity-65 hover:text-white"
//       disabled={pending}
//     >
//       {pending ? (
//         <div className="h-5 w-5 animate-spin rounded-full
//                         border-b-2 border-white"></div>
//       ) : (
//         <>
//           Envoyer{" "}
//           <FaPaperPlane className="text-xs text-white opacity-70 transition-all 
//           group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
//         </>
//       )}
//     </button>
//   );
// }