
import { Heading } from "@chakra-ui/react";
import Link from "next/link";


const LinkCustom = (props: any) => {
    return (
        <Link className="focus:text-black mr-6" href={props.link}>
            {props.title}
        </Link>
    );
};
export default function Navbar() {

    return (
        <>
            <div className="text-white body-font bg-gray-700">
                <div className="container mx-auto flex flex-wrap p-5 md:flex-row">
                    <a href="/" className="flex title-font font-medium  mb-4 md:mb-0 pr-4">
                        <Heading>
                            <span className="ml-3 text-6xl text-primary">_PRATAMA</span>company
                        </Heading>
                    </a>
                    <div className="md:flex flex-grow items-center ">

                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
                            <LinkCustom  title="Home" link="/" />
                            <LinkCustom  title="About" link="/about" />
                            <LinkCustom  title="Products" link="/product" />
                            <LinkCustom  title="Our Teams" link="/our-teams" />
                        </nav>
                    </div>
                </div>






            </div>

        </>
    )
}