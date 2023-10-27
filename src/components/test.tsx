"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import Logo from './Logo';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { links } from "../../lib/data";
import { Products, StateProps } from '../../type';
import { addUser, deleteUser } from '@/redux/foodSlice';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useActiveSectionContext } from '@/context/active-section-context';
import { BsBookmarks } from 'react-icons/bs';
import { IoMdCart } from 'react-icons/io';
import FormattedPrice from './FormattedPrice';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');


  const handleNav = () => {
    setNav(!nav);
  };

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  const dispatch = useDispatch();

  const { data: session } = useSession();

  const { productData, orderData } = useSelector(
    (state: StateProps) => state.food
  );

  useEffect(() => {
    if(session) {
      dispatch(addUser({
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
      })
      );
    } else {
      dispatch(deleteUser());
    }
  },[session,dispatch]);

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='relative flex items-center w-full  h-full px-2 2xl:px-16'>
      {/* <div className='absolute w-full bg-gradient-to-b from-red-600 to-transparent h-full z-0' /> */}
        <Logo />
        <div className="flex items-center justify-center flex-grow ml-10">
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex justify-center'>
          {links.map((link) => (
                      <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        key={link.hash}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        <Link
                          className={clsx(
                            "flex w-full items-center justify-center px-3 py-3 text-white hover:text-gray-200 transition",
                            {
                              "text-gray-950":
                                activeSection === link.name,
                            }
                          )}
                          href={link.hash}
                          onClick={() => {
                            setActiveSection(link.name);
                            setTimeOfLastClick(Date.now());
                          }}
                        >
                          {link.name}

                          {link.name === activeSection && (
                            <motion.span
                              className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                              layoutId="activeSection"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            ></motion.span>
                          )}
                        </Link>
                      </motion.li>
                    ))}
          </ul>
          <div className="ml-auto hidden md:flex">
            {!session && (
              <div onClick={() => signIn()} className="headerDiv cursor-pointer">
                <AiOutlineUser className="text-2xl"/>
                <p className="text-sm font-semibold">
                  Connexion/Inscription
                </p>
              </div>
            )}

            <Link href={"cart"}>
              <div className="bg-black hover:bg-slate-950 text-slate-100 hover:text-white
                              flex items-center justify-center rounded-full
                              py-1.5 px-3 gap-x-1 border-[1px] border-black hover:border-red-600
                              duration-200 relative">
                  <IoMdCart className="text-xl"/>
                  <p className="text-sm font-semibold">
                    <FormattedPrice amount={totalAmt ? totalAmt : 0} />
                  </p>
                  <span className="bg-white text-red-600 rounded-full
                                  text-xs font-semibold absolute -right-2
                                  -top-1 w-5 h-5 flex items-center justify-center
                                  shadow-xl shadow-black">
                      {productData ? productData?.length : 0}
                  </span>
              </div>
            </Link>
            {
              session && ( 
              <Image src={session?.user?.image as string}
              alt="user-image"
              width={50}
              height={50}
              className="rounded-full object-cover"/>
            )}
            {
              orderData?.order?.length > 0 && session && (
                <Link
                  href={"/order"}
                  className="headerDiv px-2 gap-x-1 cursor-pointer"
                >
                  <BsBookmarks className="text-2xl" />
                  <p className="text-sm font-semibold">Orders</p>
                </Link>
              )
            }
            {
              session && (
                <div 
                  onClick={() => signOut()}
                  className="headerDiv px-2 gap-x-1 cursor-pointer">
                  <FiLogOut className="text-2xl" />
                  <p className="text-sm font-semibold">Déconnexion</p>
              </div>
            )}
            </div>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden ml-auto'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* ============================================================ Mobile Menu =========================================================*/}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed right-0 top-0 w-full h-full bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-6 ease-in duration-500'
              : 'fixed right-[-100%] top-0 p-6 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
                <Logo />
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
            {links.map((link) => (
                      <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        key={link.hash}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        <Link
                          className={clsx(
                            "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                            {
                              "text-gray-950":
                                activeSection === link.name,
                            }
                          )}
                          href={link.hash}
                          onClick={() => {
                            setActiveSection(link.name);
                            setTimeOfLastClick(Date.now());
                            handleNav();
                          }}
                        >
                          {link.name}

                          {link.name === activeSection && (
                            <motion.span
                              className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                              layoutId="activeSection"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            ></motion.span>
                          )}
                        </Link>
                      </motion.li>
                    ))}
            </ul>
            <div className="flex-col">
            {!session && (
              <div onClick={() => signIn()} className="headerDiv cursor-pointer mb-4">
                <AiOutlineUser className="text-2xl"/>
                <p className="text-sm font-semibold">
                  Connexion/Inscription
                </p>
              </div>
            )}

            <Link href={"cart"}>
              <div className="bg-black hover:bg-slate-950 text-slate-100 hover:text-white
                              flex items-center justify-center rounded-full
                              py-1.5 px-3 gap-x-1 border-[1px] border-black hover:border-red-600
                              duration-200 relative">
                  <IoMdCart className="text-xl"/>
                  <p className="text-sm font-semibold">
                    <FormattedPrice amount={totalAmt ? totalAmt : 0} />
                  </p>
                  <span className="bg-white text-red-600 rounded-full
                                  text-xs font-semibold absolute -right-2
                                  -top-1 w-5 h-5 flex items-center justify-center
                                  shadow-xl shadow-black">
                      {productData ? productData?.length : 0}
                  </span>
              </div>
            </Link>
            {
              session && ( 
              <Image src={session?.user?.image as string}
              alt="user-image"
              width={50}
              height={50}
              className="rounded-full object-cover"/>
            )}
            {
              orderData?.order?.length > 0 && session && (
                <Link
                  href={"/order"}
                  className="headerDiv px-2 gap-x-1 cursor-pointer"
                >
                  <BsBookmarks className="text-2xl" />
                  <p className="text-sm font-semibold">Orders</p>
                </Link>
              )
            }
            {
              session && (
                <div 
                  onClick={() => signOut()}
                  className="headerDiv px-2 gap-x-1 cursor-pointer">
                  <FiLogOut className="text-2xl" />
                  <p className="text-sm font-semibold">Déconnexion</p>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;