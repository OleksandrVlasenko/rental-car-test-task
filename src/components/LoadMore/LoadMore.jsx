import { LoadMoreButton } from "./LoadMore.styled";

const LoadMore = ({ setPage }) => {
  const handleClick = () => {
    setPage((page) => page + 1);
  };
  return <LoadMoreButton type="button" onClick={handleClick}>Load More</LoadMoreButton>;
};

export { LoadMore };
