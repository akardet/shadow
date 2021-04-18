import Chevron from '../../../public/icons/chevron.svg'
import Discord from '../../../public/icons/discord.svg'

export interface IconProps {
  name?: 'chevron' | 'discord'
  className: string
}

export const Icon = ({ name, ...props }: IconProps) => {
  const component = {
    chevron: Chevron,
    discord: Discord,
  }
  if (name && component[name]) {
    const IconName = component[name]
    return <IconName {...props} />
  }
  return null
}
