import React, { Component } from 'react'



class AddPhoto extends Component {

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const imageDescription = event.target.elements.description.value
        const post ={
            id:0,
            description : imageDescription,
            imageLink:imageLink
        }

        if(imageLink && imageDescription){
            this.props.onAddPhoto(post);
        }
    
    }
    render() {

        return (
            <div>
                <h1>
                    This is the page where we add photo
                </h1>
                <div className="form">

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button>Post</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto