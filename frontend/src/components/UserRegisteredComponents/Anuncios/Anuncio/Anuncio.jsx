import '../../../../assets/scss/layout/_anuncio.scss'

export default function Anuncio({ name, description }) {
  return (
    <div className='bg-anuncio'>
      <div className='each-anuncio'>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}