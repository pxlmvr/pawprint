type Props = {
  images: string[]
}

export const Results: React.FC<Props> = ({ images }) => {
  return (
    <section>
      {images.map((img: string) => {
        return <img key={img} src={img} />
      })}
    </section>
  )
}
