import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-10">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills, Stats, and Workstation',
  description: 'This page is all about my coding statistics, skills and workstation',
}

export default function Highlights() {
  return (
    <SimpleLayout
      title="Tech Stack, Stats, and Tools"
      intro="A brief overview of my coding statistics, the tech stack I use to build applications, and the tools I use to create software. This page highlights my journey as a developer, showcasing my progress, capabilities, and the resources I rely on."
    >
      <div className='mb-10 -mt-10'>
        <h1 className='font-semibold text-2xl sm:text-3xl'>Tech Stack</h1>
        <p className='mt-2 mb-6 text-base text-zinc-600 dark:text-zinc-400'>
          The programming languages, technologies, frameworks, and tools I use to build and maintain my projects.
        </p>
        <div className='flex flex-wrap gap-5 mb-16'>
          <Image className='w-12 h-12 sm:w-16 sm:h-16' src="https://devicon-website.vercel.app/api/git/original.svg" alt="Git" width={64} height={64} />
          <Image className='w-12 h-12 sm:w-16 sm:h-16' src="https://devicon-website.vercel.app/api/react/original.svg" alt="React" width={64} height={64} />
          <Image className='w-12 h-12 sm:w-16 sm:h-16' src="https://devicon-website.vercel.app/api/redux/original.svg" alt="Redux" width={64} height={64} />
          <Image className='w-12 h-12 sm:w-16 sm:h-16' src="https://devicon-website.vercel.app/api/tailwindcss/plain.svg" alt="Tailwind CSS" width={64} height={64} />
          <Image className='w-12 h-12 sm:w-16 sm:h-16' src="https://devicon-website.vercel.app/api/java/original.svg" alt="Java" width={64} height={64} />
          <Image className='w-10 h-10 sm:w-14 sm:h-14 mt-2' src="https://devicon-website.vercel.app/api/spring/original.svg" alt="Spring" width={56} height={56} />
          <Image className='w-12 h-12 sm:w-16 sm:h-16' src="https://devicon-website.vercel.app/api/docker/plain-wordmark.svg" alt="Docker" width={64} height={64} />
          <Image className='w-12 h-12 sm:w-16 sm:h-16' src="https://devicon-website.vercel.app/api/mysql/original.svg" alt="MySQL" width={64} height={64} />
          <Image className='w-12 h-12 sm:w-16 sm:h-16' src="https://devicon-website.vercel.app/api/mongodb/original.svg" alt="MongoDB" width={64} height={64} />
        </div>
      </div>

      <h1 className="text-bold text-2xl font-semibold sm:text-3xl">My Coding Journey</h1>
      <p className='mt-2 mb-6 text-base text-zinc-600 dark:text-zinc-400'>
        My journey in coding is marked by continuous learning and problem-solving. Here are some of my achievements and statistics from platforms like LeetCode and GitHub.
      </p>
      <div className="flex flex-wrap gap-5 mb-16">
        <img className="border border-gray-300 rounded-md overflow-hidden inline-block" src="https://leetcard.jacoblin.cool/vicky_007?theme=dark&font=Rubik&ext=contest" alt="leetcode profile"></img>
        <img src="https://github-readme-stats.vercel.app/api?username=vivekanand-vr&theme=algolia&show_icons=true&hide_border=false&count_private=true" alt="GitHub stats" width={495} height={195} />
      </div>

      <h1 className='font-semibold text-2xl sm:text-3xl'>Gadgets</h1>
      <p className='mt-2 mb-6 text-base text-zinc-600 dark:text-zinc-400'>
        The hardware and tools I use daily to build, code, and create.
      </p>
      <ToolsSection title="Workstation">
        <Tool title="Asus ROG G17, 8GB GTX 1650 2021">
          The powerhouse behind my development work. This laptop has 8 cores 16 threads that handles everything effortlessly, ensuring smooth performance even under heavy workloads.
        </Tool>
        <Tool title="BenQ GW2485TC 24-inch Monitor">
          Crisp visuals and excellent color accuracy make this monitor ideal for both coding and design tasks especially with the &quot;Coding Mode&quot; the strain on eyes is reduced to a greater extent. The 24-inch size offers ample screen real estate without overwhelming my desk.
        </Tool>
        <Tool title="Protronics Hydra 10 Wireless Mechanical Keyboard">
          The tactile feedback of mechanical blue keys enhances my typing speed and accuracy. With bluetooth connectivity it keeps the desk clean & satisfying to use, making long coding sessions more enjoyable.
        </Tool>
        <Tool title="Portronics Toad one">
          A reliable and responsive mouse that complements my keyboard perfectly. Having adjustable DPI resolution & Type-C charging it is the best in the segment. The wireless feature keeps my workspace clutter-free and allows for smooth navigation.
        </Tool>
      </ToolsSection>
    </SimpleLayout>
  )
}
