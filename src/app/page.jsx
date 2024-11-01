import Image from 'next/image'
import Link from 'next/link'
import Photos from '@/utils/Photos'
import Interests  from "@/components/Interests"
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'
import logoE1 from '@/images/logos/e1.svg'
import logoAmber from '@/images/logos/amber.svg'
import logoIneuron from '@/images/logos/ineuron.svg'
import { getAllArticles } from '@/lib/getAllArticles'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  LeetCodeIcon,
  BriefcaseIcon, 
  ArrowDownIcon,
  InterestsIcon
} from '@/utils/Icons'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const Resume = () => {
  let resume = [
    {
      company: 'E1 Consulting',
      title: 'Workday Extend Developer',
      logo: logoE1,
      start: 'Oct 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      }
    },
    {
      company: 'AmberStudent',
      title: 'Operations Support Intern',
      logo: logoAmber,
      start: 'May 2024',
      end: {
        label: 'Aug 2024',
        dateTime: new Date().getFullYear(),
      }
    },
    {
      company: 'iNeuron',
      title: 'Full Stack Developer Intern',
      logo: logoIneuron,
      start: 'Jan 2023',
      end: 'Jan 2024',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-8 w-8 rounded-full" unoptimized />
            </div>
            <div className="flex flex-col flex-auto">
              <dl className="flex flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1YGahxUQ6iAaIhuDzIjJAHGfSqnkI2xq6/view?usp=sharing"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
};

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer, Mentor, and Photographer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Vivekanand Vernekar, a passionate full-stack software engineer with over 2 years of experience building powerful and scalable web applications using Java and React. 
            Beyond coding, I enjoy mentoring aspiring developers and sharing my journey. When I’m not in front of a screen, you’ll find me capturing stories through my lens. 
            Driven by innovation and creativity, I&apos;m constantly exploring ways to merge my technical expertise with artistic pursuits, bringing both precision and inspiration to every project I take on.
          </p>
          <div className="mt-6 flex gap-6">

            <SocialLink
              href="https://www.instagram.com/vvek_9"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/vivekanand-vernekar"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/vivekanand-vr"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://leetcode.com/u/vicky_007/"
              aria-label="Find me on Leetcode"
              icon={LeetCodeIcon}
            />
            
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Interests />
          </div>
        </div>
      </Container>
    </>
  )
}
