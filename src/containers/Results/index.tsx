import classes from './styles.module.css'

import { Container } from '@/components/Container'
import { Image } from '@/components/Image'
import { Spinner } from '@/components/Spinner'

type Props = {
  images: string[]
  loading: boolean
  breed: string
}

export const Results: React.FC<Props> = ({ images, loading, breed }) => {
  const multiple: boolean = images.length > 1

  return (
    <section className={classes.results}>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <div
            className={
              multiple ? `${classes.multiple} ${classes.grid}` : classes.grid
            }
          >
            {images.map((img: string) => {
              return <Image breed={breed} key={img} url={img} />
            })}
          </div>
        )}
      </Container>
    </section>
  )
}
