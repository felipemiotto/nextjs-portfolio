import SocialMedia from "@/components/social-media/SocialMedia";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-content">
        <h1 className="text-1xl sm:text-1xl md:text-2xl lg:text-4xl"><b>You&apos;re Welcome</b>, Felipe here! I&apos;m a guy passionate about technology =)</h1>
        <h2 className="px-[12vw] mt-5">I&apos;m a fullstack web developer lorem ipsum setasdasd  asdasda aspda I&apos;m a fullstack</h2>
        <div className="flex justify-between mt-20 px-[5vw] md:px-[10vw] mb-20" >
          <Link href={'/bio'}>More about me</Link>
          <Link href={'/experiences'}>See my experiences</Link>
        </div>
        <SocialMedia />
    </main>
  )
}
