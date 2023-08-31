function colorCode(color: string) {
	let COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
	return COLORS.indexOf(color);
}

export function decodedResistorValue(bands: string[]) {
	let value = colorCode(bands[0]) * 10 + colorCode(bands[1]);
	value *= Math.pow(10, colorCode(bands[2]));

	let units = ["ohms", "kiloohms", "megaohms", "gigaohms"];
	let unit_idx = 0;
	for (; value >= 1000; value /= 1000) {
		unit_idx += 1;
	}

	return `${value} ${units[unit_idx]}`;
}
