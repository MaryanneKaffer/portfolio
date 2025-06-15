import CreditFooter from "@/components/creditFooter";
import { StarProvider } from "@/components/starProvider";
import { lazy, Suspense } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Starfield = lazy(() => import('@/layouts/starfield'));

  return (
    <StarProvider>
      <div className="relative flex flex-col h-screen font-mainFont cursor-default">
        <Suspense fallback={null}>
          <Starfield />
        </Suspense>
        <main className="container mx-auto max-w-7xl lg:px-20 px-10 flex-grow z-10 ">
          {children}
        </main>
        <CreditFooter />
      </div>
    </StarProvider>
  );
}
