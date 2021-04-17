import { AppProps } from 'next/app'
import 'styles/_global.scss'
import 'styles/_colors.scss'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:8080/api/graphql',
  cache: new InMemoryCache(),
  // headers: { "Authorization": "token?"}
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
