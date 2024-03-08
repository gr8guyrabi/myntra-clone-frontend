const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center spinner-container">
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingSpinner
