import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getUnpaid from "./helperFunctions/dataFetching.mjs";
import {useState} from "react";

export async function getStaticProps(context) {

    let unpaid = await getUnpaid().then(x => {return x})

    return {
        props:{unpaid}
    }
}

export default function Home(props) {



  return (
      <h1>
        pp
      </h1>
  )
}
