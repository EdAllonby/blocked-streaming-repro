import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section>
          <Suspense>
            <NSeconds value={10} />
          </Suspense>
          <Suspense>
            <NSeconds value={9} />
          </Suspense>
          <Suspense>
            <NSeconds value={8} />
          </Suspense>
          <Suspense>
            <NSeconds value={7} />
          </Suspense>
          <Suspense>
            <NSeconds value={6} />
          </Suspense>
          <Suspense>
            <NSeconds value={5} />
          </Suspense>
          <Suspense>
            <NSeconds value={4} />
          </Suspense>
          <Suspense>
            <NSeconds value={3} />
          </Suspense>
          <Suspense>
            <NSeconds value={2} />
          </Suspense>
          <Suspense>
            <NSeconds value={1} />
          </Suspense>
          <Suspense>
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
