import { headers } from "next/headers";

export const auth = async () => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");

  return userAgent;
};
