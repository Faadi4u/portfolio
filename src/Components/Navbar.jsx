import React from 'react'

const Navbar = () => {
    
  return (
    <div className='NavBAr flex justify-between h-full w-screen px-5 min-[1024px]:px-15 py-6 font-neue'>
      <div className="Logo">
        <h1 className='min-[1024px]:text-3xl text-2xl font-bold'>Fahad</h1>
      </div>
      <div className="NavElems flex items-center min-[1024px]:gap-3 gap-2 ">
        <div className='navItems flex gap-10'>
        {["Home" , "About" , "Skills" , "Projects" , "Contact me"].map((items , index) =>{
            return <a className={`flex max-[1024px]:hidden  ${index === 4 && "ml-36" }`} href="" >{items}</a>
        })}
        </div>
      <div className="theme border px-3 py-1 border-zinc-400 rounded">
        <svg className='min-[1024px]:h-6 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
      </div>
      <div className="Menu  min-[1024px]:hidden border px-3 py-1 border-zinc-400 rounded">
        <svg className='min-[1024px]:h-6 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
      </div>
      </div>

    </div>
  )
}

export default Navbar
