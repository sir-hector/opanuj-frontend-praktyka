type PaginationProps = {
  pages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination = ({
  pages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="flex justify-center mt-4">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span className="self-center text-black">
        Page {currentPage} of {pages}
      </span>
      <button onClick={handleNext} disabled={currentPage === pages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
