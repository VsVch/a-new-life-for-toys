export const Login = () => {
    return (     
         
        <main>

            <section id="login-container">

                <div class="container">
                    
                    <img src="/img/slider.jpg" alt="image"/>

                    <form action="#" method="" class="container-text">
                        <h2>Login</h2>
                        <p>Welcome, see the new masterpieces!</p>

                        <label for="username">Username:</label>
                        <input type="text" id="username" placeholder="ivan_00" name=""/>

                        <label for="password">Password:</label>
                        <input type="password" id="password" placeholder="*****" name=""/>

                        <button class="login-btn">Login</button>
                        <div class="card-no-account">
                            <p>Don't have an account? <a href="#">Sign up</a>.</p>
                        </div>

                    </form>
                </div>

            </section>

        </main>


    );
};
export default Login;