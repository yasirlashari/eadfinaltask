import { Box, Stack } from "@mui/material";
import RouteView from "./RouteView";
import SideNav from "./SideNav";

export default function Layout (props) {
    return(
        <>
     
        <Box className="hidden lg:block text-white"
        style={{
            position: 'fixed', 
            top:'0',
            right:'0',
            left:'0',
            bottom:'0',
            overflow: 'auto',  
            flexDirection: 'row',
            backgroundImage:' url("https://c0.wallpaperflare.com/preview/184/811/591/blur-bread-rolls-counter-cup.jpg")',
            backgroundSize:'cover'
          }}
        >
         <Stack direction="row" spacing={2} justifyContent="space-between"  >
       
        <SideNav />
          
        <RouteView className="hidden lg:block">
            {props.children}
        </RouteView>
        
        </Stack>
        

        
    </Box>

    {/* mobile view   */}
        <Box className=" lg:hidden text-white "
         style={{
            position: 'fixed', 
            top:'0',
            right:'0',
            left:'0',
            bottom:'0',
            overflow: 'auto',  
            flexDirection: 'row',
            backgroundImage:' url("https://i.postimg.cc/PJJWYvtH/Screen-Shot-2022-05-25-at-10-33-33-PM.png")',
            backgroundSize:'cover'
          }}
        >
        
       
        <SideNav className=""/>
          
        
            {props.children}
     
    
        

        
    </Box>
    </>

    )
}