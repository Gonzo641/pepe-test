"use client";
import {
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-darkText text-slate-100">
        <Container className="grid grid-cols-1 md:grid-cols-2
                              lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-y-4 ">
                <Logo />
                <p>
                    Horaires d&apos;ouverture : <br />
                    Midi: 11h-14h
                    Soir: 18h30-23h
                </p>
                <div className="flex items-center gap-x-4">
                    <a href="https://github.com/Gonzo641" target="_blank">
                        <span className="socialLink">
                            <BsGithub />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-gonzales-0908b3127/" target="_blank">
                        <span className="socialLink">
                            <BsLinkedin />
                        </span>
                    </a>
                </div>
            </div>
            <div>
                <p className="text-lg mb-2">Retrouvez nous sur Instagram</p>
                <a href="https://www.instagram.com" target="_blank">
                        <span className="socialLink">
                            <AiOutlineInstagram />
                        </span>
                    </a>
                {/* <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
                    <li className="flex flex-col">
                    <span className="text-slate hover:text-red-600 cursor-pointer duration-200">
                        Where Music Is Headed Next
                    </span>
                    <span className="text-red-600">January 31, 2022</span>
                    </li>
                    <li className="flex flex-col">
                    <span className="text-slate hover:text-red-600 cursor-pointer duration-200">
                        Where Music Is Headed Next
                    </span>
                    <span className="text-red-600">January 31, 2022</span>
                    </li>
                    <li className="flex flex-col">
                    <span className="text-slate hover:text-red-600 cursor-pointer duration-200">
                        Where Music Is Headed Next
                    </span>
                    <span className="text-red-600">January 31, 2022</span>
                    </li>
                    <li className="flex flex-col">
                    <span className="text-slate hover:text-red-600 cursor-pointer duration-200">
                        Where Music Is Headed Next
                    </span>
                    <span className="text-red-600">January 31, 2022</span>
                    </li>
                </ul> */}
            </div>
            <div>
          <p className="text-2xl">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-red-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-red-500 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
            {/* <Link href={"/about"}>
              <li className="hover:text-red-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <li className="hover:text-red-500 cursor-pointer duration-200">
              Newsletter
            </li>
            <li className="hover:text-red-500 cursor-pointer duration-200">
              Contact
            </li> */}
          </ul>
        </div>
        <div>
          <p className="text-lg mb-2">Réglé en toutes sécurité avec Stripe</p>
          <Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />
        </div>
        </Container>
        <div className=" pb-2 px-4 text-center text-gray-500">
          <small className="mb-2 block text-xs">&copy; 2023 Jonathan GONZALES. All rights reserved.</small>
          <p className="text-xs">
              <span className="font-semibold">About this website:</span> built with React & Next.js (App Router
              & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email
              & Resend, Vercel hosting.
          </p>
          <a href="http://www.freepik.com">Designed by kjpargeter / Freepik</a>
          </div>
    </footer>
  )
}
export default Footer;