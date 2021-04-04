import Chevron from '../../../public/icons/chevron.svg'

export interface IconProps {
  name?: 'chevron'
  className: string
}

export const Icon = ({ name, ...props }: IconProps) => {
  const component = {
    chevron: Chevron,
  }
  if (name && component[name]) {
    const IconName = component[name]
    return <IconName {...props} />
  }
  return null
}
