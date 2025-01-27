"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface Snippet {
  id: number
  title: string
  language: string
  description: string
  code: string
}

interface SnippetCardProps {
  snippet: Snippet
}

export function SnippetCard({ snippet }: SnippetCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{snippet.title}</CardTitle>
          <Badge variant="secondary" className="bg-blue-600 text-white">
            {snippet.language}
          </Badge>
        </div>
        <p className="text-sm text-gray-400 mt-1">{snippet.description}</p>
      </CardHeader>
      <CardContent>
        <SyntaxHighlighter
          language={snippet.language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
          }}
        >
          {snippet.code}
        </SyntaxHighlighter>
      </CardContent>
    </Card>
  )
}

