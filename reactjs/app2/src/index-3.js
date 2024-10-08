import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import styled from 'styled-components';
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
    font-size: 1.1em;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    font-size: 0.9em;
`;

const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }

    &:hover {
        background-color: #f1f1f1;
    }
`;

const Caption = styled.caption`
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Merriweather', serif;
`;
function Degree(props) {
  let { name, Duration, eligibility, fees } = props;

  return (<Tr>
    <Td>1</Td>
    <Td>{name}</Td>
    <Td>{Duration}</Td>
    <Td>{eligibility}</Td>
    <Td>{fees}</Td>
  </Tr>);
}
function Certificatation() {
  return (<Table border={1} align="center" cellPadding={10}>
    <thead>
      <tr>
        <Th>No</Th>
        <Th>Name</Th>
        <Th>Duration</Th>
        <Th>Eligibility</Th>
        <Th>Fees</Th>
      </tr>
    </thead>
    <tbody>
      <Degree name="Bachelor of Technology (B.Tech)" Duration="4 years" eligibility="10+2 with Physics, Chemistry, and Mathematics" fees="INR 1,00,000 - INR 4,00,000 per year" />
      <Degree name="Bachelor of Business Administration (BBA)" Duration="3 years" eligibility="10+2 from any stream" fees="INR 50,000 - INR 2,00,000 per year" />
      <Degree name="Chartered Accountancy (CA)" Duration="3-5 years" eligibility="10+2 with any stream" fees="INR 50,000 - INR 2,00,000 total" />
      <Degree name="Bachelor of Medicine, Bachelor of Surgery (MBBS)" Duration="5.5 years" eligibility="10+2 with Physics, Chemistry, and Biology" fees="INR 5,00,000 - INR 20,00,000 per year" />
      <Degree name="Bachelor of Computer Applications (BCA)" Duration="3 years" eligibility="10+2 with Mathematics or Computer Science" fees="INR 60,000 - INR 1,50,000 per year" />


    </tbody>
  </Table>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Certificatation />);
