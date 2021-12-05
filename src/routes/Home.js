import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
const GET_MOVIES = gql`
  {
    movies {
      id
    }
  }
`;
export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      {data.movies.map(({ id }) => (
        <p>{id}</p>
      ))}
    </div>
  );
};
