declare module '*.JPG' {
	const content: import('../dist/shared/lib/image-external').StaticImageData;

	export default content;
}
