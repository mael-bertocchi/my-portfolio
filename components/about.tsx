"use client"

import { useTranslator } from "./translator-provider"

export function About() {
  const { t } = useTranslator()
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-balance">{t("about.title")}</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
      </div>
    </section>
  )
}
