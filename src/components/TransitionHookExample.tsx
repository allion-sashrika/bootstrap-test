// import React , { useState, useTransition } from "react";

// export const TransitionHookExample = () => {
//     const [input , setInput] = useState("")
//     const [list , setList] = useState("")

//     const list_size = 20000

//     function handleChange(e) {
//         setInput(e.target.value)
//         const l = []
//         for (let i = 0; 1 < list_size; i++) {
//             l.push(e.target.value)
//         }
//         setList(l)
//     }

//     return (
//         <>
//             <input type="text" value={input} onChange={handleChange} />
//             {list.map((item, index) ) => {
//                 return <div key={index}>{item}</div>
//             }}
//         </>
//     )
// }