const MostViewed = () => {
  return (
    <div className="p-4">
      <h4 className="fs-6 text-uppercase">Most Viewed</h4>
      <div className="p-4">
        <img
          src={
            "https://elmanawy.info/demo/maro-news/images/uploads/trending-grid-3.jpg"
          }
          alt=""
        />
        <div className="d-flex my-3">
          <h5 className="text-center fs-5">
            Portuguese tourists in Philipines
          </h5>
        </div>
      </div>
    </div>
  );
};

export { MostViewed };
