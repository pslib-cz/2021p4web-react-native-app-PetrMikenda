
import { StyleSheet, Text, View, Vibration } from 'react-native';
import { useState } from "react";
import AccelerometerComponent from "./components/Accelerometer";

const dicePatterns = [
	["transparent", "transparent", "transparent", "transparent", "#7F7CAF", "transparent", "transparent", "transparent", "transparent"],
	["#7F7CAF", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "#7F7CAF"],
	["#7F7CAF", "transparent", "transparent", "transparent", "#7F7CAF", "transparent", "transparent", "transparent", "#7F7CAF"],
	["#7F7CAF", "transparent", "#7F7CAF", "transparent", "transparent", "transparent", "#7F7CAF", "transparent", "#7F7CAF"],
	["#7F7CAF", "transparent", "#7F7CAF", "transparent", "#7F7CAF", "transparent", "#7F7CAF", "transparent", "#7F7CAF"],
	["#7F7CAF", "transparent", "#7F7CAF", "#7F7CAF", "transparent", "#7F7CAF", "#7F7CAF", "transparent", "#7F7CAF"],
];

export default function App() {
	const [cube, setCube] = useState(0);
	const [shakeCount, setShakeCount] = useState(1);
	const [message, setMessage] = useState("");

	const changedHandler = changedValue => {
		setShakeCount(shakeCount => shakeCount + 1);

		const diceIndex = Math.floor(Math.random() * 6);
		setCube(diceIndex);
		Vibration.vibrate();
	};

	return (
		<View style={styles.container}>
			<AccelerometerComponent onValueChange={changedHandler}></AccelerometerComponent>

			<View style={styles.header}>
				<Text style={styles.headerText}>Dice</Text>
			</View>

			<View style={styles.cube}>
				{cube != undefined &&
					<View>
						<View style={styles.row}>
							<View style={[styles.dot, {backgroundColor: dicePatterns[cube][0]}]}></View>
							<View style={[styles.dot, {backgroundColor: dicePatterns[cube][1]}]}></View>
							<View style={[styles.dot, {backgroundColor: dicePatterns[cube][2]}]}></View>
						</View>
						<View style={styles.row}>
							<View style={[styles.dot, {backgroundColor: dicePatterns[cube][3]}]}></View>
							<View style={[styles.dot, {backgroundColor: dicePatterns[cube][4]}]}></View>
							<View style={[styles.dot, {backgroundColor: dicePatterns[cube][5]}]}></View>
						</View>
						<View style={styles.row}>
							<View style={[styles.dot, {backgroundColor: dicePatterns[cube][6]}]}></View>
							<View style={[styles.dot, {backgroundColor: dicePatterns[cube][7]}]}></View>
							<View style={[styles.dot, {backgroundColor: dicePatterns[cube][8]}]}></View>
						</View>
					</View>
				}
			</View>

			<View style={styles.footer}>
				<Text style={styles.footerText}>Last number: {cube + 1}</Text>
				<Text style={styles.footerText}>Total shakes: {shakeCount}</Text>
				<Text style={styles.footerText}>Shake your device to roll the dice.</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EEEEFF",
		alignItems: "center",
		justifyContent: "center",
	},

	cube: {
		width: 340,
		height: 340,
		backgroundColor: "#9FB798",
		borderRadius: 340 / 4,
		borderColor: "#84987E",
		borderWidth: 3,
		justifyContent: "center",
		alignItems: "center",
	},
	row: {
		flexDirection: "row"
	},
	dot: {
		width: 70,
		height: 70,
		margin: 10,
		backgroundColor: "pink",
		borderRadius: 70 / 2,
	},

	message: {
		fontSize: 20,
		textAlign: "center",
	},

	header: {
		backgroundColor: "#9FB798",
		justifyContent: "center",
		alignItems: "center",

		position: "absolute",
		top: 0,
		width: "100%",
		height: 110,
	},
	headerText: {
		color: "white",
		fontSize: 36,
		paddingTop: 30
	},

	footer: {
		padding: 40,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: 0
	},
	footerText: {
		textAlign: "center",
		margin: 3,
	}

});
