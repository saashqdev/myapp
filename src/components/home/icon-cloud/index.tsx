import { IconCloud } from "@/components/common/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  'mongodb',
  'redis',
  'mariadb',
  'rabbitmq',
  'letsencrypt',
  'payloadcms'
];

  export function IconCloudSection() {
    const images = slugs.map(
      (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );
   
    return (
      <div className="relative flex max-w-7xl mx-auto size-full items-center justify-center overflow-hidden px-4 md:px-6 lg:px-8">
        <IconCloud images={images} />
      </div>
    );
  }
