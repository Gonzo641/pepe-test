"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from './Logo';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { links } from "../../lib/data";
import { Products, StateProps } from '../../type';
import { addUser, deleteUser } from '@/redux/foodSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useActiveSectionContext } from '@/context/active-section-context';

const Navbar = () => {
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
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Logo />
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
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
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

