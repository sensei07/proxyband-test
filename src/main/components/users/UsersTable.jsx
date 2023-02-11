import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    getUsersList,
    selectUsers,
    selectIsUsersLoading,
} from '../../../store/usersSlice';


const UsersTable = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(selectUsers);
    const isLoading = useSelector(selectIsUsersLoading);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        dispatch(getUsersList());
    }, [dispatch]);

    useEffect(() => {
        setUsers(usersData);
    }, [usersData]);

    if (isLoading) {
        return (
            <div className="w-full flex justify-center">
                loading
            </div>
        );
    }

    return (
        <>
            <div className="w-full flex flex-col mt-[50px]">
                <Paper className="h-full mx-24 rounded mt-12">
                    {users.length ? (
                        <TableContainer>
                            <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
                                <TableHead className="bg-gray-500">
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Username</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Phone</TableCell>
                                        <TableCell>Website</TableCell>
                                        <TableCell>Company</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((row) => (
                                        <TableRow key={row.id}
                                                  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.username}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                            <TableCell align="left">{row.website}</TableCell>
                                            <TableCell align="left">{row.company.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        ''
                    )}
                </Paper>
            </div>
        </>
    );
};

export default UsersTable;
