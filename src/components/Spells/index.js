import React from 'react';
import "../../styles/Spells.css";
import styled from 'styled-components';

const Heading5 = styled.h5`
    font-family: 'Amatic SC', cursive;
`;

const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
`;


const ListSpells = ({ id, spell, type, effect }) => {
    return (
        <div id="spells" key={id} className="col-4">
            <div className="card">
                <div className="card-body">
                    <Heading5 className="card-title">{spell}</Heading5>
                    <div className="card-text">
                        <Paragraph>Type of spell: {type} </Paragraph>
                        <Paragraph>Effect: {effect} </Paragraph>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ListSpells;