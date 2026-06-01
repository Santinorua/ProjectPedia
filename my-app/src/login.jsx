import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase";
import { useAuth } from "./authContext.jsx";

function Login({ showLogin, setShowLogin, isLoggingIn, setIsLoggingIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
        const { login } = useAuth();
    
    
    async function handleSubmit(e) {
        e.preventDefault();

        if (isLoggingIn) {
                        const { data, error } = await supabase.from("users").select("id, username, email").eq("username", username).eq("password", password).single();
        
            if (error || !data) {
              console.error(error);
              alert("Invalid username or password");
              setShowLogin(false);
              return;
            }

                        login({
                            id: data.id,
                            username: data.username,
                            email: data.email,
                        });
            
        } else {
            const { data, error } = await supabase.from("users").insert([
              {
                
                username,
                password,
                email,
              },
                        ]).select("id, username, email").single();
        
            if (error) {
              console.error(error);
              alert("Failed to register user");
              setShowLogin(false);
              return;
            }
            console.log(data);
            console.log(error);

                        login({
                            id: data.id,
                            username: data.username,
                            email: data.email,
                        });
        
            navigate("/");
        }

        setShowLogin(false);
    }

    
        if (!showLogin) {
            return null;
        } else{
            return (
                <div className="fixed inset-y-1/6 inset-x-1/3 bg-[var(--white)] border border-[var(--lightGray)] rounded-xl z-50">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
                        {!isLoggingIn ? (
                            <input
                                type="email"
                                placeholder="Email"
                                className="border rounded-lg p-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        ): null}
                        <input
                            type="text"
                            placeholder="Username"
                            className="border rounded-lg p-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"  
                            className="border rounded-lg p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
    
}

export default Login