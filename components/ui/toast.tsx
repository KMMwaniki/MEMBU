"use client"

import * as ToastPrimitive from "@radix-ui/react-toast"

export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = ToastPrimitive.Viewport
export const Toast = ToastPrimitive.Root
export const ToastTitle = ToastPrimitive.Title
export const ToastDescription = ToastPrimitive.Description
export const ToastClose = ToastPrimitive.Close
export const ToastAction = ToastPrimitive.Action

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>