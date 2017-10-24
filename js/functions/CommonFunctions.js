
/*
 * 删除字符串中的首尾空白字符
 */
function trim(str) {
	return (str || "").replace(/^\s+|\s+$/g, "");
}