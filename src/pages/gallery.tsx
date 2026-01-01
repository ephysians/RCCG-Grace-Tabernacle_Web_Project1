import React from 'react'
import Head from 'next/head'
import Image from "next/image";
import { galleryData } from '@/utils/galleryData';


export default function Gallery() {

  return (
    <>
      <Head>
        <title>Gallery - RCCG Grace Tabernacle</title>
        <meta
          name="description"
          content="View photos from our church events, services, and community activities."
        />
      </Head>

      <div className="min-h-screen bg-primary-700 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-100 mb-1 font-sans">
              Our Memories
            </h1>
            <p className="text-lg text-gray-200 font-sans">
              Moments from our church family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 ">
            {galleryData.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-square relative transition-transform hover:scale-110 duration-500">
                  <Image
                    src={item.photo}
                    alt={item.eventName}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* <div className="p-2">
                  <h3 className="font-semibold text-gray-700 font-sans">
                    {item.eventName}
                  </h3>
                  <p className="text-gray-800 text-sm font-sans">
                    {item.eventDescription}
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}