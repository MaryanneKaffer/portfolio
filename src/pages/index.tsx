import Links from "@/components/links";
import Cover from "@/components/cover";
import DefaultLayout from "@/layouts/default";
import Projects from "@/components/projects";
import Star from "@/components/star";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Star />
      <Cover />
      <Projects />
      <Links />
    </DefaultLayout>
  );
}
