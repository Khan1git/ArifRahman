import { Briefcase, Github, Linkedin } from "lucide-react"
import type { ComponentProps } from "react"

const icons = {
  github: Github,
  linkedin: Linkedin,
  briefcase: Briefcase,
} as const

type SocialIconProps = ComponentProps<"svg"> & {
  name: keyof typeof icons
}

export function SocialIcon({ name, ...props }: SocialIconProps) {
  const Icon = icons[name]

  return <Icon aria-hidden="true" {...props} />
}
