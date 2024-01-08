import Code from "../../../components/Code/Code";
import Section from "../../../components/Section/Section";

const ListPage = () => {
	return (
		<div>
			<h1>List - Text content</h1>
			<Section id="ul">
				<h2>ul</h2>
				<div>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>PHP</li>
					</ul>
				</div>
				<Code>
					{`<ul>
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>
	<li>PHP</li>
</ul>`}
				</Code>

			</Section>

			<Section id="ol">
				<h2>ol</h2>
				<div>
					<ol>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>PHP</li>
					</ol>
				</div>
				<Code>
					{`<ol>
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>
	<li>PHP</li>
</ol>`}
				</Code>
			</Section>
		</div>
	);
};

export default ListPage;