"use client"

import React from "react"

interface StoryParagraph {
  id: number
  content: string
}

export default function AboutSection() {
  const storyParagraphs: StoryParagraph[] = [
    {
      id: 1,
      content: "Membu is a journey of love, tradition, and the belief that nature knows best..."
    },
    // Add all other paragraphs here
  ]

  return (
    <section 
      id="about" 
      className="w-full bg-[#b27566] text-white py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 
              id="about-heading" 
              className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight"
            >
              Our Story
            </h2>
          </div>

          <div className="space-y-6">
            {storyParagraphs.map((para) => (
              <p 
                key={para.id} 
                className="text-base md:text-lg leading-relaxed"
              >
                {para.content}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}