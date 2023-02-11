import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {
    getUsersList,
    selectUsers,
    selectIsLoading,
} from '../../../store/usersSlice';

export const UsersTable = React.memo(({handleOpenAlbumsModal, setSelectedUserId}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usersData = useSelector(selectUsers);
    const isLoading = useSelector(selectIsLoading);

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
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Username</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Phone</TableCell>
                                        <TableCell>Website</TableCell>
                                        <TableCell>Company</TableCell>
                                        <TableCell>Albums</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((row) => (
                                        <TableRow key={row.id}
                                                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                  className="hover:bg-gray-300">
                                            <TableCell align="left">
                                                <div
                                                    className="hover:cursor-pointer underline"
                                                    onClick={() => {
                                                        navigate(`${row.id}`, {
                                                            state: {
                                                                user: row,
                                                            },
                                                        });
                                                    }}
                                                >
                                                    {row.name}
                                                </div>
                                            </TableCell>
                                            <TableCell align="left">{row.username}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                            <TableCell align="left">{row.website}</TableCell>
                                            <TableCell align="left">{row.company.name}</TableCell>
                                            <TableCell align="left">
                                                <div
                                                    className="hover:cursor-pointer underline"
                                                    onClick={() => {
                                                        handleOpenAlbumsModal();
                                                        setSelectedUserId(row.id);
                                                    }}
                                                >
                                                    Show albums
                                                </div>
                                            </TableCell>
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
});

