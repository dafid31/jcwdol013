"use client"
import Hero from "@/components/Hero"
import Breadcrumb from "@/components/breadCrumb"
import AboutSectionOne from "./components/aboutSectionOne"
import AboutSectionTwo from "./components/aboutSectionTwo"
import blogData from "@/lib/features/CardTeams/blogData"
import SingleBlog from "@/components/CardTeams"
import React,{ useRef } from "react"


export default function About(){
  
    return(
        <>
        <div className="mx-auto overflow-hidden">
        <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />
        <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
          <Hero src={"about.jpg"} />
        </div>
        <div className="my-auto mx-auto ">
          <h2 className="sm:text-5xl font-medium title-font text-center text-white mb-4">
            Visions & Misions
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">

          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>
          </div>
        <AboutSectionOne/>
        <div className="my-auto mx-auto ">
          <h2 className="sm:text-5xl font-medium title-font text-center text-white mb-4">
            Our Culture
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">

          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>
          </div>
        <AboutSectionTwo/>
        <div className="my-auto mx-auto ">
          <h2 className="sm:text-5xl font-medium title-font text-center text-white mb-4">
            Our Teams
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">

          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>
          </div>
          <section className="pt-[120px] pb-[120px] ">
          <div className="container">
          <div className="-mx-10 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
              key={blog.id}
              className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                  <SingleBlog blog={blog}
                   />
              </div>
            ))}
            </div>
            </div>
            </section>
            </div>
            


        
        </>
    )
            }
