"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useTranslator } from "./translator-provider"

export function Education() {
  const { t, get } = useTranslator()
  const localized = (get("data.education") as any[])

  if (!localized) {
    return null
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">{t("education.title")}</h2>
        <div className="space-y-6">
          {localized.map((edu: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden bg-background border">
                    <Image src={edu.logo || "/placeholder.svg"} alt={`${edu.school} logo`} fill className="object-contain" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-base">
                      {edu.school} • {edu.location}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {edu.description && <p className="text-sm text-muted-foreground">{edu.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
