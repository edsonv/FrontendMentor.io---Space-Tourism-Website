interface SectionProps {
	order: string;
	title: string;
	children: React.ReactNode;
}

export const Section = ({ children, order, title }: SectionProps) => {
	return (
		<section className='flex flex-col gap-6 py-9'>
			<h2 className='numbered-title'>
				<span>{order}</span>
				{title}
			</h2>

			{children}
		</section>
	);
};
