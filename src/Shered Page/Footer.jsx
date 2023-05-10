import React from "react";
import logo from "../assets/icons/footer-logo.png";
import { Link } from "react-router-dom";
import { FaGoogle,FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#151515] text-white py-32">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 py-5 jm_container">
                <div className="">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <p className="my-5">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <ul className="flex gap-2">
                        <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full hover:text-red-500"><FaGoogle/></a></li>
                        <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full hover:text-blue-500"><FaTwitter/></a></li>
                        <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full hover:text-rose-500"><FaInstagram/></a></li>
                        <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full hover:text-blue-600"><FaLinkedin/></a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="hover:text-amber-600 block my-2"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                className="hover:text-amber-600 block my-2"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/favorites"
                                className="hover:text-amber-600 block my-2"
                            >
                                Favorite recipe
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                    <ul>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaFacebook className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaTwitter className="inline mr-2 text-blue-400 text-xl" />{" "}
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaLinkedin className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Linked in
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaInstagram className="inline mr-2 text-rose-600 text-xl" />{" "}
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                    <ul>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaFacebook className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaTwitter className="inline mr-2 text-blue-400 text-xl" />{" "}
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaLinkedin className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Linked in
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaInstagram className="inline mr-2 text-rose-600 text-xl" />{" "}
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
