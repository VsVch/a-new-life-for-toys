export const Login = () => {
    return (     
         
        <main>
        
        <div class="login-register-div">
            <div class="login-register-box">
                <h1>Petstagram</h1>

                
                <form action="#">
                    <p>
                        <label>Username:</label>
                        <input type="text" name="" placeholder="Username"/>
                    </p>
                    <p>
                        <label>Password:</label>
                        <input type="password" name="" placeholder="Password"/>
                    </p>

                    
                    <button type="submit">LogIn</button>
                </form>

            </div>
            <div class="second-option">                
                <p>Don't have account? <a href="#">Register</a></p>
            </div>
        </div>

    </main>

    );
};
export default Login;