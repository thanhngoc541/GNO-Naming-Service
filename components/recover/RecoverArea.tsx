import RecoveryForm from "../forms/RecoveryForm";

const RecoverArea = () => {
    return (
        <>
            <div className="login-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="text-center mb-60">Forget Password</h3>
                                <RecoveryForm /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecoverArea;