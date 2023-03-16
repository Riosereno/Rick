const UserCard = ({ user }) => {
  if (!user.name || typeof user.name !== 'object') {
    return null; // o algún otro valor predeterminado
  }

  return (
    <article key={user.login.uuid} className="w-40">
      <h2>
         {user.name.first} {user.name.last}
      </h2>
      <div>
        <img src={user.picture.large} alt={`${user.name.first}`} />
      </div>
      <p>
        Type: <mark>{type.type}</mark>
      </p>
      <p>Name: {user.location.name}</p>
      <p>Dimension: {user.location.dimension}</p>
      <p>Species: {user.location.species}</p>
      <p>Status: {user.location.status}</p>
    </article>
  );
};
