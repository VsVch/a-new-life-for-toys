export const Home = () => {
    return (  


        <body>
           
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                   
                    <img className="logo" src="./images/before.png" alt="before-logo"/>
                    <img className="logo" src="" alt="before-logo"/>

                    <img cclassName="car logo" src="../static/images/trip-logo.png" alt="trip-logo"/>
                    <img className="logo" src="../static/images/after.png" alt="after-logo"/>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
        
                        <ul className="navbar-nav ml-auto">
                            
                            <li className="nav-item">
                                <a className="nav-link" href="">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Shared Trips</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="">Offer Trip</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Logout as [ test@abv.bg ]</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
            <main>
                <section class="py-5" id="login-page">
                    <div class="container login-page">
                        <h1>Login</h1>
                        <div class="login">
                            <form action="" method="">
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="text" class="form-control" id="email" placeholder="Enter email" name=""
                                        value=""/>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password" name=""
                                        value=""/>
                                </div>
                                <div class="form-group">
                                    <p>Not registered yet? <a href="">Register Now!</a></p>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        
            <footer id="sticky-footer" class="bg-dark">
                <div class="container">
                    <p class="m-0 text-center text-white">Copyright &copy; Shared Trip 2021</p>
                </div>
            </footer>
        </body>

    );
};
export default Home;