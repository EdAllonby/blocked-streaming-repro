import { auth } from "@/app/auth";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const userAgent = await auth();
  console.log(userAgent);
  return <div>{children}</div>;
};

export default Layout;
