import classes from './styles.module.css'

import { Container } from '@/components/Container'
import { Spinner } from '@/components/Spinner'

type Props = {
  images: string[]
  loading: boolean
}

export const Results: React.FC<Props> = ({ images, loading }) => {
  return (
    <section className={classes.results}>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          images.map((img: string) => {
            return <img key={img} src={img} />
          })
        )}
      </Container>
    </section>
  )
}
