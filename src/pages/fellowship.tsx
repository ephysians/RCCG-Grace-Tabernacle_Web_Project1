import React from 'react'
import Head from 'next/head'
import { HouseFellowshipSection } from '@/components/sections'

export default function HouseFellowshipPage() {
  return (
    <>
      <Head>
        <title>House Fellowship Centers - RCCG Grace Tabernacle</title>
        <meta 
          name="description" 
          content="Join one of our vibrant house fellowship centers for intimate worship, Bible study, and community building. Find a center near you and connect with our church family." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="house fellowship, Bible study, community, worship, RCCG Grace Tabernacle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HouseFellowshipSection />
    </>
  )
}