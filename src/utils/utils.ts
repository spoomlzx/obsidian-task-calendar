/**
 * 根据颜色计算前景色和背景色
 * 如果颜色亮度较高，则使用黑色文字，否则使用主题的强调色文字
 * @param color 背景颜色（十六进制格式）
 * @returns 包含颜色和文字颜色的对象
 */
function getCalendarColors(color: string | null | undefined): {
	color: string;
	textColor: string;
} {
	let textVar = getComputedStyle(document.body).getPropertyValue(
		"--text-on-accent"
	);
	if (color) {
		const m = color
			.slice(1)
			.match(color.length == 7 ? /(\S{2})/g : /(\S{1})/g);
		if (m) {
			const r = parseInt(m[0], 16),
				g = parseInt(m[1], 16),
				b = parseInt(m[2], 16);
			const brightness = (r * 299 + g * 587 + b * 114) / 1000;
			if (brightness > 150) {
				textVar = "black";
			}
		}
	}

	return {
		color:
			color ||
			getComputedStyle(document.body).getPropertyValue(
				"--interactive-accent"
			),
		textColor: textVar,
	};
}
