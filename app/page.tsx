import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <Image
        className="dark:invert"
        src="/team8ai-logo.webp"
        alt="Team8AI logo"
        width={200}
        height={100}
        priority
      />
    </div>
  );
}
