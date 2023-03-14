const Catalog = () => {
    return (
        
        <body>


            <header>
                <nav class="navbar">
                    <div class="container">
                        <div class="logo">

                            <a href="#">
                                <img width="50px" src="/public/images/free-30-instagram-stories-icons23_122570.png" alt="img1" />
                            </a>


                            <a class="home" href="#">
                                <i>Petstagram</i>
                            </a>
                        </div>

                        <div class="nav-links">
                            <ul class="nav-group">
                                <li class="nav-item">

                                    <a href="#">
                                        <i>Catalog</i>
                                    </a>
                                </li>


                                <li class="nav-item">

                                    <a href="#">
                                        <i>Login</i>
                                    </a>
                                </li>
                                <li class="nav-item">

                                    <a href="#">
                                        <i>Register</i>
                                    </a>
                                </li>


                                <li class="nav-item">

                                    <a href="#">
                                        <i>Add Photo</i>
                                    </a>
                                </li>

                                <li class="nav-item">

                                    <a href="#">
                                        <i>Profile</i>
                                    </a>
                                </li>

                                <li class="nav-item">

                                    <a href="#">
                                        <i>Logout</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


            <main>
                <div class="container">
                    <div class="col-9">

                        <div class="card">


                            <div class="top">
                                <div class="userDetails">

                                    <a href="#" action="#" method="#">
                                        <div class="profilepic">
                                            <div class="profile_img">
                                                <div class="image">
                                                    <img src="../public/images/person.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <h3>

                                        <p>

                                        </p>

                                        <span>Bansko, Bulgaria</span>
                                    </h3>
                                </div>
                            </div>


                            <div class="imgBx">
                                <img src="/static/images/axolotl.jpeg" alt="post" class="cover" />
                            </div>

                            <h5 class="petName">Name: Sal</h5>

                            <h5 class="petAge">Age: 4</h5>

                            <a href="#" id="see-details">
                                <h4 class="details">See details</h4>
                            </a>
                        </div>

                        <div class="card">
                            <div class="top">

                                <div class="userDetails">
                                    <div>
                                        <div class="profilepic">
                                            <div class="profile_img">
                                                <div class="image">
                                                    <img src="/static/images/person.png" alt="img8" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        <p>




                                            <span>Sofia, Bulgaria</span>
                                        </p>

                                    </h3>
                                </div>

                            </div>

                            <div class="imgBx" id="place the id of the photo here">
                                <img src="/static/images//dog-on-bed.jpg" alt="post" class="cover" />
                            </div>

                            <h5 class="petName">Name: Buck</h5>

                            <h5 class="petAge">Age: 6</h5>

                            <a href="#" id="see-details">
                                <h4 class="details">See details</h4>
                            </a>
                        </div>

                        <div class="card">
                            <div class="top">

                                <div class="userDetails">
                                    <div>
                                        <div class="profilepic">
                                            <div class="profile_img">
                                                <div class="image">
                                                    <img src="/static/images/person.png" alt="img8" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        <p>


                                            <span>Dobrich, Bulgaria</span>
                                        </p>

                                    </h3>
                                </div>

                            </div>

                            <div class="imgBx" id="place the id of the photo here">
                                <img src="/static/images/dog-on-road.jpg" alt="post" class="cover" />
                            </div>

                            <h5 class="petName">Name: Max</h5>

                            <h5 class="petAge">Age: 2</h5>

                            <a href="#" id="see-details">
                                <h4 class="details">See details</h4>
                            </a>
                        </div>


                        <article class="not-available-photo">
                            <h1>No photo posts yet.</h1>
                        </article>
                    </div>

                </div>
            </main>

            <div class="footer">
                <span class="footer-section">

                </span>
            </div>

        </body>
    );
};

export default Catalog;