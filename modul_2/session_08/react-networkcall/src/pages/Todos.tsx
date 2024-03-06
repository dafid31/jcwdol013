import {Box} from "@chakra-ui/react";

export default function Todos(){
    return(
        <div>
           <Box 
           height={50} 
           display={"Flex"}
           flexDirection={"row"}
           bgColor={"blue.500"}
           >
           <div style={{width:"20%"}}></div>
            <div style={{width:"80%"}}>
                <ul style={{
                    textDecoration:"none",
                    display:"flex",
                    flexDirection:"row"
                }}>
                    <li className="w-10">
                        {"  "}
                        <a href="/">Home</a>
                    </li>
                    <li className="w-10">Todo
                    </li>
                    <li></li>
                </ul>
            </div>

           </Box>
        </div>
    )
}