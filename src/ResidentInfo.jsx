const ResidentInfo = ({ url }) => {
    const [resident, setResident] = useState(null);
  
    useEffect(() => {
      const fetchResident = async () => {
        try {
          const response = await axios.get(url);
          setResident(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchResident();
    }, [url]);
  
    if (!resident) {
      return <div>Loading...</div>;
    }
  
    const { name, image, status, origin, episode } = resident;
  
    if (!origin || typeof origin !== 'object') {
      return null; // o algún otro valor predeterminado
    }
  
    if (!episode || !Array.isArray(episode)) {
      return null; // o algún otro valor predeterminado
    }
  
    return (
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Origin: {origin.name}</p>
        <p>Episode count: {episode.length}</p>
      </div>
    );
  };
  
