import React from "react";

const About = () => {
	return (
		<div className="main-container pt-6">
			<div className="text-center lg:text-left">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold inline-block px-8 lg:px-0 relative before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:opacity-70 before:rounded-full before:bg-primary mb-10">
					About
				</h1>
			</div>
			<div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-0">
				<div className="lg:w-2/5 flex flex-col items-center gap-12">
					<img
						src="./images/profile-pic.webp"
						alt="Mahian Ahmed Headshot"
						width={250}
						height={250}
						className="mx-auto"
					/>

					<a
						href="pdf/resume.pdf"
						target="_blank"
						rel="noreferrer"
						className="w-fit px-6 py-2.5 font-semibold tracking-wider duration-[400ms] text-base-content rounded-md hover:bg-primary/20 hover:scale-[0.975] transition border-2 border-primary/80 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40"
					>
						View My Resume
					</a>
				</div>
				<div className="lg:w-3/5">
					<div className="space-y-6 text-justify leading-7 text-base-content/90 font-medium">
						<p>
							I've built products for <Strong>dozens of businesses</Strong> ranging from marketing
							websites to complex apps with focus on fast, elegant and accessible user experiences. I can
							conjur the face of a website from replica into existence.
						</p>
						<p>
							I currently work remotely on contract based projects. I'm also open for new opportunities.
							Crafting thoughtful and inclusive experiences that adhere to web standards. In the
							development of JavaScript applications, I'm equipped with just the right tools.{" "}
							<Strong>Performance</Strong> and <Strong>Scalabilty</Strong> are priorities on my radar.
						</p>
						<p>
							When it comes to business, <Strong>first impressions matter</Strong>, and good website
							design is the key to capitalizing on them. An excellent site is not judged solely on its
							looks, but on its <Strong>functionality</Strong> and <Strong>usability</Strong> as well. My
							experience as a programmer allows me to come up with <Strong>intelligent solutions</Strong>{" "}
							to technical challenges, while at the same time designing sleek and visually appealing
							websites.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Strong = (props: { children: React.ReactNode }) => (
	<span className="text-base-content border-b border-primary/60 hover:border-primary/80 cursor-pointer transition">
		{props.children}
	</span>
);

export default About;
