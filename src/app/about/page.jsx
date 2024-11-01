import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/utils/Icons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Vivekanand. I am a full stack developer and problem solver.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Innovating Through Code, Education, and Creativity
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hello! I’m <span className='text-white'>Vivekanand Vernekar</span>, a software engineer with over 2 years of experience in Java full-stack development, 
              with a primary focus on front-end technologies like React JS and Tailwind CSS. 
              My journey in programming started two years ago, and since then, I've honed my skills by creating impactful applications and tackling real-world challenges.
            </p>
            <p>
              As the founder of <a href='https://marvelous-kheer-aaf2d6.netlify.app/' target='blank' className='font-semibold text-purple-400'>Sigma Next</a>, I'm building an ed-tech platform that empowers students to master programming, develop innovative applications, 
              and excel in technical interviews. We focus on practical, hands-on learning experiences.
            </p>
            <p>
              Outside of tech, I own <a href='https://www.instagram.com/zsnapstudios/' target='blank' className='text-yellow-300 font-semibold'>Z-Snap Studios</a> as a passionate photographer. 
              Armed with my Nikon Z30, I pursue freelance photography, 
              specializing in events and portraits. This creative outlet allows me to capture moments and tell stories through a different kind of lens, 
              bringing unique perspectives to life through my camera.
            </p>
            <p>
              I’m also an avid competitive programmer on platforms like LeetCode and Codeforces, 
              where I challenge myself to solve complex problems and refine my coding skills.
            </p>
            <p>
              To stay active and sharp, I engage in speed typing, weight training, 
              and speed cubing, activities that keep my mind and body in peak form and help me stay quick with puzzles and problem-solving.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/vvek_9" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/vivekanand-vr" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/vivekanand-vernekar" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:vivekvernekar21@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              vivekvernekar21@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
