import Links from "@/components/links";
import Cover from "@/components/cover";
import DefaultLayout from "@/layouts/default";
import Projects from "@/components/projects";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Cover />
      <Projects />
      <Links />
    </DefaultLayout>
  );
}
