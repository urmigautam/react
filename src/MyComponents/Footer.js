import React from 'react'

const Footer = () => {
    let footerStyle={
        top:"100vh",
        position:"relative",
        width:"100%"
    }
  return (
    <div className='bg-dark text-light py-3' style={footerStyle}>
        <p className='text-center'>
        Copyright &copy; MyTodosList.com
        </p>
        
    </div>
  )
}

export default Footer
