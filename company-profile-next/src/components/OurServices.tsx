import { Image,Link } from "@chakra-ui/react";
import React from "react";
export default function OurServices() {
    return (
        <>
            <div className="text-center mx-auto my-10 pb-4">

                <h1 className=" text-4xl font-semibold  text-gray-700 ">
                    ~ Our Service Is Priority For Our Customers ~
                </h1>
            </div>
            <section className="text-gray-600 body-font ">
                <div className="container px-5 pt-30 mx-auto flex flex-wrap mt-5">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <h1 className="mb-2 text-4xl font-semibold tracking-tighter text-white lg:text-3xl md:text-4xl text-center"> Our Service</h1>
                        <Image
                            alt="service"
                            src="service.jpg"
                            className="object-cover object-center h-1/2 w-full">
                        </Image>
                    </div>
                    <div className=" flex flex-col flex-wrap lg:py-6 mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center ">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow ">
                                <div className="flex flex-row  ">
                                    <h2 className="text-white text-3xl title-font font-medium mb-3 ">

                                        Social Media Marketing
                                    </h2>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-15 h-10 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>
                                </div>
                                <p className="leading-relaxed text-lg">
                                    We help you to promote your brand on Facebook, Twitter, Instagram with best social strategies
                                </p>

                            </div>

                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow ">
                                <div className="flex flex-row">

                                    <h2 className="text-white text-3xl title-font font-medium mb-3">
                                        Search Engine Marketing

                                    </h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>


                                <p className="leading-relaxed text-lg">
                                    We are officially partnering with Google to help your website appears on top within minutes
                                </p>

                            </div>

                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flelx-grow ">
                                <div className="flex flex-row">

                                    <h2 className="text-white text-3xl title-font font-medium mb-3">
                                        Email Marketing

                                    </h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>

                                <p className="leading-relaxed text-lg">
                                    We do social listening and monitor how people talk about your brand on social networks
                                </p>


                            </div>

                        </div>

                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow ">
                                <div className="flex flex-row">

                                    <h2 className="text-white text-3xl title-font font-medium mb-3">
                                        Social Media Monitoring

                                    </h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>

                                <p className="leading-relaxed text-lg">
                                    we help you to build your lists and send them newsletter regularly or simply an email blast
                                </p>


                            </div>

                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow ">
                                <div className="flex flex-row">
                                    <Link href="/product">
                                    <h2 className="text-white text-3xl title-font font-medium mb-3">
                                         All More Services .................

                                    </h2>
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}