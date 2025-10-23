"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { LanguageToggle, useTranslator } from "./translator-provider"

export function Navigation() {
  const { t } = useTranslator()

  const navItems = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.education"), href: "#education" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-xl font-bold text-foreground">
            MB
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary">
                {item.label}
              </a>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
              <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <LanguageToggle mobile />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
