import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Menu, MenuItem } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf-viewer/react-pdf-viewer';
import { CsvBuilder } from 'filefy';

const InformeUsuarios = ({ usuarios }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedColumns, setSelectedColumns] = useState(['name', 'login', 'password', 'role']);

    const handleExportClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleExportClose = () => {
        setAnchorEl(null);
    };

    const handleColumnToggle = (column) => {
        if (selectedColumns.includes(column)) {
            setSelectedColumns((prev) => prev.filter((col) => col !== column));
        } else {
            setSelectedColumns((prev) => [...prev, column]);
        }
    };

    const exportToCsv = () => {
        const filteredUsuarios = usuarios.map((usuario) =>
            Object.fromEntries(
                Object.entries(usuario).filter(([key]) => selectedColumns.includes(key))
            )
        );

        const csvBuilder = new CsvBuilder('InformeUsuarios.csv').setColumns(selectedColumns);
        csvBuilder.addRows(filteredUsuarios).exportFile();
    };

    const columns = [
        { field: 'name', headerName: 'Nombre', flex: 1 },
        { field: 'login', headerName: 'Login', flex: 1 },
        { field: 'password', headerName: 'Contraseña', flex: 1 },
        { field: 'role', headerName: 'Rol', flex: 1 },
    ];

    return (
        <div>
            <Button onClick={handleExportClick} variant="contained" color="primary">
                Informe Usuarios
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleExportClose}>
                <MenuItem onClick={exportToCsv}>Exportar a CSV</MenuItem>
                <MenuItem>
                    <PDFDownloadLink document={<PdfDocument data={usuarios} />} fileName="InformeUsuarios.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Cargando...' : 'Exportar a PDF'
                        }
                    </PDFDownloadLink>
                </MenuItem>
                <MenuItem>
                    <Button onClick={handleExportClose} variant="contained" color="secondary">
                        Cancelar
                    </Button>
                </MenuItem>
            </Menu>
            <DataGrid
                rows={usuarios}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange={(newSelection) => console.log(newSelection)}
            />
            <Button onClick={handleExportClick} variant="contained" color="primary">
                Informe Usuarios
            </Button>
        </div>
    );
};

export default InformeUsuarios;