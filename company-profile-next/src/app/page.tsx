"use client";
import React, { useRef } from "react";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeams";
import Testimonials from "@/components/testimonials";
import { useSelector } from "react-redux";
import { actionGetTeams } from "@/lib/features/teams/teamSlice";
import { RootState } from "@/lib/store";
import { useAppStore as useAppStoreLocal } from "@/lib/hooks";




export default function Home() {
    const teams: any = useSelector((state: RootState) => state.teamsSlice.teams);
  const store = useAppStoreLocal();
  const initialized: any = useRef(false);
  if (!initialized) {
    store.dispatch(actionGetTeams(16));
    initialized.current = true;
  }

  return (
    <>

      <section className="text-black body-font lg:pt-20 ">
        <div className="container px-5 pt-32 mx-auto my-auto lg:px-4 lg:py-4">
          <div className="flex flex-col w-full mb-2 text-left md:text-center ">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
              <span> Find High Potential Business Partners With </span>
              <br className="hidden lg:block">
              </br>
              Pratama company
            </h1>
          </div>
          <p className="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-400 lg:w-2/3 ">
            Pratama Company  is a  passionate about helping international companies succeed in Indonesia. In fact,
            you can check out Pratama Company  blog or reach out to them directly to learn more about marketing and advertising trends in Indonesia.

          </p>
        </div>
        <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
          <Hero src={"Home.jpg"} />
        </div>
        <div className="my-auto mx-auto py-10">

          <OurServices />
        </div>
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
          <div className="flex flex-row" >
            {teams.map((item: any, index: number) => {
              console.log(index);
              if (index < 4) {
                return (
                  <OurTeam
                    key={index}
                    image={item.picture.large}
                    name={`${item.name.first} ${item.name.first} ${item.name.last}`}
                  />

                );
              }

            })}
          </div>
            <Testimonials/>



      </section>


    </>
  );
}


