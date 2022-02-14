import React from "react"
import {Camera} from "expo-camera";
import {StyleSheet, View, Text} from "react-native";

export default () => {
  	const getPermissionsAsync = React.useCallback(async () => {
		const response = await Camera.requestCameraPermissionsAsync();

	}, []);

	React.useEffect(() => {
		getPermissionsAsync();
	}, [getPermissionsAsync]);

	return (

          <Camera style={styles.container}></Camera>


	);
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  }
})
