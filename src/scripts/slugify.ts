export default function slugify(str: string) {
	return str.replaceAll(' ', '-').toLowerCase();
}
