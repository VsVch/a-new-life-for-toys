export const Register = () => {
    return (
        <main>

            <div class="login-register-div">
                <div class="login-register-box">
                    <h1>A NEW LIVE FOR TOYS</h1>

                    <form onSubmit>
                        <input type="text" name="" placeholder="Username" />
                        <input type="email" name="" placeholder="Email" />
                        <input type="password" name="" placeholder="Password" />
                        <input type="password" name="" placeholder="Repeat Password" />
                        <button type="submit">Register</button>
                    </form>

                </div>
                <div class="second-option">
                    <p>Have an account? <a href="#">LogIn</a></p>
                </div>
            </div>

        </main>

    );
};
export default Register;