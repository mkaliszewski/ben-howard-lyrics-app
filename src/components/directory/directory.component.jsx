//libs
import React from "react";

//components
import DirectoryCard from "../directory-card/directory-card.component";

//styles
import { DirectoryDiv} from "./directory.styles";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
        imgUrls: ["https://www.clashmusic.com/sites/default/files/styles/article_feature/public/field/image/ben%20howard%20packshot.jpg?itok=-Lapj6tZ","https://ecsmedia.pl/c/every-kingdom-w-iext35305457.jpg", "https://d3c1jucybpy4ua.cloudfront.net/data/59169/big_picture/BH_NND_packshot_3000x3000_6300dpi-1200x1200.jpg?1528224258"]

    };
  }
  render() {
    return (
      <DirectoryDiv className="Directory">
        {
            this.state.imgUrls.map(url =>(
                <DirectoryCard url={url}/>
            ))
            
        }
      </DirectoryDiv>
    );
  }
}

export default Directory;
