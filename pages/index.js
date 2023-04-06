import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import React from "react"

export default function product() {

  const [link, setLink]= useState('');

  return(
    <>
      <Head>
        <title>
          Nyamaa bagshiin biy daaltnd zoriulav
        </title>
      </Head>
      <center>
        <input type="text" name="yt-link" className="" onChange={(e)=> setLink( e.target.value.replaceAll('https://www.youtube.com/live/' , '' ).replaceAll('?feature=share' , '' ).replaceAll('https://youtu.be/' , '' ).replaceAll('https://www.youtube.com/watch?v=' , '' ).substring(0, 11 ))} required placeholder='YT link'/>
        <a href={`https://downsub.com/?url=https%3A%2F%2Fyoutu.be%2F${link}`}>Subtitle Link</a>
      </center>
    </>
  );
}