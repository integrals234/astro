import ShellPageHeader from "@/components/layout/ShellPageHeader";
import { BookOpen } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="max-w-4xl">
      <ShellPageHeader
        icon={BookOpen}
        eyebrow="Journal"
        title="Blogs"
        description="Articles, reflections, and updates from our Jyotish practice."
      />

      <div className="flex min-h-[40vh] items-center justify-center rounded-3xl border border-shell-border bg-shell-elevated/35 px-6 py-16">
        <p className="text-sm md:text-base text-shell-muted text-center">
          No blogs to show for now
        </p>
      </div>
    </div>
  );
}
