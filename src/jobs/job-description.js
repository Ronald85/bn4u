const JobDescription = (props) => {
  return (
    <div className='d-flex'>
      <div className='col-md-8'>
        job full details is here
        <div className='my-5'>
          <button
            className='btn btn-primary'
            onClick={() => alert("applying for this job")}
          >
            Apply
          </button>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
             <p>Applications 10</p>
             <p>match 80%</p>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export { JobDescription };
