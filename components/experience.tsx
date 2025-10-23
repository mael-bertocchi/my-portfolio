"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useTranslator } from "./translator-provider"

export function Experience() {
  const { t, get } = useTranslator()
  const localized = (get("data.experiences") as any[])

  if (!localized) {
    return null
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">{t("experience.title")}</h2>
        <div className="space-y-6">
          {localized.map((exp: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden bg-background border">
                    <Image src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} fill className="object-contain"/>
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} • {exp.location}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                {exp.achievements && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">{t("experience.contributionsTitle")}</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      {exp.achievements.map((achievement: string, achIndex: number) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill: string, skillIndex: number) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
