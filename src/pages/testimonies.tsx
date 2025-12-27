import React from 'react'
import Head from 'next/head'
import { TestimoniesSection } from '@/components/sections'

export default function TestimoniesPage() {
  return (
    <>
      <Head>
        <title>Testimonies of Faith - RCCG Grace Tabernacle</title>
        <meta 
          name="description" 
          content="Read inspiring testimonies of God's faithfulness and power in the lives of our church family members. Stories of healing, breakthrough, salvation, and provision." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="testimonies, faith stories, healing, breakthrough, salvation, provision, RCCG Grace Tabernacle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TestimoniesSection />
    </>
  )
}