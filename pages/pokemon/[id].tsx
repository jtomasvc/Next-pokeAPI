import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts/Layout';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { pokeApi } from '../../api';
import { PokemonFull } from '../../interfaces';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';



interface Props {
    pokemon:PokemonFull;
}

const pokemonPage: NextPage<Props> = ({pokemon}) => {
  console.log(pokemon);
  
  return (
    <Layout>
      <Grid.Container css={{marginTop:'5px'}} gap={2}>
        <Grid xs={12} sm={4} >
          <Card hoverable css={{padding:'30px'}}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={350}
              />
              <Text h3 transform='capitalize'>Estadisticas</Text>
              {pokemon.stats.map(stat => (
                <Text key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</Text>
              ))}
              <Text>Peso: {pokemon.weight} Kg</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost
              >
                Guardar en Favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Imagenes:</Text>
              <Container display='flex' gap={2} direction='row' wrap = 'nowrap'>
                <Image 
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width='100%'
                  height={350}
                />
                <Image 
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width='100%'
                  height={350}
                />
                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width='100%'
                  height={350}
                />
                <Image 
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width='100%'
                  height={350}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151 = [...Array(151)].map((value, index) =>`${ index + 1 }`)
    console.log(pokemons151)
    return {
        paths: pokemons151.map((id) => ({
            params: {id}
        })),
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    
    const { id } = params as { id:string }

    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${ id }`)	

    return {
      props: {
        pokemon: data
      }
    }
}

  



export default pokemonPage