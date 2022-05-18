import React from "react";
import styled from "styled-components";

const Mains = ({ children }) => {
	return <MainSection>{children}</MainSection>;
};

export default Mains;

const MainSection = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 32px;
	@media (min-width: 950px) {
		grid-template-columns: 1fr 1fr;
		gap: 64px;
	}
`;
