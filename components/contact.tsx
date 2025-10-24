"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useTranslator } from "./translator-provider"

export function Contact() {
  const { t } = useTranslator()
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground mb-12">{t("contact.subtitle")}</p>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:contact@mael-bertocchi.fr" className="flex flex-col items-center gap-3 p-6 rounded-lg bg-background hover:bg-secondary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.emailLabel")}</h3>
                <p className="text-sm text-muted-foreground">contact@mael-bertocchi.fr</p>
              </div>
            </a>

            <a href="tel:+33761778360" className="flex flex-col items-center gap-3 p-6 rounded-lg bg-background hover:bg-secondary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.phoneLabel")}</h3>
                <p className="text-sm text-muted-foreground">+33 7 61 77 83 60</p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-background">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.locationLabel")}</h3>
                <p className="text-sm text-muted-foreground">{t("hero.location")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
