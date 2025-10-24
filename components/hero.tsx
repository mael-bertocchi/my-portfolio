"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { useTranslator } from "./translator-provider"

export function Hero() {
  const { t, locale } = useTranslator()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">Maël Bertocchi</h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">{t("hero.jobTitle")}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{t("hero.location")}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="default" size="lg">
                <a href="#contact">
                  <Mail className="h-4 w-4 mr-2" />
                  {t("hero.contactButton")}
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href={locale !== "fr" ? "/files/cv-mael-bertocchi-en.pdf" : "/files/cv-mael-bertocchi-fr.pdf"} download={locale !== "fr" ? "cv-mael-bertocchi-en.pdf" : "cv-mael-bertocchi-fr.pdf"}>
                  <Download className="h-4 w-4 mr-2" />
                  {t("hero.cvButton")}
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/mael-bertocchi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/mael-bertocchi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@mael-bertocchi.fr" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image src="/portrait.png" alt={t("hero.portraitAlt")} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
