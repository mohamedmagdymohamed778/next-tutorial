import React from 'react'

function Layout({one,two,children}) {
    
  return (
    <div>layout

        {children}
        {one}
        {two}
    </div>
  )
}

export default Layout