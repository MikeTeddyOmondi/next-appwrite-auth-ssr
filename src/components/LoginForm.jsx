import { auth } from "@/appwrite/auth";

const LoginForm = () => {
    return (
        <div>
            <form action={auth.createSession} className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label>Email:</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter email..."
                    />
                </div>

                <div className="flex flex-col">
                    <label>Password:</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter password..."
                    />
                </div>

                <div>
                    <input
                        className="bg-black text-white py-2 px-4 w-full cursor-pointer"
                        type="submit"
                        value={"Login"}
                    />
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
