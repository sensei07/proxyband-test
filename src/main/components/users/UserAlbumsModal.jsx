import React, {useEffect, useState} from 'react';
import {Dialog, DialogContent, DialogTitle, List, ListItem, ListItemText} from '@mui/material';
import {getUserAlbums} from '../../../store/usersSlice';
import {useDispatch} from 'react-redux';

export const UserAlbumsModal = React.memo(({handleOpenAlbumsModal, openAlbumsModal, selectedUserId}) => {
    const dispatch = useDispatch();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        setAlbums([]);
        if (selectedUserId) {
            dispatch(getUserAlbums(selectedUserId)).unwrap().then((res) => setAlbums(res)).catch((err) =>
                setAlbums([])
            );
        }
    }, [dispatch, selectedUserId]);

    const handleClose = () => {
        handleOpenAlbumsModal();
    };

    return (
        <Dialog open={openAlbumsModal} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle className="bg-gray-100 text-center text-blue-900">Albums</DialogTitle>
            <DialogContent className="pb-0  overflow-y-hidden mt-6 min-h-[200px]">
                {albums.length ? <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    {albums?.map((album, index) => {
                        return (
                            <ListItem key={album.id} disableGutters>
                                <ListItemText primary={`${index + 1} - ${album.title}`}/>
                            </ListItem>
                        );
                    })}
                </List> : 'Albums loading'}
            </DialogContent>
        </Dialog>
    );
});
