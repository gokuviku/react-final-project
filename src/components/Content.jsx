import React from "react";

const Content = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="mt-5 ms-5" >Contact Me</h2>
        <div className="my-3 ms-5 row ">
          <div className="col-12">
            <div className="col-xl-4 col-lg-5 col-12">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
            </div>

            <div className="col-xl-4 col-lg-5 col-12">
              <input
                type="email"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
        </div>

        <div className="mb-3 ms-5 row ">
          <div className="col-12">

            <div className="col-xl-4 col-lg-5 col-12">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Enter Query
              </label>
            </div>

            <div className="col-xl-4 col-lg-5 col-12">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
              <div className="mt-2">
                <button type="submit" className="btn btn-primary ">
                  Submit
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </form>
    </>
  );
};

export default Content;
