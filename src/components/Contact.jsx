import React from "react";

export const Contact = () => {
	return (
		<div class="relative flex items-top justify-center min-h-scree sm:items-center sm:pt-0">
			<div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
				<div class="mt-8 overflow-hidden">
					<div class="grid grid-cols-1 md:grid-cols-2">
						<div class="p-6 mr-2  sm:rounded-lg">
							<h1 class="text-2xl sm:text-3xl text-gray-900 font-semibold ">
								CONTACTAME
							</h1>
							<p class="text-normal text-sm sm:text-xl font-medium text-gray-900 mt-2">
								Completa los datos para contactarme
							</p>

							<div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									viewBox="0 0 24 24"
									class="w-8 h-8 text-gray-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<div class="ml-4 text-md tracking-wide font-semibold w-40">
									Acme Inc, Street, State, Postal Code
								</div>
							</div>

							<div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									viewBox="0 0 24 24"
									class="w-8 h-8 text-gray-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<div class="ml-4 text-md tracking-wide font-semibold w-40">
									+15 2657494105
								</div>
							</div>

							<div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									viewBox="0 0 24 24"
									class="w-8 h-8 text-gray-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<div class="ml-4 text-md tracking-wide font-semibold w-40">
									info@acme.org
								</div>
							</div>
						</div>

						<form action="#" method="POST" className="mx-auto max-w-xl pt-5">
							<div className="sm:col-span-2">
								<label
									htmlFor="first-name"
									className="block text-sm leading-6 text-gray-900"
								>
									Nombre
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-100 sm:text-sm sm:leading-6 bg-amber-50"
									/>
								</div>

								<div className="sm:col-span-2 pt-4">
									<label
										htmlFor="email"
										className="block text-sm leading-6 text-gray-900"
									>
										Email
									</label>
									<div className="mt-2.5">
										<input
											type="email"
											name="email"
											id="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-100 sm:text-sm sm:leading-6 bg-amber-50"
										/>
									</div>
								</div>

								<div className="sm:col-span-2">
									<label
										htmlFor="message"
										className="block text-sm leading-6 text-gray-900"
									>
										Message
									</label>
									<div className="mt-2.5">
										<textarea
											name="message"
											id="message"
											rows={4}
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-100 sm:text-sm sm:leading-6 bg-amber-50"
											defaultValue={""}
										/>
									</div>
								</div>
							</div>
							<div className="mt-10">
								<button
									type="submit"
									className="block w-full rounded-md bg-rose-200 px-3.5 py-2.5 text-center text-sm text-gray-800 shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-100"
								>
									Hablemos
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
