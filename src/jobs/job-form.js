const JobForm = (props) => {
  return (
    <div>
      <form>
        <div className='row mb-3'>
          <label className='col-form-label col-md-2'>Job Title</label>
          <div className='col-md-10'>
            <input
              type='text'
              className='form-control'
              placeholder='enter job title'
            ></input>
          </div>
        </div>

        <div className='row mb-3'>
          <label className='col-form-label col-md-2'>Description</label>
          <div className='col-md-10'>
            <textarea
              className='form-control'
              placeholder='enter job description'
            ></textarea>
          </div>
        </div>

        <div className='row mb-3'>
          <label className='col-form-label col-md-2'>Exp Req.</label>
          <div className='col-md-10'>
            <input
              type='text'
              className='form-control'
              placeholder='enter experience required'
            ></input>
          </div>
        </div>

        <div className='row mb-3'>
          <label className='col-form-label col-md-2'>Location</label>
          <div className='col-md-10'>
            <input
              type='text'
              className='form-control'
              placeholder='enter experience required'
            ></input>
          </div>
        </div>

        <div className='row mb-3'>
          <div className='offset-md-2 col-md-10'>
            <button type='submit' className='btn btn-primary'>
              SAVE
            </button>
            <button type='reset' className='btn btn-primary'>
              RESET
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { JobForm };
