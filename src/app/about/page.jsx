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
              Hello! I&apos;m <span className='dark:text-white text-black'>Vivekanand Vernekar</span>, a software engineer with over 2 years of experience in full-stack development, 
              specializing in building robust, scalable applications using Java Spring Boot and the MERN stack (MongoDB, Express.js, React, and Node.js). I enjoy creating impactful solutions 
              that solve real-world problems and improve user experiences.
            </p>
            <p>
              My technical journey began with a deep curiosity for how systems work, and over time, 
              I’ve worked on several end-to-end projects involving microservices, APIs, UI/UX, and performance optimization. Whether it's building enterprise-grade platforms or side projects that scratch a personal itch, 
              I strive for clean, maintainable code and practical solutions.
            </p>
            <p>
              Beyond tech, I keep myself sharp and balanced with a mix of creative and physical activities. 
              I'm a casual photographer using my Nikon Z30 to capture moments that inspire me—mostly during travels or while exploring nature. 
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
              className="mt-8 border-t border-zinc-300 pt-8 dark:border-zinc-700/40"
            >
              vivekvernekar21@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
