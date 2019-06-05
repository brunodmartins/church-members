import React from 'react';
import Card from 'components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReportsUI = ({onPrintJuridico}) => {
    return (
        <section>
            <Card title="Jurídico" onClick={onPrintJuridico}>
                Imprimir relatorio <FontAwesomeIcon icon="file-download" color="#08b2e3"/>
            </Card>
            
        </section>
    );
};

export default ReportsUI;