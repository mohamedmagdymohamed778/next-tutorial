import React from 'react'
import styles from './styles.module.css'

async function getid({params,searchParams}) {
 const id   =(await params)?.slug
 const search = (await searchParams)
 console.log(search);
 console.log(id)
  return (
    <div className={styles.background}>in the name of allah </div>
  )
}

export default getid