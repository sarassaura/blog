export default function titlefy(str: string) {
	return str
		.replaceAll('-', ' ')
		.replace(/\b(\w)/g, (s: string) => s.toUpperCase());
}
