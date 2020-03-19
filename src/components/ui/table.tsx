import styled from 'styled-components';

export const Table = styled.table`
  /* border: 1px solid var(--textPrimary); */
  width: 100%;
  text-align: left;
`;

export const Tbody = styled.thead``;

export const Tr = styled.tr`
  :nth-child(even) {
    background-color: var(--neutralDark);
  }

  :hover {
    background: black;
  }
`;

export const Th = styled.th`
  padding: 1rem;
  font-size: 0.9rem;
  background: var(--neutralDark);
`;

export const Td = styled.td`
  padding: 1rem;
  font-size: 0.9rem;
`;
