import React from 'react'
import Head from 'next/head'


export interface GallaryItem {
  id: number;
  photo: string;
  eventName: string;
  eventDescription: string;
  children?: GallaryItem[];
}

export default function Gallery() {

  const gallary: GallaryItem[] = [
    {
      id: 1,
      photo: '',
      eventName: 'Sunday Service',
      eventDescription: 'Sunday Praise Service',
    },
    {
      id: 2,
      photo: '',
      eventName: 'Thanks Given service',
      eventDescription: 'Sunday Thanks Given service',
    },
    { id: 3, photo: '', eventName: '', eventDescription: '' },
    { id: 4, photo: '', eventName: '', eventDescription: '' },
    { id: 5, photo: '', eventName: '', eventDescription: '' },
    { id: 6, photo: '', eventName: '', eventDescription: '' },
    { id: 7, photo: '', eventName: '', eventDescription: '' },
    { id: 8, photo: '', eventName: '', eventDescription: '' },
    { id: 9, photo: '', eventName: '', eventDescription: '' },
    { id: 10, photo: '', eventName: '', eventDescription: '' },
    { id: 11, photo: '', eventName: '', eventDescription: '' },
    { id: 12, photo: '', eventName: '', eventDescription: '' },
    { id: 13, photo: '', eventName: '', eventDescription: '' },
    { id: 14, photo: '', eventName: '', eventDescription: '' },
    { id: 15, photo: '', eventName: '', eventDescription: '' },
    { id: 16, photo: '', eventName: '', eventDescription: '' },
    { id: 17, photo: '', eventName: '', eventDescription: '' },
    { id: 18, photo: '', eventName: '', eventDescription: '' },
    { id: 19, photo: '', eventName: '', eventDescription: '' },
    { id: 20, photo: '', eventName: '', eventDescription: '' },
    { id: 21, photo: '', eventName: '', eventDescription: '' },
    { id: 22, photo: '', eventName: '', eventDescription: '' },
    { id: 23, photo: '', eventName: '', eventDescription: '' },
    { id: 24, photo: '', eventName: '', eventDescription: '' },
    { id: 25, photo: '', eventName: '', eventDescription: '' },
    { id: 26, photo: '', eventName: '', eventDescription: '' },
    { id: 27, photo: '', eventName: '', eventDescription: '' },
    { id: 28, photo: '', eventName: '', eventDescription: '' },
    { id: 29, photo: '', eventName: '', eventDescription: '' },
    { id: 30, photo: '', eventName: '', eventDescription: '' },
    { id: 31, photo: '', eventName: '', eventDescription: '' },
  ];


  return (
    <>
      <Head>
        <title>Gallery - RCCG Grace Tabernacle</title>
        <meta
          name="description"
          content="View photos from our church events, services, and community activities."
        />
      </Head>

      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Church Gallery
            </h1>
            <p className="text-lg text-gray-600">
              Moments from our church family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallary.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">{item.photo}</p>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.eventName}</h3>
                  <p className="text-gray-600 text-sm">{item.eventDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}