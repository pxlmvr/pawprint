import classes from './styles.module.css'

import { Container } from '@/components/Container'
import { Image } from '@/components/Image'
import { Spinner } from '@/components/Spinner'

type Props = {
  images: string[]
  loading: boolean
}

export const Results: React.FC<Props> = ({ images, loading }) => {
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
              return <Image key={img} url={img} />
            })}
          </div>
        )}
      </Container>
    </section>
  )
}
