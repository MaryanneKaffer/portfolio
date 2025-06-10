import Cover from "@/components/cover";
import DefaultLayout from "@/layouts/default";
import Projects from "@/components/projects";
import Star from "@/components/star";
import Academic from "@/components/academic";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="overflow-hidden">
        <Star />
        <Cover />
        <Academic />
        <Projects />
      </div>
    </DefaultLayout>
  );
}
