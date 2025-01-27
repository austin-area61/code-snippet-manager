import { FolderIcon, BookmarkIcon, CogIcon } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-gray-100">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Snippet Manager</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                <FolderIcon className="h-5 w-5" />
                <span>All Snippets</span>
              </Link>
            </li>
            <li>
              <Link href="/favorites" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                <BookmarkIcon className="h-5 w-5" />
                <span>Favorites</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                <CogIcon className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

