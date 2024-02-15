//eslint-disable-next-line
function Mentoria({ name, description }) {
  return (
    <div className='bg-curso'>
      <div className='each-curso'>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Mentoria;
