import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section>
          <Suspense fallback={<div>Loading 10 seconds...</div>}>
            <NSeconds value={10} />
          </Suspense>
          <Suspense fallback={<div>Loading 9 seconds...</div>}>
            <NSeconds value={9} />
          </Suspense>
          <Suspense fallback={<div>Loading 8 seconds...</div>}>
            <NSeconds value={8} />
          </Suspense>
          <Suspense fallback={<div>Loading 7 seconds...</div>}>
            <NSeconds value={7} />
          </Suspense>
          <Suspense fallback={<div>Loading 6 seconds...</div>}>
            <NSeconds value={6} />
          </Suspense>
          <Suspense fallback={<div>Loading 5 seconds...</div>}>
            <NSeconds value={5} />
          </Suspense>
          <Suspense fallback={<div>Loading 4 seconds...</div>}>
            <NSeconds value={4} />
          </Suspense>
          <Suspense fallback={<div>Loading 3 seconds...</div>}>
            <NSeconds value={3} />
          </Suspense>
          <Suspense fallback={<div>Loading 2 seconds...</div>}>
            <NSeconds value={2} />
          </Suspense>
          <Suspense fallback={<div>Loading 1 second...</div>}>
            <NSeconds value={1} />
          </Suspense>
          <Suspense fallback={<div>Loading 0 seconds...</div>}>
            <NSeconds value={0} />
          </Suspense>
          <div>Instant</div>
        </section>
      </main>
    </div>
  );
}

const NSeconds = async ({ value }: { value: number }) => {
  await new Promise((resolve) => setTimeout(resolve, value * 1000));
  return <div>{value} seconds</div>;
};
