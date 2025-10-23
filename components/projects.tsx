"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { useTranslator } from "./translator-provider"

export function Projects() {
  const { t, get } = useTranslator()
  const localized = (get("data.projects") as any[])

  if (!localized) {
    return null
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">{t("projects.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localized.map((project: any, index: number) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.period}</CardDescription>
                  </div>
                  <Badge variant={project.status === t("projects.status.inProgress") ? "default" : "secondary"}>{project.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {(project.link || project.github) && (
                  <div className="flex gap-2 pt-2">
                    {project.link && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t("projects.viewProject")}
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code source
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
