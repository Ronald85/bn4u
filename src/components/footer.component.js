const FooterComponent = () => {
  return (
    <div className='bg-dark text-white'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col'>short discription</div>
          <div className='col'>other menus</div>
          <div className='col'>
            <ul className='social-icons'>
              <li>
                <i class='bi bi-facebook'></i>
              </li>
              <li>
                <i class='bi bi-twitter'></i>
              </li>
              <li>
                <i class='bi bi-youtube'></i>
              </li>
              <li>
                <i class='bi bi-skype'></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FooterComponent };
