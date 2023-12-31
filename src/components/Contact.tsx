// "use client";

// import React from "react";
// import Container from "@/components/Container";
// import SubmitBtn from "@/components/submit-btn";
// import { toast } from "react-hot-toast";
// import { sendEmail } from "../../actions/sendEmail";
// import { useSectionInView } from "../../lib/hooks";

// const Contact = () => {

//     const { ref } = useSectionInView('Contact', 0.5);

//   return (
//         <section className="max-w-[600px] mx-auto px-4 xl:px-0 py-10
//                             mb-20 sm:mb-28 w[min(100%,38rem)] 
//                             text-center mt-20 scroll-mt-28"
//                  ref={ref}
//                  id="contact">
//             <h2 className="text-2xl text-white font-semibold mb-2">
//                 Contactez Nous !
//             </h2>
//             {/* <p className="text-gray-700 -mt-6">
//                 Please contact me directly at{" "}  
//             <a className="underline" 
//             href="mailto:jonathan.gonzales64600@gmail.com">jonathan.gonzales64600@gmail.com</a>{" "}
//             or through this form.</p> */}

//             <form 
//                 className="mt-10 flex flex-col"
//                 action={async (formData) => {
//                     const { data, error } = await sendEmail(formData);

//                     if (error) {
//                         toast.error(error);
//                         return;
//                     }

//                     toast.success("Email sent successfully!")
//                 }}    
//             >
//                 <input 
//                 className="h-14 px-4 rounded-lg border-black
//                 transition-all"
//                 name="senderEmail" 
//                 type="email"
//                 required
//                 maxLength={500}
//                 placeholder="Votre email" />
//                 <textarea 
//                 className="h-52 my-3 rounded-lg border border-black/10 
//                 p-4 transition-all"
//                 name="message"
//                 placeholder="Votre message"
//                 required
//                 maxLength={5000} 
//             />
//             <SubmitBtn />
//             </form>
//         </section>

//   )
// }
// export default Contact



"use client";

import React from "react";
import Container from "@/components/Container";
import SubmitBtn from "@/components/submit-btn";
import { toast } from "react-hot-toast";
import { sendEmail } from "../../actions/sendEmail";
import { useSectionInView } from "../../lib/hooks";

const Contact = () => {

    const { ref } = useSectionInView('Contact', 0.5);

  return (
        <section className="max-w-[600px] mx-auto px-4 xl:px-0 py-10
                            mb-20 sm:mb-28 w[min(100%,38rem)] 
                            text-center mt-20 scroll-mt-28"
                 ref={ref}
                 id="contact">
            <h2 className="text-2xl text-white font-semibold mb-2">
                Contactez Nous !
            </h2>
            {/* <p className="text-gray-700 -mt-6">
                Please contact me directly at{" "}  
            <a className="underline" 
            href="mailto:jonathan.gonzales64600@gmail.com">jonathan.gonzales64600@gmail.com</a>{" "}
            or through this form.</p> */}

            <form 
                className="mt-10 flex flex-col" 
            >
                <input 
                className="h-14 px-4 rounded-lg border-black
                transition-all"
                name="senderEmail" 
                type="email"
                required
                maxLength={500}
                placeholder="Votre email" />
                <textarea 
                className="h-52 my-3 rounded-lg border border-black/10 
                p-4 transition-all"
                name="message"
                placeholder="Votre message"
                required
                maxLength={5000} 
            />
            <SubmitBtn />
            </form>
        </section>

  )
}
export default Contact