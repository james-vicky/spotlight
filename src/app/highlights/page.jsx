import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import { icons } from '@/lib/constants'

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
        <h1 className='font-semibold mb-4 text-2xl sm:text-3xl'>Tech Stack</h1>
        <div className='flex flex-wrap gap-5 mb-16'>
          {icons.map((icon, index) => (
            <Image
              key={index}
              className='dark:bg-zinc-100 bg-gray-800 rounded-2xl p-3 w-12 h-12 sm:w-16 sm:h-16'
              src={icon.src}
              alt={icon.alt}
              width={64} 
              height={64} 
            />
          ))}
        </div>
      </div>

      <h1 className="text-bold text-2xl mb-6 font-semibold sm:text-3xl">Programming Stats</h1>
      <div className="flex flex-wrap gap-5 mb-16">
        <img className="border border-gray-300 rounded-md overflow-hidden inline-block" src="https://leetcard.jacoblin.cool/vicky_007?theme=dark&font=Rubik&ext=contest" alt="leetcode profile" />
        <span className="space-y-4">
          <img src="https://github-readme-stats.vercel.app/api?username=vivekanand-vr&theme=react&show_icons=true&hide_border=true&count_private=true" alt="github stats" />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=vivekanand-vr&theme=react&hide_border=true" alt="github stats" />
        </span>
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
      <br/> <br/> 
      <ToolsSection title="Photography Gear">
        <Tool title="Nikon Z30">
          A compact and powerful mirrorless camera designed for content creators. The Nikon Z30 offers excellent image quality and 4K video recording in a lightweight body, perfect for vlogging and photography.
        </Tool>
        <Tool title="Nikkor 16-50mm Lens">
          The versatile Nikkor 16-50mm lens is ideal for both wide-angle shots and portraits. Its compact design makes it a great all-around lens for travel and everyday content creation.
        </Tool>
        <Tool title="Boya ByM1 Microphone">
          The Boya ByM1 is a high-quality omnidirectional lavalier microphone, perfect for capturing clear audio during vlogs, interviews, and content creation. Its long cable makes it convenient for recording at a distance.
        </Tool>
      </ToolsSection>

    </SimpleLayout>
  )
}
