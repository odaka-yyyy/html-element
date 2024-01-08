import { useState } from "react";
import elementJson from "../data/element.json";

const useElementData = () => {
	const [elementData] = useState(elementJson);
	return elementData;
};

export default useElementData;