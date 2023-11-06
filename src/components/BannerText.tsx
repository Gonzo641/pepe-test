import Container from "./Container";
import { motion } from "framer-motion";

interface Props {
    title: string;
    description: string;
}

const BannerText = ({ title, description }: Props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
        <Container className="flex flex-col h-full gap-y-6 justify-center">
            <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1}}
                transition={{ duration: 0.5 }} 
                className="text-4xl md:text-7xl font-bold text-white">
                {title}
            </motion.h2>
            <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1}}
                transition={{ duration: 0.6 }}
                className=" text-sm md:text-lg text-slate-100 mb-20 sm:mb-0"
            >
                {description} <br />
                Venez l&apos;essayer !
            </motion.p>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1}}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center md:flex-row gap-x-4 mt-2"
            >
                <button className="py-3 px-6 rounded-full bg-slate-200 w-[15rem]
                hover:bg-white duration-200 text-sm uppercase mb-4 sm:mb-2 ">Découvrir</button>
                <button className="py-3 px-6 rounded-full bg-slate-200 w-[15rem]
                hover:bg-white duration-200 text-sm uppercase">Commander maintenant</button>
            </motion.div>
        </Container>
    </div>
  )
}
export default BannerText