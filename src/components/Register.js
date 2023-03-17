export const Register = () => {
    return (
        <main>

            <section id="register-container">
                <div class="register-container-info">
                    
                    <img src="./img/slider.jpg" alt="image"/>

                    <form action="#" method="" class="container-text">
                        <h2>Register</h2>
                        <p>Register to get ideas and view the latest masterpieces.</p>

                        <label for="username">Username:</label>
                        <input type="text" id="username" placeholder="ivan_00" name=""/>

                        <label for="password">Password:</label>
                        <input type="password" id="password" placeholder="*****" name=""/>

                        <label for="re-password">Repeat password:</label>
                        <input type="password" id="re-password" placeholder="*****" name=""/>

                        <label for="address">Address:</label>
                        <input type="text" id="address" placeholder="2572 Orphan Road" name=""/>

                        <button class="register-btn">Register</button>
                        <div class="card-no-account">
                            <p>Already have an account?<a href="#"/> Sign in</p>
                        </div>

                    </form>
                </div>

            </section>

        </main>

    );
};
export default Register;