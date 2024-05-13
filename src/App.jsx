import { Layout } from "./layout/layout";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Curriculum } from "./components/Cv";

function App() {
	return (
		<Layout>
			<About />
			<Curriculum />
			<Contact />
		</Layout>
	);
}

export default App;
