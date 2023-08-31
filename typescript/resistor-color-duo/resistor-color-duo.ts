function colorCode(color: string): number {
	let COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
	return COLORS.indexOf(color);
}

export function decodedValue(colors: string[]) {
	return colorCode(colors[0]) * 10 + colorCode(colors[1]);
}
