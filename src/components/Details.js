const Catalog = () => {
    return (
        <main>
        <div class="container">
            <div class="col-9">

               
                <div class="card">
                    <div class="top">

                        
                        <div class="userDetails">

                            
                            <div>
                                <div class="profilepic">
                                    <div class="profile_img">
                                        <div class="image">
                                            <img src="/static/images/person.png" alt="img8"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3>

                                
                                <p>
                                    
                                    MayaM
                                </p>
                                
                                <span>Bansko, Bulgaria</span>

                               
                                <div class="edit-delete-btns">

                                   
                                    <a href="#">
                                        <img class="edit-img" src="/static/images/edit-pen-icon-6.jpg"
                                            alt="edit button"/>
                                    </a>

                                    
                                    <a href="#">
                                        <img class="bin-img" src="/static/images/icon-remove-22.jpg" alt="bin button"/>
                                    </a>
                                </div>

                            </h3>
                        </div>

                    </div>

                    
                    <div class="imgBx">
                        
                        <img src="/static/images/axolotl.jpeg" alt="post" class="cover"/>
                    </div>



                    <div class="bottom">

                        <p class="message">
                            <b class="petDescription">This is my pet!</b>
                        </p>


                        
                        <div class="pet-details">
                            <p class="petName">Name: Sal</p>
                            <p class="petAge">Age: 4</p>
                        </div>
                        <div class="comments">
                            <div class="comments-top">
                                <div class="userDetails">
                                    <div class="comment-data">
                                        <div class="profilepic">
                                            <div class="profile_img">
                                                <div class="image">
                                                    
                                                    <img src="/static/images/person.png" alt="img8"/>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <p><b>StevIvanov</b>- OMG where can i get one</p>
                                    </div>
                                </div>
                                <div class="userDetails">
                                    <div class="comment-data">
                                        <div class="profilepic">
                                            <div class="profile_img">
                                                <div class="image">
                                                    
                                                    <img src="/static/images/person.png" alt="img8"/>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <p><b>StevIvanov</b>- OMG where can i get one</p>
                                    </div>
                                </div>
                                <div class="userDetails">
                                    <div class="comment-data">
                                        <div class="profilepic">
                                            <div class="profile_img">
                                                <div class="image">
                                                    
                                                    <img src="/static/images/person.png" alt="img8"/>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <p><b>StevIvanov</b>- OMG where can i get one</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="addComments">
                        
                        <form method="#" action="#">
                            <textarea id="comment-textarea" name="" cols="40" rows="10"
                                placeholder="Add comment..."></textarea>
                            
                            <button type="submit">Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
};

export default Catalog;