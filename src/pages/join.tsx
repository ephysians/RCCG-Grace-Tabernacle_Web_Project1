import React from 'react'
import Head from 'next/head'
import { JoinChurchSection } from '@/components/sections'

export default function JoinChurchPage() {
  return (
    <>
      <Head>
        <title>Join Our Church Family - RCCG Grace Tabernacle</title>
        <meta 
          name="description" 
          content="Discover your place in God's kingdom. Join our church as a worker, volunteer, or ministry member. Learn about departments, eldership, and leadership opportunities." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="join church, become worker, volunteer, departments, eldership, ministry, RCCG Grace Tabernacle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <JoinChurchSection />
    </>
  )
}