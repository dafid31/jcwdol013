import { Image } from "@chakra-ui/react";

export default function Hero(props:any){
    return(
        <>
        <Image 
        className="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 marginImage rounded-lg shadow-md "
        alt="hero"
        src={props.src}>
            
        </Image>
        </>
    )
}