import {
  useGetAllQuery,
  usePostConfigMutation,
  useDeleteConfigMutation
} from "../redux/config.api";

export const Connect = () => {
  const configs = useGetAllQuery();
  const [postConfig] = usePostConfigMutation();
  const [deleteConfig] = useDeleteConfigMutation();
  const postConfigHandler = async () => {
    const config = {
      configName: "code sandbox",
      configValue: "one",
      status: 1
    };

    await postConfig(config);
  };

  const handleDelete = async (id) => {
    await deleteConfig(id);
  };

  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={configs.refetch}>
          refresh
        </button>

        {configs.isSuccess &&
          configs.data &&
          configs.data.map((item) => (
            <div>
              <p>{JSON.stringify(item)}</p>
              <button
                className="bt btn-danger"
                onClick={() => handleDelete(item.Id)}
              >
                <span>Delete {item.Id}</span>
              </button>
            </div>
          ))}
      </div>
      <div>this is connect</div>

      <div className="card">
        <div className="card-body">
          <button className="btn btn-primary" onClick={postConfigHandler}>
            Add Config
          </button>
        </div>
      </div>
    </>
  );
};
