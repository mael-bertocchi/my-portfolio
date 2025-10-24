"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Locale = "en" | "fr"

type TranslatorContextValue = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string, fallback?: string) => string
  get: (key: string) => any
}

const TranslatorContext = createContext<TranslatorContextValue | undefined>(undefined)

async function loadLocale(locale: Locale) {
  try {
    if (locale === "en") {
      const mod = await import("../locales/en.json")
      return mod.default
    }
    const mod = await import("../locales/fr.json")
    return mod.default
  } catch (e) {
    console.error("Failed to load locale", e)
    return {}
  }
}

export function TranslatorProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr")
  const [messages, setMessages] = useState<Record<string, any>>({})

  useEffect(() => {
    let mounted = true
    loadLocale(locale).then((m) => {
      if (mounted) setMessages(m as Record<string, any>)
    })
    return () => {
      mounted = false
    }
  }, [locale])

  useEffect(() => {
    try {
      const stored = localStorage.getItem("locale") as Locale | null
      if (stored && stored !== locale) setLocaleState(stored)
    } catch (e) {
    }
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem("locale", l)
    } catch (e) {
    }
  }

  const t = (key: string, fallback = "") => {
    const parts = key.split('.')
    let cur: any = messages
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) {
        cur = cur[p]
      } else {
        return fallback || key
      }
    }
    return typeof cur === 'string' ? cur : fallback || key
  }

  const get = (key: string) => {
    const parts = key.split('.')
    let cur: any = messages
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) {
        cur = cur[p]
      } else {
        return null
      }
    }
    return cur
  }

  return (
    <TranslatorContext.Provider value={{ locale, setLocale, t, get }}>
      {children}
    </TranslatorContext.Provider>
  )
}

export function useTranslator() {
  const ctx = useContext(TranslatorContext)
  if (!ctx) {
    throw new Error("useTranslator must be used within TranslatorProvider")
  }
  return ctx
}

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageToggle({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale } = useTranslator()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => setLocale(locale === "fr" ? "en" : "fr")

  return (
    <Button variant="ghost" size={mobile ? "sm" : "sm"} onClick={handleToggle} className={mobile ? "justify-start cursor-pointer" : "ml-2 cursor-pointer"}>
      <Languages className="h-4 w-4 mr-2" />
      {mounted && (mobile ? (locale !== "fr" ? "Français" : "English") : (locale !== "fr" ? "FR" : "EN"))}
    </Button>
  )
}
