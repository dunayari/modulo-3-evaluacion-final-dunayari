const CharacterDetail = (props) => {
  return (
    <>
      <img
        className="card_img"
        src={props.contactData.img}
        alt={`Foto de ${props.contactData.name}`}
        title={`Foto de ${props.contactData.name}`}
      />
      <h4>{props.contactData.name}</h4>
      <p>{props.contactData.especies}</p>
    </>
  );
};

export default CharacterDetail;