import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search snippets..."
            className="w-full pl-10 bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
          />
        </div>
      </div>
    </header>
  )
}

