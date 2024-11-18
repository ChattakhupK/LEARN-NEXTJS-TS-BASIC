import Link from "next/link";

const page = async () => {
  await new Promise((resolve) => {
    setInterval(resolve, 1000);
  });
  return <></>;
};
export default page;
