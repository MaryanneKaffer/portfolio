import { StarProvider } from "@/components/starProvider";
import StarField from "@/layouts/starfield";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StarProvider>
      <div className="relative flex flex-col h-screen cursor-default">
        <StarField />
        <main className="container mx-auto max-w-7xl font-mainFont sm:px-20 px-10 flex-grow z-10">
          {children}
        </main>
      </div>
    </StarProvider>
  );
}
