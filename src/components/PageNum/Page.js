import "./index.css";

const Page = ({ queries, setQueries, data }) => {
  const totalPages = Math.ceil(data.count / queries.limit);

  return (
    <div className="page-num">
      {queries.skip > 1 ? (
        <button
          className="page-num-arrow"
          onClick={() => {
            setQueries({ ...queries, skip: queries.skip - 1 });
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      ) : (
        <div className="page-num-arrow hidden"></div>
      )}
      <div>
        Page {queries.skip} sur {totalPages}
      </div>
      {queries.skip < totalPages ? (
        <button
          className="page-num-arrow"
          onClick={() => {
            setQueries({ ...queries, skip: queries.skip + 1 });
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      ) : (
        <div className="page-num-arrow hidden"></div>
      )}
    </div>
  );
};

export default Page;
