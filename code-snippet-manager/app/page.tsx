import { NewSnippetButton } from "./components/new-snippet-button";
import { SnippetGrid } from "./components/snippet-grid";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your Snippets</h2>
        <NewSnippetButton />
      </div>
      <SnippetGrid />
    </div>
  );
}
