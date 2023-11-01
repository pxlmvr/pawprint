import classes from './styles.module.css'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Select } from '@/components/Select'

export const Form: React.FC = () => {
  return (
    <section className={classes.form}>
      <Container>
        <Select label="Breed" name="breed" options={[]} onChange={() => {}} />
        <Select
          className="mt-s"
          label="Sub breed"
          name="subBreed"
          options={[]}
          onChange={() => {}}
        />

        <Button className="mt-l" onClick={() => {}}>
          Random
        </Button>
        <Button className="mt-s" onClick={() => {}}>
          List
        </Button>
      </Container>
    </section>
  )
}
