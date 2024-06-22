import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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

export default function Uses() {
  return (
    <SimpleLayout
      title="Skills, Stats, and Tools"
      intro="A brief overview of my coding statistics, a detailed breakdown of my skills, and the tools I use to create software. This page highlights my journey as a developer, showcasing my progress, capabilities, and the resources I rely on."
    >
      <div className='mb-10 -mt-10'>
        <h1 className='font-semibold text-2xl sm:text-3xl'>Tech Stack</h1>
        <p className='mt-2 mb-6 text-base text-zinc-600 dark:text-zinc-400'>
          The programming languages, technologies, frameworks, and tools I use to build and maintain my projects.
        </p>
          <div className='flex flex-wrap gap-4'>
            <img className='w-12 h-12' src="https://devicon-website.vercel.app/api/git/original.svg"></img>
            <img className='w-12 h-12' src="https://devicon-website.vercel.app/api/react/original.svg"></img>
            <img className='w-12 h-12' src="https://devicon-website.vercel.app/api/redux/original.svg"></img>
            <img className='w-14 h-14' src="https://devicon-website.vercel.app/api/tailwindcss/plain.svg"></img>
            <img className='w-12 h-12' src="https://devicon-website.vercel.app/api/java/original.svg"></img>
            <img className='w-12 h-12' src="https://devicon-website.vercel.app/api/spring/original.svg"></img>
            <img className='w-14 h-14' src="https://devicon-website.vercel.app/api/docker/plain.svg"></img>
            <img className='w-12 h-12' src="https://devicon-website.vercel.app/api/mysql/original.svg"></img>
            <img className='w-12 h-12' src="https://devicon-website.vercel.app/api/mongodb/original.svg"></img>
          </div>
      </div>

      <h1 className="text-bold text-2xl font-semibold sm:text-3xl">My Coding Journey</h1>
      <p className='mt-2 mb-6 text-base text-zinc-600 dark:text-zinc-400'>
      My journey in coding is marked by continuous learning and problem-solving. Here are some of my achievements and statistics from platforms like LeetCode and GitHub.
      </p>
      <div className="flex flex-wrap gap-5 mb-10">
          <img className="border border-gray-300 rounded-md overflow-hidden inline-block" src="https://leetcard.jacoblin.cool/vicky_007?theme=dark&font=Rubik&ext=contest" alt="leetcode profile"></img>
          <img src="https://github-readme-stats.vercel.app/api?username=vivekanand-vr&theme=algolia&show_icons=true&hide_border=false&count_private=true" alt="github stats"></img>
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
            Crisp visuals and excellent color accuracy make this monitor ideal for both coding and design tasks especially with the "Coding Mode" the strain on eyes is reduced to a greater extent. The 24-inch size offers ample screen real estate without overwhelming my desk.
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

/*

<img src="https://skillicons.dev/icons?i=cpp,js,git,react,redux,tailwind,java,hibernate,spring,docker,mysql,mongo&theme=light" />

*/