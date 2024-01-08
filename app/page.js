"use client";

import Link from "next/link";
import Card from "../components/Card/Card";
import Grid from "../components/Grid/Grid";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import useClassificationData from "../hooks/useClassificationData";
import useElementData from "../hooks/useElementData";

const Page = () => {
	const classificationData = useClassificationData();
	const elementData = useElementData();

	return (
		<div>
			{classificationData.map(classification => {

				const elements = elementData.filter(element => {
					return (element.classificationId === classification.id) && (element.href !== "");
				});

				if (elements.length === 0) {
					return;
				}

				return (
					<Section key={classification.id}>
						<SectionTitle>{classification.name} （{classification.label}）</SectionTitle>
						<Grid>
							{elements.map(element => {
								if (element.classificationId === classification.id) {
									return (
										<Link key={element.id} href={`${element.href}`}>
											<Card>
											<span>{element.id}</span>
											{element.summary && (
												<p>{element.summary}</p>
											)}
											</Card>
										</Link>
									);
								}
							})}
						</Grid>
					</Section>
				);
			})}
		</div>
	);
};

export default Page;