"use client";

import Container from "@/components/Container";
import Image from "next/image";
import PizzaHoriz from "@/images/pizzahorizontal1.jpg"
import { useSectionInView } from "../../lib/hooks";
import { motion } from "framer-motion";

const AboutPage = () => {

  const { ref } = useSectionInView('Notre histoire');

  return (

    <Container>
      <section ref={ref} id="about" className="my-20 scroll-mt-28">
        <motion.h2 
            className="text-4xl text-white font-semibold mb-2"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 0.7 }}                 
            viewport={{
              once: true,
            }}>
          About us
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.p 
            className="mb-5 pl-4 text-xl leading-8 text-white"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 0.9 }}
            viewport={{
              once: true,
            }} >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Minus ipsa aperiam eaque aut laudantium quasi ea totam 
            consequuntur magni. Minus autem unde, non aut laborum officia 
            facere? Maiores suscipit obcaecati consequuntur? 
            Et excepturi recusandae ratione. Ipsa quas ea amet quis.
            consequuntur magni. Minus autem unde, non aut laborum officia 
            facere? Maiores suscipit obcaecati consequuntur? 
            Et excepturi recusandae ratione. Ipsa quas ea amet quis.
            consequuntur magni. Minus autem unde, non aut laborum officia 
            facere? Maiores suscipit obcaecati consequuntur? 
            Et excepturi recusandae ratione. Ipsa quas ea amet quis.
          </motion.p>
            <Image 
                src={PizzaHoriz}
                alt="pizza horizontal"
                className="w-full h-[400px] rounded-lg object-cover"/>
        </div>
      </section>
    </Container>


  )
}
export default AboutPage