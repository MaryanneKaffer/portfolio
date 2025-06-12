import Cover from "@/components/cover";
import DefaultLayout from "@/layouts/default";
import Projects from "@/components/projects";
import Star from "@/components/star";
import Academic from "@/components/academic";
import Skills from "@/components/skills";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="overflow-hidden">
        <Star />
        <Cover />
        <Skills />
        <Academic />
        <Projects />
      </div>
    </DefaultLayout>
  );
}
