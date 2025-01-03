import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_BOOKS = gql`
  {
    books {
      name
      genre
    }
  }
`;

const BookList = () => {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :</p>;
  }

  return (
    <div>
      <ul>
        {data.books.map(item => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          return refetch();
        }}
        type="button"
      >
        Refetch
      </button>
    </div>
  );
};

export default BookList;
