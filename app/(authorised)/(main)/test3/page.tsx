import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section>
          <Suspense>
            <TenSeconds />
          </Suspense>
          <Suspense>
            <FiveSeconds />
          </Suspense>
        </section>
      </main>
    </div>
  );
}

const TenSeconds = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return <div>TenSeconds</div>;
};

const FiveSeconds = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>FiveSeconds</div>;
};
