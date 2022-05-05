import { FC } from 'react'
import Head from "next/head"
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string,
  children: any
}

export const Layout:FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokémon App'}</title>
            <meta name="author" content="Tomas Vergara" />
            <meta name="description" content={`Informacion sobre el pokemon ${ title }`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
        </Head>

        <Navbar/>

        <main style={{
          padding: '0 .5rem'
        }}>
            { children  }
        </main>
    </>
  )
}
