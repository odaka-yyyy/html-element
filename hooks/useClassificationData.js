import { useState } from "react";
import classificationJson from "../data/classification.json";

const useClassificationData = () => {
	const [classificationData] = useState(classificationJson);
	return classificationData;
};

export default useClassificationData;