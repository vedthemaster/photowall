import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "beautiful landscape",
          imageLink:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg",
        },
        {
          id: "1",
          description: "Church",
          imageLink:
            "https://images.unsplash.com/photo-1675208985060-78a2d4a28dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: "2",
          description: "On a vacation!",
          imageLink:
            "https://images.unsplash.com/photo-1674805360983-a8b8a2def7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        },
      ],

      // screen: "photos",
    };

    this.removePhoto = this.removePhoto.bind(this);
    // this.navigate = this.navigate.bind(this);
  }

  removePhoto(postRemove) {
    console.log(postRemove.description);

    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemove),
    }));
  }

  addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted]),
    }));
  }

  // navigate() {
  //   this.setState({
  //     screen: "addPhoto",
  //   });
  // }

  // componentDidMount() {
  //   const data = SimlulateFetchFromDatabase();
  //   this.setState({
  //     posts: data,
  //   });
  // }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <Photowall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
              />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({history}) => (
            <AddPhoto
              onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

// function SimlulateFetchFromDatabase() {
//   return [
//     {
//       id: "0",
//       description: "beautiful landscape",
//       imageLink:
//         "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//         "3919321_1443393332_n.jpg",
//     },
//     {
//       id: "1",
//       description: "Church",
//       imageLink:
//         "https://images.unsplash.com/photo-1675208985060-78a2d4a28dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       id: "2",
//       description: "On a vacation!",
//       imageLink:
//         "https://images.unsplash.com/photo-1674805360983-a8b8a2def7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
//     },
//   ];
// }

export default Main;
