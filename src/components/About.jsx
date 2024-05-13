import React from "react";

export const About = () => {
	return (
		<section class="text-gray-900 body-font tracking-wider	">
			<div class="container flex px-5 py-5 md:flex-row flex-col items-center">
				<div class="flex flex-col md:text-left mb-16 md:mb-0 items-center text-center md:items-center lg:w-2/6 container ">
					{" "}
					<h1 class="title-font sm:text-2xl md:text-4xl xl:text-5xl mb-10 -pl-3">
						Hola,soy <a class="underline decoration-rose-300">Caterina</a>
					</h1>
					<p class="mb-2 leading-relaxed opacity-80 text-sm">
						Una arquitecta apasionada por el diseño innovador y funcional que
						transforma espacios y mejora la vida de las personas. Mi viaje en la
						arquitectura ha sido impulsado por una profunda curiosidad y un
						compromiso con la excelencia. Cada proyecto es una oportunidad para
						crear algo único y significativo, donde la colaboración con
						clientes, consultores y comunidades locales es fundamental para
						alcanzar resultados excepcionales.{" "}
					</p>
					<p class="mb-1 leading-relaxed opacity-80 text-sm">
						Fuera del estudio, disfruto explorar nuevas tendencias en
						arquitectura y diseño, así como involucrarme en actividades que
						alimenten mi creatividad, como la fotografía de paisajes urbanos y
						la pintura. Creo firmemente en la importancia de encontrar un
						equilibrio entre el trabajo y la vida personal para mantener la
						pasión y la energía en todo lo que hacemos.{" "}
					</p>
				</div>
				<div class="w-32 flex flex-col md:items-start md:text-left items-center text-center lg:w-4/6 lg:max-w-xl  md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16">
					<div class="w-full flex gap-3 justify-center">
						<img
							class="object-cover object-center rounded-xl "
							alt="hero"
							src="1.png"
						/>
						<img
							class="object-cover object-center rounded-xl"
							alt="hero"
							src="2.png"
						/>
					</div>
					<div class="w-full h- flex gap-2 justify-center items-center my-2">
						<img
							class="object-cover object-center rounded-xl"
							alt="hero"
							src="8.png"
						/>
						<img
							class="object-cover object-center rounded-xl"
							alt="hero"
							src="4.png"
						/>
						<img
							class="object-cover object-center rounded-xl"
							alt="hero"
							src="5.png"
						/>
					</div>
					<div class="w-full flex gap-3 justify-center">
						<img
							class="object-cover object-center rounded-xl"
							alt="hero"
							src="6.png"
						/>
						<img
							class="object-cover object-center rounded-xl"
							alt="hero"
							src="3.png"
						/>
					</div>
					<div class="w-full flex gap-3 justify-center my-2">
						<img
							class="object-cover object-center rounded-xl"
							alt="hero"
							src="7.png"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
