type Props = {
  images: string[]
  loading: boolean
}

export const Results: React.FC<Props> = ({ images, loading }) => {
  return (
    <section>
      {loading
        ? 'loading...'
        : images.map((img: string) => {
            return <img key={img} src={img} />
          })}
    </section>
  )
}
