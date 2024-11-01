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
  title: 'My Gear Setup',
  description: 'This page is all about my workstation',
}

export default function GearSetup() {
  return (
    <SimpleLayout
      title="My Gear Setup"
      intro="A glimpse into the gadgets that power my work and creativity."
    >
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
