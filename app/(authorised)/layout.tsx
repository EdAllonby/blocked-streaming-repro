import { ReactQueryProvider } from "../react-query-provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Layout;
