import styled from 'styled-components';

export const Card = styled.div`
  padding: 1.8rem;
  width: 100%;
  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);

  @media (max-width: 1000px) {
    box-shadow: none;
    padding-bottom: none;
  }
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const CheckboxLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0; /* I added this after I posted my reply */
  vertical-align: middle;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  width: 100%;
  padding: 0.6rem 1rem;
  border: none;
  background: white;
  caret-color: var(--textPrimary);
  color: var(--textPrimary);

  :focus {
    outline: none;
    outline: 1px solid white;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  margin-top: 5px;
  color: var(--errorMessage);
  font-size: 0.8rem;
  font-weight: 600;
`;

export const FormGrid = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.5rem;
`;

export const Checkbox = styled.fieldset`
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
  /* display: grid;
  grid-template-columns: 20px max-content;
*/
  input {
    display: inline-block;
    margin-right: 5px;
  }
`;

export const Title = styled.h1`
  text-align: left;
  color: var(--textSecondary);
  font-weight: 600;
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
  margin-bottom: 1.8rem;
`;

export const Select = styled.select`
  font-size: 1.2rem;
  width: 100%;
  padding: 0.6rem 1rem;
  border: 1px solid var(--textPrimary);
  background: transparent;
  caret-color: var(--textPrimary);
  color: var(--textPrimary);

  :focus {
    outline: none;
    outline: 1px solid white;
  }

  option {
    color: lightgray;
    background: black;
  }
`;
