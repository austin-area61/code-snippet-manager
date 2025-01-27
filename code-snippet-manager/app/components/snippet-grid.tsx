import { SnippetCard } from "./snippet-card"

const snippets = [
  {
    id: 1,
    title: "React useEffect Hook",
    language: "javascript",
    description: "Example of using the useEffect hook in React",
    code: `useEffect(() => {
  // Effect code here
  return () => {
    // Cleanup code here
  };
}, [dependencies]);`,
  },
  {
    id: 2,
    title: "Python List Comprehension",
    language: "python",
    description: "Creating a new list based on existing list",
    code: `numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print(squared)  # Output: [1, 4, 9, 16, 25]`,
  },
  // Add more snippet objects as needed
]

export function SnippetGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.id} snippet={snippet} />
      ))}
    </div>
  )
}

