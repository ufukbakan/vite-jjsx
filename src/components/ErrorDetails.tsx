export default function ErrorDetails(error: any) {
    console.error(error)
    if (error.message) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Error</h1>
            <p>Something went wrong</p>
        </div>
    )
}