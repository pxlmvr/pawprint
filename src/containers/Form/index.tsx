import classes from './styles.module.css'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Select, SelectOption } from '@/components/Select'
import { mapToLabelValue } from '@/utils/mapToLabelValue'

type Props = {
  breeds: string[]
  subBreeds: string[]
  onBreedChange: (breed: string) => void
  onSubBreedChange: (breed: string) => void
}

export const Form: React.FC<Props> = ({
  breeds,
  subBreeds,
  onBreedChange,
  onSubBreedChange,
}) => {
  const breedOpts: SelectOption[] = breeds.map((breed) =>
    mapToLabelValue(breed)
  )

  const subBreedOpts: SelectOption[] = subBreeds.map((subBreed) =>
    mapToLabelValue(subBreed)
  )

  return (
    <section className={classes.form}>
      <Container>
        <Select
          options={breedOpts}
          label="Breed"
          name="breed"
          onChange={(b: string) => onBreedChange(b)}
        />
        <Select
          className="mt-s"
          label="Sub breed"
          name="subBreed"
          options={subBreedOpts}
          onChange={(sb: string) => onSubBreedChange(sb)}
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
