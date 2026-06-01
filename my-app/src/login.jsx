function Login() {
    async function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="fixed inset-y-1/6 inset-x-1/3 bg-[var(--white)] border border-[var(--lightGray)] rounded-xl z-50">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
                <input
                    type="text"
                    placeholder="Username"
                    className="border rounded-lg p-2"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"  
                    className="border rounded-lg p-2"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login