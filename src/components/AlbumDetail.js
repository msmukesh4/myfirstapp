import React from 'react';
import { View, Text, Image, Button, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ButtonCustom from './ButtonCustom';

const AlbumDetail = (props) => {

  const {
    thumbnailStyle,
    headerTextStyle,
    headerDetailsStyle,
    thumbnailContainerStyle,
    bodyImage
  } = styles;

  return(
    <Card>

      // header section
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: props.album.thumbnail_image}}
            />
        </View>
        <View style={headerDetailsStyle}>
          <Text style={headerTextStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>

      // Image
      <CardSection>
        <Image
          style={bodyImage}
          source={{ uri: props.album.image}}
          />
      </CardSection>

      //buttom section
      <CardSection>
        <ButtonCustom onPress={() => Linking.openURL(props.album.url)} buttonText={'Buy Now'}/>
      </CardSection>
    </Card>
  );
}

const styles = {
  headerDetailsStyle :{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  bodyImage: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail;
