import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// 1st Part Without Localstorage 
// const useCount = create((set) => ({
//     // INITIAL VALUE 
//     count: 0,
//     // INITIAL VALUE 
//     increment: () => set((state) => ({ count: state.count + 1 })),


// }))
// export default useCount
// 1st Part Without Localstorage 

// For Localstorage need to use a middleware

const useCount = create(persist((set) => ({
    // INITIAL VALUE 
    count: 0,
    // INITIAL VALUE 
    increment: () => set((state) => ({ count: state.count + 1 })),
    dercrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set((state) => ({ count: 0 })),


})))


export default useCount