import { SectionSty, Title } from './Sections.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionSty>
      <Title>{title}</Title>
      {children}
    </SectionSty>
  );
};
