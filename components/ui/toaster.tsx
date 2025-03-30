"use client"

import React from "react"
import { Toaster as SonnerToaster } from "sonner"

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      richColors
      toastOptions={{
        className: 'toast',
        duration: 5000,
      }}
    />
  )
}