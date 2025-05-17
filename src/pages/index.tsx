import Links from "@/components/links";
import Start from "@/components/start";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex font-mainFont flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Start />
      </section>
      <Links />
    </DefaultLayout>
  );
}
