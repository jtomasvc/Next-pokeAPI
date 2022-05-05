import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import NextLink  from 'next/link'

export const Navbar = () => {

    const { theme } = useTheme()

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 0.5rem',
        backgroundColor: theme?.colors.gray900.value
    }}>

        <Image 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Imagen Pokemon"
          width={72}
          height={72}
        />
        <NextLink href="/" passHref
        >
          <Link>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okémon</Text>
          </Link>
        </NextLink>

        <Spacer css={{flex:1}} />
        <Text color='white'>Favoritos</Text>
    </div>
  )
}
