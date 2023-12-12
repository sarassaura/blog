export default function datefy(date: Date) {
	const time = new Date(date);
	return time.toLocaleDateString('en-US');
}
