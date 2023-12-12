export default function datefy(date: Date) {
	const time = new Date(date);
	return time.toLocaleDateString(undefined, {
		dateStyle: 'medium',
		timeZone: 'UTC'
	});
}
