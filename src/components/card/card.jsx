import React from 'react';


function Card({src, alt, title, description}) {
  console.log(title)
  return (
    // <div className="card">
    //   <h2>{title}</h2>
    //     <img src={src} alt={alt} />
    //     <p>{description}</p>
    // </div>

    <>
      <a href='#' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div className="col">
          <div className="card h-100 p-3 align-items-center m-0">
            <img src={src} alt={alt} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p> {description}</p>
            </div>
          </div>
        </div>
      </a>

  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="card h-100 p-3 align-items-center m-0">
            <img src={src} alt={alt} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p> {description}</p>
              
            </div>
          </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default Card;

