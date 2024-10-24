export default function AdminForgotPassword()
{
    return (<div className="container">
        <div className="row mt-20">
            <div className="col-lg-6 offset-3">
                <div className="card shadow">
                    <div className="card-body">
                        <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="/keen/demo1/index.html" action="#">
                            {/*begin::Heading*/}
                            <div className="text-center mb-11">
                                {/*begin::Title*/}
                                <h1 className="text-gray-900 fw-bolder mb-3">
                                    Reset Password
                                </h1>
                            </div>
                            <div className="fv-row mb-8">
                                {/*begin::Email*/}
                                <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" />
                                {/*end::Email*/}
                            </div>
                            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                                <div />
                                <a href="admin_login.html" className="link-primary">
                                    Admin Login
                                </a>
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Submit button*/}
                            <div className="d-grid mb-10">
                                <button type="submit" id="kt_sign_in_submit" className="btn btn-warning">
                                    {/*begin::Indicator label*/}
                                    <span className="indicator-label">
                                        Recover account</span>
                                    {/*end::Indicator label*/}
                                    {/*begin::Indicator progress*/}
                                    <span className="indicator-progress">
                                        Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                    </span>
                                    {/*end::Indicator progress*/} </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}