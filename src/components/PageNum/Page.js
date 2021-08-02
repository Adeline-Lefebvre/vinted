import "./index.css";

const Page = ({ queries, setQueries, data }) => {
  const totalPages = Math.ceil(data.count / queries.limit);

  return (
    <div className="pages">
      {queries.skip > 1 ? (
        <button
          className="arrow"
          onClick={() => {
            setQueries({ ...queries, skip: queries.skip - 1 });
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      ) : (
        <div className="arrow" style={{ visibility: "hidden" }}></div>
      )}
      <div>
        Page {queries.skip} sur {totalPages}
      </div>
      {queries.skip < totalPages ? (
        <button
          className="arrow"
          onClick={() => {
            setQueries({ ...queries, skip: queries.skip + 1 });
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      ) : (
        <div className="arrow" style={{ visibility: "hidden" }}></div>
      )}
    </div>
  );
};

export default Page;
