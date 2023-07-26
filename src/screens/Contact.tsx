const Contact = () => (
	<div className="text-center mt-[10vh]">
		<div className="text-primary text-md font-medium mb-4">Want to Discuss your Project?</div>

		<div className="relative">
			<h1 className="text-5xl font-extrabold mb-8 before:absolute">Get In Touch</h1>
		</div>

		<p className="max-w-[600px] font-medium text-center mb-14 mx-auto leading-8 tracking-widest">
			I'm available for a wide range of Frontend Projects. Anything from Vanilla Javascript to Vue/NuxtJS, React/NextJS and backend services such as
			Firebase, Supabase, Strapi, Stripe etc.
		</p>

		<a
			href="https://join.skype.com/invite/wecW1GItckDh"
			target="_blank"
			rel="noreferrer"
			className="px-8 py-4 font-semibold tracking-wider duration-[400ms] text-base-content rounded-md hover:bg-primary/20 hover:scale-[0.975] transition border-2 border-primary/80 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40"
		>
			Knock me on Skype
		</a>
	</div>
);

export default Contact;
