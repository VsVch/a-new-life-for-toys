const Create = () => {
    return (        
        <main>        
        <div class="createPage">
            <h2>Add photo</h2>            
            <form action="">
                <p><input type="text" name="" placeholder="Name"/></p>
                <p><input type="number" name="" placeholder="Age"/></p>
                <p><textarea type="text" name="" placeholder="Description"></textarea></p>
                <p><input type="text" name="" placeholder="Location"/></p>
                <p><input type="text" name="" placeholder="Link to image"/></p>                
                <button class="add-btn" type="submit">Add Photo</button>
            </form>
        </div>
    </main>
    );
};

export default Create;