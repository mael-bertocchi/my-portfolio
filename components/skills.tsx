"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useTranslator } from "./translator-provider"

export function Skills() {
  const { t, get } = useTranslator()
  const localized = (get("data.skills") as any[])

  if (!localized) {
    return null
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">{t("skills.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localized.map((category: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string, skillIndex: number) => (
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
