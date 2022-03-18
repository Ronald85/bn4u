import { useSelector } from "react-redux";
import { Clock, People, Heart, Chat } from "react-bootstrap-icons";

import { MostViewed, SocialLinks, FlikrFeed, PopularVideos } from "../news";

const NewsItem = ({ data }) => {
  return (
    <div className="col mb-4">
      <div className="">
        <img src={data.image} alt="" />
        <h5 className="fs-6 py-2">{data.title}</h5>
        <div className="d-flex align-items-center justify-content-between text-muted fs-6">
          <div className="d-flex my-1">
            <div>
              <Clock className="me-2" />
              <span className="me-2">30 May,2020 </span>
            </div>
            <div>
              <People className="me-2" />
              <span className="me-2 text-capitalize text-primary">
                {data.author}
              </span>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <Chat className="me-2" />
              <span className="me-2">50</span>
            </div>
            <div>
              <Heart className="me-2" />
              <span className="me-2">70</span>
            </div>
          </div>
        </div>
        <p className="fs-6 my-2">
          Scelerisque at, duis torquent laoreet neque, magna maecenas tortor
          convallis aptent pellentesque duis torquent...
        </p>
      </div>
    </div>
  );
};

const News = () => {
  const { items } = useSelector((state) => state.news);

  return (
    <div className="row gx-5">
      <div className="row col-md-8 border border-danger">
        <div className="row row-cols-1 row-cols-md-2">
          {items.map((item) => (
            <NewsItem data={item} />
          ))}
        </div>
      </div>

      <div className="col-md-4 border border-dark ">
        <MostViewed />
        <SocialLinks />
        <FlikrFeed />
        <PopularVideos />
      </div>
    </div>
  );
};

export { News };
