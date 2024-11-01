import rentify from '@/images/projects/rentify.png';
import trackflow from '@/images/projects/trackflow.png';
import snackdash from '@/images/projects/snackdash.png';
import monopoly from '@/images/projects/monopoly.png';
import crm from '@/images/projects/crm.png';
import smp from '@/images/projects/smp.png';

const icons = [
    {
      src: "https://devicon-website.vercel.app/api/git/original.svg",
      alt: "Git",
    },
    {
      src: "https://devicon-website.vercel.app/api/react/original.svg",
      alt: "React",
    },
    {
      src: "https://devicon-website.vercel.app/api/redux/original.svg",
      alt: "Redux",
    },
    {
      src: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "https://devicon-website.vercel.app/api/java/original.svg",
      alt: "Java",
    },
    {
      src: "https://devicon-website.vercel.app/api/spring/original.svg",
      alt: "Spring",
    },
    {
      src: "https://devicon-website.vercel.app/api/docker/plain-wordmark.svg",
      alt: "Docker",
    },
    {
      src: "https://devicon-website.vercel.app/api/mysql/original.svg",
      alt: "MySQL",
    },
    {
      src: "https://devicon-website.vercel.app/api/mongodb/original.svg",
      alt: "MongoDB",
    },
  ];

const projects = [
    {
      name: 'Rentify',
      description:
        'A platform that allows users to buy and sell their properties. It aims to bridge the gap between property owners and tenants.',
      link: { href: 'https://github.com/vivekanand-vr/Rentify', label: 'GitHub' },
      logo: rentify,
    },
    {
      name: 'TrackFlow',
      description:
        'Streamlines job application management with a clean interface, making it easy to track and organize applications.',
      link: { href: 'https://github.com/vivekanand-vr/trackflow', label: 'GitHub' },
      logo: trackflow,
    },
    {
      name: 'Snach Dash',
      description:
        'Food delivery application by the functionality of the popular Swiggy platform, allows users to search restaurants and add cuisines to cart and checkout.',
      link: { href: 'https://github.com/vivekanand-vr/snackdash', label: 'GitHub' },
      logo: snackdash,
    },
    {
      name: 'Monopoly',
      description:
        'An API based 2-player monopoly game which can be played by sending post requests and in response it displayes transaction messages.',
      link: { href: 'https://github.com/vivekanand-vr/monopoly-2player', label: 'GitHub' },
      logo: monopoly,
    },
    {
      name: 'Customer Relationship Manager',
      description:
        'This web application is built using Spring MVC and it efficiently manages customer details, empowering users to seamlessly add, update, or delete records.',
      link: { href: 'https://github.com/vivekanand-vr/crmSystem-thymleaf', label: 'GitHub' },
      logo: crm,
    },
    {
      name: 'Student Management Portal',
      description:
        'A student management portal to facilitate CRUD operations on student records. Implemented MVC design pattern.',
      link: { href: 'https://github.com/vivekanand-vr/student_management_portal', label: 'GitHub' },
      logo: smp,
    },
  ];

  export { icons, projects };