export default function DesignSystemLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className='px-[2em] max-w-7xl mx-auto'>{children}</main>;
}
