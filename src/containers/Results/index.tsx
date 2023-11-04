import classes from './styles.module.css'

import { Container } from '@components/Container'
import { Image } from '@components/Image'
import { Spinner } from '@components/Spinner'

type Props = {
  breed: string
  images: string[]
  loading: boolean
}

export const Results: React.FC<Props> = ({ breed, images, loading }) => {
  const multiple: boolean = images.length > 1

  return (
    <section className={classes.results}>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <div
            data-testid="results"
            aria-live="polite"
            aria-busy={loading}
            aria-relevant="all"
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
