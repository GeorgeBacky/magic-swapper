import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl underline">Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
