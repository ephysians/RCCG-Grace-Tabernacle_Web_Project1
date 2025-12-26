import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/layout'
import {
  HeroSection,
  VisionMissionSection,
  ServiceScheduleSection,
  NewsArticlesSection,
  EventsSection
} from '@/components/sections'
import {
  heroConfig,
  visionMissionCommunity,
  serviceSchedule,
  newsArticles,
  upcomingEvents
} from '@/config/home.config'

export default function Home() {
  return (
    <>
      <Head>
        <title>RCCG Grace Tabernacle - Welcome Home</title>
        <meta name="description" content="Welcome to RCCG Grace Tabernacle - A place of worship, fellowship, and spiritual growth. Join our community for Sunday services, Bible study, and prayer meetings." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="RCCG, Grace Tabernacle, church, worship, fellowship, Bible study, prayer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <main>
          <HeroSection config={heroConfig} />
          <VisionMissionSection items={visionMissionCommunity} />
          <ServiceScheduleSection services={serviceSchedule} />
          <NewsArticlesSection articles={newsArticles} />
          <EventsSection events={upcomingEvents} />
        </main>
      </Layout>
    </>
  )
}