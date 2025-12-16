"use client";
import React from 'react'
import ContactForm from './ContactForm'
import { WorldMap } from '@/components/ContactMap';

function contact() {
  return (
    <div className='pt-[115px] pb-6 md:pb-2 px-4 lg:px-2 container mx-auto' >
      <ContactForm />
      <WorldMap
        dots={[
          {
            start: { lat: 5.5204, lng: 80.8567, label: "India" },
            end: { lat: 8.2963, lng: 58.2963, label: "UAE" },
          },
          {
            start: { lat: 8.2963, lng: 58.2963, label: "UAE" },
            end: { lat: 14.0, lng: 45.0, label: "Saudi" },
          },
          {
            start: { lat: 14.0, lng: 45.0, label: "Saudi" },
            end: { lat: 51.4871, lng: -2.4049, label: "UK" },
          },
          {
            start: { lat: 51.4871, lng: -2.4049, label: "UK" },
            end: { lat: 25.7045, lng: -103.9115, label: "USA" },
          },
          {
            start: { lat: 25.7045, lng: -103.9115, label: "USA" },
            end: { lat: 5.5204, lng: 80.8567, label: "India" },
          },
        ]}
      />
    </div>
  )
}
export default contact