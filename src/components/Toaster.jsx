import { div } from "framer-motion/client";
import React from "react";
import {motion} from 'framer-motion'

class Toaster extends React.Component { 

    constructor(props){
        super(props)
        this.state= {
            trigger : false , 
            message : 'toaster test',
            emoji : '', 
            time : 1 , 
            color : 'green'
        }
    }
    render(){

                return (
                    <div className="fixed w-full h-screen pointer-events-none ">
                            <motion.div 
                            animate= {{
                                x : this.state.trigger ? 0 : -400
                            }}
                            className="relative bg-neutral-200/55 px-4 py-3 w-fit m-2 rounded text-sm font-bold flex item-center  gap-2">
                                
                                <div>

                                    {this.state.emoji}

                                </div>
                               <div className="border-l-2 border-black/25 px-2 first-letter:capitalize text-blue-950">
                               {this.state.message}
                               </div>
                               <motion.div
                               
                               animate={{
                                scaleX : this.state.trigger ? 0 : 1
                               }}
                               transition ={{
                                duration : 1
                               }}
                               style={{
                                backgroundColor : this.state.color
                               }}
                               className="absolute bottom-0 left-0 origin-left w-full h-1 "></motion.div>
                             </motion.div>
                    </div>
                )
       
    }
    success(message , time ){
            this.setState({message : message ,color : 'green' , trigger : true , time : time , emoji : <i className="ri-check-line text-green-600"></i>})
        

            
            setTimeout(()=>{
                this.setState({trigger : false})

            } ,  1000 )
    }
    error(message , time ){
        this.setState({message : message , color : 'red',trigger : true , emoji : <i class="ri-error-warning-line text-red-600"></i>})
    

        
        setTimeout(()=>{
            this.setState({trigger : false   })

        } , 1000 )
}

}

export default Toaster