import { useEffect, useState, ReactNode } from 'react'

interface ApolloClientProps {
  children: ReactNode
}

export default function ApolloClient({
  children,
  ...delegated
}: ApolloClientProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <div {...delegated}>{children}</div>
}
