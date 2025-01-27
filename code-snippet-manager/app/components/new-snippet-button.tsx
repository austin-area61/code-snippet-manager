import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export function NewSnippetButton() {
  return (
    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
      <PlusIcon className="mr-2 h-4 w-4" /> New Snippet
    </Button>
  )
}

